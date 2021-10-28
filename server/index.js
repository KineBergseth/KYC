const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded({extended: false})); // parse url-encoded bodies)

app.get("/api", (req, res) => {
    res.json({message: "Hello there, it works!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});