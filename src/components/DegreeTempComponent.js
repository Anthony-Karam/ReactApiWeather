import React from "react";

const DegreeTempComponent = () => {
  return (
    <div>
      <div className="current">
        <div className="temp">
          15<span>°C</span>
        </div>
        <div className="weather">Sunny</div>
        <div className="hi-low">13°C / 16°C</div>
      </div>
    </div>
  );
};

export default DegreeTempComponent;
