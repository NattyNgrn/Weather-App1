import temp from "../components/temp"
import previous from "../components/previousCities"
import hourly from "../components/hourly"
import humidity from "../components/humidity"


//city from use state in search cities.

function CurrentWeather() {

return (
    <div className="weather">
        
         <h1>CITY</h1>
        <h1>Previously searched cities:</h1>
        <p>{previous}</p>
        <h2>Hourly Forecast</h2>
        <p>{hourly}</p>
        <h2>Humidity</h2>
        <p>{humidity}</p>
    </div>
)
}

export default CurrentWeather;