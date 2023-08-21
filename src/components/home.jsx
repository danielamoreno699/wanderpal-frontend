import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (
    <div className='cards'>
      <h2> here displays cards</h2>
      <div className='card-cont'>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go to details</Button>
        <Button variant="primary">make a reservation</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    
  );
};

export default Home;
