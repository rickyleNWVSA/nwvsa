import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import CONSTITUTION_BLOCKS from "./constitutionContent.js";
import "./Constitution.css";

/*
 * Constitution — NWVSA's governing document, in full.
 *
 * Content is extracted from the org's actual Google Doc constitution, not
 * paraphrased. The doc's plain-text export flattens every list-nesting level
 * back to "1." (each level has its own counter), so constitutionContent.js
 * was rebuilt from the doc's real indentation (margin-left per item) instead
 * — see that file's extraction notes. Two photos from the NWVSA Flickr
 * (2025 Leadership Summit) break up the long read; none of the doc's own
 * embedded images are reused here.
 *
 * A couple of numbering quirks are preserved exactly as written in the
 * source document rather than "fixed" by us — e.g. Article III's four
 * sections are followed directly by Article V (no Article IV exists in the
 * source). This is NWVSA's actual adopted constitution, so renumbering it
 * isn't ours to do.
 */

// Insert the second photo right before this heading, as a breather partway
// through the document (first photo sits in the intro).
const SECOND_PHOTO_BEFORE = "ARTICLE IX - Amendments";

function ConstitutionList({ block }) {
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <Tag className={`constitution-list${block.ordered ? "" : " is-unordered"}`}>
      {block.items.map((item, i) => (
        <li key={i}>
          {item.text}
          {item.children.map((child, j) => (
            <ConstitutionList key={j} block={child} />
          ))}
        </li>
      ))}
    </Tag>
  );
}

function ConstitutionTable({ block }) {
  const [header, ...rows] = block.rows;
  return (
    <div className="constitution-table-wrap">
      <table className="constitution-table">
        <thead>
          <tr>
            {header.map((cell, i) => (
              <th key={i}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderBlock(block, key) {
  switch (block.type) {
    case "heading":
      if (block.level === 1) {
        return (
          <h2 className="constitution-article" key={key}>
            {block.text}
          </h2>
        );
      }
      if (block.level === 2) {
        return (
          <h3 className="constitution-section" key={key}>
            {block.text}
          </h3>
        );
      }
      return (
        <h4 className="constitution-office" key={key}>
          {block.text}
        </h4>
      );
    case "para":
      return (
        <p className="constitution-p" key={key}>
          {block.text}
        </p>
      );
    case "list":
      return <ConstitutionList block={block} key={key} />;
    case "table":
      return <ConstitutionTable block={block} key={key} />;
    case "divider":
    default:
      return null;
  }
}

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

      <article className="constitution-body">
        <figure className="constitution-figure reveal" style={{ marginTop: 0 }}>
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
              <figure className="constitution-figure reveal" key={`${i}-photo`}>
                <img
                  src="/images/NWVSA_Summit2025_Photo2.jpg"
                  alt="NWVSA members celebrating together at the 2025 Leadership Summit"
                  loading="lazy"
                />
                <figcaption>NWVSA Leadership Summit, 2025</figcaption>
              </figure>,
            );
          }
          nodes.push(renderBlock(block, i));
          return nodes;
        })}
      </article>

      <Footer />
    </>
  );
}

export default Constitution;
