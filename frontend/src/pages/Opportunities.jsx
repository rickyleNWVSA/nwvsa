import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

/*
 * Opportunities — open positions within NWVSA.
 *
 * Content mirrors northwestvsa.com/opportunities: the currently open roles plus
 * links to the info document and application form. Built with the shared
 * design-system classes so it matches the rest of the site.
 *
 * NOTE: the live site links to a Google Doc (role details) and a Google Form
 * (application) whose exact URLs aren't published here, so both buttons point to
 * the official Opportunities page rather than fabricating links. Drop the real
 * Google URLs into INFO_DOC_URL / APPLICATION_URL when you have them.
 */

const INFO_DOC_URL = "https://northwestvsa.com/opportunities/";
const APPLICATION_URL = "https://northwestvsa.com/opportunities/";

// Currently open roles. `openings` > 1 shows a count.
const ROLES = [
  { title: "Community Outreach Coordinator", openings: 1 },
  { title: "Civic Engagement Coordinator", openings: 1 },
  { title: "Media Coordinator", openings: 1 },
  { title: "Graphic Designer", openings: 2 },
];

function Opportunities() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      {/* INTRO */}
      <section
        id="opportunities"
        style={{ background: "var(--off-white)", padding: "100px 24px" }}
      >
        <div
          className="section-wrap"
          style={{ maxWidth: "760px", textAlign: "center", margin: "0 auto" }}
        >
          <div className="section-eyebrow">Get Involved</div>
          <h2 className="section-title" style={{ margin: "0 auto" }}>
            Join the <em>team</em>
          </h2>
          <p className="section-body" style={{ margin: "20px auto 0" }}>
            NWVSA is always looking for passionate students and young
            professionals to help lead our programs and events. Explore the open
            positions below, read the full role descriptions, and apply to sign
            up for the position that fits you best.
          </p>
          <div
            style={{
              marginTop: "36px",
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={INFO_DOC_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ fontSize: "14px", padding: "12px 28px" }}
            >
              Role Details →
            </a>
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
              style={{
                fontSize: "14px",
                padding: "12px 28px",
                background: "var(--white)",
                borderColor: "var(--light-gray)",
              }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="events-section">
        <div className="events-header reveal">
          <div>
            <div className="section-eyebrow">Now Recruiting</div>
            <h2 className="section-title">
              Open <em>positions</em>
            </h2>
          </div>
        </div>
        <div className="events-grid reveal">
          {ROLES.map((role) => (
            <a
              key={role.title}
              href={APPLICATION_URL}
              target="_blank"
              rel="noreferrer"
              className="event-card"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="event-card-top">
                <span className="event-tag">
                  {role.openings > 1
                    ? `${role.openings} Openings`
                    : "1 Opening"}
                </span>
                <h3 className="event-title">{role.title}</h3>
              </div>
              <div className="event-card-bottom">
                <span style={{ fontSize: "13px", color: "var(--mid-gray)" }}>
                  Apply to sign up
                </span>
                <div className="event-arrow">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          className="reveal"
          style={{ textAlign: "center", marginTop: "40px" }}
        >
          <Link
            to="/cpp"
            style={{
              fontSize: "14px",
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Looking to give back instead? Explore the Collective Philanthropy
            Project →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Opportunities;
