import './FlipBook.css'

/*
 * FlipBook — a framework-free, CSS-driven page-turn "book".
 *
 * How it works (no JS animation, pure CSS):
 *  - Each physical leaf has a hidden checkbox. A full-face <label> toggles it.
 *  - When checked, a generated CSS rule rotates the leaf 180° (page turn) and
 *    bumps its z-index so it lands correctly on the left-hand stack.
 *
 * Props:
 *  - id       : REQUIRED-ish unique string. Every element id and every generated
 *               CSS selector is namespaced with it, so you can render MANY
 *               FlipBooks on one screen (e.g. inside a carousel).
 *  - title / subtitle : text on the front cover.
 *  - color    : cover base color (a gradient is derived from it).
 *  - width / height   : book size in px (drives leaves + open-cover offset).
 *  - pages    : a flat array of React nodes. Two consecutive entries become the
 *               front and back of one physical leaf.
 */
export default function FlipBook({
  id = 'fb',
  title = 'Meet the Teams',
  subtitle = 'NWVSA',
  color = '#dc143c',
  logo = null,
  width = 380,
  height = 580,
  pages = [],
}) {
  // Group the flat pages array into physical leaves (front + back).
  const leaves = []
  for (let i = 0; i < pages.length; i += 2) {
    leaves.push({ front: pages[i], back: pages[i + 1] ?? null })
  }
  const n = leaves.length
  const stageId = `${id}-stage`

  // Per-leaf stacking + flip rules, all scoped to this instance's stage id.
  //   restZ : higher for earlier leaves so leaf 1 sits on top of the right stack.
  //   flipZ : higher for later leaves so the last-flipped leaf sits on top of
  //           the left stack. All values stay below the cover (99) / above back.
  const leafCss = leaves
    .map((_, idx) => {
      const i = idx + 1
      const restZ = n - i + 1
      const flipZ = n + i
      return (
        `#${stageId} .leaf-${i}{z-index:${restZ};}\n` +
        `#${stageId} input#${id}-leaf-${i}-toggle:checked ~ .flipbook .leaf-${i}` +
        `{transform:rotateY(-180deg);z-index:${flipZ};}`
      )
    })
    .join('\n')

  // Open-the-cover rules (scoped): slide the book right so the open spread stays
  // centered, and swing the front cover open.
  const coverCss =
    `#${stageId} input#${id}-cover-toggle:checked ~ .flipbook` +
    `{transform:translateX(calc(var(--book-w) / 2));}\n` +
    `#${stageId} input#${id}-cover-toggle:checked ~ .flipbook .front-cover` +
    `{transform:rotateY(-180deg);transition:transform 1.5s,z-index .5s .5s;z-index:1;}`

  return (
    <div
      className="flipbook-stage"
      id={stageId}
      style={{
        '--book-w': `${width}px`,
        '--book-h': `${height}px`,
        '--cover-color': color,
      }}
    >
      {/* generated stacking/flip/cover rules, scoped to this instance */}
      <style>{`${leafCss}\n${coverCss}`}</style>

      {/* Hidden toggles — must be siblings of .flipbook for the CSS ~ selector. */}
      <input type="checkbox" className="flip-toggle" id={`${id}-cover-toggle`} />
      {leaves.map((_, idx) => (
        <input
          key={idx}
          type="checkbox"
          className="flip-toggle"
          id={`${id}-leaf-${idx + 1}-toggle`}
        />
      ))}

      <div className="flipbook">
        {/* FRONT COVER */}
        <div className="front-cover">
          <label htmlFor={`${id}-cover-toggle`} aria-label="Open book" />
          {/* Content sits on its own face that hides when the cover flips open,
              so the title/logo never show up mirrored on the back. */}
          <div className="cover-face">
            {logo ? <img className="cover-logo" src={logo} alt="" /> : null}
            <div className="cover-eyebrow">{subtitle}</div>
            <h2 className="cover-title">{title}</h2>
            <div className="cover-hint">Click to open ▸</div>
          </div>
        </div>

        {/* LEAVES */}
        {leaves.map((leaf, idx) => {
          const i = idx + 1
          return (
            <div className={`leaf leaf-${i}`} key={i}>
              <div className="leaf-face front">
                <label htmlFor={`${id}-leaf-${i}-toggle`} aria-label="Turn page" />
                <div className="leaf-content">{leaf.front}</div>
              </div>
              <div className="leaf-face back">
                <label htmlFor={`${id}-leaf-${i}-toggle`} aria-label="Previous page" />
                <div className="leaf-content">{leaf.back}</div>
              </div>
            </div>
          )
        })}

        {/* BACK COVER */}
        <div className="back-cover">
          <div className="cover-eyebrow">{subtitle}</div>
          <div className="cover-hint">The End</div>
        </div>
      </div>
    </div>
  )
}
