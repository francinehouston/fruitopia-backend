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
       
    }
    },
        fat:{ 
            type: Number,
           
        },
        sugar: {
            type: Number,
           
        },
        carbohydrates: {
            type: Number,
           
        },
        protein: {
           type: Number,
          
           
    }



});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;