import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
import { fetchItems, selectedItem } from '../redux/itemsSlice';

import { useAuth } from '../context/AuthProvider';

import CarouselSlide from './caroursel';
import Banner from './banner';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/Home.css';

const Home = () => {
  const { isLoggedIn } = useAuth();
 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items, status } = useSelector((state) => state.items);

  useEffect(() => {
    if (status === 'idle' && items.length === 0) {
      dispatch(fetchItems());
    }
  }, [status, dispatch, items]);

  const onHandleSelect = (id) => {
    dispatch(selectedItem(id));
    navigate(`/items/${id}`);
  }
  
  return (
    <>
      <div className='flex-basis'>
        {isLoggedIn ? (
          <div className='cards-home'>
            <h2 className='home-h2'>Our Tours</h2>
            <hr className='hr-home' />
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 4,
                },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index} className='swiper-slide'>
                  <Card className='card-item'>
                    <Card.Img variant='top' src={item.image} className='card-img-item' alt='img' />
                    <Card.Body>
                      <Card.Title className='card-title-item'>{item.name}</Card.Title>
                      <Card.Text className='card-item-price'>{item.price}$</Card.Text>
                      <div className='card-btns'>
                        <Button
                          variant='primary'
                          onClick={() => onHandleSelect(item.id)}
                          disabled={!isLoggedIn}
                        >
                          Go to details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        ) : (
          <>
            <CarouselSlide />
            <Banner />
          </>
        )}
      </div>
    </>
  );
};


export default Home;
