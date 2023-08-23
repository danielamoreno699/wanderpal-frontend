import Form from "react-bootstrap/Form";
import { FloatingLabel, Button } from "react-bootstrap";
import "../styles/reservation.css";

const ReservationForm = () => {
  return (
    <>
      <div className="cards-home">
        <h2 className="home-h2">Reservation Form</h2>
        <hr className="hr-home" />
        <br />
        <Form className="form-width">
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Pick a Tour</option>
            <option value="1">Tour 1</option>
            <option value="2">Tour 2</option>
            <option value="3">Tour 3</option>
            <option value="3">Tour 4</option>
            <option value="3">Tour 5</option>
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
