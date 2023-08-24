import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Button } from "react-bootstrap";
import "../styles/reservation.css";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../redux/ReservationCreateSlice";

const ReservationForm = () => {
  const dispatch = useDispatch();
  const [tourOptions, setTourOptions] = useState([]);
  const [selectedTour, setSelectedTour] = useState("");

  useEffect(() => {
    // Fetch the data from the API
    fetch("http://[::1]:3001/api/v1/items")
      .then((response) => response.json())
      .then((data) => {
        // Extract the 'name' field from each item and set it as options
        const options = data.map((item) => ({
          value: item.id.toString(),
          label: item.name,
        }));
        setTourOptions(options);
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form data
    const formData = {
      name: "John Doe", // Example name
      city: "New York", // Example city
      date: "2023-08-25", // Example date
    };
    // Dispatch the createReservation action
    dispatch(createReservation(formData));
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
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </Form.Select>
          <br />
          <FloatingLabel label="City" className="mb-3">
            <Form.Control type="text" placeholder="City" />
          </FloatingLabel>
          <br />
          <FloatingLabel label="Date" className="mb-3">
            <Form.Control type="Date" placeholder="Date" />
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
