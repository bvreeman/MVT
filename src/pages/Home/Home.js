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
                    <div className="col-md-3 col-xs-12">
                        <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                        <h4 className='truckIconHeading'>Truck and Trailer Repair</h4>
                        <p className='serviceDescription'>Full service truck and trailer shop. 2 full time mechanics with a combined 50+ years experience. If you broke it, chances are we can fix it.</p>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                        <h4 className='truckIconHeading'>Truck and Equiipment Wash</h4>
                        <p className='serviceDescription'>Details here</p>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                        <h4 className='truckIconHeading'>Reefer Transportation</h4>
                        <p className='serviceDescription'>From MN to all points in the US. Primarily NJ / GA / FL / CA. 25 late model trucks and 33 late model refrigerated trailers. 24/7 dispatch and customer service.</p>
                    </div>
                    <div className="col-md-3 col-xs-12">
                        <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                        <h4 className='truckIconHeading'>Warehousing</h4>
                        <p className='serviceDescription'>We have a 6,000 sq ft refrigerated warehouse onsite to meet our customers warehousing needs. Lease the entire space or just a few feet for your product.</p>
                    </div>
                </div>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default Home