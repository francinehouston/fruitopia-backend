const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app = express()
BASE_URL = "https://www.fruityvice.com/api/fruit"
const logger = require('morgan');
const mongoose = require('mongoose');

// Import the controller file
const fruitRouter = require('./controllers/fruits');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected',() =>{
    console.log(`connected to MongoDB ${mongoose.connection.name}`);
});


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.get("/", (req, res) => {
    res.send({ message: "Welcome to the Backend" })
})

app.get('/fruits-api', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/all`);
        console.log(response.data)
        res.json(response.data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch data" })
    }

})

// SEARCH ROUTE
app.get('/fruits-api', async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: "Name is required" })
        }
        const response = await axios.get(`${BASE_URL}/${name}`);
        const data = response.data 
      res.json(response.data)
      
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch fruit data" })
    }

})

app.use('/fruits', fruitRouter);

app.listen(process.env.PORT || 3000, () => console.log(`server is running, http://localhost:${process.env.PORT}`))






