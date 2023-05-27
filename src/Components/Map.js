import { React, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 36.734341131053704, lng: 3.12765792773345 }),
    []
  );

  return (
    <div className="App overflow-hidden w-full">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
        />
      )}
    </div>
  );
};

export default Map;
