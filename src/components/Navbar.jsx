import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="top-nav">
      <div className="brand-block">
        <p className="brand-kicker">Portfolio</p>
        <h1>Boppidi Anish Reddy</h1>
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>Projects</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
