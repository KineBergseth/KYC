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
    let myobj = {
        person_name: req.body.person_name,
        person_position: req.body.person_position,
        person_level: req.body.person_level,
    };
    db_connect.collection("people").insertOne(myobj, function (error, res) {
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