import  { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createItem } from '../redux/itemsSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
      <div className="cards-home form-width">
        <h2 className="home-h2">Create Item Form</h2>
        <hr className="hr-home" />
        <br />

        <Form onSubmit={handleSubmit}>
          <FloatingLabel label="Name" className="mb-3">
            <Form.Control
              type="text"
              name="name"
              placeholder="Item Name"
              onChange={onHandleChange}
              value={Item.name}
              required
            />
          </FloatingLabel>
          <br />

          <FloatingLabel label="Image URL" className="mb-3">
            <Form.Control
              type="text"
              name="image"
              placeholder="Image URL"
              onChange={onHandleChange}
              value={Item.image}
              required
            />
          </FloatingLabel>
          <br />

          <FloatingLabel label="Price" className="mb-3">
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              onChange={onHandleChange}
              value={Item.price}
              required
              step="0.01"
            />
          </FloatingLabel>
          <br />

          <FloatingLabel label="Description" className="mb-3">
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description"
              onChange={onHandleChange}
              value={Item.description}
             required
            />
          </FloatingLabel>
          <br />

          <Button variant="primary" type="submit" className="button-width">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateItem;