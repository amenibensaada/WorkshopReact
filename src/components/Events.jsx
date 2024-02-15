import { Row, Alert } from "react-bootstrap";
import Event from "../components/Event";
import listData from "../data/events.json";
import { useEffect, useState } from "react";

export default function Events() {
  const [showAlert, setShowAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  useEffect(() => {
    setShowWelcome(true);
    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => {
      console.log("test unmounting");
    };
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
          return <Event event={element} key={index} showAlert={modifAlert} />;
        })}
      </Row>
      {showAlert && <Alert variant="success">You have booked an event</Alert>}
    </>
  );
}
