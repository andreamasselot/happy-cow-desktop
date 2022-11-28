import vegan from "../assets/img/vegan.svg";
import vegetarian from "../assets/img/vegetarian.svg";
const Carroussel = (props) => {
  return (
    <>
      <div className="elements">
        <img src={props.image} alt="vegan restaurants" />

        {props.type === "vegan" ? (
          <h2>
            <img src={vegan} alt="vegan logo" className="label-vege" />{" "}
            {props.name}
          </h2>
        ) : (
          <h2>
            <img src={vegetarian} alt="vegan logo" className="label-vege" />{" "}
            {props.name}
          </h2>
        )}
        <h3>{props.address}</h3>
        <div>{props.rating}</div>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Carroussel;
