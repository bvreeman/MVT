import React from 'react';
import './ContactUsPage.css'
import ContactForQuote from '../../components/ContactForQuote'

class ContactUsPage extends React.PureComponent {
    render () {
        return (
            <div className='contactUsPage'>
                <ContactForQuote />
            </div>
        )
    }
}

export default ContactUsPage;