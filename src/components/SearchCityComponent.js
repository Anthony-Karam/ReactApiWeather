import React from "react";

class SearchCityComponent extends React.Component {
  state = {
    countryValue: "",
  };
  handelInputChange = (e) => {
    const countryValue = e.target.value;
    this.setState({ countryValue });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          autoComplete="off"
          className="search-box"
          placeholder="Search for a city"
          value={this.state.countryValue}
          onChange={this.handelInputChange}
        />
        <center>
          <button
            className="search-box"
            onClick={() =>
              this.props.handleCountryChange(this.state.countryValue)
            }
          >
            Find
          </button>
        </center>
      </div>
    );
  }
}

export default SearchCityComponent;
