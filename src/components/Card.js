import './Card.css'
import {Card} from 'react-bootstrap'
import card from '../assets/img/card.png'
function Cards() {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={card} />
                <Card.Body>
                    <Card.Title>Organic Food</Card.Title>
                    <Card.Text className="cardText">
                    Lorem ipsum dolor sit amet, consectetur
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards