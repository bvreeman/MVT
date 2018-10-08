import React from 'react';
import './About.css'
// import logo from '../../images/mvtShadowedLogo.png'
import buildingPic from '../../images/MVTBuilding.jpg'
import danCert from '../../images/minnesota-valley-transport.jpg'
import mtaLogo from '../../images/MTALogo.png'
import smartwayLogo from '../../images/smartway.png'

class About extends React.PureComponent {

    render() {
        return(
            <div className='aboutUsContainer'>
                {/* <div>
                    <img className='AboutUsLogo' src={logo} alt="Minnesota Valley Transport, New Ulm, MN"/>
                </div> */}
                <div className='row'>
                    <div className='col-md-6 col-xs-12'>
                        <img className='buildingPic' src={buildingPic} alt="Minnesota Valley Transport Headquarters"/>
                    </div>
                    <div className='col-md-6 col-xs-12 aboutMVT'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fuga fugit ratione, quidem id, et ut quod nihil pariatur, illo harum! Suscipit quisquam quod ratione voluptate incidunt inventore, natus excepturi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos officia quaerat eaque consectetur eum eius dolorum perspiciatis porro atque sed dolorem quia, eveniet, voluptas nihil illo? Nam, veniam perspiciatis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis rerum, consequatur voluptatum quibusdam rem, odit qui fugiat deleniti maxime dignissimos quaerat, libero reiciendis nemo quo nisi! Perspiciatis, quasi odio. Veritatis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi officia ab laboriosam magnam nobis atque excepturi sapiente voluptate unde, illo, cum corrupti impedit dolores. Rerum nesciunt ducimus veritatis molestias.</p>
                    </div>
                </div>
                <hr />
                <div className='row secondAboutSection'>
                    <div className='col-md-6 col-xs-12 aboutMVT2'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum fuga fugit ratione, quidem id, et ut quod nihil pariatur, illo harum! Suscipit quisquam quod ratione voluptate incidunt inventore, natus excepturi?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eos officia quaerat eaque consectetur eum eius dolorum perspiciatis porro atque sed dolorem quia, eveniet, voluptas nihil illo? Nam, veniam perspiciatis?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis rerum, consequatur voluptatum quibusdam rem, odit qui fugiat deleniti maxime dignissimos quaerat, libero reiciendis nemo quo nisi! Perspiciatis, quasi odio. Veritatis!</p>
                    </div>
                    <div className='col-md-6 col-xs-12'>
                        <img className='buildingPic' src={danCert} alt="Minnesota Valley Transport Headquarters"/>
                    </div>
                </div>
                <hr/>
                <h2 className='associationsHeading'>Proud members of these great <span>associations</span></h2>
                <div className='row'>
                    <div className='col-md-6 col-xs-12 mtaDiv'>
                        <img className='associationsLogo' src={mtaLogo} alt="Minnesota Trucking Association"/>
                    </div>
                    <div className='col-md-6 col-xs-12 mtaDiv'>
                        <img className='associationsLogo' src={smartwayLogo} alt="SmartWay"/>
                    </div>
                </div>
            </div>
            
        )
    }

}

export default About