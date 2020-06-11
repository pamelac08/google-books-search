const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const PORT =  3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

// Connect to the Mongo DB
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds111050.mlab.com:11050/heroku_5k9n0385");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});