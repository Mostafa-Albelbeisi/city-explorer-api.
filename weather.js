const axios = require("axios");

async function getWeatherHandler(req, res) {
    console.log('enttered');
  let queryName = req.query.city;
  const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${queryName}&key=${process.env.WEATHER_KEY}`;

  axios
    .get(URL)
    .then((result) => {
      let weatherData = result.data.data.map((item) => {
        return new Weather(item);
      });

      let cityLat = result.data.lat;
      let cityLon = result.data.lon;
      let cityName = result.data.city_name;
      weatherData.push({
        cityLat: cityLat,
        cityLon: cityLon,
        cityName: cityName,
      });
      res.status(200).send(error);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
}

class Weather {
  constructor(item) {
    this.data = item.valid_data;
    this.minTemp = item.min_temp;
    this.maxTemp = item.max_temp;
    this.description = item.weather.description;
  }
}
module.exports = getWeatherHandler;