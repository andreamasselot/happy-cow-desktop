import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link, useSearchParams } from "react-router-dom";

const Explore = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("name") || "");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    setSearchParams({ name: value });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--happycow--fhdp7f7ffy5p.code.run/restaurants?name=${search}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <section className="explore-container">
        <div className="explore-left">
          <div className="explore-title">
            <h1>Places Nearby</h1>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              value={search}
            />
          </div>
          <div className="vegan-container">
            {data.map((elem) => {
              return (
                <div className="restaurants-info" key={elem.placeId}>
                  <Link to={`/offers/${elem.placeId}`}>
                    <img
                      src={elem.thumbnail}
                      alt="restaurants"
                      className="explore-images"
                    />
                  </Link>

                  <div className="explore-description">
                    <h3> {elem.name}</h3>
                    <p>{elem.address}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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

            {data.map((elem) => {
              return (
                <Marker
                  position={[elem.location.lat, elem.location.lng]}
                  key={elem.placeId}
                >
                  <Popup>
                    <Link to={`/offers/${elem.placeId}`}>
                      <h3>{elem.name}</h3>
                      <p>{elem.address.split(",")[0]}</p>
                      <img
                        src={elem.thumbnail}
                        alt="restaurants"
                        className="popup-image"
                      />
                    </Link>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </section>
    </>
  );
};

export default Explore;
