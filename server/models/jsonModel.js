const mongoose = require("mongoose");

const jsonSchema = {
    title: String,
    content: String
}

const JsonModel = mongoose.model("JsonModel", jsonSchema)

module.exports = JsonModel;