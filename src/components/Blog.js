import './blog.css'
import {Container,Row,Col} from 'react-bootstrap'
import leaf from '../assets/img/leaf.png'
import Card1 from './card1'
import b1 from '../assets/img/b1.jpeg'
import b2 from '../assets/img/b2.jpeg'
import b3 from '../assets/img/b3.jpeg'


function Blog() {
    return (
        <div>
            <Container>
            <img className="leaf" alt="leaf" src={leaf}/>
            <p className="blogHeading">Read Our Blog</p>
            <p className="blogText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Row>
                <Col>
                    <Card1 img={b1}/>
                </Col>
                <Col>
                    <Card1 img={b2}/>
                </Col>
                <Col>
                    <Card1 img={b3}/>
                </Col>
                    </Row>       
            </Container>    
        </div>

    )
}

export default Blog
