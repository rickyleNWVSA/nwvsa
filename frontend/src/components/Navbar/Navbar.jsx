import { Link } from "react-router-dom";
import "./Navbar.css";
/*
 * Navbar — the site's top navigation bar.
 *
 * The section links (#about, #goals, …) are in-page scroll anchors for the
 * Home page, so they stay as plain <a href> — they jump to a section, they
 * don't change routes. If this navbar later appears on every page, swap the
 * logo/section links for react-router <Link> where they point to other pages.
 */
function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <img
          src="/images/nwvsa-logo-160x157-with-white-outline-150x150.webp"
          alt="NWVSA Logo"
          className="nav-logo-img"
        />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#goals">Our Goals</a>
        </li>
        <li>
          <a href="#schools">Schools</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#donate">Donate</a>
        </li>
        <li>
          <Link to="/teams">Meet the Team</Link>
        </li>
      </ul>
      <a href="#contact" className="nav-cta">
        Contact Us
      </a>
    </nav>
  );
}

export default Navbar;
