const router = require("express").Router();
// const applicationRoute = require("./DriversApplication");
// const contactUsRoute = require('./')
const path = require("path");

// Article routes
// router.use("/DriversApplication", applicationRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });  

module.exports = router;