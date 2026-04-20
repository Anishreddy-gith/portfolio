import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="top-nav">
      <div className="brand-block">
        <p className="brand-kicker">Assignment 4</p>
        <h1>Anish Reddy Portfolio</h1>
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>Projects</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
