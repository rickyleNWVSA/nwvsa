import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // ── SCROLL REVEAL ──
    const reveals = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    reveals.forEach((el) => revealObserver.observe(el))

    // ── STAGGER CHILDREN ──
    document
      .querySelectorAll(
        '.goals-grid .goal-card, .events-grid .event-card, .schools-grid .school-chip',
      )
      .forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.06}s`
      })

    // ── NAV BLUR ON SCROLL ──
    const nav = document.querySelector('nav')
    const onScroll = () => {
      nav.style.background =
        window.scrollY > 40 ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.82)'
    }
    window.addEventListener('scroll', onScroll)

    // ── STAT OBSERVER ──
    const statNums = document.querySelectorAll('.stat-num')
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.6s ease'
            statObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )
    statNums.forEach((el) => statObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      statObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">
          <img
            src="/images/nwvsa-logo-160x157-with-white-outline-150x150.webp"
            alt="NWVSA Logo"
            className="nav-logo-img"
          />
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#goals">Our Goals</a></li>
          <li><a href="#schools">Schools</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#donate">Donate</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Contact Us</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">Est. 2008 · Pacific Northwest</div>
        <h1 className="hero-title">
          Inspiring <em>Vietnamese</em><br />students across the Northwest
        </h1>
        <p className="hero-sub">
          A voluntary, non-partisan community built on transformative leadership,
          experiential learning, and close-knit mentorship.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn-primary">Discover NWVSA</a>
          <a href="#donate" className="btn-outline">Support Our Mission</a>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* STAT BAR */}
      <div className="stat-bar">
        <div className="stat-item">
          <div className="stat-num"><em>16</em></div>
          <div className="stat-label">Constituent Schools</div>
        </div>
        <div className="stat-item">
          <div className="stat-num"><em>2</em></div>
          <div className="stat-label">States WA & OR</div>
        </div>
        <div className="stat-item">
          <div className="stat-num"><em>17</em></div>
          <div className="stat-label">Years of Impact</div>
        </div>
        <div className="stat-item">
          <div className="stat-num"><em>∞</em></div>
          <div className="stat-label">Community Bonds</div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ background: 'var(--off-white)', padding: '100px 24px' }}>
        <div className="section-wrap">
          <div className="about reveal">
            <div>
              <div className="section-eyebrow">Who We Are</div>
              <h2 className="section-title">
                Building community, <em>one student</em> at a time
              </h2>
              <p className="section-body">
                The Northwest Vietnamese Student Association (NWVSA) was founded
                in 2008 on the common goal to empower and develop students and
                professionals within the Vietnamese community in the Northwest
                region through transformative leadership, experiential learning,
                close-knit mentorship, and collaborative networking.
              </p>
              <div style={{ marginTop: '36px' }}>
                <a
                  href="https://northwestvsa.com/our-misson-values/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '14px', padding: '12px 28px' }}
                >
                  Learn More →
                </a>
              </div>
            </div>
            <div className="about-visual">
              <div className="about-card">
                <div className="about-card-accent"></div>
                <p className="about-card-text">
                  "Fostering experiential learning, cultural self-reflection, and
                  relationship building for community development in and among our
                  constituent schools."
                </p>
                <div className="about-card-footer">NWVSA Mission Statement</div>
              </div>
              <div className="about-year-badge">Founded 2008</div>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="goals-section" id="goals">
        <div className="goals-header reveal">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title" style={{ margin: '0 auto', textAlign: 'center' }}>
            Three pillars of <em>our purpose</em>
          </h2>
        </div>
        <div className="goals-grid reveal">
          <div className="goal-card">
            <div className="goal-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="goal-title">Experiential Leadership</h3>
            <p className="goal-desc">
              Helping students gain hands-on experience through leadership
              opportunities and networking events across the Pacific Northwest
              region.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="goal-title">Cultural Recognition</h3>
            <p className="goal-desc">
              Recognizing and encouraging growth of leadership and service to the
              Vietnamese community, honoring heritage through every initiative.
            </p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="goal-title">Regional Network</h3>
            <p className="goal-desc">
              Bringing together students and young professionals to build a strong
              network and sense of community throughout the Northwest region.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="mission-section">
        <div className="mission-quote reveal">
          Empowering and developing students and professionals within the
          Vietnamese community through transformative leadership, experiential
          learning, and collaborative networking.
        </div>
        <div className="mission-attr reveal" style={{ animationDelay: '0.2s' }}>
          Northwest Vietnamese Student Association
        </div>
      </section>

      {/* SCHOOLS */}
      <section className="schools-section" id="schools">
        <div className="schools-header reveal">
          <div className="section-eyebrow">Our Community</div>
          <h2 className="section-title" style={{ margin: '0 auto', textAlign: 'center' }}>
            16 schools, <em>one family</em>
          </h2>
          <p style={{ marginTop: '16px', color: 'var(--mid-gray)', fontSize: '16px', fontWeight: 300, lineHeight: 1.6 }}>
            Our largest cohort yet — a diverse network of Vietnamese Student
            Associations across the Pacific Northwest.
          </p>
        </div>
        <div className="schools-grid reveal">
          <div className="school-chip">University of Washington, Seattle<span className="school-abbr">@vsauw</span></div>
          <div className="school-chip">University of Washington, Bothell<span className="school-abbr">@vsauwb</span></div>
          <div className="school-chip">University of Washington, Tacoma<span className="school-abbr">@uwtvsa</span></div>
          <div className="school-chip">University of Oregon<span className="school-abbr">@uovsa</span></div>
          <div className="school-chip">University of Portland<span className="school-abbr">@upvsa</span></div>
          <div className="school-chip">Portland State University<span className="school-abbr">@psuvsa</span></div>
          <div className="school-chip">University of Puget Sound<span className="school-abbr">@vsaups</span></div>
          <div className="school-chip">Oregon State University<span className="school-abbr">@vsaatosu</span></div>
          <div className="school-chip">Gonzaga University<span className="school-abbr">@gu_vsa</span></div>
          <div className="school-chip">Reed College<span className="school-abbr">@vsareed</span></div>
          <div className="school-chip">Seattle University<span className="school-abbr">@su.vsa</span></div>
          <div className="school-chip">Pacific University<span className="school-abbr">@pacuvsa</span></div>
          <div className="school-chip">Washington State University<span className="school-abbr">@wsuvsa</span></div>
          <div className="school-chip">WSU Vancouver<span className="school-abbr">@wsuvvsa</span></div>
          <div className="school-chip">Western Washington University<span className="school-abbr">@wwuvsa</span></div>
          <div className="school-chip">Lewis & Clark College<span className="school-abbr">@vsa_lc</span></div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events-section" id="events">
        <div className="events-header reveal">
          <div>
            <div className="section-eyebrow">Get Involved</div>
            <h2 className="section-title">Events & <em>Opportunities</em></h2>
          </div>
          <a
            href="https://northwestvsa.com/events/"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ fontSize: '14px', padding: '12px 28px', whiteSpace: 'nowrap' }}
          >
            View All Events
          </a>
        </div>
        <div className="events-grid reveal">
          <div className="event-card">
            <div className="event-card-top">
              <span className="event-tag">Annual Event</span>
              <h3 className="event-title">Turkey Bowl</h3>
              <p className="event-desc">
                A beloved NWVSA tradition bringing together students from across
                the region for friendly competition, food, and fellowship.
              </p>
            </div>
            <div className="event-card-bottom">
              <span style={{ fontSize: '13px', color: 'var(--mid-gray)' }}>Annual Fall Event</span>
              <div className="event-arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="event-card-top">
              <span className="event-tag">Camp</span>
              <h3 className="event-title">Camp Solstice 2026</h3>
              <p className="event-desc">
                Our flagship summer camp experience, led by passionate crew leads
                across catering, programming, marketing, media, and operations.
              </p>
            </div>
            <div className="event-card-bottom">
              <span style={{ fontSize: '13px', color: 'var(--mid-gray)' }}>Summer 2026</span>
              <div className="event-arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
          <div className="event-card">
            <div className="event-card-top">
              <span className="event-tag">Program</span>
              <h3 className="event-title">CPP — Community & Professional Program</h3>
              <p className="event-desc">
                Connecting students with professional mentors, career
                opportunities, and community leaders across the Pacific Northwest.
              </p>
            </div>
            <div className="event-card-bottom">
              <span style={{ fontSize: '13px', color: 'var(--mid-gray)' }}>Year-Round</span>
              <div className="event-arrow">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section className="donate-section" id="donate">
        <h2 className="donate-title reveal">
          Help us <em>empower</em> the next generation
        </h2>
        <p className="donate-sub reveal">
          Your support funds leadership programs, cultural events, and
          opportunities for Vietnamese students across the Pacific Northwest.
        </p>
        <a
          href="https://northwestvsa.com/donations-2/"
          target="_blank"
          rel="noreferrer"
          className="btn-gold reveal"
        >
          Donate to NWVSA
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-brand">NW<span>VSA</span></div>
            <p className="footer-tagline">
              Inspiring Vietnamese students all over the Pacific Northwest since
              2008.
            </p>
            <div style={{ marginTop: '20px' }}>
              <a
                href="mailto:northwestvsa@gmail.com"
                style={{ color: 'var(--accent)', fontSize: '14px', textDecoration: 'none' }}
              >
                northwestvsa@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Organization</h4>
            <ul>
              <li><a href="https://northwestvsa.com/our-misson-values/" target="_blank" rel="noreferrer">Mission & Values</a></li>
              <li><a href="https://northwestvsa.com/constitution/" target="_blank" rel="noreferrer">Constitution</a></li>
              <li><a href="https://northwestvsa.com/policies/" target="_blank" rel="noreferrer">Policies</a></li>
              <li><a href="https://northwestvsa.com/contact-us/" target="_blank" rel="noreferrer">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Meet the Team</h4>
            <ul>
              <li><a href="https://northwestvsa.com/executive-board/" target="_blank" rel="noreferrer">Executive Board</a></li>
              <li><a href="https://northwestvsa.com/cabinet-board-corr/" target="_blank" rel="noreferrer">Cabinet Board</a></li>
              <li><a href="https://northwestvsa.com/board-of-directors/" target="_blank" rel="noreferrer">Board of Directors</a></li>
              <li><a href="https://northwestvsa.com/intercollegiate-council/" target="_blank" rel="noreferrer">ICC</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              <li><a href="https://northwestvsa.com/events/" target="_blank" rel="noreferrer">Events</a></li>
              <li><a href="https://northwestvsa.com/cpp/" target="_blank" rel="noreferrer">CPP Program</a></li>
              <li><a href="https://northwestvsa.com/opportunities/" target="_blank" rel="noreferrer">Opportunities</a></li>
              <li><a href="https://northwestvsa.com/donations-2/" target="_blank" rel="noreferrer">Donate</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Northwest Vietnamese Student Association. All rights reserved.</span>
          <div className="footer-social">
            <a href="https://www.instagram.com/nwvsa" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:northwestvsa@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
