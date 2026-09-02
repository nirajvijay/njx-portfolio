import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './service-cards.css'
import './portfolio.css'
import './portrait.css'
import './hero-portrait.css'
import './portfolio-fixes.css'
import './mobile-hero.css'
import './mobile-hero-refinement.css'
import './mobile-hero-final.css'
import './mobile-hero-hierarchy.css'
import './mobile-profile-seal.css'
import './background-learning.css'

const phone = '918289939848'
const address = 'Kadamkode, NH, near Builtech Greens, Manapullikavu, Palakkad, Kerala 678013'

function BellaConcept() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [experienceMenuOpen, setExperienceMenuOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState('')
  const [experienceError, setExperienceError] = useState(false)

  const experiences = [
    'Haircut & styling',
    'Hair spa or treatment',
    'Hair colour or smoothening',
    'Bridal makeup',
    'Grooming',
    'Not sure yet',
  ]

  const goToBooking = () => document.querySelector('#bella-book')?.scrollIntoView({ behavior: 'smooth' })

  function submit(e) {
    e.preventDefault()
    if (!selectedExperience) {
      setExperienceError(true)
      setExperienceMenuOpen(true)
      return
    }
    setSubmitted(true)
  }

  return (
    <main>
      <section className="hero" id="bella-home">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#bella-home" aria-label="Bella home">
            <span className="brand-mark">B</span>
            <span>BELLA<small>FAMILY SALON &amp; SPA</small></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#bella-experience" onClick={() => setMenuOpen(false)}>The Bella way</a>
            <a href="#bella-services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#bella-visit" onClick={() => setMenuOpen(false)}>Visit us</a>
            <button className="nav-cta" onClick={goToBooking}>Book your visit <span>↗︎</span></button>
          </div>
        </nav>

        <div className="hero-copy shell">
          <p className="eyebrow light">PALAKKAD’S SPACE FOR BEAUTIFUL PAUSES</p>
          <h1>Feel like<br /><em>yourself,</em> only more.</h1>
          <p className="hero-text">Hair, spa, colour and bridal beauty—thoughtfully done for everyday confidence and unforgettable occasions.</p>
          <div className="hero-actions">
        <button className="button primary" onClick={goToBooking}>Make an appointment <span>↗︎</span></button>
            <a className="text-link light" href="#bella-services">Explore experiences <span>↓</span></a>
          </div>
        </div>
        <div className="hero-foot shell">
          <span>Hair · Spa · Colour · Bridal makeup</span>
          <span className="rating">4.9 <b>★</b> <i /> Loved by Palakkad</span>
        </div>
      </section>

      <section className="intro shell" id="bella-experience">
        <div><p className="eyebrow">MORE THAN AN APPOINTMENT</p><h2>Care, made<br /><em>personal.</em></h2></div>
        <div className="intro-copy"><p>From a sharp haircut or restorative spa visit to hair colour, grooming and bridal makeup, Bella brings considered care to the looks that matter to you.</p><a className="text-link" href="#bella-visit">Discover Bella <span>↗︎</span></a></div>
      </section>

      <section className="services" id="bella-services">
        <div className="shell section-head"><p className="eyebrow">CHOOSE YOUR RITUAL</p><h2>Made for every<br /><em>version of you.</em></h2></div>
        <div className="service-grid shell">
          <article className="service-card hair"><span>01</span><div className="service-content"><h3>Hair &amp; spa</h3><p>Haircuts, styling and restorative spa care for a fresh, confident finish.</p></div><button onClick={goToBooking}><span>Explore hair &amp; spa</span><b>↗︎</b></button></article>
          <article className="service-card beauty"><span>02</span><div className="service-content"><h3>Colour &amp; care</h3><p>Hair colouring, smoothening and tailored treatments for your hair goals.</p></div><button onClick={goToBooking}><span>Explore colour &amp; care</span><b>↗︎</b></button></article>
          <article className="service-card bridal"><span>03</span><div className="service-content"><h3>Bridal makeup</h3><p>Thoughtful makeup and finishing touches for celebrations worth remembering.</p></div><button onClick={goToBooking}><span>Plan your bridal look</span><b>↗︎</b></button></article>
        </div>
      </section>

      <section className="signature shell">
        <div className="signature-art"><div className="arch"><div className="arch-image" /></div><p className="signature-caption"><span>Slow beauty,</span><em>thoughtfully done.</em></p></div>
        <div className="signature-copy"><p className="eyebrow">THE BELLA SIGNATURE</p><h2>Every detail<br />has a <em>feeling.</em></h2><p className="body-copy">From your consultation to the finishing touch, we make room to listen. Bella’s guests frequently recognise warm service, skilled makeovers and attentive hair care.</p><div className="mini-stats"><div><strong>4.9</strong><span>Google rating</span></div><div><strong>86</strong><span>Google reviews</span></div><div><strong>8 PM</strong><span>Closes daily</span></div></div></div>
      </section>

      <section className="booking" id="bella-book">
        <div className="shell booking-wrap"><div className="booking-copy"><p className="eyebrow light">YOUR TIME, RESERVED</p><h2>Let’s make<br />space for <em>you.</em></h2><p>Tell us what you’re thinking about. We’ll help you find the right Bella service and time.</p><a className="call-link" href={`tel:+${phone}`}>Prefer to call? <span>+91 82899 39848</span></a></div>
          <form className="booking-form" onSubmit={submit}>
            {submitted ? <div className="success"><span>✦</span><h3>Thank you.</h3><p>Your appointment request is ready to be followed up by the Bella team.</p><button type="button" onClick={() => setSubmitted(false)}>Make another request</button></div> : <>
              <label>Your name<input required name="name" placeholder="Enter your name" /></label>
              <label>Mobile number<input required name="phone" inputMode="tel" placeholder="Your best contact number" /></label>
              <label className="experience-field">What would you love today?
                <input type="hidden" name="experience" value={selectedExperience} />
                <button
                  className="experience-trigger"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={experienceMenuOpen}
                  aria-invalid={experienceError}
                  onClick={() => setExperienceMenuOpen(!experienceMenuOpen)}
                >
                  <span>{selectedExperience || 'Select an experience'}</span><b aria-hidden="true">⌄</b>
                </button>
                {experienceMenuOpen && <div className="experience-options" role="listbox" aria-label="Choose an experience">
                  {experiences.map((experience) => <button
                    type="button"
                    role="option"
                    aria-selected={selectedExperience === experience}
                    key={experience}
                    onClick={() => {
                      setSelectedExperience(experience)
                      setExperienceError(false)
                      setExperienceMenuOpen(false)
                    }}
                  >{experience}</button>)}
                </div>}
                {experienceError && <small className="field-error">Please choose an experience.</small>}
              </label>
              <label>Preferred day<input type="date" name="date" /></label>
              <button className="button primary full" type="submit">Request an appointment <span>↗︎</span></button>
              <small>This demo form does not transmit details. Connect it to Bella’s preferred booking channel before launch.</small>
            </>}
          </form>
        </div>
      </section>

      <section className="visit shell" id="bella-visit"><div><p className="eyebrow">COME FIND US</p><h2>See you at<br /><em>Bella.</em></h2></div><div className="visit-details"><p>{address}</p><p>Open daily<br /><strong>10:00 AM — 8:00 PM</strong></p><a className="button outline" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}>Get directions <span>↗︎</span></a></div></section>

      <footer><div className="shell footer-inner"><a className="brand footer-brand" href="#bella-home"><span className="brand-mark">B</span><span>BELLA<small>FAMILY SALON &amp; SPA</small></span></a><p>Made for beautiful pauses in Palakkad.</p><a className="created-by-njx" href="#top">Created by <strong>NJX</strong> <span>↗︎</span></a><a href="#bella-home">Back to top ↑</a></div></footer>
    </main>
  )
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="portfolio">
      <header className="p-nav">
        <a className="p-wordmark p-njx-wordmark" href="#top" aria-label="NJX home"><span>NJX<small>BUILT BY NIRAJ V</small></span></a>
        <button className="p-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'p-links open' : 'p-links'}>
          <a href="#selected-work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#now" onClick={() => setMenuOpen(false)}>Now</a>
              <a className="p-contact-link" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <span>↗︎</span></a>
        </nav>
      </header>

      <section className="p-hero" id="top">
        <div className="p-orbit p-orbit-one" /><div className="p-orbit p-orbit-two" />
        <figure className="p-hero-portrait" aria-label="Portrait of Niraj V">
          <img src="/assets/niraj-portrait.png" alt="Niraj V" />
          <figcaption>NJ / IRL</figcaption>
        </figure>
        <div className="p-hero-copy">
          <p className="p-kicker">ENTREPRENEUR · SYSTEMS BUILDER</p>
          <h1>I turn<br /><em>curiosity</em> into<br />working things.</h1>
          <p className="p-lede">I’m Niraj—an entrepreneur, systems builder, and lifelong learner. I build practical products, automation and software around problems worth understanding.</p>
          <div className="p-hero-actions"><a className="p-button" href="#selected-work">See the work I’ve done <span>↓</span></a><a className="p-quiet-link" href="https://www.linkedin.com/in/nirajv17/" target="_blank" rel="noreferrer">Follow the journey <span>↗︎</span></a></div>
        </div>
        <div className="p-signal-card"><div className="p-signal-top"><span>NV / SIGNAL</span><span className="p-live"><i /> BUILDING</span></div><div className="p-signal-line"><i /><i /><i /><i /><i /><i /><i /></div><p>Products<br />Systems<br />Experiments</p><span className="p-signal-index">01—04</span></div>
      </section>

      <section className="p-intro p-about" id="about"><div className="p-about-meta"><p className="p-kicker">A LITTLE ABOUT ME</p><span>NIRAJ V / BUILDER</span></div><div className="p-about-content"><h2>I don’t chase<br />a single label.</h2><p>I’m interested in the full distance between an idea and a useful result: understanding the problem, designing the system, building it, testing it, and sharing what I learn along the way.</p></div></section>

      <section className="p-work" id="work"><div className="p-section-heading"><div><p className="p-kicker">SELECTED WORK</p><h2>Things I’m<br /><em>bringing to life.</em></h2></div><span>01—04</span></div>
        <div className="p-projects">
          <article className="p-project p-project-ajx"><div className="p-project-meta"><span>01 / PRODUCT</span><span>AJX FITCLUB</span></div><div className="p-project-body"><p className="p-project-label">Building with movement in mind</p><h3>AJX<br />FitClub</h3><p>A technology-led fitness venture shaped around a better member experience and a modern digital presence.</p><span className="p-chip">FOUNDER</span></div><div className="p-project-symbol">A</div></article>
          <article className="p-project p-project-radar"><div className="p-project-meta"><span>02 / SYSTEMS</span><span>PRIVATE RESEARCH</span></div><div className="p-project-body"><p className="p-project-label">Research before conviction</p><h3>Market<br />systems</h3><p>Exploring reliable data pipelines, automation and decision-support systems through careful, observation-first research.</p><span className="p-chip">PYTHON · DATA · AUTOMATION</span></div><div className="p-grid-art"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></article>
          <article className="p-project p-project-local"><div className="p-project-meta"><span>03 / INITIATIVE</span><span>LOCAL BUSINESS DIGITAL</span></div><div className="p-project-body"><p className="p-project-label">Making local businesses easier to find</p><h3>Digital<br />presence.</h3><p>A growing collection of mobile-first websites and digital entry points for local businesses that deserve a stronger first impression.</p><span className="p-chip">WEB · BRAND · LEAD FLOW</span></div></article>
          <article className="p-project p-project-rust"><div className="p-project-meta"><span>04 / LEARNING</span><span>RUST</span></div><div className="p-project-body"><p className="p-project-label">Learning by making</p><h3>Build,<br />then teach.</h3><p>Learning Rust through useful projects, clearer thinking and lessons worth carrying forward.</p><span className="p-chip">LEARNING IN PUBLIC</span></div></article>
        </div>
      </section>

      <section className="p-capabilities"><p className="p-kicker">WHAT I ENJOY BUILDING</p><div className="p-cap-grid"><div><span>01</span><h3>Software that<br />feels useful.</h3><p>Full-stack products with clear purpose, thoughtful interfaces and a working backbone.</p></div><div><span>02</span><h3>Systems that<br />reduce friction.</h3><p>Automation, data flows and AI-assisted tools that turn messy work into repeatable work.</p></div><div><span>03</span><h3>Stories behind<br />the build.</h3><p>Project-led learning and honest documentation—sharing the decisions, not just the outcome.</p></div></div></section>

      <section className="p-background" id="background"><div className="p-background-heading"><p className="p-kicker">THE PROOF BOARD</p><h2>Made in<br /><em>the work.</em></h2><p>Qualifications, projects and learning kept visible—without turning this into a résumé.</p></div><div className="p-proofboard"><article className="p-proof-lead"><span>01 / BUILDING</span><h3>AJX<br />FitClub</h3><p>Co-founder<br />Product &amp; community</p><i>↗︎</i></article><article className="p-proof-tile p-proof-cs"><span>02 / PROFESSIONAL</span><strong>CS</strong><p>Professional Level<br />ICSI</p></article><article className="p-proof-tile p-proof-diploma"><span>03 / DIPLOMA</span><strong>9.25</strong><p>CGPA · Grade A+<br />Software &amp; Web Apps</p></article><article className="p-proof-tile p-proof-credentials"><span>04 / CREDENTIALS</span><strong>13</strong><p>Professional credentials<br />Google AI included</p><a href="https://www.linkedin.com/in/nirajv17/" target="_blank" rel="noreferrer">View all ↗︎</a></article></div><div className="p-active-builds"><div><span>IN MOTION / 2026</span><h3>What I’m<br />learning by <em>making.</em></h3></div><ul><li><b>01</b><span>Rust</span><small>Systems fundamentals</small></li><li><b>02</b><span>Data</span><small>Market pipelines</small></li><li><b>03</b><span>AWS</span><small>Observation systems</small></li><li><b>04</b><span>Web</span><small>Local product demos</small></li></ul></div></section>

      <section className="p-now" id="now"><div className="p-now-index">NOW<br /><em>01</em></div><div><p className="p-kicker">CURRENTLY</p><h2>Building the<br /><em>next layer.</em></h2><ul><li><span>01</span>Growing AJX FitClub as a real product and community.</li><li><span>02</span>Exploring reliable AI, automation and market-data systems.</li><li><span>03</span>Learning Rust by building projects—not just reading about them.</li><li><span>04</span>Taking on a small number of thoughtful web and software projects.</li></ul></div></section>

      <section className="p-contact" id="contact"><p className="p-kicker">START A CONVERSATION</p><h2>Have an idea<br />that needs a <em>builder?</em></h2><p>I’m open to thoughtful collaborations, early-stage products and useful problems.</p><div className="p-contact-actions"><a className="p-contact-action p-contact-action-primary" href="mailto:nirajv.official27@gmail.com"><span>Email</span><small>Write a note</small><b>↗︎</b></a><a className="p-contact-action" href="tel:+918921404706"><span>Call</span><small>+91 89214 04706</small><b>↗︎</b></a><a className="p-contact-action" href="https://www.linkedin.com/in/nirajv17/" target="_blank" rel="noreferrer"><span>LinkedIn</span><small>Follow the work</small><b>↗︎</b></a></div></section>

      <footer className="p-footer"><span>© 2026 NIRAJ V</span><span>NJX7.TECH</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  )
}

