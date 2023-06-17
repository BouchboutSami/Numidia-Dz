import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const LoginModal = (props) => {
  const [Email, setEmail] = useState("");
  const [Mdp, setMdp] = useState("");
  const [errorLogin, seterrorLogin] = useState("");
  function handleClose(e) {
    props.Close();
  }
  function HandleLogin() {
    const user = new FormData();
    user.append("email", Email);
    user.append("password", Mdp);
    axios.post("http://localhost:8000/user/login", user).then((response) => {
      if (response.data.message) {
        seterrorLogin("");
        Cookies.set("user", response.data.message, { expires: 1 });
        props.Login(response.data.message);
        handleClose(response.data.message);
      } else {
        seterrorLogin(response.data.error);
      }
    });
  }

  function PasswordChange(e) {
    setMdp(e.target.value);
  }

  function MailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div
      className="w-full h-full bg-[rgba(255,255,255,0.5)] flex justify-center items-center absolute left-0 bottom-0 z-40"
      onClick={handleClose}
    >
      <div
        className="relative bg-white opacity-1 z-[100] text-white rounded-[24px] flex flex-col justify-between px-10 gap-6 py-10 font-GothamMedium"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="self-center text-black text-2xl">
          Connetez-vous à Numidia
        </h1>
        {errorLogin == "" ? null : (
          <p className="text-[#ff0800] self-center">{errorLogin}</p>
        )}
        <input
          type="text"
          placeholder="Adresse Mail"
          className="px-2 py-2 rounded-lg bg-[#F6F6F6] text-black"
          onChange={(e) => {
            MailChange(e);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          className="px-2 py-2 bg-[#F6F6F6] rounded-lg text-black"
          onChange={(e) => {
            PasswordChange(e);
          }}
        />
        <button
          className="bg-numidiaOrange py-1 flex w-1/2 self-center justify-center rounded-lg"
          onClick={HandleLogin}
        >
          Se connecter
        </button>
        <p className="text-black">
          Vous n'avez pas de compte ?{" "}
          <span className="text-numidiaOrange">S'inscrire</span>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
