'use strict';

const express = require('express');
const cors = require('cors');
const server = express();
const weatherData = require('./data/weather.json')
require('dotenv').config;
server.use(cors());




const PORT = process.env.PORT || 3001;



//http:localhost:3001/
server.get('/', (req, res) => {
    res.send("Hi from the home route")
})

//http:localhost:3001/test/
server.get('/test', (req, res) =>{
    res.send("Hello test route")
})


//http:localhost:3001/weatherDatas
server.get('/weatherDatas', (req, res) => {
    let allData = weatherData.map((item) => {
        return item.city_name;
    })
    console.log(JSON.stringify(allData));
    res.send(JSON.stringify(allData));
})



//http:localhost:3001/weather?name=city_name&lon=lon&lat=lat
server.get('/weather', (req, res) => {
    const result = weatherData.find((item) => {
        if(item.city_name == req.query.city_name){
            return item;
        }

    })
    console.log(result);
    res.send(result);
    // res.send(result);
});

server.get("*", (req, res) =>{
    res.send("404");
})



server.listen(PORT, () =>{
    console.log(`I am listening on port ${PORT}`);
})