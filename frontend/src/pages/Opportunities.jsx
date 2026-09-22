import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

/*
 * Opportunities — open positions within NWVSA.
 *
 * Content mirrors northwestvsa.com/opportunities: the currently open roles.
 * Built with the shared design-system classes so it matches the rest of the
 * site.
 *
 * NOTE: the live site links to a Google Doc (role details) and a Google Form
 * (application) whose exact URLs aren't published here. northwestvsa.com
 * itself is currently down, so rather than link out to a dead page, the
 * "Role Details", "Apply Now", and role-card buttons below are disabled
 * placeholders until a real page/form exists to link to.
 */

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
            <span
              className="btn-primary"
              title="Coming soon — role details page in progress"
              style={{
                fontSize: "14px",
                padding: "12px 28px",
                opacity: 0.5,
                cursor: "not-allowed",
              }}
            >
              Role Details →
            </span>
            <span
              className="btn-outline"
              title="Coming soon — application form in progress"
              style={{
                fontSize: "14px",
                padding: "12px 28px",
                background: "var(--white)",
                borderColor: "var(--light-gray)",
                opacity: 0.5,
                cursor: "not-allowed",
              }}
            >
              Apply Now
            </span>
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
            <div
              key={role.title}
              className="event-card"
              title="Coming soon — application form in progress"
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "not-allowed",
                opacity: 0.7,
              }}
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
                  Applications coming soon
                </span>
              </div>
            </div>
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
