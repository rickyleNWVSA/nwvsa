import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { renderDocBlock } from "../components/LegalDocument/LegalDocument.jsx";
import { ZERO_TOLERANCE_BLOCKS } from "./policiesContent.js";

/*
 * Policies — NWVSA's standing policies, in full: Zero Tolerance (bullying,
 * discrimination, harassment). Content is transcribed directly from the
 * org's actual policy doc — see policiesContent.js's header comment for how
 * (and the couple of purely presentational liberties taken for a web page,
 * like turning bare "Term is defined as..." sentences into labeled list
 * items).
 *
 * Outline matches Constitution.jsx: same intro-section shell, same shared
 * doc-article/doc-section/doc-list rendering from components/LegalDocument,
 * same Flickr-sourced photo breaking up the read — from the 2025 Leadership
 * Summit album, distinct from the ones Constitution.jsx uses (Photo1/Photo2)
 * so no page repeats an image another page already shows.
 */

function Policies() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <section style={{ background: "var(--off-white)", padding: "100px 24px 0" }}>
        <div className="section-wrap">
          <div className="section-eyebrow reveal">Governance</div>
          <h2 className="section-title reveal">
            Our <em>Policies</em>
          </h2>
          <p className="section-body reveal">
            Standards every NWVSA event and space is held to — our
            zero-tolerance policy on bullying, discrimination, and
            harassment.
          </p>
        </div>
      </section>

      <article className="doc-body">
        <figure className="doc-figure reveal" style={{ marginTop: 0 }}>
          <img
            src="/images/NWVSA_Summit2025_Photo3.jpg"
            alt="NWVSA members seated together at the 2025 Leadership Summit"
            loading="lazy"
          />
          <figcaption>NWVSA Leadership Summit, 2025</figcaption>
        </figure>

        {ZERO_TOLERANCE_BLOCKS.map((block, i) => renderDocBlock(block, `zt-${i}`))}
      </article>

      <Footer />
    </>
  );
}

export default Policies;
