const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose")
const keys = require('../config/keys');

const User = mongoose.model("users");

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    // ALREADY HAVE A RECORD WITH EXISTING PROFILE ID
                    // DO NOT MAKE NEW RECORD
                    done(null, existingUser)
                } else {
                    // MAKE A NEW RECORD
                    new User({ googleId: profile.id })
                    .save()
                    .then(user> done(null, user))
                }
            })


        console.log("access token", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile", profile);
        console.log("done", done)
    }
)); 