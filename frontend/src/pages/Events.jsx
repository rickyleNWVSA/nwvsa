import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

/*
 * Events — NWVSA's flagship events.
 *
 * Content mirrors northwestvsa.com/events: the upcoming NWVSA Camp 2026 (theme
 * "Camp Solstice: Moments in Orbit") plus the annual Turkey Bowl tradition.
 *
 * Past Events below are sourced from NWVSA's internal past-events doc (names,
 * EDs/Campmasters, locations, themes), each paired with one representative
 * photo from that event's own Flickr album — picked for a wide, in-the-room
 * group shot to match the style of the two cards above. Per instructions, an
 * event only gets a card if a correlating Flickr album with usable photos
 * was actually found; none were skipped here, but that's why this list
 * isn't just "every past event NWVSA has ever run."
 */
const PAST_EVENTS = [
  {
    tag: "2025 Summit",
    title: "NWVSA Summit 2025: Ribbon of Flavors",
    desc: "Hosted in Portland, OR, led by Executive Directors Kathy Vuu and Angel Le.",
    img: "/images/NWVSA_Summit2025_PastEvent.jpg",
    alt: "NWVSA members at the 2025 Summit in Portland",
    location: "Portland, OR",
  },
  {
    tag: "2024 Camp",
    title: "NWVSA Camp 2024: Yesterday's Memories, Tomorrow's Journeys",
    desc: "Hosted in Mossyrock, WA, led by Campmasters Kevin Le and William Ho.",
    img: "/images/NWVSA_Camp2024_PastEvent.jpg",
    alt: "NWVSA members gathered at the 2024 Leadership Camp",
    location: "Mossyrock, WA",
  },
  {
    tag: "2023 Summit",
    title: "NWVSA Summit 2023: Rekindling Our Roots",
    desc: "Hosted in Bellevue, WA, led by Executive Directors Nghia Nguyen and Kristi Dang.",
    img: "/images/NWVSA_Summit2023_PastEvent.jpg",
    alt: "NWVSA members at the 2023 Summit in Bellevue",
    location: "Bellevue, WA",
  },
  {
    tag: "2022 Camp",
    title: "NWVSA Camp 2022: Everlasting Waves of Legacy",
    desc: "Hosted in Olympia, WA, led by Executive Directors Johnny Ho and Christina Tang.",
    img: "/images/NWVSA_Camp2022_PastEvent.jpg",
    alt: "NWVSA members outdoors at the 2022 Leadership Camp",
    location: "Olympia, WA",
  },
];

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
          <span
            className="btn-outline"
            title="Coming soon — full events page in progress"
            style={{
              fontSize: "14px",
              padding: "12px 28px",
              whiteSpace: "nowrap",
              opacity: 0.5,
              cursor: "not-allowed",
            }}
          >
            View All Events
          </span>
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

        {/* Past events */}
        <div
          className="reveal"
          style={{ maxWidth: "1100px", margin: "72px auto 0" }}
        >
          <div className="section-eyebrow" style={{ textAlign: "center" }}>
            Where We've Been
          </div>
          <h3
            className="section-title"
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              textAlign: "center",
              margin: "0 auto 32px",
            }}
          >
            Past <em>Events</em>
          </h3>
          <div className="events-grid events-grid--2x2">
            {PAST_EVENTS.map((e) => (
              <div className="event-card" key={e.tag}>
                <img
                  className="event-photo"
                  src={e.img}
                  alt={e.alt}
                  loading="lazy"
                />
                <div className="event-card-top">
                  <span className="event-tag">{e.tag}</span>
                  <h3 className="event-title">{e.title}</h3>
                  <p className="event-desc">{e.desc}</p>
                </div>
                <div className="event-card-bottom">
                  <span style={{ fontSize: "13px", color: "var(--mid-gray)" }}>
                    {e.location}
                  </span>
                </div>
              </div>
            ))}
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
