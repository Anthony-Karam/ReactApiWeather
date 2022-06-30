import "./App.css";
import SearchCityComponent from "./components/SearchCityComponent";
import NameAndDateComponent from "./components/NameAndDateComponent";
import DegreeTempComponent from "./components/DegreeTempComponent";
import fakeWeather from "./fakeWeather.json";
import React from "react";

class App extends React.Component {
  render() {
    console.log(fakeWeather);
    return (
      <div className="App">
        <div class="app-wrap">
          <header>
            <SearchCityComponent />
          </header>
          <main>
            <NameAndDateComponent />
            <DegreeTempComponent />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
