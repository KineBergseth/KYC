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

    await axios(config)
        .then(function (response) {
            console.log('peeeeeepppppppppppppppppeeeep');
            console.log(response.data);
            return response.data; // data.hits for persons
        })
        .catch(function (error) {
            console.log(error);
        });
};

//test - remove this later
app.get("/api", (req, res) => {
    res.json({message: "Hello there, it works!"});
});

app.get("/api/persons:kyc_search", (req, res) => {
    const type = 'PERSON';
    let kyc_search = req.params;
    const persons_data = get_data(type, kyc_search);
    res.json({persons: "Hello there, persons!"});
});

app.get("/api/company:kyc_search", (req, res) => {
    const type = 'COMPANY';
    let kyc_search = req.params;
    const companyData = getData(type, kyc_search);
    console.log('peeeeeeeeeep');
    console.log(companyData);
    res.json(companyData);
});

app.get("/api/roles:kyc_search", (req, res) => {
    const type = 'ROLES';
    let kyc_search = req.params;
    const roles_data = get_data(type, kyc_search);
    res.json({roles: "Hello there, roles!"});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});