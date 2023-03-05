const mysql = require('mysql')
const express = require ('express')
const bodyParser = require('body-parser')

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

var config = {
  method: 'get',
  url: 'https://v1.basketball.api-sports.io/seasons',
  headers: {
    'x-rapidapi-key': 'e818b2873f73f8796601575c1afa2ae1',
    'x-rapidapi-host': 'v1.basketball.api-sports.io'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
