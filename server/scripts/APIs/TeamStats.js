const fs = require('fs');
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const axios = require('axios');

dotenv.config();

const mongoURI = `${process.env.DB_CONNECT}`;
const mongoURI_Teamstats = `${process.env.DB_CONNECT_TEAMSTATS}`;
const BBALL_API = `${process.env.BBALL_API}`;

const importData = async () => {
  try {
    await Freelancers.create(data)
    console.log('data successfully imported')
    // to exit the process
    process.exit()
  } catch (error) {
    console.log('error', error)
  }
}

// const options = {
//     method: 'GET',
//     url: 'https://api-nba-v1.p.rapidapi.com/teams/statistics',
//     params: {id: '6', season: '2021'},
//     headers: {
//       'X-RapidAPI-Key': BBALL_API,
//       'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//     }
// };
  
// axios.request(options).then(function (response) {
//       const postData = {
//         title: "test",
//         content: JSON.stringify(response.data),
//       }
//       axios.post('http://localhost:3001/create', postData)
//   }).catch(function (error) {
//       console.error(error);
// });

const postData = {
  title: "test",
  content: "testerino"
}
axios.post('http://localhost:3001/create', postData)