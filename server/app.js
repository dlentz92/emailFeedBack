const express = require('express');
const authRoutes = require("./routes/authRoutes")
const mongoose = require("mongoose")
const app = express();

require("./services/passport");
require("./routes/authRoutes")(app);
require("./models/user")

mongoose.connect(keys.mongoURI)
const keys = require("./config/keys")


const PORT = process.env.PORT || 5000;
app.listen(PORT)