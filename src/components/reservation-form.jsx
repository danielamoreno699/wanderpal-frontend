import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Button } from "react-bootstrap";
import "../styles/reservation.css";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../redux/ReservationCreateSlice";
import { fetchItems } from "../redux/itemsSlice";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';



const ReservationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { items } = useSelector((state) => state.items);

  const [selectedTour, setSelectedTour] = useState({
    itemId: "",
    user_id: "",
    date: "",
    city: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === "itemId" ? parseInt(value, 10) : value;
   
    setSelectedTour((prev) => ({
      ...prev,
      [name]: parsedValue,
      user_id: localStorage.getItem('user_id'),
    }));
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await dispatch(createReservation(selectedTour));
      Swal.fire({
        icon: 'success',
        title: 'Reservation Successful!',
        text: 'Your reservation has been created successfully.',
      });
      navigate('/reservation');
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
        <h2 className="home-h2">Reservation Form</h2>
        <hr className="hr-home" />
        <br />
        <Form className="" onSubmit={handleSubmit}>
          <Form.Select
            aria-label="Select a Tour"
            className="mb-3"
            onChange={onHandleChange}
            value={selectedTour.itemId}
            name="itemId"
          >
            <option>Pick a Tour</option>

            {items.map(
              (item) => (
                (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                )
              )
            )}
          </Form.Select>

          <FloatingLabel label="Date" className="mb-3">
            <Form.Control
              type="Date"
              name="date"
              placeholder="Date"
              value={selectedTour.date}
              onChange={onHandleChange}
            />
          </FloatingLabel>

          <br />
          <FloatingLabel label="City" className="mb-3">
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              onChange={onHandleChange}
              value={selectedTour.city}
            />
          </FloatingLabel>
          <br />

          <br />

          <Button variant="primary" type="submit" className="button-width">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ReservationForm;
