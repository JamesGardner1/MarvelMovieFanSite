var express = require('express')
var Movies = require('../models').Movies

var router = express.Router()

router.get('/movies', function(req, res, next){
    Movies.findAll({order: ['order']})
        .then( movies => {
            return res.json(movies)
        })
        .catch( err => next.err() )
})

module.exports = router