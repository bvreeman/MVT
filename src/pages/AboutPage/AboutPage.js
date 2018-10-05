import React from 'react';
import './AboutPage.css';

// Components
import About from '../../components/About';

class AboutPage extends React.PureComponent {
    render() {
        return (
            <div>
                <div className="aboutPageContainer container">
                    <About />
                </div>
            </div>
        )
    }
}

export default AboutPage