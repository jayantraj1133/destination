const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const categoryList = require('./routes/categoryList.js');
const ratingList = require('./routes/ratingList');
const dataList = require('./routes/dataList');


app.get('/', (req, res) => {
    res.send('hello to products');
})

app.use('/categoryList', categoryList);
app.use('/ratingList', ratingList);
app.use('/dataList', dataList);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

