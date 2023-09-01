import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config(); //https://www.dotenv.org/docs/quickstart

let city = "Orlando";
const port = process.env.PORT || 5555;
const API = process.env.API;
const URL = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${API}`

console.log(API) //testing
console.log(URL); //testing

//getting json from weather API
fetch(URL) 
    .then(res => {console.log(res.json())})
    .then(data => console.log(data))
    .catch(error => console.log("ERROR"))

//making sure this is working
app.get("/", (req, res) => {
    res.status(200).send("this is working");
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));