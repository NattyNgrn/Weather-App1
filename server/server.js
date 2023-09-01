import express from "express";
const app = express();
const port = process.env.PORT || 5555;
import cors from "cors"; 
import path from "path";

const __dirname = path.resolve();
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app.jsx")
});

app.listen(port, () => console.log(`listening at http://localhost:${port}`));