import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { renderDocBlock } from "../components/LegalDocument/LegalDocument.jsx";
import CONSTITUTION_BLOCKS from "./constitutionContent.js";

/*
 * Constitution — NWVSA's governing document, in full.
 *
 * Content is extracted from the org's actual Google Doc constitution, not
 * paraphrased. The doc's plain-text export flattens every list-nesting level
 * back to "1." (each level has its own counter), so constitutionContent.js
 * was rebuilt from the doc's real indentation (margin-left per item) instead
 * — see that file's extraction notes. Two photos from the NWVSA Flickr
 * (2025 Leadership Summit) break up the long read; none of the doc's own
 * embedded images are reused here. Rendering (doc-article/doc-list/etc.) is
 * shared with Policies.jsx via components/LegalDocument.
 *
 * The source document's Articles jump from III straight to V (no IV, likely
 * a leftover from a past amendment that was never renumbered) — renumbered
 * here to run I–XII with no gap, updating every internal cross-reference
 * ("as defined in Article X, Section I", etc.) to match. Section numbers
 * within each Article are untouched, since those weren't affected.
 */

// Insert the second photo right before this heading, as a breather partway
// through the document (first photo sits in the intro).
const SECOND_PHOTO_BEFORE = "ARTICLE VIII - Amendments";

function Constitution() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      <section style={{ background: "var(--off-white)", padding: "100px 24px 0" }}>
        <div className="section-wrap">
          <div className="section-eyebrow reveal">Governance</div>
          <h2 className="section-title reveal">
            The <em>Constitution</em>
          </h2>
          <p className="section-body reveal">
            NWVSA's governing document — how the organization is structured,
            how its boards are elected, and how decisions get made. In full,
            as adopted.
          </p>
        </div>
      </section>

      <article className="doc-body">
        <figure className="doc-figure reveal" style={{ marginTop: 0 }}>
          <img
            src="/images/NWVSA_Summit2025_Photo1.jpg"
            alt="NWVSA members on stage together at the 2025 Leadership Summit"
            loading="lazy"
          />
          <figcaption>NWVSA Leadership Summit, 2025</figcaption>
        </figure>

        {CONSTITUTION_BLOCKS.map((block, i) => {
          const nodes = [];
          if (block.type === "heading" && block.level === 1 && block.text === SECOND_PHOTO_BEFORE) {
            nodes.push(
              <figure className="doc-figure reveal" key={`${i}-photo`}>
                <img
                  src="/images/NWVSA_Summit2025_Photo2.jpg"
                  alt="NWVSA members celebrating together at the 2025 Leadership Summit"
                  loading="lazy"
                />
                <figcaption>NWVSA Leadership Summit, 2025</figcaption>
              </figure>,
            );
          }
          nodes.push(renderDocBlock(block, i));
          return nodes;
        })}
      </article>

      <Footer />
    </>
  );
}

export default Constitution;
