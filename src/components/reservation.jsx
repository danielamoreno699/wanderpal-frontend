import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/reservation.css";
import { fetchReservations } from "../redux/reservationsSlice";

const Reservation = () => {
  const dispatch = useDispatch();
  const { reservations, status } = useSelector((state) => state.reservations);

  useEffect(() => {
    if (status === "idle" && reservations.length === 0) {
      dispatch(fetchReservations());
    }
  }, [status, dispatch, reservations]);

  const onHandleSelect = (id) => {
    console.log(id)
  };

  return (
    <>
      <div className="cards-home">
        <h2 className="home-h2">Reservations</h2>
        <hr className="hr-home" />
        <div className="card-cont">
          {reservations.map((reservation, index) => (
            <Card key={index} className="card-item">
              <Card.Img
                variant="top"
                src=""
                className="card-img-item"
                alt="img"
              />
              <Card.Body>
                <Card.Title className="card-title-item">
                  {reservation.city}
                </Card.Title>
                <Card.Text className="card-item-price">
                  {reservation.date}
                </Card.Text>
                <Card.Text>Here goes the name of the reservation</Card.Text>
                <div className="card-btns">
                  <Button
                    variant="danger"
                    onClick={() => onHandleSelect(reservation.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reservation;
