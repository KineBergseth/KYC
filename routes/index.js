const axios = require("axios");
module.exports = (app) => {
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
};
