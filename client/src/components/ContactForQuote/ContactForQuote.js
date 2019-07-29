import React from 'react';
import './ContactForQuote.css';
import ContactFormSubmit from '../../components/ContactFormSubmit';
// import ReCAPTCHAComponent from '../../components/ReCAPTCHAComponent';
// import axios from 'axios';
import firebase from 'firebase/app';
import "firebase/database";

import phone from '../../images/phone.png'
// import { networkInterfaces } from 'os';

const url = 'https://m1gyqaigyk.execute-api.us-west-2.amazonaws.com/dev/email/send'
// const form = document.getElementById('contact-form')
const toast = document.getElementById('toast')
// const submit = document.getElementById('submit')

class ContactForQuote extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            PhoneNumber: '',
            Email: '',
            CustomerMessage: '',
            // reCAPTCHAvalue: false,
            submitted: false,
            toast
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {    
        this.setState({ [e.target.name]: e.target.value });
    }

    handleReCAPTCHAchange = (response) =>{
        console.log('is there a response', response)
        console.log('before', this.state.reCAPTCHAvalue)
        this.setState( this.state.reCAPTCHAvalue === true )
        console.log('after', this.state.reCAPTCHAvalue)
    }

    databasePush = () => {
        let str = this.state.FullName.replace(/\s/g, '')
        let itemsRef = firebase.database().ref(`${str}ContactForm/`)
        itemsRef.push(this.state);
    }

    serverlessEmailError = (err) => {
        let that = this;
        that.setState({
            toast: 'There was an error with your message. \nMake sure to check that your email address is correct. \nPlease contact us at 507-354-3276 in the meantime'
        })
        console.log(err)
    }

    serverlessEmailSuccess = () => {
        let that = this;
        that.setState({
            toast: 'Thanks for contacting us. \nSomeone will be with you in the next 24-48 hours.',
            FullName: '',
            Email: '',
            PhoneNumber: '',
            CustomerMessage: ''
        })
    }

    serverlessEmailSend = (url, body, callback) => {
        let req = new XMLHttpRequest();
        req.open("POST", url, true);
        req.setRequestHeader("Content-Type", "application/json");
        req.addEventListener("load", function () {
            if (req.status < 400) {
              callback(null, JSON.parse(req.responseText));
            } else {
              callback(new Error("Request failed: " + req.statusText));
            }
          });
          req.send(JSON.stringify(body));
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const FullName = document.getElementById('FullName').value;
        const PhoneNumber = document.getElementById('PhoneNumber').value;
        const Email = document.getElementById('Email').value;
        const CustomerMessage = document.getElementById('CustomerMessage').value;
        if (this.state.FullName !== '' && this.state.Email !== '' && this.state.CustomerMessage !== ''){
            const payload = {
                FullName: FullName,
                Email: Email,
                PhoneNumber: PhoneNumber,
                CustomerMessage: CustomerMessage
            }
            this.serverlessEmailSend(url, payload, ((err, res) => {
                if (err) { 
                    return this.serverlessEmailError(err) 
                } else {
                    // this.databasePush();
                    this.serverlessEmailSuccess();
                }
            }))
            // )
            // }).then(() => {
            // })
            // axios({
            //     method: 'POST',
            //     url: '/contactForm/send',
            //     data: {
            //         FullName,
            //         PhoneNumber,
            //         Email,
            //         CustomerMessage
            //     }
            // }).then( 
            //    (response) => {
            //        console.log('this is the response', response)
            //    } ,
            //    (error) => {
            //        console.log('this is the error', error)
            //    }
            // ).then(() => {
            //     this.setState({submitted: true });
            //     this.databasePush();
            // })
        } else {
            alert('Please fill out the remaining required fields')
        }
    }

    render() {
        if (this.state.submitted) {
            return <ContactFormSubmit/>;
        }
        else {
            return(
                <div className='contactForQuote'>
                    <h3 className='contactForQuoteHeading'><span>Contact Us</span> for a Quote</h3>
                    <div className='row'>
                        <form id="contact-form" className='contactForm col-md-5 col-xs-12' onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className='col-md-12 col-xs-12 contactUsForm'>
                                <div className="form-group">
                                    <input required type="text" onChange={this.handleChange} className="form-control" value={this.state.FullName} name="FullName" id="FullName" placeholder="Full Name (required)" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={this.handleChange} className="form-control" value={this.state.PhoneNumber} name='PhoneNumber' id="PhoneNumber" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                <input required type='email' onChange={this.handleChange} className="form-control" value={this.state.Email} name='Email' id="Email" placeholder="Email (required)" />
                                </div>
                                <div className="form-group">
                                <textarea required rows="4"  onChange={this.handleChange} className="form-control" value={this.state.CustomerMessage} name='CustomerMessage' id="CustomerMessage" placeholder="Message (required)" />
                                </div>
                                {<p id='toast'>{this.state.toast}</p>}
                                <input id='submit' type='submit' className='contactSubmitButton' onClick={this.handleSubmit} value='Submit' />
                            </div>
                        </form>
                        {/* <form id="contact-form" className='contactForm col-md-5 col-xs-12'  action="https://formspree.io/bvreeman@gmail.com" method="POST">
                            <div className='col-md-12 col-xs-12 contactUsForm'>
                                <div className="form-group">
                                    <input required type="text" onChange={this.handleChange} className="form-control" value={this.state.FullName} name="FullName" id="FullName" placeholder="Full Name (required)" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={this.handleChange} className="form-control" value={this.state.PhoneNumber} name='PhoneNumber' id="PhoneNumber" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                <input required type='text' onChange={this.handleChange} className="form-control" value={this.state.Email} name='Email' id="Email" placeholder="Email (required)" />
                                </div>
                                <div className="form-group">
                                <textarea required rows="4"  onChange={this.handleChange} className="form-control" value={this.state.CustomerMessage} name='CustomerMessage' id="CustomerMessage" placeholder="Message (required)" />
                                </div> */}
                                {/* <input type='submit' className='contactSubmitButton' value='Send' />
                            </div>
                        </form> */}
                        <div className='col-md-1 col-xs-12'>
                            <h2 className='Or'>Or</h2>
                        </div>
                        <div className='col-md-5 col-xs-12 phoneDiv'>
                            <h3 className='callUsHeading'>Give us a <span>Call</span></h3>
                            <h1 className='phoneNumber'>507-354-3276</h1>
                            <img className='phoneIcon' src={phone} alt="Phone Icon"/>
                        </div>
                    </div>
                </div>
                
            )
        }
    }

}

export default ContactForQuote