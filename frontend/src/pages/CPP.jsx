import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";

/*
 * CPP — the Collective Philanthropy Project.
 *
 * Content mirrors northwestvsa.com/cpp. CPP is NWVSA's philanthropy initiative
 * run in partnership with UNAVSA: it helps North American Vietnamese nonprofits
 * achieve their mission through collective, collaborative fundraising. The page
 * reuses the homepage design-system classes (about layout, goals grid, event
 * cards) so it matches the rest of the site.
 */

// The four phases of a CPP cycle.
const COMPONENTS = [
  {
    title: "Selection",
    desc: "Nonprofits apply, and the top applicants are voted on at UNAVSA's Annual Leadership Conference to become the year's beneficiary.",
  },
  {
    title: "Campaign",
    desc: "Regions raise awareness and drive fundraising on behalf of the selected beneficiary organization.",
  },
  {
    title: "Audit",
    desc: "Funds are tracked to ensure they are appropriately distributed and that the project reaches completion.",
  },
  {
    title: "Engagement",
    desc: "Relationships with past beneficiaries are maintained and the real-world impact of each project is showcased.",
  },
];

// Beneficiary organizations by cycle (most recent first).
const BENEFICIARIES = [
  {
    year: "2025–2026",
    name: "Vietnam Assistance for the Handicapped (VNAH)",
    desc: "Supporting vocational rehabilitation and training for children with disabilities through a café/canteen model in Ho Chi Minh City.",
  },
  {
    year: "2024–2025",
    name: "Vietnam Health Clinic",
    desc: "Expanding mobile health services for communities across rural Central Vietnam.",
  },
  {
    year: "2023–2024",
    name: "Rock-Paper-Scissors Children's Fund",
    desc: "Providing arts education for underprivileged children in Vietnam.",
  },
];

function CPP() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      {/* INTRO */}
      <section
        id="cpp"
        style={{ background: "var(--off-white)", padding: "100px 24px" }}
      >
        <div className="section-wrap">
          <div className="about reveal">
            <div>
              <div className="section-eyebrow">Collective Philanthropy Project</div>
              <h2 className="section-title">
                Giving back, <em>together</em>
              </h2>
              <p className="section-body">
                The Collective Philanthropy Project (CPP) assists North American
                Vietnamese nonprofit and philanthropic organizations to better
                achieve their mission through collective and collaborative
                partnership with UNAVSA. Each year, students and community
                organizations rally behind a single beneficiary — raising
                awareness, funds, and lasting support.
              </p>
              <div style={{ marginTop: "36px" }}>
                <a
                  href="https://northwestvsa.com/cpp/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "14px", padding: "12px 28px" }}
                >
                  Learn More →
                </a>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="about-card-accent"></div>
                <p className="about-card-text">
                  "Assisting North American Vietnamese nonprofit organizations to
                  better achieve their mission through collective and
                  collaborative partnership."
                </p>
                <div className="about-card-footer">In partnership with UNAVSA</div>
              </div>
              <div className="about-year-badge">CPP</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW CPP WORKS */}
      <section className="goals-section">
        <div className="goals-header reveal">
          <div className="section-eyebrow">How It Works</div>
          <h2
            className="section-title"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Four steps of <em>collective giving</em>
          </h2>
        </div>
        <div className="goals-grid reveal">
          {COMPONENTS.map((c) => (
            <div className="goal-card" key={c.title}>
              <h3 className="goal-title">{c.title}</h3>
              <p className="goal-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FELLOWSHIP */}
      <section className="mission-section">
        <div className="mission-quote reveal">
          The CPP Fellowship is a 3-month personalized experience that places
          fellows with a beneficiary organization — offering hands-on nonprofit
          experience, skill development, and a stipend.
        </div>
        <div className="mission-attr reveal" style={{ animationDelay: "0.2s" }}>
          Open to anyone within the UNAVSA space
        </div>
      </section>

      {/* BENEFICIARIES */}
      <section className="events-section">
        <div className="events-header reveal">
          <div>
            <div className="section-eyebrow">Beneficiaries</div>
            <h2 className="section-title">
              Who we've <em>supported</em>
            </h2>
          </div>
        </div>
        <div className="events-grid reveal">
          {BENEFICIARIES.map((b) => (
            <div className="event-card" key={b.year}>
              <div className="event-card-top">
                <span className="event-tag">{b.year}</span>
                <h3 className="event-title">{b.name}</h3>
                <p className="event-desc">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CPP;
