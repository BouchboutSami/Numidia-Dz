import Main from "@/Components/Main";
import Map from "@/Components/Map";
import NavbarOffline from "@/Components/NavbarOffline";
import React from "react";

const Index = () => {
  return (
    <>
      {/* <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-eu1.hs-scripts.com/139493589.js"
      ></script> */}
      <div className="w-screen flex flex-col bg-numidiaBleu">
        <NavbarOffline />
        <Map />
        {/* <Main /> */}
      </div>
    </>
  );
};

export default Index;
