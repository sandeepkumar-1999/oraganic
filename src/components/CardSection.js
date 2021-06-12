import leaf from '../assets/img/leaf.png'
import {Container,Row,Col} from 'react-bootstrap'
import './CardSection.css'
import Cards from './Card'
import BlueCard from './BlueCard'
function CardSection() {
    return (
        <div >
            <Container fluid className="CardSection">
                <img src={leaf}></img>
                <p className="HeadingNature">Welcome to Nature</p>
                <p className="TextNature">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Row>
                    <Col>
                        <Cards/>
                    </Col>
                    <Col>
                        <Cards/>
                    </Col>
                    <Col>
                        <BlueCard/>
                    </Col>
                    <Col>
                        <Cards/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CardSection