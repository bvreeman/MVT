const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const nodemailer = require('nodemailer')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const methodOverride = require('method-override');
const path = require('path');

// Define middleware here
app.use('/upload', express.static('upload'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(methodOverride('_method'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use('/static', express.static(path.join(__dirname, "client/build")));
}
// Add routes, both API and view
app.use('/', routes)

// app.post('/', (req, res) => {
//   res.send();
// })

app.post('/api/form', (req, res) => {
  console.log(req.body)
  res.send();
})

// mongoose.Promise = global.Promise;

// // Connect to the Mongo DB
// const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/MVT";
// // const dbUri = process.env.MONGODB_URI || "mongodb://rikkihon:melisandrebran99$@ds231501.mlab.com:31501/users";


// mongoose.connect(dbUri).then(() => console.log('connected to DB!')).catch((err) => console.log(err));
 
// If no API routes are hit, send the React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "/client/public/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});