import {Container,Row,Col} from "react-bootstrap"
import './Landing.css'
import flower from '../assets/img/flower.png'
import logo from '../assets/img/logo.png'

function Landing() {
    return (
        <div>
            <Container className="landing">
                <Row>
                    <Col xs={5}>
                        <p className="smallHeading">Healthy Life With</p>
                        <p className="heading">Natural Organic</p>
                        <p className="smallText">Vegetables are the edible part of a plant that is used in cooking or can be eaten now.</p>
                    </Col>
                    <Col className="image">
                        <img className="logo" alt="logo" src={logo}/>
                        <img className="flower" alt="flower" src={flower}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing