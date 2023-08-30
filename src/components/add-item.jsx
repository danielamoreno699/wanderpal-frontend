import  { useState } from 'react';
import { Form,  Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createItem } from '../redux/itemsSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/add-item.css'

export const CreateItem = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [Item, setItem] = useState({
    user_id: localStorage.getItem('user_id'),
    name: '',
    image: '',
    price: '',
    description: '',
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'price' ? parseFloat(value) : value;

    setItem((prevItem) => ({
      ...prevItem,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await dispatch(createItem(Item));
  
    if (response) {
      Swal.fire({
        icon: 'success',
        title: 'Item Created',
        text: 'Your item has been created successfully.',
      }).then(() => {
        navigate('/Home');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="form-width reservation-page">
        <div className="transparent-layer">
          <div className="form-container">
            <h2 className="reservation-h2">Create an Item</h2>
            <hr className="hr-reservation" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa
              enim quos unde, itaque nesciunt magnam laborum eum explicabo
              aperiam necessitatibus fugit, modi recusandae exercitationem quod
              obcaecati blanditiis reprehenderit in cum debitis vero aut?
            </p>
            <br />
            <Form className="create-reservation-form" onSubmit={handleSubmit}>
              <div className="date-city-item">
                <Form.Control
                  type="text"
                  name="name"
                  className="bg-color rounded-border date-width"
                  placeholder="Name"
                  value={Item.name} 
                  onChange={onHandleChange}
                  required
                />
  
                <Form.Control
                  type="text"
                  name="image"
                  className="bg-color rounded-border"
                  placeholder="Place an Image Url"
                  onChange={onHandleChange}
                  value={Item.image} 
                  required
                />
  
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="Price"
                  onChange={onHandleChange}
                  value={Item.price} 
                  required
                  step="0.01"
                />
  
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  onChange={onHandleChange}
                  value={Item.description} 
                  required
                />
              </div>
  
              <Button
                variant="primary"
                type="submit"
                className="button-width rounded-border submit-btn"
              >
                Book Now
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default CreateItem;