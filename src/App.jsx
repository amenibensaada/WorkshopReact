import { Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import NotFound from "./components/NotFound";
import { Suspense } from "react";
import Nav from "./components/NavBar";
import EventDetails from "./components/EventDetails";
import AddEvent from "./components/AddEvent";

function App() {
  return (
    <>
      <Nav/>
      <Suspense fallback={<p> Waiting server </p>}>
        <Routes>
          <Route path="/events">
            <Route index element={<Events />} />
            <Route path="eventDetail/:id" element={<EventDetails />} />
            <Route path="add" element={<AddEvent />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
