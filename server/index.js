const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require('path');
const compression = require("compression");
require("dotenv").config({path: "./config.env"});

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded({extended: true})); // parse url-encoded bodies)
app.use(require("./routes/person.route"));
app.use(compression()); //gzip to decrease size of response body & increase speeeeed

app.use(express.static('client/build'));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


const dbo = require("./db/index");
// todo: whats happening here void function return value is useed ehhh?
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

    // todo create instance instead? look into that later
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


    /*await axios(config)
        .then(function (response) {
            console.log('peeeeeepppppppppppppppppeeeep');
            console.log(response.data);
            return response.data; // data.hits for persons
        })
        .catch(function (error) {

        });*/
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


app.listen(PORT, () => {
    // perform a database connection when server starts
    /*dbo.connectToServer(function (err) {
        if (err) console.error(err);

    });*/
    console.log(`Server listening on ${PORT}`);
});

//todo error management
//todo data validation - let user know if input is wrong/person is ok, person dont exists, org no. wrong etc
//todo fix config file
//todo split routes into routing + controller?
//todo CSS to make it pretty/responsive
//todo change bootstrap theme, i dont like the current that much
//todo remove console logs
//todo add people to coll
//todo clean up code
//todo readme
//todo comment code
//todo write tests?