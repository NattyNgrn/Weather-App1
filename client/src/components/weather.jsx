
import "../style/searchCity.css";

function CurrentWeather({city, weather}) {


return (
    <div className="weather">
        <h1 className="title">{city}</h1>

        <div className="top">
            <h2>Forecast:</h2>
            <p>{weather ? weather.list[0].weather[0].main : ""}</p>
            <p>{weather ? weather.list[0].weather[0].description : ""}</p>
        </div>
        <div className="middle">
            <h2>Max Temperature</h2>
            <p>{weather ? weather.list[0].temp.max : ""}</p>
            <h2>Min Temperature</h2>
            <p>{weather ? weather.list[0].temp.min : ""}</p>
        </div>

        <div className="bottom">
            <h2>Humidity</h2>
            <p>{weather ? weather.list[0].humidity : ""}</p>
            <p></p>
        </div>
    </div>
)
}

export default CurrentWeather;