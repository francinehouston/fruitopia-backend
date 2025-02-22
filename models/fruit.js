const mongoose = require('mongoose');

const fruitSchema = mongoose.Schema({
    name: {
    type : String,
    required: true
    },
    family: {
        type: String,
        required: true
    },
    genus: {
        type: String,
        required: true
    },
    nutritions: {
        calories:{
        type: Number,
        required: true
    }
    },
        fat:{ 
            type: Number,
            required: true
        },
        sugar: {
            type: Number,
            required: true
        },
        carbohydrates: {
            type: Number,
            required: true
        },
        protein: {
           type: Number,
           required: true
           
    }



});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;