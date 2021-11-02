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

//app.use(require("./routes/person.route"));

// middleware
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded({extended: true})); // parse url-encoded bodies
app.use(compression()); //gzip to decrease size of response body & increase speeeeed

// rest api
async function getData(type, input) {
    const query = {
        PERSON: 'pep?name=',
        COMPANY: 'enheter?orgNr=',
        ROLES: 'roller?orgNr=',
    };

    const config = {
        method: 'get',
        url: `https://stacc-code-challenge-2021.azurewebsites.net/api/${query[type]}${input.kyc_search}`,
        headers: {}
    };
    try{
        const response = await axios(config);
        return response.data;
    }
    catch (error){
        console.log(error);
    }
}

app.get("/api/persons:kyc_search", (req, res) => {
    const type = 'PERSON';
    let kyc_search = req.params;
    getData(type, kyc_search)
        .then(data => {
            res.json(data);
        });
});

app.get("/api/company:kyc_search", (req, res) => {
    const type = 'COMPANY';
    let kyc_search = req.params;
    getData(type, kyc_search)
        .then(data => {
            res.json(data);
        });
});

app.get("/api/roles:kyc_search", (req, res) => {
    const type = 'ROLES';
    let kyc_search = req.params;
    getData(type, kyc_search)
        .then(data => {
            res.json(data);
        });
});

// mongodb api
require("./routes/person.route")(app);

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

