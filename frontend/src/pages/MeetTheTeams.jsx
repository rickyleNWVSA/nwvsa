import { useState, useRef, useEffect } from "react";
import FlipBook from "../components/FlipBook/FlipBook";
import "./MeetTheTeams.css";
import Navbar from "../components/Navbar/Navbar.jsx";

/*
 * MeetTheTeams — a coverflow carousel of album books.
 *
 * Three albums are on screen at once; the centered one is the active board and
 * the only one you can open (click its cover) and page through. The side albums
 * are angled back in 3D — click one, or use the left/right arrows, to rotate the
 * shelf. The carousel wraps around infinitely. Each board has its own cover
 * color. The look leans into a Pacific Northwest, evergreen feel.
 *
 * The people/roles below mirror the current boards listed on northwestvsa.com
 * (Executive Board 2025–2027, Cabinet Board 2025–2026, Board of Directors
 * 2025–2030, and the Intercollegiate Council). We don't have individual
 * headshots, so `photo` uses each member's school logo (or the NWVSA logo) as a
 * placeholder — swap in real headshots dropped in /public/images when available.
 */

// Book size (px). The book opens to twice this width.
const BOOK_W = 440;
const BOOK_H = 600;
// One officer per page, so each headshot can be shown large.
const PAGE_SIZE = 1;

// NWVSA mark — shown on every cover and used as a placeholder headshot.
const LOGO = "/images/nwvsa-logo-160x157-with-white-outline-150x150.webp";

// School → logo image (used as a placeholder headshot).
const SCHOOL_IMG = {
  "University of Washington, Seattle": "/images/VSA_UW.png",
  "University of Washington, Bothell": "/images/VSA_UWBothell.jpg",
  "University of Washington, Tacoma": "/images/VSA_UWTacoma.jpg",
  "University of Oregon": "/images/VSA_UO.png",
  "University of Portland": "/images/VSA_UP.jpg",
  "Portland State University": "/images/VSA_PSU.jpg",
  "Oregon State University": "/images/VSA_OSU.png",
  "Gonzaga University": "/images/VSA_Gonzaga.jpeg",
  "Reed College": "/images/VSA_Reed.png",
  "Seattle University": "/images/VSA_SU.jpg",
  "Pacific University": "/images/VSA_PU.png",
  "Washington State University, Pullman": "/images/VSA_WSU.jpg",
  "Western Washington University": "/images/VSA_Western.png",
  "University of Puget Sound": LOGO, // no school logo on file
};

// Helper: build a Board of Directors member with their real headshot; the
// director's school is shown as the detail line.
const bod = (name, pronouns, school, file) => ({
  name,
  role: "Director",
  pronouns,
  detail: school,
  photo: `/images/Headshots/BOD/${file}`,
});

