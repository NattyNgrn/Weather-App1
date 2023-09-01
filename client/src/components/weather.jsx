import temp from "../components/temp"
import previous from "../components/previousCities"
import hourly from "../components/hourly"
import humidity from "../components/humidity"
import sunrise from "../components/sunrise"
import sunset from "../components/sunset"

//city from use state in search cities.

function CurrentWeather() {

return (
    <div className="weather">
        <h1>CITY</h1>

        <div className="top">
            <h2>Temperature</h2>
            <p>{temp}</p>
            <h2>Previously searched cities:</h2>
            <p>{previous}</p>
        </div>

        <div className="middle">
            <h2>Hourly Forecast</h2>
            <p>{hourly}</p>
        </div>

        <div className="bottom">
            <h2>Humidity</h2>
            <p>{humidity}</p>
            <h2>Sunrise</h2>
            <p>{sunrise}</p>
            <h2>Sunset</h2>
            <p>{sunset}</p>
        </div>
    </div>
)
}

export default CurrentWeather;