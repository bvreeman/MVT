const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

const transport = {
    host:'smtp.gmail.com',
    auth: {
      user: `${process.env.REACT_APP_USER}`,
      pass: `${process.env.REACT_APP_PASS}`    
      // user: 'testingmvt12345678',
      // pass: 'testmvt12345678'
    }
  }
  
  const transporter = nodemailer.createTransport(transport)
  
  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

module.exports = router;