const mongoose = require('mongoose');
const connection = "mongodb+srv://kycuser:kycpassword@kyccluster.yqg3u.mongodb.net/kyc?retryWrites=true&w=majority";
mongoose.connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


/*require("dotenv").config({path: "../config/config.env"});
const uri = process.env.atlas_uri;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://kycuser:kycpassword@kyccluster.yqg3u.mongodb.net/kyc?retryWrites=true&w=majority';
db.persons = require("../model/person.model")(mongoose);

module.exports = db;*/

// void function return value. not optimal but works eh
/*
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
    });*/
