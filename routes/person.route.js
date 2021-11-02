const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db");
const Persons = dbo.persons;

// add one person to DB
recordRoutes.route("/create").post((req, res) => {
    try {
        Persons.create(req.body)
            .then(data => {
                console.log(data)
                res.json(data);
            })
    } catch (error) {
        res.status(error.response.status)
        return res.send(error.message);
    }
});

// get all persons/PEPs
recordRoutes.route("/record").get(function (req, res) {

    Persons.find()
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Woops! A error occured while retriving person data'
            });
        });
});

// get all PEPs with status waiting ot awaiting further analysis, aka people that are not processed yet
recordRoutes.route("/waiting").get(function (req, res) {
 const filter = {$or: [{status: "waiting"},{status: "awaiting further analysis"}]};
    Persons.find(filter)
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Woops! A error occured while retriving person data'
            });
        });
});

// update one person by id
recordRoutes.route("/update/:id").put((req, res) => {
    Persons.findByIdAndUpdate(req.params.id, req.body)
        .then(res.json({message: 'Updated person. success!'}))
        .catch(error => res.status(500).json({error: `Could not update person ${error}`})
        );
});

module.exports = recordRoutes;