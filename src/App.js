import "./App.css";
import SearchCityComponent from "./components/SearchCityComponent";
import NameAndDateComponent from "./components/NameAndDateComponent";
import DegreeTempComponent from "./components/DegreeTempComponent";
import fakeWeather from "./fakeWeather.json";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null };
  }

  componentDidMount() {
    this.setState({ weather: fakeWeather });
  }
  render() {
    // console.log(
    //   this.state.weather && this.state.weather.list[0].weather[0].main
    // );
    return (
      <div className="App">
        <div class="app-wrap">
          <header>
            <SearchCityComponent />
          </header>
          <main>
            {this.state.weather && (
              <NameAndDateComponent
                cityName={this.state.weather.city.name}
                date={this.state.weather.list[0].dt_txt}
              />
            )}
            {this.state.weather && (
              <DegreeTempComponent
                temp={Math.floor(this.state.weather.list[0].main.temp - 273.15)}
                weather={this.state.weather.list[0].weather[0].main}
                lowTemp={Math.floor(
                  this.state.weather.list[0].main.temp_min - 273.15
                )}
                highTemp={Math.floor(
                  this.state.weather.list[0].main.temp_max - 273.15
                )}
              />
            )}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
