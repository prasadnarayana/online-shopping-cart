var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

// mongoose-unique-validator is a plugin which adds pre-save validation for unique fields within a Mongoose schema. This makes error handling much easier, since you will get a Mongoose validation error when you attempt to violate a unique constraint
var uniqueValidator = require("mongoose-unique-validator");

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.plugin(uniqueValidator);

var User = module.exports = mongoose.model("User", userSchema);

// Find the user by ID
module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

// To register the user
module.exports.signupUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;

        bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
            if (err) throw err;
            newUser.password = hashedPassword;
            newUser.save(callback);
        });
    });
};

// Compare Password
module.exports.comparePassword = (password, hashedPassword, callback) => {
    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}