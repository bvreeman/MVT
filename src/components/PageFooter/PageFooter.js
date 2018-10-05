import React from 'react';
import './PageFooter.css';
import { Col, Container, Row, Footer } from 'mdbreact';

class PageFooter extends React.PureComponent {
    render(){
        return(
            <Footer color="unique-color-dark" className="page-footer font-small pt-0">
                <div style={{backgroundColor: '#9c182f'}}>
                    <Container>
                        <Row className="socialItems py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h5 className="mb-0 white-text">Get connected with us on Facebook!</h5>
                            </Col>
                            <Col md="6" lg="7" className="text-center text-md-right">
                                <a className="fb-ic ml-0" rel="noopener noreferrer" href="https://www.facebook.com/mnvalleytransport/" target="_blank" style={{color: '#ffffff'}}><i className="fa fa-facebook white-text mr-lg-4"></i></a>
                                {/* <a className="tw-ic"><i className="fa fa-twitter white-text mr-lg-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin white-text mr-lg-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Minnesota Valley Transport</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.</p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Products</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="#!">MDBootstrap</a></p>
                            <p><a href="#!">MDWordPress</a></p>
                            <p><a href="#!">BrandFlow</a></p>
                            <p><a href="#!">Bootstrap Angular</a></p>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Affiliate</a></p>
                            <p><a href="#!">Shipping Rates</a></p>
                            <p><a href="#!">Help</a></p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-home mr-3"></i> New Ulm, MN 56073, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> dan@mnvalleytransport.com</p>
                            <p><i className="fa fa-phone mr-3"></i> (507) 354-3276</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: Minnesota Valley Transport, Inc. Web Design by <a href="www.vreemanconsulting.com"> Vreeman Consulting, LLC </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}
    
export default PageFooter;