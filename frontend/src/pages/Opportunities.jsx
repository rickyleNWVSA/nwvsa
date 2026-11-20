import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Opportunities.css";

/*
 * Opportunities — open positions within NWVSA.
 *
 * Positions are grouped by type (Cabinet, Event), each rendered as its own
 * section. A group with no roles shows a "none open right now" message, so to
 * post a new role just add it to the right array below.
 *
 * Each role card opens a modal with that role's details. Roles without
 * `details` show a "more information coming soon" message instead.
 *
 * Each group has its own application form (`applyUrl`), linked from the bottom
 * of the page and from inside that group's role modals. A group with no
 * `applyUrl` gets no Apply button anywhere.
 */

const CABINET_APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdcYdWR6v3zukG-5OLPDMKWR8yJm_A2YLXb4m7WqKRO-S407w/viewform?pli=1";
// Set this once the Event Positions application form is ready.
const EVENT_APPLY_URL = null;

const CABINET_ROLES = [
  {
    title: "Community Outreach Coordinator",
    details: {
      objective:
        "Develop relationships with strategic groups within the Northwest region including community organizations, Vietnamese-community leaders, and NWVSA alumni as well as support initiatives to ensure financial sustainability for the region.",
      responsibilities: [
        "Develop an outreach strategy to connect NWVSA to former, current, and potential sponsors/donors/community organizations",
        "Define ways VSAs can engage with community organizations and maintain relationships",
        "Communicate opportunities to partner VSAs and NWVSA constituents",
        "Collaborate with Civic Engagement Coordinator on projects",
        "Coordinate with Treasurer to ensure sponsorship goals are being met including creating scholarship opportunities",
        "Support Board of Directors Financial Advisor audit NWVSA transactions",
      ],
      note: "You do not need to be an alumni to assume this position.",
    },
  },
  {
    title: "Civic Engagement Coordinator",
    details: {
      objective:
        "Develop and maintain relationships with organizations who have reached out to NWVSA for collaboration, support or partnership.",
      responsibilities: [
        "Be knowledgeable and educate the ICC and surrounding communities of CPPs",
        "Develop and deliver workshops, presentations and materials for ICC VSA’s to use in their VSAs",
        "Define ways VSAs within the region can engage in civic engagement",
        "Develop a plan for community involvement",
        "Sustain engagement and alignment with NWVSA’s community partners",
        "Assist ICC VSA’s in coordinating with NWVSA’s community partners",
      ],
    },
  },
  { title: "Media Coordinator" },
  { title: "Graphic Designer" },
];

// No event positions yet — add roles here (same shape as CABINET_ROLES).
const EVENT_ROLES = [];

const POSITION_GROUPS = [
  {
    id: "cabinet",
    label: "Cabinet Positions",
    roleLabel: "Cabinet Position",
    roles: CABINET_ROLES,
    applyUrl: CABINET_APPLY_URL,
  },
  {
    id: "event",
    label: "Event Positions",
    roleLabel: "Event Position",
    roles: EVENT_ROLES,
    applyUrl: EVENT_APPLY_URL,
  },
];

function ApplyButton({ href, children = "Apply Now →" }) {
  return (
    <a
      className="btn-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function RoleModal({ role, onClose }) {
  const dialogRef = useRef(null);

  // <dialog>.showModal() gives us the backdrop, Esc-to-close, and focus
  // trapping for free. Open it whenever a role is selected.
  useEffect(() => {
    if (role && !dialogRef.current.open) dialogRef.current.showModal();
  }, [role]);

  // Clicks on the backdrop land on the <dialog> element itself (the content
  // wrapper fills the visible box), so that's our "click outside" signal.
  const handleClick = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close();
  };

  return (
    <dialog
      ref={dialogRef}
      className="role-modal"
      onClose={onClose}
      onClick={handleClick}
      aria-labelledby="role-modal-title"
    >
      {role && (
        <div className="role-modal-content">
          <button
            type="button"
            className="role-modal-close"
            aria-label="Close role details"
            onClick={() => dialogRef.current.close()}
          >
            ×
          </button>

          <div className="section-eyebrow">{role.group}</div>
          <h2 id="role-modal-title" className="role-modal-title">
            {role.title}
          </h2>

          {role.details ? (
            <>
              <h3 className="role-modal-heading">Objective</h3>
              <p className="role-modal-text">{role.details.objective}</p>

              <h3 className="role-modal-heading">Responsibilities</h3>
              <ul className="role-modal-list">
                {role.details.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {role.details.note && (
                <p className="role-modal-note">
                  <strong>Note:</strong> {role.details.note}
                </p>
              )}
            </>
          ) : (
            <p className="role-modal-text role-modal-soon">
              More information about this role is coming soon. Check back
              later!
            </p>
          )}

          {role.applyUrl && (
            <div className="role-modal-actions">
              <ApplyButton href={role.applyUrl} />
            </div>
          )}
        </div>
      )}
    </dialog>
  );
}

function Opportunities() {
  useScrollReveal();
  const [selectedRole, setSelectedRole] = useState(null);

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
            professionals to help lead our programs and events. Click on any
            open position below to read its role description, then apply for
            the position that fits you best.
          </p>
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
        {POSITION_GROUPS.map((group) => (
          <div key={group.id} className="role-group">
            <h3 className="role-group-title reveal">{group.label}</h3>

            {group.roles.length > 0 ? (
              <div className="events-grid reveal">
                {group.roles.map((role) => (
                  <button
                    key={role.title}
                    type="button"
                    className="event-card role-card"
                    onClick={() =>
                      setSelectedRole({
                        ...role,
                        group: group.roleLabel,
                        applyUrl: group.applyUrl,
                      })
                    }
                  >
                    <div className="event-card-top">
                      <h4 className="event-title">{role.title}</h4>
                    </div>
                    <div className="event-card-bottom">
                      <span
                        style={{ fontSize: "13px", color: "var(--mid-gray)" }}
                      >
                        View role details
                      </span>
                      <div className="event-arrow">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="role-group-empty reveal">
                There are no {group.label.toLowerCase()} open right now. Check
                back soon!
              </p>
            )}
          </div>
        ))}

        <div className="reveal opportunities-apply">
          <p className="section-body" style={{ margin: "0 auto 24px" }}>
            Found a role that fits? Submit your application below.
          </p>
          <div className="opportunities-apply-buttons">
            {POSITION_GROUPS.filter((group) => group.applyUrl).map((group) => (
              <ApplyButton key={group.id} href={group.applyUrl}>
                Apply for {group.label} →
              </ApplyButton>
            ))}
          </div>
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

      <RoleModal role={selectedRole} onClose={() => setSelectedRole(null)} />
    </>
  );
}

export default Opportunities;
