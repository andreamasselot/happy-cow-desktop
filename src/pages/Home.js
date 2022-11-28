import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import Carroussel from "../components/Carroussel";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json`
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
      <Banner />
      <div>
        <div className="section-header container">
          <h1> Vegan Food Near Me</h1>
          <button>View All</button>
        </div>

        <section className="carroussels-container container">
          {data.map((elem) => {
            return (
              <>
                {elem.category === 0 && (
                  <Carroussel
                    image={elem.thumbnail}
                    name={elem.name}
                    description={elem.description}
                    address={elem.address}
                    rating={elem.rating}
                  />
                )}
              </>
            );
          })}
        </section>
        <section className="smoothies">
          <div className="section-header container">
            <h1>Vegan Ice Creams, Smoothies</h1>
            <button>View All</button>
          </div>
          <div className="carroussels-container container">
            {data.map((elem) => {
              return (
                <>
                  {elem.category === 12 && (
                    <Carroussel
                      image={elem.thumbnail}
                      name={elem.name}
                      address={elem.address}
                      rating={elem.rating}
                    />
                  )}
                </>
              );
            })}
          </div>
        </section>
        <section className="juices">
          <div className="section-header container">
            <h1>Healthy Juices</h1>
            <button>View All</button>
          </div>
          <div className="carroussels-container container">
            {data.map((elem) => {
              return (
                <>
                  {elem.category === 13 && (
                    <Carroussel
                      image={elem.thumbnail}
                      name={elem.name}
                      address={elem.address}
                      rating={elem.rating}
                    />
                  )}
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
