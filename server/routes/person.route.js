const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/index");
const Persons = dbo.persons;
//const ObjectId = require("mongodb").ObjectId;

// add one person
recordRoutes.route("/create").post((req, res) => {
    Persons.create(req.body, (error, data) => {
        if (error) {
            res.status(500).json({error: 'Could not add person'})
        } else {
            console.log(data)
            res.json(data);
        }
    })
})

// get all persons
recordRoutes.route("/record").get(function (req, res) {

    Persons.find()
        .then(data => {
            res.send(data);
            res.status(200).send({message: 'Person found!'})
        })
        .catch(error => {
            res.status(500).send({
                message: error.message || 'Woops! A error occured while retriving person data'
            });
        });
});

// update one person by id
recordRoutes.route("/update/:id").put((req, res) => {
    const data = req.params.id;
    const query = {status: req.params.body};
    Persons.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json({message: 'Updates person wohoo'}))
        .catch(error => res.status(500).json({error: 'Could not update person'})
        );
});


module.exports = recordRoutes;