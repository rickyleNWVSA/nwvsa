import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Donations.css";

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

      <Footer />
    </>
  );
}

export default Donations;
