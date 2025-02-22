const Fruit = require('../models/fruit');
const express = require('express');
const router = express.Router();

// Write your routes/controllers functions here

// Create -post
router.post('/',async (req,res) => {
    // res.json({message:'create Route'})
    res.status(201).json(createdFruit);
    try {
        const fruit =await Fruit.create(req.body);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

//Read - Get -/fruits
router.get('/', async (req,res)=> {
    // res.json({message: 'Index Route'});
try {
    const fruits = await Fruit.find();
    res.status(200).json(foundfruits);
}catch (error) {
    res.status(500).json({error: error.message});
}
 
});

// Read-Get -fruits/:id
router.get('/:fruitId', async (req,res) => {
    // res.json({message: `Show route with the param ${req.params.fruitId}`})
    try {
const foundFruit = await Fruit.findById(req.params.fruitId);
if(!foundFruit){
    res.status(404);
    throw new Error('Fruit not found');
}
res.status(200).json(foundFruit);
} catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      // Add else statement to handle all other errors
      res.status(500).json({ err: err.message });
    }
  }
});


// Delete -Delete- fruits/:fruitId
router.delete('/:fruitId',async (req,res) => {
    try {
throw new Error ('This is a test error')
    } catch (error) {

    }
})

// Update- put -fruits/:fruitId
router.put('/:fruitId', async (req, res) => {
    // Message to test the route
    // res.json({message:`Update route with the param $({req.params.fruitId})`}); 
    try {
const updatedFruit = await Fruit.findByIdAndUpdate(req.params.fruitId,req.body)
if(!updatedFruit) {
    res.status(404);
    throw new Error('Fruit not found');
}
res.status(200).json(updatedFruit);
    } catch (error) {
if (res.statusCode === 404){
    res.json({err: error.message});
} else {
    res.status(500).json({err: error.message});
}
    }
});




// Export the router at the bottom of the file
module.exports = router;