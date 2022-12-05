const All = (props) => {
  return (
    <>
      <div className="container">
        <h1>
          All photos from <span>{props.data.name}</span>
        </h1>
      </div>

      <section className="all-pictures-container">
        {props.data.pictures.map((elem) => {
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
export default All;
