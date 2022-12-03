import axios from "axios";
import { useEffect, useState } from "react";

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--happycow--fhdp7f7ffy5p.code.run/restaurants`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <section>
        <div className="all-restaurants">
          {data.map((elem) => {
            return (
              <div>
                <img
                  className="all-pictures"
                  src={elem.thumbnail}
                  alt="vegan places"
                />
                <h4>{elem.name}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Restaurant;
