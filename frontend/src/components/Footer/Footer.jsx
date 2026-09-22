import { Link } from "react-router-dom";
import "./Footer.css";

/*
 * Footer — the site-wide footer.
 *
 * This used to be hard-coded at the bottom of Home.jsx. It was extracted into a
 * shared component so it can sit at the bottom of EVERY page and stay identical
 * everywhere — edit it once here and all pages update.
 *
 * Link types, matching the convention in Navbar.jsx:
 *   - <Link> for plain page routes (client-side, no reload).
 *   - <a href="/path#id"> for links into a specific section of a page, so the
 *     browser does a real navigation and natively scrolls to the anchor.
 * A few labels (Constitution, Policies) have no matching page anywhere in
 * src/pages yet — they're left unlinked until those pages exist.
 */
function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <span>NWVSA</span>
          </div>
          <p className="footer-tagline">
            Inspiring Vietnamese students all over the Pacific Northwest since
            2008.
          </p>
          <div style={{ marginTop: "20px" }}>
            <a
              href="mailto:eboard@nwvsa.org"
              style={{
                color: "var(--accent)",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              eboard@nwvsa.org
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Organization</h4>
          <ul>
            <li>
              <Link to="/about">Mission & Values</Link>
            </li>
            <li>
              <span className="footer-soon" title="Page coming soon">
                Constitution
              </span>
            </li>
            <li>
              <span className="footer-soon" title="Page coming soon">
                Policies
              </span>
            </li>
            <li>
              <a href="mailto:eboard@nwvsa.org">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Meet the Team</h4>
          <ul>
            <li>
              <a href="/teams#executive">Executive Board</a>
            </li>
            <li>
              <a href="/teams#cabinet">Cabinet Board</a>
            </li>
            <li>
              <a href="/teams#directors">Board of Directors</a>
            </li>
            <li>
              <Link to="/teams">ICC</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get Involved</h4>
          <ul>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/cpp">CPP Program</Link>
            </li>
            <li>
              <Link to="/opportunities">Opportunities</Link>
            </li>
            <li>
              <Link to="/donations">Donate</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 Northwest Vietnamese Student Association. All rights reserved.
        </span>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/nwvsa"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a href="mailto:northwestvsa@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
