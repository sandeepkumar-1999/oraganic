import {Container} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css'
import Car1 from '../assets/img/car1.png'
import Car2 from '../assets/img/car2.png'
import Car3 from '../assets/img/car3.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Car() {
    return (
        <div>
            <Container fluid className="carousel">
                <p className="CarouselHeading">Proudly presented by</p>
                <p className="CarouselText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Carousel arrows={false} showDots={true} responsive={responsive}>
                        <div><img src={Car1}/></div>
                        <div><img src={Car2}/></div>
                        <div><img src={Car3}/></div>
                        <div><img src={Car1}/></div>
                        <div><img src={Car2}/></div>
                        <div><img src={Car1}/></div>
                        <div><img src={Car2}/></div>
                        <div><img src={Car3}/></div>
                    </Carousel>
            </Container>
        </div>
    )
}

export default Car