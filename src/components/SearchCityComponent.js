import React from "react";

const SearchCityComponent = () => {
  return (
    <div>
      <input
        type="text"
        autoComplete="off"
        className="search-box"
        placeholder="Search for a city"
      />
    </div>
  );
};

export default SearchCityComponent;
