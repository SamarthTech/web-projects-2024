import { useState } from "react";
import Search from "./components/Search";
import Info1 from "./components/Info1";
import Info2 from "./components/Info2";
import Info3 from "./components/Info3";
import './App.css';

function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    name: "City",
    temp: 0,
    temp_max: 0.0,
    pressure: 0,
    humidity: 0,
    speed: 0.0,
    feels_like: 0,
    description: "normal",
  });

  let updateWeatherInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div className='container'>
      <div className="topCont">
        <Search updateWeatherInfo={updateWeatherInfo} />
      </div>
      <div className="bodyCont">
        <Info1 info={weatherInfo} />
        <Info2 info={weatherInfo} />
        <Info3 info={weatherInfo} />
      </div>
    </div>
  );
}

export default App;