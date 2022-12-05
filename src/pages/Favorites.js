import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleRemoveFavorite = async (favId) => {
    try {
      const newFavorite = favorite.filter((f) => {
        return favId !== f._id;
      });
      setFavorite(newFavorite);
      await axios.delete(
        "https://site--happycow--fhdp7f7ffy5p.code.run/favorites/delete",

        {
          headers: { authorization: "Bearer " + props.token },
          data: { _id: favId },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--happycow--fhdp7f7ffy5p.code.run/favorites`,
          {
            headers: { authorization: "Bearer " + props.token },
          }
        );
        setFavorite(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [props.token]);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1 className="container">My Favorites</h1>
      <div className="favorite-container container">
        {favorite.map((elem) => {
          return (
            <section className="favorites-page">
              <Link
                to={`/offers/${elem.restaurant.placeId}`}
                className="favorites"
                key={elem._id}
              >
                <div>
                  <img src={elem.restaurant.thumbnail} alt="restaurants" />
                  <div className="favorites-title">
                    <h3>{elem.restaurant.name}</h3>
                    <p>{elem.restaurant.type.toUpperCase()}</p>
                  </div>
                </div>
              </Link>
              <div>
                <button
                  className="add-favorites-button"
                  onClick={() => {
                    handleRemoveFavorite(elem._id);
                  }}
                >
                  Remove From Favorites
                </button>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
