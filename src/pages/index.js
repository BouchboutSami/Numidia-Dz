import LoginModal from "@/Components/LoginModal";
import Map from "@/Components/Map";
import NavbarOffline from "@/Components/NavbarOffline";
import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

const Index = () => {
  const [OpenLogin, setOpenLogin] = useState(false);
  const [User, setUser] = useState({});
  const [Lieux, setLieux] = useState([]);
  const handleClickLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  function handleLogin(user) {
    setUser(user);
  }

  useEffect(() => {
    axios.get("http://localhost:8000/lieu/all").then((response) => {
      setLieux(response.data);
    });
  }, []);
  return (
    <>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/139493589.js"
      ></script>
      <div className="h-screen w-screen flex flex-col bg-blanc relative">
        <NavbarOffline LoginBtn={handleClickLogin} user={User} />
        {Lieux.length > 0 && <Map Lieux={Lieux} />}
        {OpenLogin && (
          <LoginModal Close={handleCloseLogin} Login={handleLogin} />
        )}
      </div>
    </>
  );
};

export default Index;