const boards = [
  {
    id: "executive",
    label: "Executive Board",
    color: "#dc143c", // crimson
    members: [
      {
        name: "An Ho",
        role: "President",
        pronouns: "He/Him/His",
        photo: "/images/Headshots/Eboard/An%20Ho%20Headshot.jpg",
      },
      {
        name: "Vinh Nguyenpham",
        role: "Internal Vice President",
        pronouns: "He/Him/His",
        photo: "/images/Headshots/Eboard/Vinh%20Nguyenpham%20Headshot.JPG",
      },
      {
        name: "Amie Le",
        role: "External Vice President",
        pronouns: "She/Her/Hers",
        photo: "/images/Headshots/Eboard/Amie%20Le%20Headshot.jpg",
      },
      {
        name: "Connie Nguyen",
        role: "Secretary",
        pronouns: "She/Her/Hers",
        photo: "/images/Headshots/Eboard/Connie%20Nguyen%20Headshot.JPEG",
      },
      {
        name: "Truc Tran",
        role: "Treasurer",
        pronouns: "He/Him/His",
        photo: "/images/Headshots/Eboard/Truc%20Tran%20Headshot.JPEG",
      },
    ],
  },
  {
    id: "cabinet",
    label: "Cabinet Board",
    color: "#2a9d8f", // teal
    members: [
      {
        name: "Baylee Do",
        role: "Community Outreach Coordinator",
        pronouns: "She/Her/Hers",
        photo: "/images/Headshots/Cabinet/Baylee%20Do%20Headshot.jpeg",
      },
      {
        name: "Brittyney Phung",
        role: "Council of Regional Representatives",
        pronouns: "She/Her/Hers",
        photo: "/images/Headshots/Cabinet/Brittyney%20Phung%20Headshot.jpg",
      },
      {
        name: "Caden Chiong",
        role: "Council of Regional Representatives",
        pronouns: "He/Him/His",
        photo: "/images/Headshots/Cabinet/Caden%20Chiong%20Headshot.jpeg",
      },
      {
        name: "Kai Hua",
        role: "Media Coordinator",
        pronouns: "He/They/His/Theirs",
        photo: "/images/Headshots/Cabinet/Kai%20Hua%20Headshot.jpg",
      },
      {
        name: "Ricky Le",
        role: "IT & Website Development",
        pronouns: "He/Him/His",
        photo: "/images/Headshots/Cabinet/Ricky%20Le%20Headshot.jpg",
      },
      {
        name: "Leon Ong",
        role: "IT & Website Development",
        pronouns: "He/Him/His",
        photo: "/images/Headshots/Cabinet/Leon%20Ong%20Headshot.JPG",
      },
    ],
  },
  {
    id: "directors",
    label: "Board of Directors",
    color: "#6a4c93", // purple
    members: [
      bod(
        "Teresa Do",
        "She/Her/Hers",
        "University of Portland",
        "Teresa-Do-Love-600x400.webp",
      ),
      bod(
        "Kim Tran",
        "She/Her/Hers",
        "University of Washington, Seattle",
        "Kim-Tran-Happiness-400x400.webp",
      ),
      bod(
        "Kevin Le",
        "He/Him/His",
        "University of Washington, Seattle",
        "Kevin-Le-Loyalty-400x600.webp",
      ),
      bod(
        "Anna Kien",
        "She/Her/Hers",
        "University of Oregon",
        "Anna-Kien-Serenity-400x400.webp",
      ),
      bod(
        "Nghia Nguyen",
        "He/Him/His",
        "University of Washington, Seattle",
        "Nghia-Nguyen-Hope-400x600.webp",
      ),
      bod(
        "Kristi Dang",
        "She/Her/Hers",
        "Western Washington University",
        "Kristi-Dang-Luck-400x400.webp",
      ),
      bod(
        "William Ho",
        "He/Him/His",
        "University of Washington, Bothell",
        "William-Ho-Secret-400x466.webp",
      ),
    ],
  },
];

