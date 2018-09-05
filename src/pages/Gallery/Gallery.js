import React from 'react';
import './Gallery.css';
// Components
import GalleryComponent from '../../components/GalleryComponent';
// import Carousel from '../../components/Carousel';
// import Draggable from '../../components/Draggable';
// import withAuthorization from '../../components/FirebaseWithAuthorization'
class Gallery extends React.PureComponent {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <GalleryComponent />
                </div>
            </div>
        )
    }
}
// const authCondition = (authUser) => !!authUser;
// export default withAuthorization(authCondition)(Home);
export default Gallery