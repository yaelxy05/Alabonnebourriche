import React from "react";
import { GoogleMap, LoadScript, Marker,  } from "@react-google-maps/api";
import Icon from "../../assets/img/fisherman.png";
const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 43.209334,
  lng: 5.526485,
};

const label = {
  text: "Restaurant la bonne bourriche",
  color: "#F26619",
  fontWeight: "bold",
  fontSize: "1rem",
  className: 'marker-label',
}
  
const classGoogleMap = "googleMapCustom";

function MyComponent(props) {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBVFgwQgfEExFsL-vdikI0pLkbEd0oEDz8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        clickableIcons={false}
        mapContainerClassName={classGoogleMap}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} label={label} icon={{url: "https://img.icons8.com/plasticine/40/000000/google-maps-new.png", className: "iconCustom",}}/>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
