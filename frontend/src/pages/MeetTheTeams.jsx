import FlipBook from '../components/FlipBook/FlipBook'
import './MeetTheTeams.css'

/*
 * MeetTheTeams — prototype page that drops the FlipBook into the site.
 *
 * The `members` data below is PLACEHOLDER. Swap the names/roles/blurbs for the
 * real board, and replace `photo` with real headshots dropped in /public/images.
 * (Right now it reuses the school logos already in the project as placeholders.)
 */

const members = [
  { name: 'First Last', role: 'President', photo: '/images/VSA_UW.png', blurb: 'Placeholder bio — a sentence or two about this person and what they do for NWVSA.' },
  { name: 'First Last', role: 'Vice President', photo: '/images/VSA_UO.png', blurb: 'Placeholder bio — swap in the real copy when you have it.' },
  { name: 'First Last', role: 'Secretary', photo: '/images/VSA_PSU.jpg', blurb: 'Placeholder bio — keep it short so it fits the page nicely.' },
  { name: 'First Last', role: 'Treasurer', photo: '/images/VSA_OSU.png', blurb: 'Placeholder bio — this is where a fun fact could go.' },
  { name: 'First Last', role: 'Events Lead', photo: '/images/VSA_UP.jpg', blurb: 'Placeholder bio — one to two lines works best here.' },
  { name: 'First Last', role: 'Marketing Lead', photo: '/images/VSA_SU.jpg', blurb: 'Placeholder bio — describe their role on the team.' },
  { name: 'First Last', role: 'Media Lead', photo: '/images/VSA_Reed.png', blurb: 'Placeholder bio — replace me.' },
  { name: 'First Last', role: 'Operations Lead', photo: '/images/VSA_Gonzaga.jpeg', blurb: 'Placeholder bio — replace me.' },
]

function TeamCard({ name, role, photo, blurb }) {
  return (
    <div className="team-card">
      <div className="team-photo">
        <img src={photo} alt="" />
      </div>
      <div className="team-role">{role}</div>
      <h3 className="team-name">{name}</h3>
      <p className="team-blurb">{blurb}</p>
    </div>
  )
}

export default function MeetTheTeams() {
  // Turn the member list into flat pages for the flip book.
  const pages = members.map((m, i) => <TeamCard key={i} {...m} />)

  return (
    <main className="teams-page">
      <a className="teams-back" href="#/">&larr; Back to site</a>

      <header className="teams-head">
        <div className="teams-eyebrow">Get to know us</div>
        <h1 className="teams-title">Meet the Teams</h1>
        <p className="teams-hint">Click the cover to open, then click a page to turn it.</p>
      </header>

      <FlipBook title="Meet the Teams" subtitle="NWVSA · 2026" pages={pages} />
    </main>
  )
}
