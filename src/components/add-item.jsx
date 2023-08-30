import  { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createItem } from '../redux/itemsSlice';

export const CreateItem = () => {

    const dispatch = useDispatch();

  const [Item, setItem] = useState({
    
    name: '',
    image: '',
    price: '',
    description: '',
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const response = await dispatch(createItem(Item)); 
      console.log('Item created:', response);
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
            />
          </FloatingLabel>
          <br />

          <FloatingLabel label="Price" className="mb-3">
            <Form.Control
              type="text"
              name="price"
              placeholder="Price"
              onChange={onHandleChange}
              value={Item.price}
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