import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Donations.css";

// Sponsor logos live in /public/images/Sponsorships. Individual named sponsors
// (no logo) are rendered as styled text instead of an image.
const SPONSORS = [
  { name: "Coalition of Communities of Color VSA", img: "/images/Sponsorships/CC-LOGO-VSA.png" },
  { name: "Fruit Riot", img: "/images/Sponsorships/Fruit Riot Logo 300x180.png" },
  { name: "Lan Chi Northwest", img: "/images/Sponsorships/LCNW LOGO LOCKUP LARGE.png" },
  { name: "OMSI", img: "/images/Sponsorships/OMSI logo.png" },
  { name: "Verve", img: "/images/Sponsorships/Verve_Logo_-_Black2x.png" },
  { name: "Whole Foods Market", img: "/images/Sponsorships/Whole Foods Market Logo.png" },
  { name: "The Frozen Bean", img: "/images/Sponsorships/the frozen bean.png" },
  { name: "Teresa Do", type: "name" },
  { name: "LeAnn Mai", type: "name" },
];

/*
 * Donations — the "support our mission" call to action.
 *
 * This is the donate section moved off the homepage. The id="donate" is kept so
 * existing deep-links (and the navbar dropdown) still land on it.
 */
function Donations() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <section className="donate-section" id="donate">
        <h2 className="donate-title reveal">
          Help us <em>empower</em> the next generation
        </h2>
        <p className="donate-sub reveal">
          Your donation directly fuels our core mission of promoting culture and
          civic engagement — sponsoring students to attend critical leadership
          camps and funding our flagship events. Together, we can create a future
          where Vietnamese identity and leadership thrive.
        </p>
        <a
          href="https://northwestvsa.com/donations-2/"
          target="_blank"
          rel="noreferrer"
          className="btn-gold reveal"
        >
          Donate to NWVSA
        </a>
      </section>

      {/* SPONSORS */}
      <section className="sponsors-section">
        <div className="sponsors-header reveal">
          <div className="section-eyebrow">Our Sponsors</div>
          <h2
            className="section-title"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Thank you to all our <em>sponsors</em>
          </h2>
        </div>
        <div className="sponsors-grid reveal">
          {SPONSORS.map((s) =>
            s.type === "name" ? (
              <div className="sponsor-card" key={s.name}>
                <span className="sponsor-name">{s.name}</span>
              </div>
            ) : (
              <div className="sponsor-card" key={s.name}>
                <img
                  className="sponsor-logo"
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                />
              </div>
            ),
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Donations;
