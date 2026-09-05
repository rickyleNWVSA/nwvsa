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
            <img
              className="event-photo"
              src="/images/NWVSA_Camp2024-800x533.webp"
              alt="NWVSA Camp group photo outdoors in the Pacific Northwest"
              loading="lazy"
            />
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
            <img
              className="event-photo"
              src="/images/54647925722_1152c5dbe3_o-600x400.webp"
              alt="NWVSA members laughing together"
              loading="lazy"
            />
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

        {/* Camp gallery */}
        <div
          className="reveal"
          style={{ maxWidth: "1100px", margin: "72px auto 0" }}
        >
          <div
            className="section-eyebrow"
            style={{ textAlign: "center" }}
          >
            Life at Camp
          </div>
          <h3
            className="section-title"
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              textAlign: "center",
              margin: "0 auto 32px",
            }}
          >
            Moments from the <em>mountain</em>
          </h3>
          <div className="photo-gallery">
            <img
              className="photo-frame"
              src="/images/54000784791_e68b242049_o-e1735783032518.webp"
              alt="Campers laughing down a slip-n-slide"
              loading="lazy"
            />
            <img
              className="photo-frame"
              src="/images/53966894222_24884a0855_o-800x450.webp"
              alt="Camp crew in matching bucket hats"
              loading="lazy"
            />
            <img
              className="photo-frame"
              src="/images/52391796993_1a9d231650_o-e1735782963310.webp"
              alt="Decorated paper bags at a camp candlelight night"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Events;
