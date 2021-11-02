const mongoose = require('mongoose');
const connection = "mongodb+srv://kycuser:kycpassword@kyccluster.yqg3u.mongodb.net/kyc?retryWrites=true&w=majority";
mongoose.connect(connection)
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


/*
require("dotenv").config({path: "../config/config.env"});
const uri = process.env.atlas_uri;

*/
