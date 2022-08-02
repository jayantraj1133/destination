const router = require('express').Router();
let ratingList = require('../models/ratingList.model');

router.route('/').get((req, res) => {
  ratingList.find()
    .then(rating => res.json(rating))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const value = req.body.value;
  const label = req.body.label;
  // const date=Date.parse(req.body.date);


  const newRatingList = new ratingList({
    id,
    value,
    label,
    //  date,
  });

  newRatingList.save()
    .then(() => res.json('ratingList  added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;