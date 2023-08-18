import { Carousel } from 'react-bootstrap';
import '../styles/Carousel.css';

import dubai from '../assets/carousel/dubai.jpg';
import tokyo from '../assets/carousel/tokyo.jpg';
import london from '../assets/carousel/london.jpg';


const CarouselSlide = () => {
  return (
    <section className="carousel-s">
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item interval={3000}>
            <img 
              src={dubai}
              alt="First slide" 
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img 
                src={london}
              alt="Second slide"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
                src={tokyo}
              alt="Third slide" 
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='trip-banner'>

      </div>
    </section>

   
  );
}

export default CarouselSlide;
