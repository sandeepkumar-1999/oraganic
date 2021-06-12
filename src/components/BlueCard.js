import './BlueCard.css'
import {Card} from 'react-bootstrap'
import bluecard from '../assets/img/bluecard.png'
function Cards() {
    return (
        <div>
            <Card className="Bluecard">
                <Card.Img variant="top" src={bluecard} />
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