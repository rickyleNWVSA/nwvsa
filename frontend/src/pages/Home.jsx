import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Home.css";

/*
 * Home — the landing page.
 *
 * Home is intentionally a lean "front door": the hero + headline stats, then
 * the footer. The deeper content that used to live here has moved to the pages
 * where it belongs:
 *   - Who We Are / Goals / Mission / Schools → /about
 *   - Events                                 → /events
 *   - CPP program                            → /cpp
 *   - Donate                                 → /donations
 * The hero buttons below link out to those pages.
 */
function Home() {
  // Shared entrance animations (reveal, stagger, nav blur, stat fade-in).
  useScrollReveal();

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">Est. 2008 · Pacific Northwest</div>
        <h1 className="hero-title">
          Inspiring <em>Vietnamese</em>
          <br />
          students across the Northwest
        </h1>
        <p className="hero-sub">
          A voluntary, non-partisan community built on transformative
          leadership, experiential learning, and close-knit mentorship.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="btn-primary">
            Discover NWVSA
          </Link>
          <Link to="/donations" className="btn-outline">
            Support Our Mission
          </Link>
        </div>
      </section>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-num">
            <em>16</em>
          </div>
          <div className="stat-label">Constituent Schools</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            <em>2</em>
          </div>
          <div className="stat-label">States WA & OR</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">
            <em>17</em>
          </div>
          <div className="stat-label">Years of Impact</div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
