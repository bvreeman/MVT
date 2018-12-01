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
                    <Row className="mt-3 footerText">
                        <Col md="4" lg="4" xl="4" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Minnesota Valley Transport</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p>We get things done right, the first time, with little hassle.</p>
                        </Col>
                        <Col md="4" lg="4" xl="4" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Affiliations</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p><a href="https://www.mntruck.org/" target="_blank" rel="noopener noreferrer">Minnesota Trucking Association</a></p>
                            <p><a href="https://www.epa.gov/smartway" target="_blank" rel="noopener noreferrer">SmartWay</a></p>
                        </Col>
                        {/* <Col md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p><a href="#!">Your Account</a></p>
                            <p><a href="#!">Become an Affiliate</a></p>
                            <p><a href="#!">Shipping Rates</a></p>
                            <p><a href="#!">Help</a></p>
                        </Col> */}
                        <Col md="4" lg="4" xl="4" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
                            <p><i className="fa fa-home mr-3"></i> New Ulm, MN 56073, US</p>
                            <p><i className="fa fa-envelope mr-3"></i> dan@mnvalleytransport.com</p>
                            <p><i className="fa fa-phone mr-3"></i> (507) 354-3276</p>
                            <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=Pj1CLx7KuJS7boL6MMfjUntUgiriEvHw10OhJzT1hDhymy9UAk8vTRddRvXB"></script></span>
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