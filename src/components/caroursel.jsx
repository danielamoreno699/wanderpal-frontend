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
            <h3>Explore Exotic Destinations</h3>
            <p>Embark on a journey to breathtaking landscapes and immerse yourself in new cultures.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img 
                src={london}
              alt="Second slide"
              className="d-block w-100"
            />
            <Carousel.Caption>
            <h3>Unforgettable Adventures Await</h3>
            <p>Experience thrilling activities and create lasting memories with our guided tours.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img 
                src={tokyo}
              alt="Third slide" 
              className="d-block w-100"
            />
            <Carousel.Caption>
            <h3>Discover Hidden Gems</h3>
            <p>From serene beaches to ancient ruins, let us take you to the worlds best-kept secrets.</p>
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
