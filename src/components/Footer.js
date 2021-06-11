import {Container,Row,Col} from "react-bootstrap"
import './Footer.css'
import white from '../assets/img/white.png'
function Footer() {
    return (
        <div className="footer">
          <Container fluid>
                <Row>
                    <Col className="footerLogo footerCol">
                        <img className="white" alt="white" src={white}/>
                        <p className="text">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
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
                        <p>Follow Us</p>  
                    </Col>
                </Row>
            </Container>

            
            
        </div>
    )

    
} 
export default Footer