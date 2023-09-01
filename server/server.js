import express from "express";
const app = express();
const port = process.env.PORT || 5555;
import cors from "cors"; 
import path from "path";

const __dirname = "/Users/natalianegron/Documents/Techtonica/coolWeatherApp"
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/src/app.jsx")
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));