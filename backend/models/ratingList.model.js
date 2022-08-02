const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ratList = new Schema({
    id: { type: Number, required: true },
    value: { type: String, required: true },
    label: { type: String, required: true },
});

const ratingList = mongoose.model('ratingList', ratList);

module.exports = ratingList