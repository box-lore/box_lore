const fs = require('fs')
const dotenv = require("dotenv")
dotenv.config()

var axios = require('axios');

const BBALL_API = `${process.env.BBALL_API_KEY}`;

//const current_season =
var config = {
    method: 'get',
    url: "https://v1.basketball.api-sports.io/standings?league=12&season=2022-2023&group=Western Conference",
    headers: {
        'x-rapidapi-host': 'v1.basketball.api-sports.io',
        'x-rapidapi-key': BBALL_API
    }
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
        var json = JSON.stringify(response.data);
        fs.writeFile('../client/react-app/src/jsons/standings.json', json, 'utf8', (err) => {
            // In case of a error throw err.
            if (err) throw err;
        });

    })
    .catch(function (error) {
        console.log(error);
    });