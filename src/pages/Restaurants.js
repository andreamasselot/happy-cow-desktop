import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import photo from "../assets/img/banner.webp";

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { offerId } = useParams();

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
      <div className="container">
        <h1>
          All photos from <span>{data.name}</span>
        </h1>
      </div>

      <section className="all-pictures-container">
        {data.pictures.map((elem) => {
          return (
            <div className="images-all-pictures">
              {elem.length === 0 ? (
                <img src={photo} alt="happycow" />
              ) : (
                <img src={elem} alt="meals" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Restaurant;
