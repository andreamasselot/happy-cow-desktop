import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
  };
  return (
    <>
      <div className="banner">
        <div className="banner-infos">
          <h2>Find Vegan Restaurants Nearby</h2>
          <div className="input-banner">
            <input
              type="text"
              placeholder="What are you looking for ?"
              value={search}
              onChange={handleSearch}
            />
            <button
              onClick={() => {
                navigate(`/explore?name=${search}`);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
