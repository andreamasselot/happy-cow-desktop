import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import vegan from "../assets/img/vegan.svg";
// import vegetarian from "../assets/img/vegetarian.svg";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { offerId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json`
        );
        const id = response.data.find((elem) => {
          return elem.placeId === parseInt(offerId);
        });
        console.log(id);
        setData(id);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [offerId]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <section className="restaurant-page container">
        <div className="left-section">
          <div>
            <h1>{data.name}</h1>
            <p>{data.type}</p>
            <p>{data.rating}</p>
          </div>
          <div className="images-container">
            <img src={data.pictures[0]} alt="meals" />
            <img src={data.pictures[1]} alt="meals" />
            <img src={data.pictures[2]} alt="meals" />
            <img src={data.pictures[3]} alt="meals" />
          </div>
          <p>{data.description}</p>
        </div>
        <div className="right-section">
          <div className="map-container">
            <MapContainer
              center={[data.location.lat, data.location.lng]}
              zoom={14}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[data.location.lat, data.location.lng]}>
                <Popup>
                  {data.name} <br /> {data.address}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <p>
            <FontAwesomeIcon icon="location-dot" className="icons" />
            {data.address}
          </p>
          <p>
            <FontAwesomeIcon icon="phone" className="icons" /> {data.phone}
          </p>
          <a href={data.website}>
            <FontAwesomeIcon icon="globe" className="icons" />
            Website
          </a>
          <a href={data.facebook}>
            <FontAwesomeIcon icon="user" className="icons" />
            Facebook
          </a>
          <div className="payments">
            <p>
              <FontAwesomeIcon icon="chevron-right" className="icons" /> Accepts
              credit cards
            </p>
            <p>
              <FontAwesomeIcon icon="chevron-right" className="icons" />
              Free Wifi
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
