import React from 'react';
import './DriversApplication.css';

// Components
import ApplicationForm from '../../components/ApplicationForm';
// import Carousel from '../../components/Carousel';
// import Draggable from '../../components/Draggable';

class DriversApplication extends React.PureComponent {
    render() {
        return (
            <div className="container">
                <ApplicationForm />
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default DriversApplication