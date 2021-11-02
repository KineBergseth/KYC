//const express = require("express");
//const recordRoutes = express.Router();
const Person = require('../model/person.model');

module.exports = (app) => {
    // add one person to DB
    app.get('/persons/create', async (req, res) => {
        try {
            const persons = await Person.create(req.body);
            return res.send(persons);
        } catch (error) {
            return res.send(error);
        }
    });

    // get all persons/PEPs
    app.get('/persons/get', async (req, res) => {
        try {
            const persons = await Person.find({});
            return res.send(persons);
        } catch (error) {
            return res.send(error);
        }
    });

    // get all PEPs with status waiting ot awaiting further analysis, aka people that are not processed yet
    app.get('/persons/waiting', async (req, res) => {
        try {
            const filter = {$or: [{status: "waiting"}, {status: "awaiting further analysis"}]};
            const persons = await Person.find(filter);
            return res.send(persons);
        } catch (error) {
            return res.send(error);
        }
    });


    // update one person by id
    // todo
    app.get('/persons/update/:id', async (req, res) => {
        try {
            const persons = await Person.findByIdAndUpdate(req.params.id, req.body);
            return res.send(persons);
        } catch (error) {
            return res.send(error);
        }
    });
    /*recordRoutes.route("/update/:id").put((req, res) => {
        Person.findByIdAndUpdate(req.params.id, req.body)
            .then(res.json({message: 'Updated person. success!'}))
            .catch(error => res.status(500).json({error: `Could not update person ${error}`})
            );
    });*/

};