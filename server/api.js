const {Dog} = require('./models/dogs')
const router = require('express')();
module.exports = router;

// API ROUTES

router.get('/dogs', (req, res, next) => {
  Dog.findAll({})
    .then(dogs => res.json(dogs))
    .catch(next)
})