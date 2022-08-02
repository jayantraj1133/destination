const router = require('express').Router();
let categoryList = require('../models/categoryList.model');


router.route('/').get((req, res) => {
    console.log(
    );
    categoryList.find()
        .then((catList) => {
            res.json(catList)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const id = req.body.id;
    const value = req.body.value;
    const label = req.body.label;


    const newList = new categoryList({
        id,
        value,
        label,
    });

    newList.save()
        .then(() => res.json('List  added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;