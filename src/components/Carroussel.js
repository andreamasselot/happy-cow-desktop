const Carroussel = (props) => {
  return (
    <>
      <div className="elements">
        <img src={props.image} alt="vegan restaurants" />
        <h2>{props.name}</h2>
        <h3>{props.address}</h3>
        <p>{props.rating}</p>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default Carroussel;
