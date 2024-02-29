import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { addEvent } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
  const navigate = useNavigate();
 
  const [event, setEvent] = useState({
    name: "",
    description: "",
    img: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });
  const onValueChange=(e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  }

  const onFileChange=(e) => {
    setEvent({...event, [e.target.name]:e.target.files[0].name});
    
  }
  const AddEvent = async () => {
    const result = await addEvent(event);
    if (result.status === 201) {
      navigate("/events")  
    }
    
  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>Add a new Event to your Event List</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control value={event.name} name="name" type="text" placeholder="Enter a Name"
            onChange={(e) =>  onValueChange(e) }
            />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description "
            name="description"
            value={event.description}
            onChange={(e) =>  onValueChange(e) }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={event.price} onChange={(e)=>{onValueChange(e)}} />
          
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Number of Tickets</Form.Label>
          <Form.Control type="number" name="nbTickets" value={event.nbTickets}
            onChange={(e) =>  onValueChange(e) }
          
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="img"
            onChange={(e) =>  onFileChange(e)}
          
          />
        </Form.Group>
        <Button variant="primary" onClick={AddEvent} >Add an Event</Button>
        <Button variant="secondary">Cancel</Button>
      </Form>
    </Container>
  );
}