// The Intercollegiate Council is large (14 chapters), so instead of a book it's
// shown as a grid of school cards — each chapter's logo plus its reps.
const ICC_SCHOOLS = [
  {
    school: "University of Washington, Seattle",
    reps: [
      { name: "Long Nguyen", role: "President" },
      { name: "May Tran", role: "External Vice President" },
      { name: "Catherine Phan", role: "Vice President of Operations" },
    ],
  },
  {
    school: "University of Washington, Bothell",
    reps: [
      { name: "Hanson Huynh", role: "President" },
      { name: "Millard Nguyen", role: "External Vice President" },
      { name: "Austin Tran", role: "Internal Vice President" },
    ],
  },
  {
    school: "University of Washington, Tacoma",
    reps: [
      { name: "Chauhan Nguyen", role: "President" },
      { name: "Katie Le", role: "Vice President" },
    ],
  },
  {
    school: "University of Oregon",
    reps: [
      { name: "Le Tran", role: "Co-President" },
      { name: "Anh Tran", role: "Co-President" },
    ],
  },
  {
    school: "University of Portland",
    reps: [
      { name: "Anna Truong-Cao", role: "President" },
      { name: "Tina Pham", role: "External Vice President" },
    ],
  },
  {
    school: "Portland State University",
    reps: [
      { name: "Megan Nguyen", role: "Co-President" },
      { name: "Roberto Raya", role: "Co-President" },
    ],
  },
  {
    school: "Oregon State University",
    reps: [
      { name: "Tina Truong", role: "Co-President" },
      { name: "Candice Vo", role: "Secretary" },
    ],
  },
  {
    school: "Pacific University",
    reps: [
      { name: "Evelien Pham", role: "President" },
      { name: "Aaron Nguyen", role: "External Vice President" },
      { name: "Henry Tran", role: "Internal Vice President" },
    ],
  },
  {
    school: "Western Washington University",
    reps: [
      { name: "Jimmy Bui", role: "Co-President" },
      { name: "Julie Le", role: "Co-President" },
      { name: "Jordan Van", role: "Vice President" },
    ],
  },
  {
    school: "Seattle University",
    reps: [
      { name: "Elizabeth Nguyen", role: "President" },
      { name: "Len Hsiung", role: "Vice President" },
    ],
  },
  {
    school: "Gonzaga University",
    reps: [
      { name: "Anh Ha", role: "President" },
      { name: "Vy Nguyen", role: "Vice President" },
    ],
  },
  {
    school: "Reed College",
    reps: [
      { name: "Tu Anh Tieu Ha", role: "Co-President" },
      { name: "Minh Anh Nguyen", role: "Co-President" },
    ],
  },
  {
    school: "Washington State University, Pullman",
    reps: [
      { name: "Phoung Bui", role: "President" },
      { name: "Kyle Ly", role: "Internal Vice President" },
      { name: "Emily Le", role: "Student Advisor" },
    ],
  },
  {
    school: "University of Puget Sound",
    reps: [
      { name: "Liberty La", role: "President" },
      { name: "Sandra Ly", role: "Vice President" },
    ],
  },
].map((s) => ({ ...s, img: SCHOOL_IMG[s.school] || LOGO }));

function TeamCard({ name, role, photo, pronouns, detail }) {
  // School / org logos are "contained" (never cropped); real headshots fill.
  const isLogo = /VSA_|nwvsa-logo/.test(photo);
  return (
    <div className="team-card">
      <div className={`team-photo${isLogo ? " team-photo--logo" : ""}`}>
        <img src={photo} alt="" />
      </div>
      <div className="team-role">{role}</div>
      <h3 className="team-name">{name}</h3>
      {pronouns ? <div className="team-pronouns">{pronouns}</div> : null}
      {detail ? <p className="team-blurb">{detail}</p> : null}
    </div>
  );
}

// One page showing up to PAGE_SIZE officers, stacked.
function TeamPage({ people }) {
  return (
    <div className="team-page">
      {people.map((m, i) => (
        <TeamCard key={i} {...m} />
      ))}
    </div>
  );
}

// Chunk a flat member list into pages of PAGE_SIZE.
function toPages(members) {
  const pages = [];
  for (let i = 0; i < members.length; i += PAGE_SIZE) {
    pages.push(<TeamPage key={i} people={members.slice(i, i + PAGE_SIZE)} />);
  }
  return pages;
}

// Signed distance from the active album, wrapped into (-n/2, n/2] so the shelf
// loops. 0 = center, ±1 = the two side albums, |off| ≥ 2 = tucked out of sight.
function relOffset(i, active, n) {
  let off = i - active;
  const half = n / 2;
  if (off > half) off -= n;
  if (off < -half) off += n;
  return off;
}

// Coverflow transform for an album at a given offset from center.
function slotStyle(off) {
  if (off === 0) {
    return {
      transform: "translateX(0) translateZ(0) rotateY(0deg) scale(1)",
      zIndex: 30,
      opacity: 1,
      filter: "none",
    };
  }
  if (Math.abs(off) === 1) {
    const dir = off > 0 ? 1 : -1;
    return {
      transform: `translateX(${dir * 82}%) translateZ(-150px) rotateY(${
        -dir * 40
      }deg) scale(0.82)`,
      zIndex: 20,
      opacity: 1,
      filter: "brightness(0.82) saturate(0.92)",
    };
  }
  // Hidden album(s): tucked behind the center one so rotating in reads cleanly.
  return {
    transform: "translateX(0) translateZ(-520px) scale(0.5)",
    zIndex: 0,
    opacity: 0,
    filter: "brightness(0.7)",
    pointerEvents: "none",
  };
}

