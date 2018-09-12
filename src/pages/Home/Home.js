import React from 'react';
import './Home.css';
import nightTruck from './bigger-night-truck.jpg'
import truckIconRight from './truckFacingRight.png'

// Components
// import About from '../../components/About';
// import Carousel from '../../components/Carousel';
// import Draggable from '../../components/Draggable';
// import withAuthorization from '../../components/FirebaseWithAuthorization'
class Home extends React.PureComponent {
    render() {
        return (
            <div className="homePage">
                <div className="container-fluid mainPhotoDiv">
                    <img className='mainPhoto' src={nightTruck} alt="One of our trucks at night"/>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xs-12">
                        <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                        <h4 className='truckIconHeading'>Truck and Trailer Repair</h4>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                        <h4 className='truckIconHeading'>Refrigerated</h4>
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                        <h4 className='truckIconHeading'>Truck and Equipment Wash</h4>
                    </div>
                </div>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default Home