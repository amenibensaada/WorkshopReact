import { Row, Alert } from "react-bootstrap";
import Event from "../components/Event";
import { useEffect, useState } from "react";
import { deleteEvent, getallEvents } from "../services/api";

export default function Events() {
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [listData, setListEvent] = useState([]);
  const deleteEvents = async (id) => {
    await deleteEvent(id);
    setListEvent(listData.filter((e) => e.id != id));
  };
  useEffect(() => {
    setShowWelcome(true);
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => {
      console.log("test unmounting");
    };
  }, []);
  useEffect(() => {
    const fetchList = async () => {
      const eventsList = await getallEvents();
      setListEvent(eventsList.data);
    };
    fetchList();
  }, []);
  const modifAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      {showWelcome && <Alert varian="success">Welcome </Alert>}
      <Row>
        {listData?.map((element, index) => {
          return (
            <Event
              event={element}
              key={index}
              showAlert={modifAlert}
              deleteEvent={deleteEvents}
            />
          );
        })}
      </Row>
      {showAlert && <Alert variant="success">You have booked an event</Alert>}
    </>
  );
}
