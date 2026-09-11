import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./CPPLearnMore.css";

/*
 * CPPLearnMore — the CPP "Learn More" child page.
 *
 * CPP.jsx covers the basics (what CPP is, the four phases, the fellowship in
 * brief, and the beneficiary cards). This page goes deeper for anyone who
 * clicks "Learn More" — the subcommittee structure, the full fellowship
 * details, a profile of the current beneficiary's impact, how to get
 * involved/donate, and extended history on past beneficiaries. Content is
 * sourced from northwestvsa.com/cpp and reuses the same design-system classes
 * as the rest of the site (goals grid, mission quote, about card) so it reads
 * as a continuation of the CPP page rather than a separate design.
 */

const SUBCOMMITTEES = [
  {
    title: "Engagement Subcommittee",
    items: [
      "Facilitates and maintains relationships between UNAVSA and past CPP applicants and beneficiaries",
      "Works closely with beneficiaries to showcase results through progress reports",
      "Engages current and past CPP prospects to build partnerships",
      "Creates direct opportunities for constituent engagement beyond fundraising",
    ],
  },
  {
    title: "Audit Subcommittee",
    items: [
      "Works closely with the previous year's beneficiary",
      "Oversees ethical fund appropriation according to project proposals",
      "Manages project timelines",
      "Ensures the beneficiary adheres to its proposed timeline",
    ],
  },
];

const PHASE_DETAILS = [
  {
    title: "Selection",
    items: [
      "Acts as the liaison between UNAVSA and interested nonprofits",
      "Top 2–3 applicants are voted on at UNAVSA's Annual Leadership Conference",
    ],
  },
  {
    title: "Campaign",
    items: [
      "Raises awareness of the beneficiary's mission, vision, and programs",
      "Drives fundraising and campaign efforts across regions",
    ],
  },
  {
    title: "Audit",
    items: [
      "Works with the previous beneficiary through project completion",
      "Oversees and tracks fund distribution",
      "Provides financial progress reports",
    ],
  },
  {
    title: "Engagement",
    items: [
      "Maintains relationships between UNAVSA and past CPP applicants and beneficiaries",
      "Showcases the impact of previous projects",
      "Creates nonprofit engagement opportunities beyond fundraising",
    ],
  },
];

const FELLOWSHIP_GAINS = [
  "Hands-on nonprofit and philanthropy experience",
  "A better understanding of how the nonprofit sector works",
  "Personal development in technical and leadership skills",
  "A closer connection with beneficiaries and UNAVSA",
  "A stipend provided at the end of the program",
];

const FELLOWSHIP_DETAILS = [
  "Duration: a 3-month program, operated by the CPP-OPS team",
  "Placement: matched with a past or current CPP beneficiary",
  "Customization: roles shaped to the fellow and beneficiary's needs — e.g. Communications Fellow, Social Media Fellow",
  "Eligibility: open to anyone within the UNAVSA space",
  "How to apply: applications open periodically via a Paperform link shared through UNAVSA and regional VSA channels",
];

const VNAH_STATS = [
  { num: "80,000+", label: "Persons with disabilities directly assisted" },
  { num: "22,000", label: "Local service providers trained" },
  { num: "140", label: "Schools built or equipped" },
  { num: "29", label: "Rehabilitation units built or equipped" },
  { num: "5", label: "Vocational schools built or equipped" },
];

const VNAH_MISSION = [
  "Provide vocational and occupational rehabilitation services",
  "Offer career orientation and training for children and youth with disabilities at the Center",
  "Build and operate a café/canteen as a vocational rehabilitation model",
  "Raise awareness among parents, businesses, employers, and the community about the capabilities of children with disabilities",
  "Assist with vocational rehabilitation, training, and life skills",
];

