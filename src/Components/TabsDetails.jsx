import React, { useState } from "react";

const TabsDetails = (props) => {
  const [tab, settab] = useState(0);
  return (
    props.comments &&
    props.description && (
      <div className="w-full flex flex-col">
        <div className="w-full flex box-border border-b-2 items-center py-2 cursor-pointer">
          <div
            className={`w-1/3 text-center border-r-2 ${
              tab == 0 ? "active" : null
            }`}
            onClick={() => settab(0)}
          >
            A propos
          </div>
          <div
            className={`w-1/3 text-center border-r-2 ${
              tab == 1 ? "active" : null
            }`}
            onClick={() => settab(1)}
          >
            Avis
          </div>
          <div
            className={`w-1/3 text-center border-r-2 ${
              tab == 2 ? "active" : null
            }`}
            onClick={() => settab(2)}
          >
            Transport
          </div>
        </div>
        {tab == 0 && (
          <div className="w-full px-4 py-2">{props.description}</div>
        )}
        {tab == 2 && (
          <div className="w-full px-4 py-2">
            {props.transport.length > 0 ? (
              props.transport.map((t, i) => {
                console.log(t);
                return (
                  <div key={i}>
                    {t.data.type} de {t.heuremoy[0]} à {t.heuremoy[1]}{" "}
                  </div>
                );
              })
            ) : (
              <p>Pas de commentaire des utilisateurs</p>
            )}
          </div>
        )}
        {tab == 1 && (
          <div className="w-full px-4 py-2">
            {props.comments.length > 0 ? (
              props.comments.map((comment, index) => {
                console.log(props.comments);
                console.log(comment);
                return (
                  <div className="w-full flex flex-col gap-2 " key={index}>
                    {comment.utilisateur} : {comment.contenu}
                  </div>
                );
              })
            ) : (
              <p>Aucun moyen de transport</p>
            )}
          </div>
        )}
      </div>
    )
  );
};

export default TabsDetails;
