import "../../styles/legalDocument.css";

/*
 * LegalDocument — shared rendering for long-form governing/policy pages
 * (Constitution, Policies). Each page supplies its own content as a flat
 * array of typed blocks (heading / para / list / table), in the shape
 * produced by extracting a Google Doc's real structure — see
 * constitutionContent.js's header comment for how that extraction works.
 * Nested lists render with real browser numbering: decimal → alpha → roman
 * (ol.doc-list ol.doc-list ...), matching standard bylaws/policy formatting.
 */

export function DocList({ block }) {
  const Tag = block.ordered ? "ol" : "ul";
  return (
    <Tag className={`doc-list${block.ordered ? "" : " is-unordered"}`}>
      {block.items.map((item, i) => (
        <li key={i}>
          {item.text}
          {item.children.map((child, j) => (
            <DocList key={j} block={child} />
          ))}
        </li>
      ))}
    </Tag>
  );
}

export function DocTable({ block }) {
  const [header, ...rows] = block.rows;
  return (
    <div className="doc-table-wrap">
      <table className="doc-table">
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

// level 1 = top-level document heading (Article / policy title), 2 = section,
// 3+ = minor subheading.
export function renderDocBlock(block, key) {
  switch (block.type) {
    case "heading":
      if (block.level === 1) {
        return (
          <h2 className="doc-article" key={key}>
            {block.text}
          </h2>
        );
      }
      if (block.level === 2) {
        return (
          <h3 className="doc-section" key={key}>
            {block.text}
          </h3>
        );
      }
      return (
        <h4 className="doc-subheading" key={key}>
          {block.text}
        </h4>
      );
    case "para":
      return (
        <p className="doc-p" key={key}>
          {block.text}
        </p>
      );
    case "list":
      return <DocList block={block} key={key} />;
    case "table":
      return <DocTable block={block} key={key} />;
    case "divider":
    default:
      return null;
  }
}