export default function MeetTheTeams() {
  const [activeIndex, setActiveIndex] = useState(0);
  const n = boards.length;
  const active = boards[activeIndex];

  // Rotate the shelf by one, wrapping around in either direction.
  const rotate = (dir) => setActiveIndex((i) => (i + dir + n) % n);

  // A book that jumps across the wrap seam (e.g. left slot → right slot) should
  // snap instead of sliding all the way across, so suppress its transition on
  // that frame. Compare each book's new offset to its previous one.
  const offs = boards.map((_, i) => relOffset(i, activeIndex, n));
  const prevOffs = useRef(offs);
  const wrapped = offs.map((off, i) => Math.abs(off - prevOffs.current[i]) > 1);
  useEffect(() => {
    prevOffs.current = offs;
  });

  return (
    <>
      <Navbar />
      <main className="teams-page">
        <header className="teams-head">
          <div className="teams-eyebrow">Get to know us</div>
          <h1 className="teams-title">Meet the Teams</h1>
          <p className="teams-hint">
            Use the arrows to rotate the shelf, then click the center album to
            open it.
          </p>
        </header>

        <div
          className="tc"
          style={{ "--book-w": `${BOOK_W}px`, "--book-h": `${BOOK_H}px` }}
        >
          <button
            type="button"
            className="tc-arrow"
            aria-label="Previous board"
            onClick={() => rotate(-1)}
          >
            ‹
          </button>

          <div className="tc-viewport">
            <div className="tc-stage">
              {boards.map((b, i) => {
                const off = offs[i];
                const isCenter = off === 0;
                const style = slotStyle(off);
                if (wrapped[i]) style.transition = "none";
                return (
                  <div
                    key={b.id}
                    className={`tc-slot${isCenter ? " is-center" : ""}`}
                    style={style}
                    onClick={isCenter ? undefined : () => setActiveIndex(i)}
                    aria-hidden={!isCenter}
                  >
                    <FlipBook
                      /* remount (closed) whenever the shelf rotates */
                      key={`${b.id}-${activeIndex}`}
                      id={b.id}
                      title={b.label}
                      subtitle="NWVSA"
                      color={b.color}
                      logo={LOGO}
                      width={BOOK_W}
                      height={BOOK_H}
                      pages={toPages(b.members)}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="tc-arrow"
            aria-label="Next board"
            onClick={() => rotate(1)}
          >
            ›
          </button>
        </div>

        <div className="tc-caption" style={{ "--dot": active.color }}>
          <span className="tc-dot" />
          {active.label}
        </div>

        {/* Intercollegiate Council — chapter-forward layout echoing the
            original site: each constituent VSA led by its logo. */}
        <section className="icc" aria-label="Intercollegiate Council">
          <div className="icc-head">
            <div className="teams-eyebrow">Across the region</div>
            <h2 className="icc-title">Intercollegiate Council</h2>
            <p className="icc-sub">
              The ICC creates a diverse, visible representation of active
              Vietnamese Student Association chapters across the Pacific
              Northwest — a strong network of developing leaders and
              contributors to NWVSA.
            </p>
          </div>
          <div className="icc-grid">
            {ICC_SCHOOLS.map((s) => (
              <div className="icc-card" key={s.school}>
                <div className="icc-logo">
                  <img src={s.img} alt={`${s.school} logo`} loading="lazy" />
                </div>
                <h3 className="icc-school">{s.school}</h3>
                <ul className="icc-reps">
                  {s.reps.map((r) => (
                    <li key={r.name}>
                      <span className="icc-role">{r.role}</span>
                      <span className="icc-name">{r.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
