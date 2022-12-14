import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vegan from "../assets/img/vegan.svg";
import vegetarian from "../assets/img/vegetarian.svg";
import photo from "../assets/img/banner.webp";
import { toast } from "react-hot-toast";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Place = (props) => {
  const [data, setData] = useState({ rating: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const { offerId } = useParams();

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < data.rating) {
      const newStar = <FontAwesomeIcon icon="star" className="yellow-star" />;
      stars.push(newStar);
    } else {
      const newStar = <FontAwesomeIcon icon="star" className="empty-star" />;
      stars.push(newStar);
    }
  }
  const handleFavorite = () => {
    try {
      axios.post(
        "https://site--happycow--fhdp7f7ffy5p.code.run/favorites/create",
        { placeId: data.placeId },
        { headers: { authorization: "Bearer " + props.token } }
      );
      toast.success("Successfully added to favorites!");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--happycow--fhdp7f7ffy5p.code.run/restaurants/${offerId}`
        );

        setData(response.data);
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
            <div>
              {data.type === "vegan" ? (
                <div className="type-vg-label">
                  <p>Vegan</p>
                  <img src={vegan} alt="vegan logo" className="label-vege" />
                </div>
              ) : (
                <div className="type-vr-label">
                  <p>Vegetarian</p>
                  <img
                    src={vegetarian}
                    alt="vegan logo"
                    className="label-vege"
                  />
                </div>
              )}
            </div>
            <p>{stars}</p>
          </div>
          {data.pictures.length === 0 ? (
            <div>
              <img src={data.thumbnail} alt="restaurant" />
            </div>
          ) : (
            <div className="images-container">
              <img src={data.pictures[0]} alt="meals" />
              <img src={data.pictures[1]} alt="meals" />
              <img src={data.pictures[2]} alt="meals" />
              <img src={data.pictures[3]} alt="meals" />
              <Link
                to={`/offers/restaurant/${data.placeId}`}
                className={"link-to-all-pictures"}
              >
                All Photos
              </Link>
            </div>
          )}

          <p>{data.description}</p>
          {props.token && (
            <button
              onClick={() => {
                handleFavorite();
              }}
              className="add-favorites-button"
            >
              + Add to Favorites
            </button>
          )}
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
          {data.website && (
            <a href={data.website}>
              <FontAwesomeIcon icon="globe" className="icons" />
              Website
            </a>
          )}
          {data.facebook && (
            <a href={data.facebook}>
              <FontAwesomeIcon icon="user" className="icons" />
              Facebook
            </a>
          )}

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
          <div className="nearby-places">
            <h3>Places Nearby :</h3>
            {data.nearbyPlaces.map((nearby) => {
              return (
                <>
                  <div>
                    <Link to={`/offers/${nearby.placeId}`}>
                      <div className="nearby-container">
                        {nearby.name}
                        <p className="address-nearby">{nearby.address}</p>

                        {nearby.thumbnail.length === 0 ? (
                          <img src={photo} alt="restaurant" />
                        ) : (
                          <img
                            src={nearby.thumbnail}
                            alt="nearby restaurants"
                            className="nearby-pictures"
                          />
                        )}
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Place;