const VNAH_PROGRAMS = [
  {
    title: "Rehabilitation & Direct Assistance",
    items: [
      "Builds and equips rehabilitation centers and health clinics",
      "Provides healthcare, rehabilitation services, and assistive devices",
      "Supports vocational training, employment, and livelihood development",
      "Trains healthcare workers, rehabilitation practitioners, and vocational staff",
    ],
  },
  {
    title: "School & Youth Improvements",
    items: [
      "Improves access to and quality of education in remote areas",
      "Supports curriculum development in higher education and teacher training",
      "Provides volunteer healthcare services in rural and remote areas",
      "Delivers clean water to rural and ethnic communities",
    ],
  },
  {
    title: "National Advocacy",
    items: [
      "Provides technical assistance for disability policy development",
      "Promotes integration of persons with disabilities into community life",
      "Supports disability information systems",
      "Trains disability advocates and disabled persons' organizations",
    ],
  },
];

const DONATION_ENROLLMENT_GOALS = [
  "20–30 children with disabilities enrolled for occupational rehabilitation and vocational training",
  "10–15 staff members trained in vocational rehabilitation and livelihood support",
  "20–30 parents and teachers trained in career orientation",
  "10 businesses and employers engaged with the model",
];

const GET_INVOLVED = [
  "Connect with your regional NWVSA leadership",
  "Participate in regional or inter-VSA fundraising events, cultural showcases, workshops, and campaigns",
  "Host VSA-led fundraisers — bake sales, talent auctions, bingo boards, miracle minutes",
  "Encourage attendance, advocacy, and social media awareness for the beneficiary",
];

const DONATE_METHODS = [
  {
    title: "Through UNAVSA",
    items: [
      "Schools and regions can donate via PayPal Giving Fund, Facebook, or physical checks",
      "Checks are made out to the Union of North American Vietnamese Student Associations, designated for CPP",
      "Early donations are accepted upon request — coordinate with the CPP Directors",
    ],
  },
  {
    title: "Through Your Region",
    items: [
      "Each region manages donations based on its own structure and programming",
      "Contact regional leadership for deadlines and preferred methods",
      "Regional donations still count toward CPP awards, so your school gets recognized",
    ],
  },
];

const PAST_BENEFICIARIES = [
  {
    year: "2024–2025",
    name: "Vietnam Health Clinic",
    tag: "501(c)(3) nonprofit",
    desc: '"The enjoyment of the highest attainable health care is one of the fundamental rights of every human being" — the WHO principle behind VHC\'s belief that everyone deserves equal access to essential healthcare, regardless of background. VHC delivers medical, dental, optometric, pharmaceutical, and public health services in rural Central Vietnam through a mobile health clinic. Your CPP support helped expand that clinic and its programs with medical equipment, telemedicine, and student-volunteer leadership opportunities.',
    link: "https://vnhealthclinic.org",
    linkLabel: "vnhealthclinic.org",
  },
  {
    year: "2023–2024",
    name: "Rock-Paper-Scissors Children's Fund",
    tag: "Founded November 2012",
    desc: 'Founded by Sara Stevens Nerone and her daughters, Sophie and Phoebe, after the family taught art and violin lessons at a local Vietnamese orphanage. They returned to the U.S. and built an organization around that experience — providing arts education and resources to underprivileged children in Vietnam.',
    link: "https://rockpaperscissorschildrensfund.org",
    linkLabel: "rockpaperscissorschildrensfund.org",
  },
];

