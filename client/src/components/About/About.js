import React from 'react';
import './About.css'
import logo from '../../images/mvtShadowedLogo.png'
import buildingPic from '../../images/MVTBuilding.jpg'
import danCert from '../../images/minnesota-valley-transport.jpg'
import mtaLogo from '../../images/MTALogo.png'
import smartwayLogo from '../../images/smartway.png'

class About extends React.PureComponent {

    render() {
        return(
            <div className='aboutUsContainer'>
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <img className='buildingPic' src={buildingPic} alt="Minnesota Valley Transport Headquarters"/>
                    </div>
                    <div className='col-md-6 col-xs-12 aboutMVT'>
                        <img className='AboutUsLogo' src={logo} alt="Minnesota Valley Transport, New Ulm, MN"/>
                        <p>Transporting refrigerated goods from A to B should be a worry-free problem for customers, and Minnesota Valley Transport promises to offer that very solution. Putting its customers first is key to their business strategy.</p>
                        <p>Minnesota Valley Transport prides itself in its excellence in service. If an issue were to arise, they work hard to make it right the first time with as little hassle as possible.</p>
                    </div>
                </div>
                <hr />
                <div className='row aboutMVT secondAboutSection'>
                    <div className='col-md-6 col-xs-12 aboutMVT2'>
                        <p>Minnesota Valley Transport has been in business since 1984, and was recently acquired by Dan Forsythe of New Ulm in November of 2015.</p>
                        <p>Dan had been in the trucking industry for over a decade prior to purchasing the company.</p>
                        <p>He feels it is important to participate in and give back to his community. As such, Dan is a member of the local Chamber of Commerce.</p>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <img className='buildingPic' src={danCert} alt="Minnesota Valley Transport Headquarters"/>
                    </div>
                </div>
                <hr/>
                <h2 className='associationsHeading'>Proud members of these great <span>associations</span></h2>
                <div className='row'>
                    <div className='col-md-6 col-xs-12 mtaDiv'>
                        <a href="https://www.mntruck.org/" target="_blank" rel="noopener noreferrer" className='logoLink'>
                            <img className='associationsLogo' src={mtaLogo} alt="Minnesota Trucking Association"/>
                        </a>
                    </div>
                    <div className='col-md-6 col-xs-12 mtaDiv'>
                        <a href="https://www.epa.gov/smartway" target="_blank" rel="noopener noreferrer" className='logoLink'>
                            <img className='associationsLogo' src={smartwayLogo} alt="SmartWay"/>
                        </a>
                    </div>
                </div>
            </div>
            
        )
    }

}

export default About