const router = require('express').Router();
let dataList = require('../models/dataList.model');

router.route('/').get((req, res) => {
    dataList.find()
        .then(data => res.json(data))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const serviceTime = req.body.serviceTime;
    const deliveryFee = req.body.deliveryFee;
    const category = req.body.category;
    const cuisine = req.body.cuisine;
    const rating = req.body.rating;
    const price = req.body.price;
    const coverSrc = req.body.coverSrc;

    // const date=Date.parse(req.body.date);


    const newDataList = new dataList({
        id,
        title,
        serviceTime,
        category,
        cuisine,
        rating,
        price,
        coverSrc,
        deliveryFee

        //  date,
    });

    newDataList.save()
        .then(() => res.json('dataList  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;