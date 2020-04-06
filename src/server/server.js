require('dotenv').config();
var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`
});

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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
//GET Route
app.get('/', (req,res) => {
    res.sendFile(path.resolve('./dist/index.html'));
});

//POST Route
app.post('/getSentiment', (req,res)=>{
    var solicitud = req.body.text;
    textapi.sentiment(
        solicitud
      , function(error, response) {
        if (error === null) {
          console.log('response: ', response);
        }
        res.send(response)
      });
})

//Initializing the main project folder
app.use(express.static('dist'));

const port = 3000;

//TODO-spin up the server
const server = app.listen(port,()=>{
    console.log(`running on localhost ${port}`);
})
