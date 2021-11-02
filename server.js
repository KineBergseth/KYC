const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
require("dotenv").config({path: "./config.env"});
require("./db/database");
require("./model/person.model");
const app = express();

app.use(cors());

// middleware
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded({extended: true})); // parse url-encoded bodies
app.use(compression()); //gzip to decrease size of response body & increase speeeeed

require("./routes/index")(app); // RESTapi pep-search
require("./routes/person.route")(app); // mongodb api

// server static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build')) // send static files request to client
    // return frontend for any other route than api
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

