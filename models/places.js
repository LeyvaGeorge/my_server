//places.js

const mongoose = require('mongoose')
const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: String,
    //cuisines:string, changed
    breed: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: Number
})

placeSchema.methods.showEstablished = () => {
    return `${this.name} has ben serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)