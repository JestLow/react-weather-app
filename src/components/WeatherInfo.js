import { useSelector } from "react-redux";
import WeatherCard from "./WeatherCard";

function WeatherInfo() {
  const city = useSelector((state) => state.weather.city);
  const data = useSelector((state) => state.weather.data);
  const isCityFound = useSelector((state) => state.weather.isCityFound);
  const status = useSelector((state) => state.weather.status);
  const error = useSelector((state) => state.weather.error);

  if (status === "loading") {
    return <div className="weatherInfo">Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <div className="weatherInfo">An error has occurred</div>
        <div className="weatherInfo">
          Please be sure that city name is correct
        </div>
        <div className="weatherInfo">Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="cityName">
        {isCityFound
          ? `3 day forecast for ${
              city && city[0].toUpperCase() + city.slice(1)
            }`
          : "Please be sure that city name is correct"}
      </h2>

      <div className="weatherInfo">
        {data
          ? data.forecast.forecastday.map((array, index) => {
              return (
                <WeatherCard
                  key={index}
                  date={array.date}
                  maxTemp={array.day.maxtemp_c}
                  minTemp={array.day.mintemp_c}
                  icon={array.day.condition.icon}
                />
              );
            })
          : "Waiting for data..."}
      </div>
    </div>
  );
}

export default WeatherInfo;
