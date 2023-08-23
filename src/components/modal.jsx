import PropTypes from 'prop-types'; 
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

 const ModalReservation = ({ show, setShow, itemName }) => {
    const handleClose = () => setShow(false);



    const [reservation, setReservation] = useState({
        user_id: '',
        date: '',
        city: '',
    })


    console.log('itemNameModal', itemName)



    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setReservation({ ...reservation, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('reservation', reservation)
        handleClose();
    }

  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation for {itemName.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select a date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                onChange={handleChange}
                value={reservation.date}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Indicate your city</Form.Label>
              <Form.Control
              type='text'
                placeholder='City'
                onChange={handleChange}
                value={reservation.city}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

ModalReservation.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  itemName: PropTypes.shape({
    name: PropTypes.string.isRequired,
    
  }).isRequired,
};

export default ModalReservation

