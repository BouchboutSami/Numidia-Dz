import { React, useMemo, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faStar } from "@fortawesome/free-solid-svg-icons";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import MapStyles from "./MapStyles";
import TabsDetails from "./TabsDetails";
import PhotosLieu from "./PhotosLieu";
import DonnerCommentaireAvis from "./DonnerCommentaireAvis";
const wilayas = require("../wilayas.json");

function getNameWilaya(codeWilaya) {
  let wilaya = "";
  wilayas.forEach((element) => {
    element.code == codeWilaya ? (wilaya = element.name) : null;
  });
  return wilaya;
}

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

const Map = (props) => {
  const [Lieux, setLieux] = useState([]);
  const [LieuSelected, setLieuSelected] = useState({});
  const [starsLieu, setstarsLieu] = useState(0);
  const [commentsLieu, setcommentsLieu] = useState([]);
  const [LieuTransport, setLieuTransport] = useState([]);
  const [picturesLieu, setpicturesLieu] = useState([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 36.734341131053704, lng: 3.12765792773345 }),
    []
  );
  useEffect(() => {
    setLieux(props.Lieux);
    if (props.LieuSelected.Nom) {
      console.log("test");
      setLieuSelected(props.LieuSelected);
    }
  }, [props]);

  useEffect(() => {
    if (LieuSelected.Nom) {
      axios
        .get(`http://localhost:8000/lieu/moyenne/${LieuSelected.idLieu}`)
        .then((response) => {
          setstarsLieu(response.data);
        });
      axios
        .get(`http://localhost:8000/lieu/comments/${LieuSelected.idLieu}`)
        .then((response) => {
          setcommentsLieu(response.data);
        });
      axios
        .get(`http://localhost:8000/lieu/pictures/${LieuSelected.idLieu}`)
        .then((response) => {
          setpicturesLieu(response.data);
        });
      axios
        .get(`http://localhost:8000/lieu/transport/${LieuSelected.idLieu}`)
        .then((response) => {
          setLieuTransport(response.data);
        });
    }
  }, [LieuSelected]);

  function renderStars(nbStars) {
    let items = [];
    for (let index = 0; index < nbStars; index++) {
      items.push(
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#FF842B" }}
          key={index}
        />
      );
    }
    for (let index = 5; index > nbStars; index--) {
      items.push(
        <FontAwesomeIcon icon={faStar} style={{ color: "#ddd" }} key={index} />
      );
    }
    return items;
  }
  return (
    <div className="relative Map overflow-hidden w-full">
      {!isLoaded ? (
        <div></div>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={13}
          options={{ styles: MapStyles, mapTypeControl: false }}
        >
          {Lieux.length > 0
            ? Lieux.map((lieu, index) => {
                return (
                  <MarkerF
                    position={{ lat: lieu.lat, lng: lieu.long }}
                    key={lieu.idLieu}
                    icon={{
                      url: `/images/iconesMarqueur/${lieu.categorie}.png`,
                    }}
                    onClick={() => setLieuSelected(lieu)}
                  />
                );
              })
            : null}
        </GoogleMap>
      )}
      {LieuSelected.Nom && (
        <div className="absolute top-0 left-0 w-1/4 h-full z-50 bg-white border-t-2 flex flex-col overflow-y-hidden z-[10000]">
          <div
            className="absolute top-4 right-4 bg-numidiaOrange rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
            onClick={() => setLieuSelected({})}
          >
            <FontAwesomeIcon icon={faX} />
          </div>
          <div className="w-full">
            <img
              src={
                picturesLieu.length > 0
                  ? "data:image/png;base64," +
                    arrayBufferToBase64(picturesLieu[0].pictures64.data)
                  : "/images/Noimage.png"
              }
            />
          </div>
          <div className="w-full overflow-y-scroll">
            <div className="w-full flex flex-col border-b-2 py-4 gap-2 px-4">
              <h1>{LieuSelected.Nom}</h1>
              <p>Wilaya : {getNameWilaya(LieuSelected.idwilaya)}</p>
              <div>
                {renderStars(starsLieu)} {starsLieu}
              </div>
            </div>
            <TabsDetails
              comments={commentsLieu}
              description={LieuSelected.Description}
              transport={LieuTransport}
            />
            <PhotosLieu pictures={picturesLieu} />
            {props.User.pseudo && (
              <DonnerCommentaireAvis
                User={props.User.pseudo}
                Lieu={LieuSelected}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
