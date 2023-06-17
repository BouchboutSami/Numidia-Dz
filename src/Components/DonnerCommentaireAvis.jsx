import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";

const DonnerCommentaireAvis = (props) => {
  const [comment, setcomment] = useState("");
  const [ratingvalue, setratingvalue] = useState(3);
  const [Starred, setStarred] = useState(false);
  const [commented, setcommented] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center border-t-2 py-4 px-4 gap-6">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-xl font-GothamBold">Notez ce lieu touristique !</h1>
        {!Starred && (
          <Rating
            name="simple-controlled"
            value={ratingvalue}
            onChange={(event, newValue) => {
              setratingvalue(newValue);
              setStarred(true);
            }}
          />
        )}
        {Starred && (
          <p className="text-[#54b93e]">Merci d'avoir noté ce lieu</p>
        )}
      </div>
      {!commented ? (
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="text-xl font-GothamBold self-start">
            Veuillez laisser un commentaire
          </h1>
          <textarea
            type="text"
            className="self-start w-full focus:outline-none border-[1px] px-2"
            placeholder="Ceci est un commentaire"
            onChange={(e) => {
              setcomment(e.target.value);
            }}
          />
          <button
            className="bg-numidiaOrange rounded-lg px-4 py-2 text-white font-semibold"
            onClick={(e) => {
              setcommented(true);
            }}
          >
            Envoyer le commentaire
          </button>
        </div>
      ) : (
        <p className="text-[#54b93e]">
          Merci d'avoir donné votre avis sur ce lieu
        </p>
      )}
    </div>
  );
};

export default DonnerCommentaireAvis;
