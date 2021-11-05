const request = require('request');
const recieved = process.argv.slice(2);
const cat = recieved[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${cat}`, (error, response, body) => {
  if(error){
    console.log('error:', error);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(typeof data);
});