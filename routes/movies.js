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

router.get('/movies/:name', function(req, res, next) {
    Movies.findOne({where: {name: req.params.name}})
        .then(movie => {
            if (movie) {
                return res.json(movie)
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next.err() )
})

router.patch('/movie/:name', function(req, res, next){
    Movies.update({ watched: req.body.watched }, { where: {
            name: req.params.name
        }
    })
        .then( rows => {
            if (rows) {
                return res.send('ok')
            } else {
                return res.status(404).send()
            }
        })
        .catch( err => next.err() )
})


module.exports = router