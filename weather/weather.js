const request = require('request');

var getWeather = (lat,lng,callback) => {
  request({
    url: `https://api.darksky.net/forecast/9297e135007d7aa014c03be9f0d8f119/${lat},${lng}`,  //object
    json: true
  }, (error, response, body) => {
    if(error)
    {
      callback('Unable to connect to forecast.io');
    } else if(response.statusCode === 400) {
      callback('Unalble to fetch weather');
    } else if(response.statusCode === 200){
    callback(undefined,{                                                      //a callback can be called more than once and hence there is a chance of accidental call but a promise is called only once, i.e., the 1st time.
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    });
  }
  });

};

module.exports.getWeather = getWeather;
