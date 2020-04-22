// Setup empty JS object to act as endpoint for all routes
data=[];

const express = require('express');

// Start up an instance of app
const app = express();

//configure express to use mildware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('src/client'))


app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

//server setup
const port = 3030;
const server = app.listen(port, listening);

// Callback to debug
function listening(){
    console.log(`running on ${port}`);
};

//post weather&image to end-point
app.post('/add', addWeather);

function addWeather(req,res){
    weatherEntry = {
        weather:req.body.weather, 
        windspeed:req.body.windspeed,
        temperature:req.body.temperature,
        imageURL:req.body.imageURL
 }
    data.unshift(weatherEntry);
    console.log(data);
}


//get response to ui update
app.get('/all', getAllData);

function getAllData(req,res){
    res.send(data);
    console.log(data);
}