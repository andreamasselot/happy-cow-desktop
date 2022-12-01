import { useState } from "react";

const Banner = () => {
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
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
