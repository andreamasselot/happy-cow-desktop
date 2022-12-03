import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  console.log(restaurants);
  const [isLoading, setIsLoading] = useState(true);
  const { offerId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--happycow--fhdp7f7ffy5p.code.run/restaurants`
        );
        const id = response.data.find((elem) => {
          return elem.placeId === parseInt(offerId);
        });
        setData(id);
        setRestaurants(response.data);
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
      <div className="container">
        <h1>
          All photos from <span>{data.name}</span>
        </h1>
      </div>

      <section className="all-pictures-container">
        {data.pictures.map((elem) => {
          return (
            <div className="images-all-pictures">
              <img src={elem} alt="meals" />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Restaurant;
