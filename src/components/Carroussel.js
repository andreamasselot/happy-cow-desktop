import vegan from "../assets/img/vegan.svg";
import vegetarian from "../assets/img/vegetarian.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Carroussel = (props) => {
  const [style, setStyle] = useState("fav-white");

  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rating) {
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
        { placeId: props.id },
        { headers: { authorization: "Bearer " + props.token } }
      );
      setStyle("fav-red");
      toast.success("Successfully added to favorites!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="elements-container">
      <Link to={`/offers/${props.id}`}>
        <div className="elements">
          <img src={props.image} alt="vegan restaurants" />

          {props.type === "vegan" ? (
            <h2>
              <img src={vegan} alt="vegan logo" className="label-vege" />
              {props.name}
            </h2>
          ) : (
            <h2>
              <img src={vegetarian} alt="vegan logo" className="label-vege" />
              {props.name}
            </h2>
          )}
          <h3>{props.address}</h3>

          <div className="ratings">{stars}</div>
          <p>{props.description}</p>
        </div>
      </Link>

      {props.token && (
        <button
          className="favorite-button"
          onClick={() => {
            handleFavorite();
          }}
        >
          <FontAwesomeIcon icon="heart" className={style} />
        </button>
      )}
    </div>
  );
};

export default Carroussel;
