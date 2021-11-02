const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema(
    {
        score: Number,
        id: String,
        schema: String,
        name: String,
        aliases: String,
        birth_date: String,
        countries: String,
        identifiers: String,
        sanctions: String,
        phones: String,
        emails: String,
        dataset: String,
        last_seen: String,
        first_seen: String,
        notes: {type: String, default: ""},
        status: {type: String, default: "waiting"},
    },
    {timestamps: true}
);
module.exports = mongoose.model("pep", personSchema);
