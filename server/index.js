const mysql = require('mysql')
const express = require ('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const dotenv = require("dotenv")
dotenv.config()

const app = express()
const port = process.env.PORT || 3001;

const boxDB = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'boxDB',
});

app.get('/', (req, res) => {
    res.send("Server port 3001 test")
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})

var axios = require('axios');

const BBALL_API = `${process.env.BBALL_API_KEY}`;
console.log(process.env.BBALL_API_KEY);

//League 12 is NBA
//Must include season=XXXX-XXXX in standings call
var config = {
  method: 'get',
  url: "https://v1.basketball.api-sports.io/seasons",
  headers: {
    'x-rapidapi-host': 'v1.basketball.api-sports.io',
    'x-rapidapi-key': BBALL_API
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  var json = JSON.stringify(response.data);
  fs.writeFile('../client/react-app/src/jsons/seasons.json', json, 'utf8', (err) => {
    // In case of a error throw err.
    if (err) throw err;
});

})
.catch(function (error) {
  console.log(error);
});



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
