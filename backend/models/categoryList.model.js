const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catList = new Schema({
  id: { type: Number, required: true },
  value: { type: String, required: true },
  label: { type: String, required: true },
});

const categoryList = mongoose.model('categoryList', catList);

module.exports = categoryList;