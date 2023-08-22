import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import "../styles/Home.css";
import { fetchReservations } from "../redux/reservationsSlice";

const Reservation = () => {


  return (
    <div className="cards">
      <h2>Here displays cards</h2>
      <div className="card-cont">
        {reservations.map((reservation, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src='' alt='image' />
            <Card.Body>
              <Card.Title>{reservation.city}</Card.Title>
              <Card.Text>{reservation.date}</Card.Text>
              <Card.Text>Here goes the name of the item</Card.Text>
              <Button variant="primary">Delete</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reservation;