function CPPLearnMore() {
  useScrollReveal();

  return (
    <>
      <Navbar />

      {/* INTRO */}
      <section style={{ background: "var(--off-white)", padding: "100px 24px" }}>
        <div className="section-wrap">
          <Link to="/cpp" className="back-link reveal">
            ← Back to CPP
          </Link>
          <div className="section-eyebrow reveal">Collective Philanthropy Project</div>
          <h2 className="section-title reveal">
            The full <em>picture</em>
          </h2>
          <p className="section-body reveal">
            CPP creates momentum for collective philanthropy across the UNAVSA
            network. Here's a closer look at how the initiative is structured,
            what the current beneficiary is doing with the funds raised, and
            how you can take part.
          </p>
          <div className="about-card reveal" style={{ marginTop: "32px", maxWidth: "700px" }}>
            <div className="about-card-accent"></div>
            <p className="about-card-text">
              "The Collective Philanthropy Project (CPP) is an initiative for
              Vietnamese students and community organizations to collaborate
              and partner with in working towards one charitable cause."
            </p>
            <div className="about-card-footer">CPP Program Description</div>
          </div>
        </div>
      </section>

      {/* SUBCOMMITTEES */}
      <section className="goals-section">
        <div className="goals-header reveal">
          <div className="section-eyebrow">Behind the Scenes</div>
          <h2 className="section-title" style={{ margin: "0 auto", textAlign: "center" }}>
            Two subcommittees, <em>one mission</em>
          </h2>
        </div>
        <div className="goals-grid goals-grid--2x2 reveal">
          {SUBCOMMITTEES.map((s) => (
            <div className="goal-card" key={s.title}>
              <h3 className="goal-title">{s.title}</h3>
              <ul className="detail-list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PHASES IN DEPTH */}
      <section className="goals-section" style={{ background: "var(--off-white)" }}>
        <div className="goals-header reveal">
          <div className="section-eyebrow">How It Works, In Depth</div>
          <h2 className="section-title" style={{ margin: "0 auto", textAlign: "center" }}>
            Inside the <em>four phases</em>
          </h2>
        </div>
        <div className="goals-grid goals-grid--2x2 reveal">
          {PHASE_DETAILS.map((p) => (
            <div className="goal-card" key={p.title}>
              <h3 className="goal-title">{p.title}</h3>
              <ul className="detail-list">
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FELLOWSHIP IN DEPTH */}
      <section style={{ background: "var(--white)", padding: "100px 24px" }}>
        <div className="section-wrap">
          <div className="goals-header reveal" style={{ margin: "0 0 56px" }}>
            <div className="section-eyebrow">CPP Fellowship</div>
            <h2 className="section-title">
              A 3-month path into <em>nonprofit work</em>
            </h2>
          </div>
          <div className="profile-split reveal">
            <div>
              <h3 className="goal-title">Program Details</h3>
              <ul className="detail-list">
                {FELLOWSHIP_DETAILS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="goal-title">What You'll Gain</h3>
              <ul className="detail-list">
                {FELLOWSHIP_GAINS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT BENEFICIARY PROFILE */}
      <section style={{ background: "var(--off-white)", padding: "100px 24px" }}>
        <div className="section-wrap">
          <div className="goals-header reveal" style={{ margin: "0 0 56px" }}>
            <div className="section-eyebrow">2025–2026 Beneficiary</div>
            <h2 className="section-title">
              Vietnam Assistance for the <em>Handicapped</em>
            </h2>
          </div>
          <div className="profile-split reveal">
            <div>
              <h3 className="goal-title">History</h3>
              <p className="goal-desc">
                Operating since 1991, VNAH works with international and local
                partners to improve the quality of life and societal
                integration of Vietnamese people with disabilities and
                disadvantaged children — providing technical assistance for
                national disability policy, sub-national disability programs,
                and capacity building for local service providers.
              </p>
            </div>
            <div className="about-card">
              <div className="about-card-accent"></div>
              <p className="about-card-text">
                "To promote policies and programs that empower people with
                disabilities, facilitating their full participation in social
                and economic activities within their communities."
              </p>
              <div className="about-card-footer">VNAH Vision</div>
            </div>
          </div>

          <div style={{ marginTop: "56px" }}>
            <h3 className="goal-title">Mission</h3>
            <ul className="detail-list detail-list--columns">
              {VNAH_MISSION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: "var(--white)", padding: "80px 24px" }}>
        <div className="section-wrap">
          <div className="impact-header reveal">
            <h3 className="goal-title" style={{ margin: 0 }}>
              Results as of December 2023
            </h3>
          </div>
          <div className="impact-stats reveal">
            {VNAH_STATS.map((s) => (
              <div className="impact-stat" key={s.label}>
                <div className="stat-num impact-num">{s.num}</div>
                <div className="stat-label impact-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS & ACTIVITIES */}
      <section className="goals-section" style={{ background: "var(--off-white)" }}>
        <div className="goals-header reveal">
          <div className="section-eyebrow">Programs & Activities</div>
          <h2 className="section-title" style={{ margin: "0 auto", textAlign: "center" }}>
            Where VNAH <em>focuses</em>
          </h2>
        </div>
        <div className="goals-grid reveal">
          {VNAH_PROGRAMS.map((p) => (
            <div className="goal-card" key={p.title}>
              <h3 className="goal-title">{p.title}</h3>
              <ul className="detail-list">
                {p.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOUR DONATION FUNDS */}
      <section style={{ background: "var(--white)", padding: "100px 24px" }}>
        <div className="section-wrap">
          <div className="about-card reveal" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="about-card-accent"></div>
            <h3 className="goal-title">What Your Donation Funds</h3>
            <p className="goal-desc">
              This cycle's project builds an integrated café/canteen model on
              the Center's premises — a busy street in District 3, Ho Chi Minh
              City — over 18 months, serving youth ages 13+ enrolled in the
              Nursing Rehabilitation Center. The Center provides the space at
              no rental cost, and results will be used to expand and replicate
              the model for more youth with disabilities. Enrollment goals for
              this cycle:
            </p>
            <ul className="detail-list" style={{ marginTop: "20px" }}>
              {DONATION_ENROLLMENT_GOALS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section style={{ background: "var(--off-white)", padding: "100px 24px" }}>
        <div className="section-wrap" style={{ maxWidth: "800px" }}>
          <div className="goals-header reveal" style={{ margin: "0 0 40px", maxWidth: "none" }}>
            <div className="section-eyebrow">Get Involved</div>
            <h2 className="section-title">
              Ways to <em>take part</em>
            </h2>
          </div>
          <ul className="detail-list detail-list--large reveal">
            {GET_INVOLVED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW TO DONATE */}
      <section className="goals-section">
        <div className="goals-header reveal">
          <div className="section-eyebrow">How to Donate</div>
          <h2 className="section-title" style={{ margin: "0 auto", textAlign: "center" }}>
            Two ways to <em>contribute</em>
          </h2>
        </div>
        <div className="goals-grid goals-grid--2x2 reveal">
          {DONATE_METHODS.map((d) => (
            <div className="goal-card" key={d.title}>
              <h3 className="goal-title">{d.title}</h3>
              <ul className="detail-list">
                {d.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PAST BENEFICIARIES, IN DEPTH */}
      <section style={{ background: "var(--off-white)", padding: "100px 24px" }}>
        <div className="section-wrap">
          <div className="goals-header reveal" style={{ margin: "0 0 56px" }}>
            <div className="section-eyebrow">Past Beneficiaries</div>
            <h2 className="section-title" style={{ margin: "0 auto", textAlign: "center" }}>
              More on who we've <em>supported</em>
            </h2>
          </div>
          <div className="goals-grid goals-grid--2x2 reveal">
            {PAST_BENEFICIARIES.map((b) => (
              <div className="goal-card" key={b.year}>
                <span className="event-tag">{b.year}</span>
                <h3 className="goal-title" style={{ marginTop: "16px" }}>
                  {b.name}
                </h3>
                <p className="goal-desc" style={{ marginBottom: "8px", fontStyle: "italic" }}>
                  {b.tag}
                </p>
                <p className="goal-desc">{b.desc}</p>
                <a
                  href={b.link}
                  target="_blank"
                  rel="noreferrer"
                  className="org-link"
                >
                  Visit {b.linkLabel} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "var(--white)", padding: "100px 24px" }}>
        <div className="section-wrap">
          <div className="contact-card reveal">
            <h3 className="goal-title">Questions About CPP?</h3>
            <p className="goal-desc">
              For CPP inquiries, feedback, or concerns, reach out to the UNAVSA
              CPP Operations Committee — please don't contact beneficiary
              organizations directly.
            </p>
            <div className="contact-links">
              <a href="mailto:cpp.operations@unavsa.org" className="btn-primary">
                cpp.operations@unavsa.org
              </a>
              <a
                href="https://northwestvsa.com/cpp/"
                target="_blank"
                rel="noreferrer"
                className="org-link"
              >
                Read the full official CPP page →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CPPLearnMore;
