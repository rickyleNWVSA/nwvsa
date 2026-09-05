import { useMemo, useState } from "react";
import FlipBook from "../components/FlipBook/FlipBook";
import "./AlbumCarouselDemo.css";

/*
 * AlbumCarouselDemo — 3D ring carousel of REAL photo-album FlipBooks.
 *
 * Same turntable idea as before (panels placed around a ring with
 * rotateY(step*i) translateZ(radius); the ring rotates to face the picked one),
 * but each panel is now an actual FlipBook album instead of a flat cover:
 *   - The albums don't move on their own — the ring rotates them.
 *   - The album at the FRONT is interactive: click its cover to open and page
 *     through the officers (2 per page).
 *   - Any other album is click-to-select: clicking it spins the ring so it
 *     comes to the front. The ring always takes the shortest path.
 *
 * Standalone (own data + card styles) so it stays separate from MeetTheTeams.
 * Route: /carousel-demo
 */

const BOOK_W = 300; // album width  (px)
const BOOK_H = 440; // album height (px)
const PAGE_SIZE = 2; // officers per page

const boards = [
  {
    id: "d-executive",
    label: "Executive Board",
    color: "#dc143c",
    clr: "220,20,60",
    members: [
      { name: "First Last", role: "President", photo: "/images/VSA_UW.png", blurb: "Placeholder bio — a line or two about this person." },
      { name: "First Last", role: "Vice President", photo: "/images/VSA_UO.png", blurb: "Placeholder bio — swap in the real copy later." },
      { name: "First Last", role: "Secretary", photo: "/images/VSA_PSU.jpg", blurb: "Placeholder bio — keep it short and sweet." },
      { name: "First Last", role: "Treasurer", photo: "/images/VSA_OSU.png", blurb: "Placeholder bio — a fun fact could go here." },
    ],
  },
  {
    id: "d-cabinet",
    label: "Cabinet Board",
    color: "#2a9d8f",
    clr: "42,157,143",
    members: [
      { name: "First Last", role: "Events Lead", photo: "/images/VSA_UP.jpg", blurb: "Placeholder bio — one to two lines." },
      { name: "First Last", role: "Marketing Lead", photo: "/images/VSA_SU.jpg", blurb: "Placeholder bio — describe their role." },
      { name: "First Last", role: "Media Lead", photo: "/images/VSA_Reed.png", blurb: "Placeholder bio — replace me." },
      { name: "First Last", role: "Operations Lead", photo: "/images/VSA_Gonzaga.jpeg", blurb: "Placeholder bio — replace me." },
    ],
  },
  {
    id: "d-directors",
    label: "Board of Directors",
    color: "#6a4c93",
    clr: "106,76,147",
    members: [
      { name: "First Last", role: "Director", photo: "/images/VSA_UW.png", blurb: "Placeholder bio — replace me." },
      { name: "First Last", role: "Director", photo: "/images/VSA_UO.png", blurb: "Placeholder bio — replace me." },
      { name: "First Last", role: "Director", photo: "/images/VSA_PSU.jpg", blurb: "Placeholder bio — replace me." },
      { name: "First Last", role: "Director", photo: "/images/VSA_OSU.png", blurb: "Placeholder bio — replace me." },
    ],
  },
  {
    id: "d-council",
    label: "Intercollegiate Council",
    color: "#e08a1e",
    clr: "224,138,30",
    members: [
      { name: "First Last", role: "UW Rep", photo: "/images/VSA_UW.png", blurb: "Placeholder bio — replace me." },
      { name: "First Last", role: "UO Rep", photo: "/images/VSA_UO.png", blurb: "Placeholder bio — replace me." },
      { name: "First Last", role: "OSU Rep", photo: "/images/VSA_OSU.png", blurb: "Placeholder bio — replace me." },
      { name: "First Last", role: "PSU Rep", photo: "/images/VSA_PSU.jpg", blurb: "Placeholder bio — replace me." },
    ],
  },
];

function TeamCard({ name, role, photo, blurb }) {
  return (
    <div className="acd-card">
      <div className="acd-card-photo">
        <img src={photo} alt="" />
      </div>
      <div className="acd-card-role">{role}</div>
      <h3 className="acd-card-name">{name}</h3>
      <p className="acd-card-blurb">{blurb}</p>
    </div>
  );
}

// One page (leaf face) with up to PAGE_SIZE officers, stacked.
function TeamPage({ people }) {
  return (
    <div className="acd-page-spread">
      {people.map((m, i) => (
        <TeamCard key={i} {...m} />
      ))}
    </div>
  );
}

function toPages(members) {
  const pages = [];
  for (let i = 0; i < members.length; i += PAGE_SIZE) {
    pages.push(<TeamPage key={i} people={members.slice(i, i + PAGE_SIZE)} />);
  }
  return pages;
}

export default function AlbumCarouselDemo() {
  const count = boards.length;
  const step = 360 / count;

  // Radius so neighbouring albums don't overlap, plus breathing room.
  const radius = useMemo(
    () => Math.round(BOOK_W / 2 / Math.tan(Math.PI / count)) + 140,
    [count]
  );

  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const activeId = boards[active].id;

  function goTo(index) {
    const base = -step * index;
    const target = base + 360 * Math.round((rotation - base) / 360);
    setActive(index);
    setRotation(target);
  }

  return (
    <main className="acd-page">
      <header className="acd-head">
        <div className="acd-eyebrow">Prototype</div>
        <h1 className="acd-title">Board Album Carousel</h1>
        <p className="acd-hint">
          Click a board to spin its album to the front, then open the album to
          flip through the officers.
        </p>
      </header>

      {/* Board tabs — each rotates the ring to its album */}
      <div className="acd-tabs" role="tablist" aria-label="Board type">
        {boards.map((b, i) => (
          <button
            key={b.id}
            role="tab"
            type="button"
            aria-selected={i === active}
            className={`acd-tab${i === active ? " is-active" : ""}`}
            style={{ "--clr": b.clr }}
            onClick={() => goTo(i)}
          >
            <span className="acd-tab-dot" />
            {b.label}
          </button>
        ))}
      </div>

      {/* 3D turntable of album books */}
      <div className="acd-scene" style={{ "--w": `${BOOK_W}px`, "--h": `${BOOK_H}px` }}>
        <div
          className="acd-ring"
          style={{
            "--radius": `${radius}px`,
            transform: `translateZ(calc(-1 * var(--radius))) rotateX(-4deg) rotateY(${rotation}deg)`,
          }}
        >
          {boards.map((b, i) => {
            const isActive = i === active;
            return (
              <div
                key={b.id}
                className={`acd-slot${isActive ? " is-active" : ""}`}
                style={{
                  "--clr": b.clr,
                  transform: `rotateY(${step * i}deg) translateZ(var(--radius))`,
                }}
                // Non-front albums select (spin ring); the front album's own
                // cover/labels handle clicks (open + flip).
                onClick={isActive ? undefined : () => goTo(i)}
              >
                <FlipBook
                  key={`${b.id}-${activeId}`}
                  id={b.id}
                  title={b.label}
                  subtitle="NWVSA · 2026"
                  color={b.color}
                  width={BOOK_W}
                  height={BOOK_H}
                  pages={toPages(b.members)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
