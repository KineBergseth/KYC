require("dotenv").config({path: "../config/config.env"});
const uri = process.env.atlas_uri;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://kycuser:kycpassword@kyccluster.yqg3u.mongodb.net/kyc?retryWrites=true&w=majority';
db.persons = require("../model/person.model")(mongoose);

module.exports = db;
