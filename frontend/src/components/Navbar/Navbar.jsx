import { Link } from "react-router-dom";
import "./Navbar.css";

/*
 * Navbar — the site's top navigation bar.
 *
 * Link types used here, and why:
 *   - Logo + "Meet the Team" use <Link> because they point to ROUTES (pages).
 *     <Link> swaps pages client-side with no full reload.
 *   - The "Explore" dropdown groups the section links. Since the homepage's
 *     content moved onto dedicated pages, each item now points at the page +
 *     section where that content lives (e.g. "/about#goals"). They stay <a> on
 *     purpose so the browser navigates to the page and natively scrolls to the
 *     hash target.
 */

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-logo">
        <img
          src="/images/nwvsa-logo-160x157-with-white-outline-150x150.webp"
          alt="NWVSA Logo"
          className="nav-logo-img"
        />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/cpp">CPP</Link>
        </li>
        <li>
          <Link to="/opportunities">Opportunities</Link>
        </li>
        <li>
          <Link to="/teams">Meet the Team</Link>
        </li>
        <li>
          <Link to="/donations">Donations</Link>
        </li>
      </ul>

      <a
        href="https://northwestvsa.com/contact-us/"
        target="_blank"
        rel="noreferrer"
        className="nav-cta"
      >
        Contact Us
      </a>
    </nav>
  );
}

export default Navbar;
