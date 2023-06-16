import LoginModal from "@/Components/LoginModal";
import Map from "@/Components/Map";
import NavbarOffline from "@/Components/NavbarOffline";
import React, { useState } from "react";

const Index = () => {
  const [OpenLogin, setOpenLogin] = useState(false);
  const handleClickLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  return (
    <>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/139493589.js"
      ></script>
      <div className="h-screen w-screen flex flex-col bg-numidiaBleu relative">
        <NavbarOffline LoginBtn={handleClickLogin} />

        <Map />
        {OpenLogin && <LoginModal Close={handleCloseLogin} />}
      </div>
    </>
  );
};

export default Index;
