import React from 'react';
import './ApplicationSubmit.css'

export const ApplicationSubmit = {
    render () {
        return (
            <div className='applicationSubmitPage'>
                <div className="submitPageHeader">
                    <h1>Thank you for submitting your application</h1>
                </div>
                <div className='submitPageParagraph'>
                    <p>We will review your application and get back to you within 3-5 business days</p>
                </div>
            </div>
        )
    }
}