import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "../components/Banner";
import Carroussel from "../components/Carroussel";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
          <Link to={"/restaurants"}>View All</Link>
        </div>
        <Carousel responsive={responsive} className="carousel-container">
          {data
            .filter((elem) => {
              return elem.category === 0;
            })
            .map((elem) => {
              return (
                <>
                  <Carroussel
                    image={elem.thumbnail}
                    name={elem.name}
                    description={elem.description}
                    address={elem.address}
                    rating={elem.rating}
                  />
                </>
              );
            })}
        </Carousel>{" "}
        <section className="background">
          <div className="section-header container">
            <h1>Vegan Ice Creams, Smoothies</h1>
            <Link to={"/restaurant"}>View All</Link>
          </div>

          <Carousel responsive={responsive} className="carousel-container">
            {data
              .filter((elem) => {
                return elem.category === 12;
              })
              .map((elem) => {
                return (
                  <>
                    <Carroussel
                      image={elem.thumbnail}
                      name={elem.name}
                      address={elem.address}
                      rating={elem.rating}
                    />
                  </>
                );
              })}
          </Carousel>
        </section>
        <section className="container">
          <div className="section-header">
            <h1>Meet the Community</h1>
            <Link to={"/"}>View All</Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
