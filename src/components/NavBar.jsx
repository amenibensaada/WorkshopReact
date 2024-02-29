import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">My events</a>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="events"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}>
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="events/add"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
              })}>
              Add Event
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
