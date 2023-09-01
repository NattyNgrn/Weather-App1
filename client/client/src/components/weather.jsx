import temp from "../components/temp"
import previous from "../components/previousCities"
import hourly from "../components/hourly"
import humidity from "../components/humidity"
import uv from "../components/uv"

//city from use state in search cities.

function App() {

return (
    <div>
        <h1>CITY</h1>
        <h1>Previously searched cities:</h1>
        <p>{previous}</p>
        <h2>Hourly Forecast</h2>
        <p>{hourly}</p>
        <h2>Humidity</h2>
        <p>{humidity}</p>
        <h2>UV Index</h2>
        <p>{uv}</p>
    </div>
)
}

export default App