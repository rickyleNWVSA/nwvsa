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
 *  - title / subtitle : text on the front cover.
 *  - pages            : a flat array of React nodes. Two consecutive entries
 *                       become the front and back of one physical leaf
 *                       (pages[0] = leaf 1 front, pages[1] = leaf 1 back, ...).
 *
 * NOTE: it uses fixed element ids, so render only ONE FlipBook per screen.
 */
export default function FlipBook({ title = 'Meet the Teams', subtitle = 'NWVSA', pages = [] }) {
  // Group the flat pages array into physical leaves (front + back).
  const leaves = []
  for (let i = 0; i < pages.length; i += 2) {
    leaves.push({ front: pages[i], back: pages[i + 1] ?? null })
  }
  const n = leaves.length

  // Generate the per-leaf stacking + flip rules.
  //   restZ : higher for earlier leaves so leaf 1 sits on top of the right stack.
  //   flipZ : higher for later leaves so the last-flipped leaf sits on top of
  //           the left stack. All values stay below the cover (99) / above back cover.
  const generatedCss = leaves
    .map((_, idx) => {
      const i = idx + 1
      const restZ = n - i + 1
      const flipZ = n + i
      return (
        `.flipbook .leaf-${i}{z-index:${restZ};}\n` +
        `.flipbook-stage input#leaf-${i}-toggle:checked ~ .flipbook .leaf-${i}` +
        `{transform:rotateY(-180deg);z-index:${flipZ};}`
      )
    })
    .join('\n')

  return (
    <div className="flipbook-stage">
      {/* generated stacking/flip rules for however many leaves we have */}
      <style>{generatedCss}</style>

      {/* Hidden toggles — must be siblings of .flipbook for the CSS ~ selector. */}
      <input type="checkbox" className="flip-toggle" id="cover-toggle" />
      {leaves.map((_, idx) => (
        <input key={idx} type="checkbox" className="flip-toggle" id={`leaf-${idx + 1}-toggle`} />
      ))}

      <div className="flipbook">
        {/* FRONT COVER */}
        <div className="front-cover">
          <label htmlFor="cover-toggle" aria-label="Open book" />
          <div className="cover-eyebrow">{subtitle}</div>
          <h2 className="cover-title">{title}</h2>
          <div className="cover-hint">Click to open ▸</div>
        </div>

        {/* LEAVES */}
        {leaves.map((leaf, idx) => {
          const i = idx + 1
          return (
            <div className={`leaf leaf-${i}`} key={i}>
              <div className="leaf-face front">
                {/* Full-face flip target. To keep card links clickable instead,
                    replace inset:0 with a small corner hit-area in FlipBook.css. */}
                <label htmlFor={`leaf-${i}-toggle`} aria-label="Turn page" />
                <div className="leaf-content">{leaf.front}</div>
              </div>
              <div className="leaf-face back">
                <label htmlFor={`leaf-${i}-toggle`} aria-label="Previous page" />
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
