import { useState } from 'react';
import { Form,  Button } from 'react-bootstrap';
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
      <div className="form-width reservation-page">
        <div className="transparent-layer">
          <div className="form-container">
            <h2 className="reservation-h2">Reservation Form</h2>
            <hr className="hr-reservation" />
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos culpa
              enim quos unde, itaque nesciunt magnam laborum eum explicabo
              aperiam necessitatibus fugit, modi recusandae exercitationem quod
              obcaecati blanditiis reprehenderit in cum debitis vero aut?
            </p>
            <br />
            <Form className="create-reservation-form" onSubmit={handleSubmit}>
              <div className="date-city">
                <Form.Control
                  type="date"
                  name="date"
                  className="bg-color rounded-border date-width"
                  placeholder="Date"
                  value={reservation.date} 
                  onChange={onHandleChange}
                />
  
                <Form.Control
                  type="text"
                  name="city"
                  className="bg-color rounded-border"
                  placeholder="City"
                  onChange={onHandleChange}
                  value={reservation.city} 
                />
              </div>
  
              <Button
                variant="primary"
                type="submit"
                className="button-width rounded-border submit-btn"
              >
                Book Now
              </Button>
              <Button variant="secondary" onClick={handleBack} className="button-width back">
                Back
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default ReserveItem;
