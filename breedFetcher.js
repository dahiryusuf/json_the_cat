const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (body === '[]') {
      callback(`Error`, null);
      return;
    }
    callback(error, data[0].description);
  });
};
module.exports = { fetchBreedDescription };