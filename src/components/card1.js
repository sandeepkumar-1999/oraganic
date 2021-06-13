import './card1.css'
import {Card} from 'react-bootstrap'
function Card1(props) {
    return (
        <div>
            <Card className="BlogCard">
                <Card.Img className="CardImg" variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title className="blogCardHeading">Blog Post One</Card.Title>
                    <Card.Text className="card1Text">
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod.</p>
                    <p className="Read">Read More</p>
                    <p className="BlogBorder"></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card1