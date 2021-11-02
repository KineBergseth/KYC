const express = require("express");
const axios = require("axios");
const cors = require("cors");
const compression = require("compression");


require("dotenv").config({path: "./config.env"});

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded({extended: true})); // parse url-encoded bodies)
app.use(require("./routes/person.route"));
app.use(compression()); //gzip to decrease size of response body & increase speeeeed


const dbo = require("./db");
// void function return value. not optimal but works eh
dbo.mongoose
    .connect(dbo.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to mongoDB!")
    })
    .catch(error => {
        console.log("Cannot connect to mongoDB! D:", error)
        process.exit();
    });

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

// Accessing the path module
const path = require("path");

// server static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build')) // send static files request to client
    // return frontend for any other route than api
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

