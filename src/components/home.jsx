import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { fetchItems, selectedItem } from '../redux/itemsSlice';
import ModalReservation from './modal';

const Home = () => {

  const [showModal, setShowModal] = useState(false);


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
    console.log(id);
  }

  const onHandleReserve = (id) => {
    console.log(id);
    setShowModal(true);
  }


  return (
    <>
    <div className='cards-home'>
      <h2 className='home-h2'>Our Tours</h2>
      <hr className='hr-home' />
      <div className='card-cont'>
        {items.map((item, index) => (
          <Card key={index} className='card-item'>
            <Card.Img variant="top" src={item.image}  className='card-img-item' alt='img' /> 
            <Card.Body>
              <Card.Title className='card-title-item'>{item.name}</Card.Title>
              <Card.Text className='card-item-price'>{item.price}$</Card.Text>

              <div className='card-btns'>
              <Button 
              variant="primary" 
              onClick={() => onHandleSelect(item.id)}
              >
                
                Go to details
                
              </Button>
              <Button variant="primary"
              onClick={() => onHandleReserve(item.id)}
              
              >
                
                Make a reservation
              
              
              </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    <ModalReservation show={showModal} setShow={setShowModal} />
    </>
  );
};

export default Home;

