import React from 'react';
import './WhyChooseMVT.css';

import locationPNG from '../../images/location.png'
import bestPNG from '../../images/best.png'
import timePNG from '../../images/time.png'
import truckPNG from '../../images/truck.png'
import Zoom from 'react-reveal/Zoom';

class WhyChooseMVT extends React.PureComponent {
    render() {
        return (
            <div className='whyChooseMVT'>
                <h3 className='choosingMVTh3'>Why Choose <span>MVT?</span></h3>
                <div className="row">
                    <Zoom>
                    <div className="col-md-3 col-xs-12">
                        <img className='whyChooseIcon' src={locationPNG} alt="Location Services"/>
                        <h4 className='whyChooseHeading'>Real Time Tracking</h4>
                        <p className='whyChooseDescription'>Real time tractor and trailer tracking technology with live trailer temp readings.</p>
                    </div>
                    </Zoom>
                    <Zoom>
                    <div className="col-md-3 col-xs-12">
                        <img className='whyChooseIcon' src={bestPNG} alt="Best in Service"/>
                        <h4 className='whyChooseHeading'>Best in Service</h4>
                        <p className='whyChooseDescription'>Second to none customer service and driver professionalism.</p>
                    </div>
                    </Zoom>
                    <Zoom>
                    <div className="col-md-3 col-xs-12">
                        <img className='whyChooseIcon' src={timePNG} alt="On Time"/>
                        <h4 className='whyChooseHeading'>On Time</h4>
                        <p className='whyChooseDescription'>Reliable, honest, proactive and forward thinking company. We deliver on-time every time while maintaining a spotless safety record.</p>
                    </div>
                    </Zoom>
                    <Zoom>
                    <div className="col-md-3 col-xs-12">
                        <img className='whyChooseIcon' src={truckPNG} alt="New Equipment"/>
                        <h4 className='whyChooseHeading'>Late Model Equipment</h4>
                        <p className='whyChooseDescription'>Late model equipment, trucks and trailers average 1.5 yrs old.</p>
                    </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}

export default WhyChooseMVT