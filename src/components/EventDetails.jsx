import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getallEvents } from "../services/api";

export default function EventDetails() {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    const fetchListById = async () => {
      const eventsList = await getallEvents(id);
      setEvent(eventsList.data);
    };
    fetchListById();
  }, []);
 
  // const {nom }= useParams();
  // const event=listData.find((e=>e.name==nom));
  console.log(event);
  return <>{event ? <p>{event.name}</p> : <p>event not found</p>}</>;
}
