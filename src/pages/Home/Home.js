import React from 'react';
import './Home.css';
import nightTruck from './bigger-night-truck.jpg'

// Components
// import About from '../../components/About';
// import Carousel from '../../components/Carousel';
// import Draggable from '../../components/Draggable';
// import withAuthorization from '../../components/FirebaseWithAuthorization'
class Home extends React.PureComponent {
    render() {
        return (
            <div className="container-fluid homePage">
                <div className="container-fluid mainPhotoDiv">
                    <img className='mainPhoto' src={nightTruck} alt="One of our trucks at night"/>
                </div>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default Home