const express = require('express')
const router = express.Router()
const Pet = require('./Pet')

router.get('/', (req, res) => {
    Pet.find()
    .then(pets => {
        res.status(200).json(pets)
    })
    .catch(err => {
        throw new Error(err.message)
    })

})

module.exports = router