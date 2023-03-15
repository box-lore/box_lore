const getAPIs = require('get-apis')

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

const DYL_API = `${process.env.DYL_API_KEY}`;
const RAPID_API = `${process.env.DYL_NBA_API}`

// -- API - Basketball --

// var api_sports_call = {
//   method: 'get',
//   url: 'https://v1.basketball.api-sports.io/seasons',
//   headers: {
//     'x-rapidapi-key': DYL_API,
//     'x-rapidapi-host': 'v1.basketball.api-sports.io'
//   }
// };

// axios(api_sports_call)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
//   var json = JSON.stringify(response.data);
//   fs.writeFile('../client/jsons/test.json', json, 'utf8', (err) => {
//     // In case of a error throw err.
//     if (err) throw err;
// });

// -- API - NBA --

// const options = {
//   method: 'GET',
//   url: 'https://api-nba-v1.p.rapidapi.com/seasons',
//   headers: {
//     'X-RapidAPI-Key': NBA_API,
//     'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
//   var json = JSON.stringify(response.data);
//   fs.writeFile('../client/jsons/nba.json', json, 'utf8', (err) => {
//     // In case of a error throw err.
//     if (err) throw err;
// });
// }).catch(function (error) {
// 	console.error(error);
// });

// -- API - Free NBA --

// const options = {
//   method: 'GET',
//   url: 'https://free-nba.p.rapidapi.com/stats',
//   params: {game_ids: 'game_ids', per_page: '100', page: '0'},
//   headers: {
//     'X-RapidAPI-Key': RAPID_API,
//     'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
//   var json = JSON.stringify(response.data);
//   fs.writeFile('../client/jsons/stats.json', json, 'utf8', (err) => {
//     // In case of a error throw err.
//     if (err) throw err;
//   });
// }).catch(function (error) {
// 	console.error(error);
// });