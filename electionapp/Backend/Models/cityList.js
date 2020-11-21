const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const cityListSchema = new Schema({
    "city": {
        type: String,
        required: true
    },
    "type": {
        type: String,
        required: true
    },
    "district": {
        type: String,
        required: true
    },
    "population": {
        type: Number,
        required: true
    },
    "polls": {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model('cityList', cityListSchema)