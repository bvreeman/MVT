import React from 'react';
import './ServicesProvided.css';
// import truckIconRight from '../../images/truckFacingRight.png'
import truckIconRight from '../../images/truckFacingRight(2).png'
import Zoom from 'react-reveal/Zoom';

class ServicesProvided extends React.PureComponent {
    render() {
        return (
            <div className='servicesProvided'>
                <h3 className='homePageServices'><span>Services</span> We Provide</h3>
                <div className="row">
                    <Zoom>
                        <div className="col-md-4 col-xs-12">
                            <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                            <h4 className='truckIconHeading'>Reefer Transportation</h4>
                            <p className='serviceDescription'>From MN to all points in the US. Primarily NJ / GA / FL / CA. 25 late model trucks and 33 late model refrigerated trailers. 24/7 dispatch and customer service.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="col-md-4 col-xs-12">
                            <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                            <h4 className='truckIconHeading'>Truck and Trailer Repair and Wash</h4>
                            <p className='serviceDescription'>Full service truck and trailer shop capable of anything from a quick trailer washout to diagnostics and preventative maintenance to major engine work. We are here to help you keep your rubber turning down the road.</p>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="col-md-4 col-xs-12">
                            <img className='truckIcon' src={truckIconRight} alt="Truck Icon"/>
                            <h4 className='truckIconHeading'>Warehousing</h4>
                            <p className='serviceDescription'>We have a 6,000 sq ft refrigerated warehouse onsite to meet our customers warehousing needs. Lease the entire space or just a few feet for your product.</p>
                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default ServicesProvided
            