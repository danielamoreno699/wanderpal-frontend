import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { fetchItems, selectedItem } from '../redux/itemsSlice';

const Home = () => {
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

  return (
    <div className='cards'>
      <h2>Here displays cards</h2>
      <div className='card-cont'>
        {items.map((item, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} /> 
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.price}</Card.Text>
              <Button 
              variant="primary" 
              onClick={() => onHandleSelect(item.id)}
              >
                
                Go to details
                
                </Button>
              <Button variant="primary">Make a reservation</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;

