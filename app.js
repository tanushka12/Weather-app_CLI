const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20Abode%20Valley%20India',
  json: true
}, (error, response, body) => {
  //console.log(JSON.stringify(body, undefined, 2)); //property argument is undefined / 2 is the no. of spaces
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
