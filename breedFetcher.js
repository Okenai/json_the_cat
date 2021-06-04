const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    }
    if (response && response.statusCode === 200) {
      if (body === '[]') {

        callback('breed not found');
      }
      if (body !== '[]') {
        const data = JSON.parse(body);
        const description = data[0].description;
        callback(null, description)
      }
    }
  })
};

module.exports = { fetchBreedDescription };