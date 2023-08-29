import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { fetchItems, selectedItem } from '../redux/itemsSlice';
import ModalReservation from './modal';
import { createReservationApi } from '../redux/reservationCreateItemSlice';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthProvider';
import CarouselSlide from '../components/caroursel'
import Banner from '../components/banner'

const Home = () => {

  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [reservationSuccess, setReservationSuccess] = useState(false);


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
    navigate(`/items/${id}`)
  }

  const onHandleReserve = (item) => {
    setSelectedItemName(item);
    setShowModal(true);
  }

  const handleSubmitReservation =  (reservation) => {
    const itemId = selectedItemName.id;
    const { date, city } = reservation;
    const userId = localStorage.getItem('user_id');
   
  

      const response =  dispatch(createReservationApi({ itemId, userId, date, city }));
      
  
      if (response) {
        setReservationSuccess(true);
        Swal.fire({
          icon: 'success',
          title: 'Reservation Successful!',
          text: 'Your reservation has been created successfully.',
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }

  };
  
  return (
    <Carousel data-bs-theme="dark">
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <Card>
            <Card.Img variant="top" src={item.image} className='card-img-item' alt='img' />
            <Card.Body>
              <Card.Title className='card-title-item'>{item.name}</Card.Title>
              <Card.Text className='card-item-price'>{item.price}$</Card.Text>

              <div className='card-btns'>
                <Button
                  variant="primary"
                  onClick={() => onHandleSelect(item.id)}
                  disabled={!isLoggedIn}
                >
                  Go to details
                </Button>
                <Button
                  variant="primary"
                  onClick={() => onHandleReserve(item)}
                  disabled={!isLoggedIn}
                >
                  Make a reservation
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}

      <ModalReservation
        show={showModal}
        setShow={setShowModal}
        itemName={selectedItemName}
        submitReservation={handleSubmitReservation}
      />
    </Carousel>
  );


};

export default Home;

