import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Donations.css";

// Sponsor logos live in /public/images/Sponsorships. Individual named sponsors
// (no logo) are rendered as styled text instead of an image — and intentionally
// have no `url`, since a person isn't a page to link to.
const SPONSORS = [
  { name: "Carbon Core", img: "/images/Sponsorships/CC-LOGO-VSA.png", url: "https://carboncore.supply/" },
  { name: "Fruit Riot", img: "/images/Sponsorships/Fruit Riot Logo 300x180.png", url: "https://fruitriot.com/" },
  { name: "LifeCenter Northwest", img: "/images/Sponsorships/LCNW LOGO LOCKUP LARGE.png", url: "https://lcnw.org/" },
  { name: "OMSI", img: "/images/Sponsorships/OMSI logo.png", url: "https://omsi.edu/" },
  { name: "Verve", img: "/images/Sponsorships/Verve_Logo_-_Black2x.png", url: "https://www.vervecoffee.com/" },
  { name: "Whole Foods Market", img: "/images/Sponsorships/Whole Foods Market Logo.png", url: "https://www.wholefoodsmarket.com/" },
  { name: "The Frozen Bean", img: "/images/Sponsorships/the frozen bean.png", url: "https://thefrozenbean.com/" },
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
          Your donation sponsors students at leadership camps, funds our
          flagship events, and helps build a future where Vietnamese identity
          and leadership thrive.
        </p>
        <a
          href="https://buy.stripe.com/28EaEY2ECavlcQg6qq0Ny0v"
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
          {SPONSORS.map((s) => {
            if (s.type === "name") {
              return (
                <div className="sponsor-card" key={s.name}>
                  <span className="sponsor-name">{s.name}</span>
                </div>
              );
            }
            const logo = (
              <img
                className="sponsor-logo"
                src={s.img}
                alt={s.name}
                loading="lazy"
              />
            );
            return s.url ? (
              <a
                className="sponsor-card"
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
              >
                {logo}
              </a>
            ) : (
              <div className="sponsor-card" key={s.name}>
                {logo}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Donations;
