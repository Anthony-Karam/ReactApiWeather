import React from "react";

const NameAndDateComponent = (props) => {
  const date = new Date(props.date).toUTCString();

  return (
    <div>
      <section className="location">
        <div className="city">{props.cityName}</div>
        <div className="date">{date}</div>
      </section>
    </div>
  );
};

export default NameAndDateComponent;
