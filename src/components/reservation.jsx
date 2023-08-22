import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "../styles/reservation.css";
import { fetchReservations, selectedReservation } from "../redux/reservationsSlice";

const Reservation = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const { reservations, status } = useSelector((state) => state.reservations);

  useEffect(() => {
    if (status === "idle" && reservations.length === 0) {
      dispatch(fetchReservations());
    }
  }, [status, dispatch, reservations]);

  const onHandleSelect = (id) => {
    dispatch(selectedReservation(id));
    navigate(`/Reservations`);
  };

  return (
    <div className="cards">
      <h2>Reservations</h2>
      <div className="card-cont">
        {reservations.map((reservation, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" alt="image" />
            <Card.Body>
              <Card.Title>{reservation.city}</Card.Title>
              <Card.Text>{reservation.date}</Card.Text>
              <Card.Text>Here goes the name of the item</Card.Text>
              <Button variant="primary" onClick={() => onHandleSelect(reservation.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
