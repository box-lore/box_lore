const mysql = require('mysql')
const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
const port = 3001;

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/jsonRoute.js"));

const mongoURI = `${process.env.DB_CONNECT}`;
mongoose.connect(mongoURI);

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

// var axios = require('axios');

// const TYL_API = `${process.env.TYL_API_KEY}`;
// console.log(process.env.TYL_API_KEY);


// var config = {
//     method: 'get',
//   url: 'https://nba-latest-news.p.rapidapi.com/articles',
//   params: {team: 'lakers'},
//   headers: {
//     'X-RapidAPI-Key': TYL_API,
//     'X-RapidAPI-Host': 'nba-latest-news.p.rapidapi.com'
//   }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
//   var json = JSON.stringify(response.data);
//   fs.writeFile('../client/react-app/src/jsons/test.json', json, 'utf8', (err) => {
//     // In case of a error throw err.
//     if (err) throw err;
// });

// })
// .catch(function (error) {
//   console.log(error);
// });

// })
// .catch(function (error) {
//   console.log(error);
// });
