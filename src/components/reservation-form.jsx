import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Button } from "react-bootstrap";
import "../styles/reservation.css";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../redux/ReservationCreateSlice";
import { fetchItems } from "../redux/itemsSlice";
import { useNavigate } from "react-router-dom";


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
    const selectedUserId = items.find((item) => item.user_id);
    setSelectedTour((prev) => ({
      ...prev,
      [name]: parsedValue,
      user_id: selectedUserId.user_id,
    }));
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation(selectedTour));
    console.log(selectedTour);
    navigate("/reservation");
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
                console.log(item.name),
                console.log("this is the user id", item.user_id),
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
