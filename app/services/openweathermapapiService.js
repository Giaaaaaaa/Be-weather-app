const axios = require('axios')

exports.getWeather = (city) =>{
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=23117bf1f7233b49349768870595750a')
}