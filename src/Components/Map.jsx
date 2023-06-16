import { React, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import MapStyles from "./MapStyles";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAP_API_KEY,
  });
  const center = useMemo(
    () => ({ lat: 36.734341131053704, lng: 3.12765792773345 }),
    []
  );

  return (
    <div className="Map overflow-hidden w-full">
      {!isLoaded ? (
        <div></div>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
          options={{ styles: MapStyles }}
        ></GoogleMap>
      )}
    </div>
  );
};

export default Map;
