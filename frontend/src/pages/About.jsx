import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./About.css";

/*
 * About — "who we are" and "what we do".
 *
 * This page collects the identity-focused content that used to live on the
 * homepage: the About intro, the three goal pillars, the mission quote, and the
 * constituent-schools grid. Section ids (#about, #goals, #schools) are kept so
 * the navbar's dropdown can still deep-link straight to each block.
 */

// Each chapter's own Instagram handle — verified live before linking (not
// guessed): fetched each profile and confirmed its page title names the
// right school's VSA before adding it here.
const SCHOOLS = [
  { name: "University of Washington, Seattle", handle: "vsauw" },
  { name: "University of Washington, Bothell", handle: "vsauwb" },
  { name: "University of Washington, Tacoma", handle: "uwtvsa" },
  { name: "University of Oregon", handle: "uovsa" },
  { name: "University of Portland", handle: "upvsa" },
  { name: "Portland State University", handle: "psuvsa" },
  { name: "University of Puget Sound", handle: "vsaups" },
  { name: "Oregon State University", handle: "vsaatosu" },
  { name: "Gonzaga University", handle: "gu_vsa" },
  { name: "Reed College", handle: "vsareed" },
  { name: "Seattle University", handle: "su.vsa" },
  { name: "Pacific University", handle: "pacuvsa" },
  { name: "Washington State University", handle: "wsuvsa" },
  { name: "WSU Vancouver", handle: "wsuvvsa" },
  { name: "Western Washington University", handle: "wwuvsa" },
  { name: "Lewis & Clark College", handle: "vsa_lc" },
  { name: "Green River College", handle: "vsagrc" },
];

function About() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      {/* ABOUT */}
      <section
        id="about"
        style={{ background: "var(--off-white)", padding: "100px 24px" }}
      >
        <div className="section-wrap">
          <div className="about reveal" style={{ alignItems: "start" }}>
            <div>
              <div className="section-eyebrow">Who We Are</div>
              <h2 className="section-title">
                About <em>NWVSA</em>
              </h2>
              <p className="section-body">
                Founded in 2008, the Northwest Vietnamese Student Association
                (NWVSA) is a voluntary, non-partisan, community-based 501(c)(3)
                nonprofit made up of students and young leaders. We help people
                develop personally, reconnect with their Vietnamese heritage,
                and engage in community service — creating inclusive spaces
                where members feel valued and empowered through cultural
                celebrations, leadership training, and volunteer initiatives.
              </p>

              {/* Mission statement, stacked under the About text */}
              <div className="about-card" style={{ marginTop: "32px" }}>
                <div className="about-card-accent"></div>
                <p className="about-card-text">
                  "Fostering experiential learning, cultural self-reflection,
                  and relationship building for community development in and
                  among our constituent schools."
                </p>
                <div className="about-card-footer">NWVSA Mission Statement</div>
              </div>
            </div>

            {/* Photo on the right */}
            <div className="about-visual">
              <img
                className="photo-frame"
                src="/images/NWVSA_MissionValues_Photo.webp"
                alt="NWVSA members celebrating on stage in áo dài"
                loading="lazy"
              />
              <div className="about-year-badge">Founded 2008</div>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="goals-section" id="goals">
        <div className="goals-header reveal">
          <div className="section-eyebrow">What We Do</div>
          <h2
            className="section-title"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Three pillars of <em>our purpose</em>
          </h2>
        </div>
        <div className="goals-grid reveal">
          <div className="goal-card">
            <div className="goal-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="goal-title">Experiential Leadership</h3>
            <p className="goal-desc">
              Helping students gain hands-on experience through leadership
              opportunities and networking events across the Pacific Northwest
              region.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="goal-title">Cultural Recognition</h3>
            <p className="goal-desc">
              Recognizing and encouraging growth of leadership and service to
              the Vietnamese community, honoring heritage through every
              initiative.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="goal-title">Regional Network</h3>
            <p className="goal-desc">
              Bringing together students and young professionals to build a
              strong network and sense of community throughout the Northwest
              region.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="mission-section">
        <div className="mission-quote reveal">
          Empowering and developing students and professionals within the
          Vietnamese community through transformative leadership, experiential
          learning, and collaborative networking.
        </div>
        <div className="mission-attr reveal" style={{ animationDelay: "0.2s" }}>
          Northwest Vietnamese Student Association
        </div>
      </section>

      {/* VISION */}
      <section style={{ background: "var(--white)", padding: "100px 24px" }}>
        <div className="about-split reveal">
          <div>
            <div className="section-eyebrow">Our Vision</div>
            <h2 className="section-title">
              Community & cultural empowerment through <em>shared leadership</em>
            </h2>
            <p className="section-body" style={{ marginTop: "20px" }}>
              Rather than merely maintaining traditions, NWVSA builds platforms
              where younger generations can embrace their identities
              authentically. Through mentorship, teamwork, and transparent
              discussion, we encourage individuals to step into leadership that
              reflects their cultural background and distinct viewpoints —
              developing a resilient, unified community ready to contribute
              meaningfully to society.
            </p>
          </div>
          <figure>
            <img
              className="photo-frame"
              src="/images/NWVSA_Vision_Photo.webp"
              alt="NWVSA members smiling together with peace signs"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="schools-section" id="schools">
        <div className="schools-header reveal">
          <div className="section-eyebrow">Our Community</div>
          <h2
            className="section-title"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            17 schools, <em>one family</em>
          </h2>
          <p
            style={{
              marginTop: "16px",
              color: "var(--mid-gray)",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Our largest cohort yet — a diverse network of Vietnamese Student
            Associations across the Pacific Northwest.
          </p>
        </div>
        <figure
          className="media-band reveal"
          style={{ marginBottom: "56px" }}
        >
          <img
            className="photo-frame"
            src="/images/NWVSA_Homepage_Funny.webp"
            alt="The full NWVSA community posing together"
            loading="lazy"
          />
        </figure>
        <div className="schools-grid reveal">
          {SCHOOLS.map((s) => (
            <div className="school-chip" key={s.name}>
              {s.name}
              {s.handle ? (
                <a
                  className="school-abbr"
                  href={`https://www.instagram.com/${s.handle}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  @{s.handle}
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
