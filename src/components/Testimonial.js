import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Testimonial.css'
import { Container } from 'react-bootstrap'
import Exp from '../assets/img/exp.png'
import Pic from '../assets/img/pic.png'
import Green from '../assets/img/greenleaf.png'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Testimonial() {
    return(
        <div className="testimonial">
            <Container>
                <div>
                    <img className="greenleaf" alt="greenleaf" src={Green}/>
                </div>
                <img alt="exclamation mark" src={Exp}/>
                <Carousel className="test" arrows={false} showDots={true} responsive={responsive}>
                        <div>
                            <img className="icon" src={Pic}/>
                            <p className="TestimonialName">Jane Doe</p>
                            <p className="TestimonialText">Thank you for all the amazing produce and products you deliver each week…you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                        </div>
                        <div>
                            <img className="icon" src={Pic}/>
                            <p className="TestimonialName">Jane Doe</p>
                            <p className="TestimonialText">Thank you for all the amazing produce and products you deliver each week…you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                        </div>
                        <div>
                            <img className="icon" src={Pic}/>
                            <p className="TestimonialName">Jane Doe</p>
                            <p className="TestimonialText">Thank you for all the amazing produce and products you deliver each week…you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                        
                        </div>
                        <div>
                            <img className="icon" src={Pic}/>
                            <p className="TestimonialName">Jane Doe</p>
                            <p className="TestimonialText">Thank you for all the amazing produce and products you deliver each week…you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
                        
                        </div>
                    </Carousel>
                <div className="Subscribe">
                    <p className="SubHeading">Subscribe To Our Newsletter</p>
                    <p className="SubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <input className="SubInput" type="email" placeholder="Enter your email address"/>
                    <label className="SubLabel" for="email">Subscribe</label>
                </div>
            </Container>
        </div>
    )
}

export default Testimonial