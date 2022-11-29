import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Explore = () => {
  return (
    <>
      <div className="map-container-explore">
        <MapContainer
          center={[48.849205, 2.349775]}
          zoom={15}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[48.849205, 2.349775]}>
            <Popup>
              Coucou <br /> Salut
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};

export default Explore;
