import express from "express";
const app = express();
const port = process.env.PORT || 5555;
import cors from "cors"; 
import path from "path";
import env from "dotenv";
require('dotenv').config(); //https://www.dotenv.org/docs/quickstart

const API = process.env.API
const URL = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt={7}&appid=${API}`
const __dirname = "/Users/natalianegron/Documents/Techtonica/coolWeatherApp"
app.use(cors());

//getting json from weather API
async function getWeather() {
    const response = await fetch(URL);
    const weather = await response.json();
    console.log(weather);
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/src/app.jsx")
});



app.listen(port, () => console.log(`listening at http://localhost:${port}`));