import React from 'react';
import './DriversApplication.css';


// Components
// import About from '../../components/About';
// import Carousel from '../../components/Carousel';
// import Draggable from '../../components/Draggable';
// import withAuthorization from '../../components/FirebaseWithAuthorization'
class DriversApplication extends React.PureComponent {
    render() {
        return (
            <div>
                <div>
                    {/* <Carousel /> */}
                </div>
                <div className="container">
                    {/* <About /> */}
                    <p>DriversApplication Page</p>
                </div>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default DriversApplication