import { useState } from 'react'
import CurrentWeather from "./weather.jsx"
import "../index.css"

function Form() {
    
    const [search, setSearch] = useState("");
    const handleOnChange = (searchData) => {
        setSearch(searchData.target.value);
    }
    const [weather, setWeather] = useState("");

    async function getWeather(event) {
        event.preventDefault();
        const response = await fetch(`http://localhost:5555/weather?city=${search}`)
        const weatherData = await response.json()
        setWeather(weatherData);
    }
console.log(weather ? weather : "");
    return (
        <div>
            <h1 className='searchcity'>Search your city!</h1>
            <form>
                <input type="text" value={search} onChange={handleOnChange}></input>
                <button type="submit" onClick={getWeather}>Submit</button>
            </form>
            <CurrentWeather city={search} weather={weather}/>
        </div>
    )
}

export default Form