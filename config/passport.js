/**
 * A Passport strategy for authenticating with a JSON Web Token.
 * This module lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.
 */
const JwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const config = require("./database");

// To authenticate the user by JWT Strategy
module.exports = (passport) => {
    let opts = {};
    opts.jwtFromRequest = extractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload.data.id, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            return done(null, false);
        });
    }));
}