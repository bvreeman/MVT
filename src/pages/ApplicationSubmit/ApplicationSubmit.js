import React from 'react';
import './ApplicationSubmit.css'
import logo from '../../images/mvtShadowedLogo.png'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class ApplicationSubmit extends React.PureComponent {
    render () {
        return (
            <div className='applicationSubmitPage'>
                    <div className="submitPageHeader">
                        <h1>Thank you for submitting your application</h1>
                    </div>
                    <div className='submitPageParagraph'>
                        <p>We will review your application and get back to you within 3-5 business days</p>
                    </div>
                    <img className='submitPageLogo' src={logo} alt="Minnesota Valley Transport, New Ulm, MN"/>
            </div>
        )
    }
}

export default ApplicationSubmit;