const router = require("express").Router();
const apiRoutes = require("./api");
const creds = require('../config/config');
const nodemailer = require('nodemailer')


// API Routes
router.use("/api", apiRoutes);

const transport = {
    host:'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
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

  router.post('/send', (req, res, next) => {
    let FullName = req.body.FullName
    let Email = req.body.Email
    let CustomerMessage = req.body.CustomerMessage
    let PhoneNumber = req.body.PhoneNumber
    const content = `name: ${FullName} \n phone: ${PhoneNumber} \n email: ${Email} \n message: ${CustomerMessage} `
  
    const mail = {
      from: Email,
      to: creds.OUTGOING,
      subject: `New Message from ${FullName} from your website contact form`,
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })

module.exports = router;