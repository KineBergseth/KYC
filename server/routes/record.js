// https://www.mongodb.com/languages/mern-stack-tutorial
const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/index");
const ObjectId = require("mongodb").ObjectId;


// get all the records
recordRoutes.route("/record").get(function (req, res) {
    let db_connect = dbo.getDb("kyc");
    db_connect
        .collection("people")
        .find({})
        .toArray(function (error, result) {
            if (error) throw error;
            res.json(result);
        });
});

// get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("people")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let newPerson = {
        id: req.body.id,
        name: req.body.name,
        aliases: req.body.aliases,
        birth_date: req.body.birth_date,
        countries: req.body.countries,
        dataset: req.body.dataset,
        notes: "",
        status: "",
        last_seen: req.body.last_seen,
        first_seen: req.body.first_seen,
    };
    db_connect.collection("people").insertOne(newPerson, function (error, res) {
        if (error) throw error;
        response.json(res);
    });
});

// update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    let newvalues = {
        $set: {
            person_name: req.body.person_name,
            person_position: req.body.person_position,
            person_level: req.body.person_level,
        },
    };
    db_connect
        .collection("records")
        .updateOne(myquery, newvalues, function (error, res) {
            if (error) throw error;
            console.log("document updated");
            response.json(res);
        });
});

module.exports = recordRoutes;