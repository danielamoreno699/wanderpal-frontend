import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Button } from "react-bootstrap";
import "../styles/reservation.css";
import { useDispatch, useSelector } from "react-redux";
import { createReservation, selectTourOptions, fetchTourOptions } from "../redux/ReservationCreateSlice";

const ReservationForm = () => {
  const dispatch = useDispatch();
  const tourOptions = useSelector(selectTourOptions);
  const [selectedTour, setSelectedTour] = useState("");
  const userId = 1;

  // Fetch tour options when the component mounts
  useEffect(() => {
    dispatch(fetchTourOptions());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form data
    const formData = {
      name: selectedTour,
      city: e.target.elements.city.value,
      date: e.target.elements.date.value,
    };
    // Dispatch the createReservation action
    dispatch(createReservation({ formData, userId }));

    // Clear the selected tour
    setSelectedTour("");
  };

  const handleTourChange = (e) => {
    setSelectedTour(e.target.value);
  };

  return (
    <>
      <div className="cards-home">
        <h2 className="home-h2">Reservation Form</h2>
        <hr className="hr-home" />
        <br />
        <Form className="form-width" onSubmit={handleSubmit}>
          <Form.Select
            aria-label="Select a Tour"
            className="mb-3"
            onChange={handleTourChange}
            value={selectedTour}
          >
            <option>Pick a Tour</option>
            {tourOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
          <br />
          <FloatingLabel label="City" className="mb-3">
            <Form.Control type="text" name="city" placeholder="City" />
          </FloatingLabel>
          <br />
          <FloatingLabel label="Date" className="mb-3">
            <Form.Control type="Date" name="date" placeholder="Date" />
          </FloatingLabel>
          <br />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ReservationForm;
