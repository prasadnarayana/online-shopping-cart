var express = require('express');
var router = express.Router();
var passport = require("passport");
var jwt = require("jsonwebtoken");
var config = require("../config/database");

var User = require("../models/user");

/**
 * @Api to register user.
 */
router.post("/signup", (req, res) => {
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

/**
 * @Api to signin the user
 */
router.post("/signin", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({
                success: false,
                message: "User does not exists"
            });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(
                    {
                        data: {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                        }
                    }, config.secret, {
                        expiresIn: 604800 // for 1 week time in milliseconds
                    }
                );

                return res.json({
                    success: true,
                    token: "JWT " + token
                });
            } else {
                return res.json({
                    success: false,
                    message: "Wrong Passwrod"
                });
            }
        });
    });
});

/**
 * @Api to get authenticated user profiel
 */
router.get("/profile", passport.authenticate("jwt", { session: false }), (req, res) => {
    return res.json(req.user);
});

module.exports = router;