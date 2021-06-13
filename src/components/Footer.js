import {Container,Row,Col} from "react-bootstrap"
import './Footer.css'
import white from '../assets/img/white.png'
import insta from '../assets/img/insta.png'
import linkedln from '../assets/img/linkedln.png'
import fb from '../assets/img/fb.png'


function Footer() {
    return (
        <div className="footer">
          <Container fluid>
                <Row>
                    <Col className="footerLogo footerCol">
                        <img className="white" alt="white" src={white}/>
                        <p className="text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                        <p className="Copyright">Copyright 2020 Nature</p>
                    </Col>
                    <Col className="info footerCol">
                        <p className="infoHeading">Information</p>
                        <Row className="about">
                            <Col>About Us</Col>
                            <Col>About Us</Col>
                        </Row>
                        <Row className="Pro">
                            <Col>Products</Col>
                            <Col>Products</Col>
                        </Row>
                        <Row className="contact">
                            <Col>Contact Us</Col>
                            <Col></Col>
                        </Row>
                        <Row className="terms">
                            <Col>Terms of Service</Col>
                            <Col></Col>
                        </Row>
                    </Col> 
                    <Col className="footerCol">
                        
                    <p Follow className="follow">Follow Us</p>  

                        <img className="insta" alt="insta" src={insta}/>
                        <img className="linkedln" alt="linkedln" src={linkedln}/>
                        <img className="fb" alt="fb" src={fb}/>
                    </Col>
                </Row>
            </Container>

            
            
        </div>
    )

    
} 
export default Footer