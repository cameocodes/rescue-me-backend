const mongoose = require('../db/connectdb')
const {Schema} = mongoose

const petSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    species: {
        type: String,
        required: true,
        index: true
    },
    breed: {
        type: String,
        required: true,
    }
})

const Pet = mongoose.model('Pets', petSchema)

module.exports = Pet