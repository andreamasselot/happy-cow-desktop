import axios from "axios";
import { useEffect, useState } from "react";

const Favorites = (props) => {
  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <div>
        {favorite.map((elem) => {
          return (
            <>
              <div className="container">
                <img src={elem.restaurant.thumbnail} alt="restaurants" />
                <div>
                  <h3>{elem.restaurant.name}</h3>
                  <p>{elem.restaurant.type}</p>
                </div>

                <p>{elem.restaurant.address}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
