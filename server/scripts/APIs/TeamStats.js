const fs = require('fs')
const dotenv = require("dotenv")
dotenv.config()

var axios = require('axios');

const BBALL_API = `${process.env.BBALL_API}`;

const options = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/teams/statistics',
    params: {id: '6', season: '2021'},
    headers: {
      'X-RapidAPI-Key': BBALL_API,
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
      var json = JSON.stringify(response.data);
        fs.writeFile('../client/react-app/src/jsons/teamstats/team6-2021.json', json, 'utf8', (err) => {
            // In case of a error throw err.
            if (err) throw err;
        });
  }).catch(function (error) {
      console.error(error);
  });