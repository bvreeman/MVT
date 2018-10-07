import React from 'react';
import './Home.css';
import nightTruck from './bigger-night-truck.jpg'
// import truckIconRight from './truckFacingRight.png'
import truckIconRight from '../../images/truckFacingRight.png'
import locationPNG from '../../images/location.png'
import bestPNG from '../../images/best.png'
import timePNG from '../../images/time.png'
import truckPNG from '../../images/truck.png'


class Home extends React.PureComponent {
    render() {
        return (
            <div className="homePage">
                <div className="container-fluid mainPhotoDiv">
                    <img className='mainPhoto' src={nightTruck} alt="One of our trucks at night"/>
                </div>
                <h3 className='homePageServices'><span>Services</span> We Provide</h3>
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
                <hr/>
                <h3 className='choosingMVTh3'>Why Choose <span>MVT?</span></h3>
            <div className="row">
                <div className="col-md-3 col-xs-12">
                    <img className='whyChooseIcon' src={locationPNG} alt="Location Services"/>
                    <h4 className='whyChooseHeading'>Real Time Tracking</h4>
                    <p className='serviceDescription'>Real time tractor and trailer tracking technology with live trailer temp readings.</p>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img className='whyChooseIcon' src={bestPNG} alt="Best in Service"/>
                    <h4 className='whyChooseHeading'>Best in Service</h4>
                    <p className='serviceDescription'>Second to none customer service and driver professionalism.</p>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img className='whyChooseIcon' src={timePNG} alt="On Time"/>
                    <h4 className='whyChooseHeading'>On Time</h4>
                    <p className='serviceDescription'>Reliable, honest, proactive and forward thinking company. We deliver on-time every time while maintaining a spotless safety record.</p>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img className='whyChooseIcon' src={truckPNG} alt="New Equipment"/>
                    <h4 className='whyChooseHeading'>Late Model Equipment</h4>
                    <p className='serviceDescription'>Late model equipment, trucks and trailers average 1.5 yrs old.</p>
                </div>
            </div>
        </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default Home