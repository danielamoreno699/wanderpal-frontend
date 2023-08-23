import  { useState } from 'react'; // Don't forget to import React
import PropTypes from 'prop-types'; // Import PropTypes
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalReservation = ({ show, setShow, itemName, submitReservation }) => {
  const handleClose = () => setShow(false);

  const [reservation, setReservation] = useState({
    user_id: '',
    date: '',
    city: '',
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitReservation(reservation);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>

        <Modal.Title>Reservation for {itemName.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Select a date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={reservation.date}
              onChange={onHandleChange}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Indicate your city</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              value={reservation.city}
              onChange={onHandleChange}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type='button' variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button type='submit' variant="primary" >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};

// Prop validarequired
ModalReservation.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  itemName: PropTypes.shape({
    name: PropTypes.string.isRequired,

  }).isRequired,
  submitReservation: PropTypes.func.isRequired,
};

export default ModalReservation;
