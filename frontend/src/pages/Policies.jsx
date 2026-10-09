import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { renderDocBlock } from "../components/LegalDocument/LegalDocument.jsx";
import { ZERO_TOLERANCE_BLOCKS, COVID_BLOCKS } from "./policiesContent.js";

/*
 * Policies — NWVSA's standing policies, in full: Zero Tolerance (bullying,
 * discrimination, harassment) and the 2026 Camp Solstice COVID-19 safety
 * policy. Content is transcribed directly from the org's actual policy
 * docs — see policiesContent.js's header comment for how (and the couple of
 * purely presentational liberties taken for a web page, like turning bare
 * "Term is defined as..." sentences into labeled list items).
 *
 * Outline matches Constitution.jsx: same intro-section shell, same shared
 * doc-article/doc-section/doc-list rendering from components/LegalDocument,
 * same Flickr-sourced photos breaking up the read. All three photos here are
 * from the 2025 Leadership Summit album, but distinct files from the two
 * Constitution.jsx uses (Photo1/Photo2) — no page repeats an image another
 * page already shows.
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
            harassment, and our COVID-19 safety policy for NWVSA Camp
            Solstice.
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

        <figure className="doc-figure reveal">
          <img
            src="/images/NWVSA_Summit2025_Photo4.jpg"
            alt="NWVSA members dancing together at the 2025 Leadership Summit"
            loading="lazy"
          />
          <figcaption>NWVSA Leadership Summit, 2025</figcaption>
        </figure>

        {COVID_BLOCKS.map((block, i) => {
          const nodes = [];
          if (block.type === "heading" && block.level === 1 && block.text === "Waiver Form") {
            nodes.push(
              <figure className="doc-figure reveal" key={`${i}-photo`}>
                <img
                  src="/images/NWVSA_Summit2025_Photo5.jpg"
                  alt="NWVSA member celebrating with the group at the 2025 Leadership Summit"
                  loading="lazy"
                />
                <figcaption>NWVSA Leadership Summit, 2025</figcaption>
              </figure>,
            );
          }
          nodes.push(renderDocBlock(block, `cv-${i}`));
          return nodes;
        })}
      </article>

      <Footer />
    </>
  );
}

export default Policies;
