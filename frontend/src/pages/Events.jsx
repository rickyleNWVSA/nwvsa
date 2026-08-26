import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

/*
 * Events — NWVSA's flagship events.
 *
 * Content mirrors northwestvsa.com/events: the upcoming NWVSA Camp 2026 (theme
 * "Camp Solstice: Moments in Orbit") plus the annual Turkey Bowl tradition.
 */
function Events() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <section className="events-section" id="events">
        <div className="events-header reveal">
          <div>
            <div className="section-eyebrow">Get Involved</div>
            <h2 className="section-title">
              Events & <em>Traditions</em>
            </h2>
          </div>
          <a
            href="https://northwestvsa.com/events/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{
              fontSize: "14px",
              padding: "12px 28px",
              whiteSpace: "nowrap",
            }}
          >
            View All Events
          </a>
        </div>
        <div className="events-grid reveal">
          {/* Upcoming flagship camp */}
          <div className="event-card">
            <div className="event-card-top">
              <span className="event-tag">Upcoming Camp</span>
              <h3 className="event-title">
                NWVSA Camp 2026: Moments in Orbit
              </h3>
              <p className="event-desc">
                Our flagship "Camp Solstice" experience exploring transition,
                reflection, resilience, and the moments that shape who we become
                — from leadership to identity to community.
              </p>
            </div>
            <div className="event-card-bottom">
              <span style={{ fontSize: "13px", color: "var(--mid-gray)" }}>
                Aug 28–30, 2026 · Mayfield Lake Youth Camp, Mossyrock, WA
              </span>
              <div className="event-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          {/* Annual tradition */}
          <div className="event-card">
            <div className="event-card-top">
              <span className="event-tag">Annual Tradition</span>
              <h3 className="event-title">Turkey Bowl</h3>
              <p className="event-desc">
                A beloved NWVSA tradition bringing together students from across
                the region for friendly competition, food, and fellowship.
              </p>
            </div>
            <div className="event-card-bottom">
              <span style={{ fontSize: "13px", color: "var(--mid-gray)" }}>
                Annual Fall Event
              </span>
              <div className="event-arrow">
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Events;
