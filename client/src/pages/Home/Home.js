import React from 'react';
import './Home.css';
import ServicesProvided from '../../components/ServicesProvided'
import WhyChooseMVT from '../../components/WhyChooseMVT';
import ContactForQuote from '../../components/ContactForQuote';

// import nightTruck from './bigger-night-truck.jpg'
import nightTruck2 from './nightTruckHeader.jpg'

class Home extends React.PureComponent {
    render() {
        return (
            <div className="homePage">
                <div className="container-fluid mainPhotoDiv">
                    <img className='mainPhoto' src={nightTruck2} alt="One of our trucks at night"/>
                </div>
                <ServicesProvided />
                <hr/>
                <WhyChooseMVT />
                <hr/>
                <ContactForQuote />
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default Home