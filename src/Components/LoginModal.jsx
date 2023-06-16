import React from "react";

const LoginModal = (props) => {
  function handleClose(e) {
    e.preventDefault();
    props.Close();
  }
  return (
    <div
      className="w-full h-full bg-white flex justify-center items-center opacity-60 absolute left-0 bottom-0"
      onClick={(e) => handleClose(e)}
    >
      <div></div>
    </div>
  );
};

export default LoginModal;
