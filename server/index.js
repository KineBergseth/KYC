const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded({extended: false})); // parse url-encoded bodies)


async function getData(type, input) {
    const query = {
        PERSON: 'pep?name=',
        COMPANY: 'enheter?orgNr=',
        ROLES: 'roller?orgNr=',
    };

    // create instance instead? look into that later
    const config = {
        method: 'get',
        url: `https://stacc-code-challenge-2021.azurewebsites.net/api/${query[type]}${input.kyc_search}`,
        headers: {}
    };
    const response = await axios(config);
    console.log('peeeeeepppppppppppppppppeeeep');
    console.log(response.data);
    return response.data;

    /*await axios(config)
        .then(function (response) {
            console.log('peeeeeepppppppppppppppppeeeep');
            console.log(response.data);
            return response.data; // data.hits for persons
        })
        .catch(function (error) {
            console.log(error);
        });*/
}

//test - remove this later
app.get("/api", (req, res) => {
    res.json({message: "Hello there, it works!"});
});

app.get("/api/persons:kyc_search", (req, res) => {
    const type = 'PERSON';
    let kyc_search = req.params;
    getData(type, kyc_search)
        .then(data => {
            console.log('peeeeeeeeeep');
            console.log(data);
            res.json(data);
        });
});

app.get("/api/company:kyc_search", (req, res) => {
    const type = 'COMPANY';
    let kyc_search = req.params;
    getData(type, kyc_search)
        .then(data => {
            console.log('peeeeeeeeeep');
            console.log(data);
            res.json(data);
        });
});

app.get("/api/roles:kyc_search", (req, res) => {
    const type = 'ROLES';
    let kyc_search = req.params;
    getData(type, kyc_search)
        .then(data => {
            console.log('peeeeeeeeeep');
            console.log(data);
            res.json(data);
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});