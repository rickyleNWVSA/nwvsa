import { useState } from "react";
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
 *
 * Below 900px, .nav-links has no room to fit inline (six links + logo + CTA
 * need ~830px+), so a burger button reveals the same links in a full-width
 * dropdown instead. Every page mounts its own <Navbar/>, so `open` naturally
 * resets to closed on each navigation — no extra effect needed for that.
 */

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/cpp", label: "CPP" },
  { to: "/opportunities", label: "Opportunities" },
  { to: "/teams", label: "Meet the Team" },
  { to: "/donations", label: "Donations" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

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
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <a href="mailto:eboard@nwvsa.org" className="nav-cta">
        Contact Us
      </a>

      <button
        type="button"
        className="nav-burger"
        aria-expanded={open}
        aria-label="Menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="nav-menu">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:eboard@nwvsa.org"
            className="nav-menu-cta"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
