import { useState } from "react";
import FlipBook from "../components/FlipBook/FlipBook";
import "./MeetTheTeams.css";
import Navbar from "../components/Navbar/Navbar.jsx";

/*
 * MeetTheTeams — one openable scrapbook with tabs.
 *
 * A single kraft-brown scrapbook sits closed on the page; click the cover to
 * open it and page through the members. The tab row above it switches which
 * board the book shows (the book remounts closed when you switch, so you open
 * each one). The look leans into a Pacific Northwest, evergreen feel.
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
// How many officers appear on a single page.
const PAGE_SIZE = 2;

// NWVSA mark — shown on the cover and used as a placeholder headshot.
const LOGO = "/images/nwvsa-logo-160x157-with-white-outline-150x150.webp";
// Kraft-brown cover, like a real scrapbook.
const COVER_BROWN = "#bd8b57";

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

// Helper: build a member whose placeholder photo is their school's logo.
const atSchool = (name, role, pronouns, school) => ({
  name,
  role,
  pronouns,
  detail: school,
  photo: SCHOOL_IMG[school] || LOGO,
});

const boards = [
  {
    id: "executive",
    label: "Executive Board",
    color: "#dc143c", // crimson
    members: [
      { name: "An Ho", role: "President", pronouns: "He/Him/His", photo: LOGO },
      {
        name: "Vinh Nguyenpham",
        role: "Internal Vice President",
        pronouns: "He/Him/His",
        photo: LOGO,
      },
      {
        name: "Amie Le",
        role: "External Vice President",
        pronouns: "She/Her/Hers",
        photo: LOGO,
      },
      {
        name: "Connie Nguyen",
        role: "Secretary",
        pronouns: "She/Her/Hers",
        photo: LOGO,
      },
      {
        name: "Truc Tran",
        role: "Treasurer",
        pronouns: "He/Him/His",
        photo: LOGO,
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
        photo: LOGO,
      },
      {
        name: "Brittyney Phung",
        role: "Council of Regional Representatives",
        pronouns: "She/Her/Hers",
        photo: LOGO,
      },
      {
        name: "Caden Chiong",
        role: "Council of Regional Representatives",
        pronouns: "He/Him/His",
        photo: LOGO,
      },
      {
        name: "Kai Hua",
        role: "Media Coordinator",
        pronouns: "He/They/His/Theirs",
        photo: LOGO,
      },
      {
        name: "Ricky Le",
        role: "IT & Website Development",
        pronouns: "He/Him/His",
        photo: LOGO,
      },
      {
        name: "Leon Ong",
        role: "IT & Website Development",
        pronouns: "He/Him/His",
        photo: LOGO,
      },
    ],
  },
  {
    id: "directors",
    label: "Board of Directors",
    color: "#6a4c93", // purple
    members: [
      atSchool("Teresa Do", "Director", "She/Her/Hers", "University of Portland"),
      atSchool(
        "Kim Tran",
        "Director",
        "She/Her/Hers",
        "University of Washington, Seattle",
      ),
      atSchool(
        "Kevin Le",
        "Director",
        "He/Him/His",
        "University of Washington, Seattle",
      ),
      atSchool("Anna Kien", "Director", "She/Her/Hers", "University of Oregon"),
      atSchool(
        "Nghia Nguyen",
        "Director",
        "He/Him/His",
        "University of Washington, Seattle",
      ),
      atSchool(
        "Kristi Dang",
        "Director",
        "She/Her/Hers",
        "Western Washington University",
      ),
      atSchool(
        "William Ho",
        "Director",
        "He/Him/His",
        "University of Washington, Bothell",
      ),
    ],
  },
  {
    id: "council",
    label: "Intercollegiate Council",
    color: "#e08a1e", // amber
    members: [
      atSchool("Long Nguyen", "President", "", "University of Washington, Seattle"),
      atSchool(
        "May Tran",
        "External Vice President",
        "",
        "University of Washington, Seattle",
      ),
      atSchool(
        "Catherine Phan",
        "Vice President of Operations",
        "",
        "University of Washington, Seattle",
      ),
      atSchool("Hanson Huynh", "President", "", "University of Washington, Bothell"),
      atSchool(
        "Millard Nguyen",
        "External Vice President",
        "",
        "University of Washington, Bothell",
      ),
      atSchool(
        "Austin Tran",
        "Internal Vice President",
        "",
        "University of Washington, Bothell",
      ),
      atSchool("Chauhan Nguyen", "President", "", "University of Washington, Tacoma"),
      atSchool("Katie Le", "Vice President", "", "University of Washington, Tacoma"),
      atSchool("Le Tran", "Co-President", "", "University of Oregon"),
      atSchool("Anh Tran", "Co-President", "", "University of Oregon"),
      atSchool("Anna Truong-Cao", "President", "", "University of Portland"),
      atSchool("Tina Pham", "External Vice President", "", "University of Portland"),
      atSchool("Megan Nguyen", "Co-President", "", "Portland State University"),
      atSchool("Roberto Raya", "Co-President", "", "Portland State University"),
      atSchool("Tina Truong", "Co-President", "", "Oregon State University"),
      atSchool("Candice Vo", "Secretary", "", "Oregon State University"),
      atSchool("Evelien Pham", "President", "", "Pacific University"),
      atSchool("Aaron Nguyen", "External Vice President", "", "Pacific University"),
      atSchool("Henry Tran", "Internal Vice President", "", "Pacific University"),
      atSchool("Jimmy Bui", "Co-President", "", "Western Washington University"),
      atSchool("Julie Le", "Co-President", "", "Western Washington University"),
      atSchool("Jordan Van", "Vice President", "", "Western Washington University"),
      atSchool("Elizabeth Nguyen", "President", "", "Seattle University"),
      atSchool("Len Hsiung", "Vice President", "", "Seattle University"),
      atSchool("Anh Ha", "President", "", "Gonzaga University"),
      atSchool("Vy Nguyen", "Vice President", "", "Gonzaga University"),
      atSchool("Tu Anh Tieu Ha", "Co-President", "", "Reed College"),
      atSchool("Minh Anh Nguyen", "Co-President", "", "Reed College"),
      atSchool(
        "Phoung Bui",
        "President",
        "",
        "Washington State University, Pullman",
      ),
      atSchool(
        "Kyle Ly",
        "Internal Vice President",
        "",
        "Washington State University, Pullman",
      ),
      atSchool(
        "Emily Le",
        "Student Advisor",
        "",
        "Washington State University, Pullman",
      ),
      atSchool("Liberty La", "President", "", "University of Puget Sound"),
      atSchool("Sandra Ly", "Vice President", "", "University of Puget Sound"),
    ],
  },
];

function TeamCard({ name, role, photo, pronouns, detail }) {
  return (
    <div className="team-card">
      <div className="team-photo">
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

export default function MeetTheTeams() {
  const [activeIndex, setActiveIndex] = useState(0);
  const board = boards[activeIndex];

  return (
    <>
      <Navbar />
      <main className="teams-page">
        <header className="teams-head">
          <div className="teams-eyebrow">Get to know us</div>
          <h1 className="teams-title">Meet the Teams</h1>
          <p className="teams-hint">
            Pick a board, then click the cover to open the scrapbook and turn the
            pages.
          </p>
        </header>

        {/* Tabs — switch which board the scrapbook shows. */}
        <div className="teams-tabs" role="tablist" aria-label="Board type">
          {boards.map((b, i) => (
            <button
              key={b.id}
              role="tab"
              type="button"
              aria-selected={i === activeIndex}
              className={`teams-tab${i === activeIndex ? " is-active" : ""}`}
              style={{ "--tab-color": b.color }}
              onClick={() => setActiveIndex(i)}
            >
              <span className="teams-tab-dot" />
              {b.label}
            </button>
          ))}
        </div>

        {/* The scrapbook itself — remounts (closed) whenever the board changes. */}
        <div className="teams-book">
          <FlipBook
            key={board.id}
            id={board.id}
            title={board.label}
            subtitle="NWVSA"
            color={COVER_BROWN}
            logo={LOGO}
            width={BOOK_W}
            height={BOOK_H}
            pages={toPages(board.members)}
          />
        </div>
      </main>
    </>
  );
}
