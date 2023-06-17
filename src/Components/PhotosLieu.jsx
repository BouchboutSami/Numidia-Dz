import React from "react";

function arrayBufferToBase64(buffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

const PhotosLieu = (props) => {
  return (
    <div className="w-full border-t-2 py-4 px-4 flex flex-col gap-4">
      <h1 className="text-xl font-GothamBold">Photos et vidéos</h1>
      <div className="w-full grid grid-cols-2 gap-2">
        {props.pictures.length > 0 ? (
          props.pictures.map((picture) => {
            return (
              <img
                src={
                  "data:image/png;base64," +
                  arrayBufferToBase64(picture.pictures64.data)
                }
                alt="makam chahid"
                key={picture.idpictures}
              ></img>
            );
          })
        ) : (
          <p className="col-span-2 text-center">
            Pas de contenu pour ce lieu :'(
          </p>
        )}
      </div>
    </div>
  );
};

export default PhotosLieu;
