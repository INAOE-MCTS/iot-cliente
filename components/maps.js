import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Icon } from "leaflet";

var iconoBase = Icon.extend({
  options: {
    iconSize: [38, 155],
    iconAnchor: [22, 94],
    popupAnchor: [-2, -25],
  },
});

const Maps = ({
  center = [19.42163, -99.137513],
  zoom = 10,
  data,
}) => {

  return (
    <div className="drop-shadow-2xl border-2 border-sky-500">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "600px", width: "100%", zIndex: "0" }}
        animate
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            draggable={false}
            animate={true}
            icon={new iconoBase({ iconUrl: "/gps.svg" })}
          >
            <Popup>
                <h2 className="text-blue-600 mt-2">
                    ID dispositivo: GPS-TEST
                </h2>

                <p className="mb-1 mt-1">
                    Latitud: {marker.latitude}
                </p>

                <p className="mb-1 mt-1">
                    Longitud: {marker.longitude}
                </p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;