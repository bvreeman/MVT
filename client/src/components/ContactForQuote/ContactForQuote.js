import React from 'react';
import './ContactForQuote.css';
import ContactFormSubmit from '../../components/ContactFormSubmit';
// import ReCAPTCHAComponent from '../../components/ReCAPTCHAComponent';
import firebase from 'firebase/app';
import "firebase/database";
// import axios from 'axios';

import phone from '../../images/phone.png'
// import { networkInterfaces } from 'os';


class ContactForQuote extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            FullName: '',
            PhoneNumber: '',
            Email: '',
            CustomerMessage: '',
            reCAPTCHAvalue: false,
            date: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {    
        this.setState({ [e.target.name]: e.target.value });
    }

    handleReCAPTCHAchange = () =>{
        console.log('before', this.state.reCAPTCHAvalue)
        this.setState( this.state.reCAPTCHAvalue === true )
        console.log('after', this.state.reCAPTCHAvalue)
    }

    getTheDate = () => {
        var x = new Date();
        var y = x.getFullYear().toString();
        var m = (x.getMonth() + 1).toString();
        var d = x.getDate().toString();
        (d.length === 1) && (d = '0' + d);
        (m.length === 1) && (m = '0' + m);
        var formattedDate = `Sent on ${m}-${d}-${y}`;
        return formattedDate;
    }

    databasePush = () => {
        let fullName = this.state.FullName.split(' ').join('')
        let itemsRef = firebase.database().ref(`ContactUsMessageFrom${fullName}/`)
        // console.log(this.state);
        
        let submittedContactUsData = {
            data: this.state,
            date: this.getTheDate()
        }
        itemsRef.push(submittedContactUsData);
    }

    async handleSubmit(e) {
        e.preventDefault()

        // const { FullName, PhoneNumber, Email, CustomerMessage } = this.state
        // const form = await axios.post('/api/form', {
        //     FullName,
        //     PhoneNumber,
        //     Email,
        //     CustomerMessage
        // })
        if ( this.state.FullName !== '' && this.state.Email !== '' && this.state.CustomerMessage !== '' && this.state.reCAPTCHAvalue === true) {
            this.databasePush();
            this.setState({'submitted': true });
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
                        <div className='col-md-5 col-xs-12 form-group contactUsForm'>
                            <input required type="text" onChange={this.handleChange} className="form-control" value={this.state.FullName} name="FullName" placeholder="Full Name (required)" />
                            <input type="text" onChange={this.handleChange} className="form-control" value={this.state.PhoneNumber} name="PhoneNumber" placeholder="Phone Number" />
                            <input required type='text' onChange={this.handleChange} className="form-control" value={this.state.Email} name="Email" placeholder="Email (required)" />
                            <textarea required rows="4"  onChange={this.handleChange} className="form-control" value={this.state.CustomerMessage} name="CustomerMessage" placeholder="Message (required)" />
                            <div className='contactFormReCaptcha'>
                                <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_SITEKEY} onChange={this.handleReCAPTCHAchange} ></div>
                                {/* <ReCAPTCHAComponent /> */}
                            </div>
                            <input type='submit' className='contactSubmitButton' onClick={this.handleSubmit} value='Submit' />
                        </div>
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