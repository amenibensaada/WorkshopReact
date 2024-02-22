import { useParams } from "react-router-dom";
import listData from "../data/events.json";


export default function EventDetails(){

  const {nom }= useParams();
  const event=listData.find((e=>e.name==nom));
    console.log(event)
    return  <>
        {
            event? <p>{event.name}</p>: <p>event not found</p>
        }
    </>
    

    

    }