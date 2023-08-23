import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/reservation.css";
import { fetchReservations, fetchReservationDetails } from "../redux/reservationsSlice";

const Reservation = () => {

  
  const dispatch = useDispatch();
  const { status, reservations, reservationDetails } = useSelector((state) => state.reservations);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchReservations());
    
    }
  }, [status, dispatch]);


  useEffect(() => {
    if (status === "succeeded" && reservations.length > 0) {
      console.log("Fetching reservation details...");
      reservations.forEach((reservation) => {
        if (!reservationDetails[reservation.id] || !reservationDetails[reservation.id].detailsFetched) {
          dispatch(fetchReservationDetails(reservation.id));
        }
      });
    }
  }, [status, dispatch, reservations, reservationDetails]);
  


  const onHandleSelect = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="cards-home">
        <h2 className="home-h2">Reservations</h2>
        <hr className="hr-home" />
        <div className="card-cont">
          {reservations.map((reservation, index) => {
            const itemDetails = reservationDetails[reservation.id];
            // console.log(itemDetails);

            return (
              <Card key={index} className="card-item">
                <Card.Img
                  variant="top"
                  src={itemDetails?.image}
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
                  <Card.Text>
                    {itemDetails?.name}
                  </Card.Text>
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Reservation;