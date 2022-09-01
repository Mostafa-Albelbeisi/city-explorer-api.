"use strict";
const express = require("express");
const cors = require("cors");
const server = express();
// const weatherData = require("./data/weather.json");
const axios = require("axios");
let getWeatherHandler = require("./weather");
let getMovieHandler = require("./movie");
require("dotenv").config;
server.use(cors());

const PORT = process.env.PORT || 3001;

//http:localhost:3001/
server.get("/", (req, res) => {
  res.send("Hi from the home route");
});

//http:localhost:3001/test/
server.get("/test", (req, res) => {
  res.send("Hello test route");
});

//http:localhost:3001/weatherData?city=cityName&key=key
server.get("/weatherData", getWeatherHandler);

//http:localhost:3001/movieData?
server.get("/movieData", getMovieHandler);

server.get("*", (req, res) => {
  res.send("404");
});




server.listen(PORT, () => {
  console.log(`I am listening on port ${PORT}`);
});