var express = require('express');
var router = express.Router();
var passport = require("passport");
var jwt = require("jsonwebtoken");
var config = require("../config/database");

var Product = require("../models/product");
var User = require("../models/user");

/**
 * @Api to get all the products in the database.
 */
router.get('/get-all-products', function(req, res) {
  Product.find(function (error, products) {
    if (error) {
      res.send({
        success: false,
        err: error
      });
    } else {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0 ; i < products.length ; i += chunkSize) {
        productChunks.push(products.slice(i, i + chunkSize));
      }
      res.send({
        success: true,
        data: productChunks
      });
    }
  });
});

/**
 * @Api to register user.
 */
router.post("/user/signup", (req, res) => {
  var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  });

  User.signupUser(newUser, (err, user) => {
    console.log(req.body);
    if (err) {
      var message = "";
        if (err.errors.email) message = "Email is already taken.";
        return res.json({
            success: false,
            message
        });
    } else {
        return res.json({
            success: true,
            message: "User registration is successful"
        });
    }
  });
});

module.exports = router;
