const router = require("express").Router();
const apiRoutes = require("./api");
const creds = require('../config/config');
const nodemailer = require('nodemailer')
const contactFormRoutes = require("./contactForm");

// API Routes
router.use("/api", apiRoutes);
router.use("/contactForm/send", contactFormRoutes)
  
  // const transport = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   // tls: {
  //   //    ciphers:'SSLv3'
  //   // },
  //   // service: "Hotmail",
  //   auth: {
  //       user: creds.USER,
  //       pass: creds.PASS
  //     }
  //   }

  // )
  
  // transport.verify((error, success) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Server is ready to take messages');
  //   }
  // });

  // router.post('/send', (req, res, next) => {
  //   const FullName = req.body.FullName
  //   const Email = req.body.Email
  //   const CustomerMessage = req.body.CustomerMessage
  //   const PhoneNumber = req.body.PhoneNumber
  //   const content = `name: ${FullName} \n phone: ${PhoneNumber} \n email: ${Email} \n message: ${CustomerMessage} `
  
  //   const mail = {
  //     from: FullName,
  //     to: creds.OUTGOING,
  //     subject: 'New Message from your website contact form',
  //     text: content
  //   }
  
  //   transport.sendMail(mail, (err, data) => {
  //     if (err) {
  //       res.json({
  //         msg: 'fail'
  //       })
  //     } else {
  //       res.json({
  //         msg: 'success'
  //       })
  //     }
  //   })
  // })

module.exports = router;