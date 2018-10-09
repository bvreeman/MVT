import React from 'react';
import './DriversApplication.css';

// Components
import ApplicationForm from '../../components/ApplicationForm';

class DriversApplication extends React.PureComponent {
    render() {
        return (
            <div className="container">
                <ApplicationForm />
            </div>
        )
    }
}

export default DriversApplication