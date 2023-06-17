import { React, useMemo, useState, useEffect } from "react";
import {
  GoogleMap,
  MarkerClustererF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import MapStyles from "./MapStyles";

const Map = (props) => {
  const [Lieux, setLieux] = useState(props.Lieux);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 36.734341131053704, lng: 3.12765792773345 }),
    []
  );

  useEffect(() => {
    setLieux(props.Lieux);
  }, []);

  useEffect(() => {
    console.log(Lieux);
  }, [Lieux]);

  return (
    <div className="Map overflow-hidden w-full">
      {!isLoaded ? (
        <div></div>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
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
                  />
                );
              })
            : null}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
