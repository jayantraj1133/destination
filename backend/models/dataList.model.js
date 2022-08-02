const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const data = new Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    serviceTime: { type: String, required: true },
    deliveryFee: { type: String, required: true },
    category: { type: String, required: true },
    cuisine: { type: String, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
    coverSrc: { type: String, required: true }
}
);

const dataList = mongoose.model('dataList', data);

module.exports = dataList;