require('dotenv').config();
console.log(`Your API key is ${process.env.API_KEY}`);
var path = require('path')
//Express to run server and routes
const express = require('express');
// set aylien API credentias

//Start up an instance of app
const app = express();

//Dependencies
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//Cors for Cross origin allowance
const cors = require('cors');
app.use(cors());

//GET Route
app.get('/', (req,res) => {
    res.sendFile(path.resolve('./dist/index.html'));
});

//Initializing the main project folder
app.use(express.static('dist'));

const port = 3000;

//TODO-spin up the server
const server = app.listen(port,()=>{
    console.log(`running on localhost ${port}`);
})
