import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createReservationApi } from '../redux/reservationCreateItemSlice';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export const ReserveItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [reservation, setReservation] = useState({
    date: '',
    city: '',
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { date, city } = reservation;
    const itemId = id;
    const userId = localStorage.getItem('user_id');
  
    try {
      const response = await dispatch(createReservationApi({ itemId, userId, date, city }));
      console.log('Reservation Response:', response);
  
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Reservation Successful!',
          text: 'Your reservation has been created successfully.',
        });
      
        navigate('/reservation');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    } catch (error) {
      console.error('Error creating reservation:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred while creating the reservation.',
      });
    }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="cards-home form-width">
        <h2 className="home-h2">Reservation form</h2>
        <hr className="hr-home" />
        <br />

        <Form onSubmit={handleSubmit}>
          <FloatingLabel label="Date" className="mb-3">
            <Form.Control
              type="date"
              name="date"
              value={reservation.date}
              onChange={onHandleChange}
              autoFocus
              required
            />
          </FloatingLabel>
          <br />

          <FloatingLabel label="City" className="mb-3">
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              value={reservation.city}
              onChange={onHandleChange}
              required
            />
          </FloatingLabel>
          <br />

          <Button variant="primary" type="submit" className="button-width">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleBack} className="button-width">
            Back
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ReserveItem;
