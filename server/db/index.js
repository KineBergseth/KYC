/*
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db


const {MongoClient} = require('mongodb');
const uri = process.env.atlas_uri;
//const uri = "mongodb+srv://kycuser:<password>@kyccluster.yqg3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

var _db;

module.exports = {
    connectServer: function (callback) {
        client.connect(err, db => {
            if (db) {
                _db = db.db("MyFirstDataBase");
                console.log("Success! Connected to MongoDB Atlas");
                //const collection = client.db("test").collection("devices");
            }
            return callback(err);
        });
    },
    getDb: function(){
        return _db;
    },
}
*/
