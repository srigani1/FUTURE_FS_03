import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">

        <h2 className="logo">
          Spice Garden
        </h2>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#specials">Specials</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;