function SelectedWork() {
  return (
    <main className="portfolio p-work-page">
      <header className="p-nav">
        <a className="p-wordmark p-njx-wordmark" href="#top" aria-label="NJX home"><span>NJX<small>BUILT BY NIRAJ V</small></span></a>
        <a className="p-contact-link p-work-back" href="#top">Back to home <span>↖︎</span></a>
      </header>

      <section className="p-work-page-main">
        <div className="p-work-page-heading">
          <p className="p-kicker">SELECTED WORK</p>
          <h1>Things I’ve<br /><em>made real.</em></h1>
          <p>Products, experiments and digital experiences shaped around practical problems and stronger first impressions.</p>
        </div>

        <div className="p-projects p-work-page-projects">
          <a className="p-project p-project-ajx p-project-card-link" href="https://ajxfitclub.me/" aria-label="Visit AJX FitClub"><div className="p-project-meta"><span>01 / PRODUCT</span><span>AJX FITCLUB</span></div><div className="p-project-body"><p className="p-project-label">Building with movement in mind</p><h3>AJX<br />FitClub</h3><p>A technology-led fitness venture shaped around a better member experience and a modern digital presence.</p><span className="p-project-link">Visit AJX FitClub <span>↗︎</span></span></div><div className="p-project-symbol">A</div></a>
          <a className="p-project p-project-bella p-project-card-link" href="#bella-concept" aria-label="View Bella Family Salon and Spa concept"><div className="p-project-meta"><span>02 / WEB CONCEPT</span><span>BELLA</span></div><div className="p-project-body"><p className="p-project-label">A stronger first impression for a local business</p><h3>Bella<br />Salon &amp; Spa</h3><p>A branded, mobile-first salon website concept with service discovery and a considered appointment flow.</p><span className="p-project-link">View Bella concept <span>↗︎</span></span></div></a>
        </div>
      </section>

      <footer className="p-footer"><span>© 2026 NIRAJ V</span><span>NJX7.TECH</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  )
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', updateHash)
    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  useEffect(() => {
    if (hash === '#selected-work' || hash === '#bella-concept') window.scrollTo(0, 0)
  }, [hash])

  if (hash === '#selected-work') return <SelectedWork />
  if (hash.startsWith('#bella')) return <BellaConcept />
  return <Portfolio />
}

createRoot(document.getElementById('root')).render(<App />)
