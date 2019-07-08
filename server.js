const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contactForm");
const applicationRoutes = require('./routes/applicationRoute')
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const compression = require('compression');

// Define middleware here
app.use('/upload', express.static('upload'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(compression());
// app.use(methodOverride('_method'));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  console.log('we are in production')
  app.use(express.static(path.join(__dirname, "client/build")));
}
// Add routes, both API and view
app.use("/", contactRoutes)
app.use('/', applicationRoutes)

app.post('/contactForm/send', (req, res) => {
  console.log('does this happen?', req.body)
  res.send();
})

app.post('/applicationRoute/send', (req, res) => {
  // console.log('does this happen application route?', req.body)
  res.send();
})
 
// If no API routes are hit, send the React app
// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
// // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     if (err) {
//       console.log('error', err)
//       res.status(500).send(err)
//   }
//   });
// }

app.get('*', (req, res) => {
  console.log('hitting this?')
  res.sendFile(path.join(__dirname, "/client/build"));
  if (err) {
    console.log('error', err)
    res.status(500).send(err)
  }
});

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});