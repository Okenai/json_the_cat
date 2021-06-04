const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error: ', error)
  }
  if (response && response.statusCode === 200) {
    if (body === '[]') {
      console.log('The breed was not found.');
    }
    if (body !== '[]') {
      const data = JSON.parse(body);
      const description = data[0].description;
      console.log(description);
    }
  }
})


