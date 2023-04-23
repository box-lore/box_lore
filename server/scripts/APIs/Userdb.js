const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserData = require("../models/userModel");
const router = require("../routes/userRoute");

// Set up body-parser middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://dyldrm:Peppercat1!@clusterm0.qhxluea.mongodb.net/box-lore')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log(err));

// app.use("/", require("./routes/userRoute"));
router.post('/user', (req, res) => {
  const data = new UserData(req.body);
  data.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// // Define the schema for the data you want to store
// const dataSchema = new mongoose.Schema({
//   name: String,
//   age: String,
//   password: String,
//   securityquestion: String
// });

// // Define the model for the data
// const Data = mongoose.model('Data', dataSchema);

// await db.collection('users').insertOne({
//   name: String,
//   age: String,
//   password: String,
//   securityquestion: String
// });


// Define a route to save data to the database
// router.route('/user', (req, res) => {
//   const data = new Data(req.body);
//   data.save();
// });

// app.use('/users', router);

// Start the server
app.listen(3001, () => console.log('Server started on port 3001'));
