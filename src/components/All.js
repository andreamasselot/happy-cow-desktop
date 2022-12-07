import { Link } from "react-router-dom";

const All = (props) => {
  return (
    <>
      <div className="container">
        <h1 className="all-page-title">
          All photos from
          <Link to={`/offers/${props.data.placeId}`}>{props.data.name}</Link>
        </h1>
      </div>

      <section className="all-pictures-container">
        {props.data.pictures.map((elem) => {
          return (
            <div className="images-all-pictures" key={elem}>
              <img src={elem} alt="meals" />
            </div>
          );
        })}
      </section>
    </>
  );
};
export default All;
