module.exports = mongoose => {
    let personSchema = mongoose.Schema(
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

    return mongoose.model("people", personSchema);
};