const {MongoClient} = require('mongodb');
const uri = process.env.atlas_uri;
//const uri = "mongodb+srv://kycuser:<password>@kyccluster.yqg3u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

let _db;

module.exports = {
    connectServer: function (callback) {
        client.connect(function(err, db) {
            if (db) {
                _db = db.db("kyc");
                console.log("Success! Connected to MongoDB Atlas");
                //const collection = client.db("test").collection("devices");
            }
            return callback(err);
        });
    },
    getDb: function(){
        return _db;
    },
};

