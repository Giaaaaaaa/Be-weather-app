const openweathermapService = require('../services/openweathermapapiService')

exports.index = async (req, res)=>{
    const data = await openweathermapService.getWeather()
    // return openweathermapService.getWeather()
    console.log(data.data)
    res.send(data.data)
}

exports.show = async (req, res)=>{
    const data = await openweathermapService.getWeather()
    console.log(data.data);

}

exports.store = async (req, res)=>{
    
}

exports.update = ()=>{

}

exports.delete = ()=>{

}