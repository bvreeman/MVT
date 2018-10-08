import React from 'react';
import './ContactFormSubmit.css'
import logo from '../../images/mvtShadowedLogo.png'
import phone from '../../images/phone.png'

class ContactFormSubmit extends React.PureComponent {
    render () {
        return (
            <div className='ContactFormSubmit'>
                <div className='row'>
                    <div className='col-md-6 col-xs-12 submittedFormDiv'>
                        <div className="contactSubmitHeader">
                            <h1>Thank you for submitting your message</h1>
                        </div>
                        <div className='contactSubmitParagraph'>
                            <p>We will get back to you as soon as possible.</p>
                        </div>
                        <img className='contactSubmitLogo' src={logo} alt="Minnesota Valley Transport, New Ulm, MN"/>
                    </div>
                    <div className='col-md-5 col-xs-12 phoneDiv'>
                        <h3 className='callUsHeading'>You can still give us a <span>Call</span></h3>
                        <h1 className='phoneNumber'>507-354-3276</h1>
                        <img className='phoneIcon' src={phone} alt="Phone Icon"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactFormSubmit;