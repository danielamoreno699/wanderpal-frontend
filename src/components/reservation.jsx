import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/reservation.css";
import { fetchReservations, fetchReservationDetails } from "../redux/reservationsSlice";
import { deleteReservationApi} from "../redux/reservationDeleteSlice";
import Swal from 'sweetalert2';

const Reservation = () => {
 
  
  const dispatch = useDispatch();
  const { status, reservations, reservationDetails } = useSelector((state) => state.reservations);
  const { items } = useSelector((state) => state.reservationDelete);

  


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
  


   const onHandleSelect = (reservationId, itemId) => {
    console.log('id', reservationId);
    console.log('itemid', itemId);
  
    try {
      dispatch(deleteReservationApi({reservationId, itemId}));
      
      
      Swal.fire({
        icon: 'success',
        title: 'Reservation Deleted!',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error("Delete error:", error);
  
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };
  

  return (
    <>

      <div className="cards-home">
        <h2 className="home-h2">Reservations</h2>
        <hr className="hr-home" />

      
        <div className="card-cont">
          {reservations.map((reservation, index) => {
            const itemDetails = reservationDetails[reservation.id];
            const isDeleted = items.includes(itemDetails?.item_id);

          if (isDeleted) {
            return null; 
          }


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
                      onClick={() => onHandleSelect(reservation.id, itemDetails?.item_id)}
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