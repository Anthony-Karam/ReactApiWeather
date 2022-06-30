import React from "react";

const DegreeTempComponent = (props) => {
  return (
    <div>
      <div className="current">
        <div className="temp">{props.temp}'C</div>
        <div className="weather">{props.weather}</div>
        <div className="hi-low">
          {`${props.lowTemp} low to ${props.highTemp} high`}
        </div>
      </div>
    </div>
  );
};

export default DegreeTempComponent;
