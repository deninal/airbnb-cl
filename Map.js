import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { HomeIcon } from "@heroicons/react/outline";

function Map({ searchResults }) {
  // transform the searchResults object into latitute-longitude object from geolib
  const coordinates = searchResults.map((result) => ({
    longitude: result.long, // long is from searchResults json
    latitude: result.lat,
  }));


  const center = getCenter(coordinates); // here we have the coordinates of the center of the searchResults

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/deninal/ckutttzjj0h7018qp8gept1vf"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker longitude={result.long} latitude={result.lat}>
            <HomeIcon className="h-10 w-10 bg-white p-1.5 rounded-full border cursor-pointer hover:scale-110 transition duration-200 ease-out" />
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
