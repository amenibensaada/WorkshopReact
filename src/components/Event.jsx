import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Event(props) {
  const [event, setEvent] = useState(props.event);
  const navigate = useNavigate();

 const navigateToAddEvent = () => {
    navigate("/events/add")
 };

  
  const boockEvent = () => {
    props.showAlert(),
      setEvent((e) => ({
        ...e,
        nbParticipants: e.nbParticipants + 1,
        nbTickets: e.nbTickets - 1,
      }));
  };
  const changeLikes = () => {
      setEvent((e) => ({
        ...e,
        like : !e.like
    }))
  };
 
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            event.nbTickets === 0
              ? "images/sold_out.png"
              : `images/${event.img}`
          }
        />
        <Card.Body>
        {/* <Card.Title><Link to={`eventDetail/${event.name}`}>{event.name}</Link></Card.Title> */}
        <Card.Title><Link to={`eventDetail/${event.id}`}>{event.name}</Link></Card.Title>

          <Card.Text>{event.description}</Card.Text>
          <p> price : {event.price}</p>
          <p> nombre Tickets : {event.nbTickets}</p>
          <p>nombre participants : {event.nbParticipants}</p>

          <Button variant="danger" onClick={changeLikes}> {event.like?"dislike":"like"}</Button>
          <Button
            variant="primary"
            onClick={boockEvent}
            disabled={event.nbTickets === 0 ? true : false}>
            {" "}
            Book an event
          </Button>
          <Button
            variant="primary"
            onClick={navigateToAddEvent}

          >
            
            Add an event
          </Button>
          <Button
            variant="danger"
            onClick={() => { props.deleteEvent(event.id) }}

          >
            
            Delete
          </Button>
          
        </Card.Body>
      </Card>
    </>
  );
}
