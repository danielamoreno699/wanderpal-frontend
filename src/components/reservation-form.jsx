import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Button } from "react-bootstrap";
import "../styles/reservation.css";
import { useDispatch, useSelector } from "react-redux";
import { createReservation } from "../redux/ReservationCreateSlice";
import { fetchItems } from "../redux/itemsSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
      user_id: localStorage.getItem("user_id"),
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
        icon: "success",
        title: "Reservation Successful!",
        text: "Your reservation has been created successfully.",
      });
      navigate("/reservation");
    } catch (error) {
      console.error("Error creating reservation:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while creating the reservation.",
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
                  type="Date"
                  name="date"
                  className="bg-color rounded-border date-width"
                  placeholder="Date"
                  value={selectedTour.date}
                  onChange={onHandleChange}
                />

                <Form.Control
                  type="text"
                  name="city"
                  className="bg-color rounded-border"
                  placeholder="City"
                  onChange={onHandleChange}
                  value={selectedTour.city}
                />
              </div>
              <div className="date-city">
                <Form.Select
                  aria-label="Select a Tour"
                  className="bg-color rounded-border"
                  onChange={onHandleChange}
                  value={selectedTour.itemId}
                  name="itemId"
                >
                  <option>Pick a Tour</option>

                  {items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Form.Select>

                <Button
                  variant="light"
                  type="submit"
                  className="button-width rounded-border"
                >
                  Book Now
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
