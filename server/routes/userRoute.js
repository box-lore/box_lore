const express = require("express");
const router = express.Router();
// const UserData = require("../models/userModel");
// Move userModel.js over Here
const mongoose = require("mongoose");

const userSchema = {
    username: String,
    age: String,
    password: String,
    securityquestion: String
}

const UserData = mongoose.model("UserData", userSchema)

// 
router.route("/user").post((req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const password = req.body.password;
    const securityquestion = req.body.securityquestion;

    const userData = new UserData({
        username,
        age,
        password,
        securityquestion
    })

    userData.save((err, savedData) => {
        if (err) {
          console.log(err);
          res.status(500).send("Failed to save user data");
        } else {
          console.log(savedData);
          res.status(200).send("User data saved successfully");
        }
    });
});

router.route("/box-lore").get((req,res) => {
    UserData.find()
             .then(foundUser => res.json(foundUser))
})

module.exports = router;
