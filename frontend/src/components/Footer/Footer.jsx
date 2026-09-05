import "./Footer.css";

/*
 * Footer — the site-wide footer.
 *
 * This used to be hard-coded at the bottom of Home.jsx. It was extracted into a
 * shared component so it can sit at the bottom of EVERY page and stay identical
 * everywhere — edit it once here and all pages update.
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
              href="mailto:northwestvsa@gmail.com"
              style={{
                color: "var(--accent)",
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              northwestvsa@gmail.com
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Organization</h4>
          <ul>
            <li>
              <a
                href="https://northwestvsa.com/our-misson-values/"
                target="_blank"
                rel="noreferrer"
              >
                Mission & Values
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/constitution/"
                target="_blank"
                rel="noreferrer"
              >
                Constitution
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/policies/"
                target="_blank"
                rel="noreferrer"
              >
                Policies
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/contact-us/"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Meet the Team</h4>
          <ul>
            <li>
              <a
                href="https://northwestvsa.com/executive-board/"
                target="_blank"
                rel="noreferrer"
              >
                Executive Board
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/cabinet-board-corr/"
                target="_blank"
                rel="noreferrer"
              >
                Cabinet Board
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/board-of-directors/"
                target="_blank"
                rel="noreferrer"
              >
                Board of Directors
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/intercollegiate-council/"
                target="_blank"
                rel="noreferrer"
              >
                ICC
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get Involved</h4>
          <ul>
            <li>
              <a
                href="https://northwestvsa.com/events/"
                target="_blank"
                rel="noreferrer"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/cpp/"
                target="_blank"
                rel="noreferrer"
              >
                CPP Program
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/opportunities/"
                target="_blank"
                rel="noreferrer"
              >
                Opportunities
              </a>
            </li>
            <li>
              <a
                href="https://northwestvsa.com/donations-2/"
                target="_blank"
                rel="noreferrer"
              >
                Donate
              </a>
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
