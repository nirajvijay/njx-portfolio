import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const specialists = [
  { name: 'Dr. Rohini Kootala', degree: 'MDS', role: 'Paediatric & Preventive Dentist', focus: 'Children’s dentistry, preventive care, behaviour management, trauma and special-needs dentistry.' },
  { name: 'Dr. Sharath K B Menon', degree: 'MDS', role: 'Periodontist', focus: 'Gum care, non-surgical and surgical periodontal treatment, implants and maintenance care.' },
  { name: 'Dr. Divya S', degree: 'MDS', role: 'Conservative Dentist & Endodontist', focus: 'Restorative dentistry, root canal treatment, aesthetic dentistry and dental sensitivity.' },
  { name: 'Dr. Vandana Gopi', degree: 'MDS', role: 'Oral Medicine & Radiology', focus: 'Oral diagnosis, radiology, oral cancer screening, TMJ concerns and orofacial pain.' },
  { name: 'Dr. Vaishakh', degree: 'MDS', role: 'Prosthodontist & Implantologist', focus: 'Implants, crowns, bridges, dentures, full-mouth rehabilitation and cosmetic restoration.' },
  { name: 'Dr. George Justin', degree: 'MDS', role: 'Prosthodontist & Implantologist', focus: 'Implants, fixed and removable prosthetics, smile restoration and follow-up care.' },
  { name: 'Dr. Sankar S', degree: 'MDS', role: 'Oral & Maxillofacial Surgeon', focus: 'Extractions, wisdom teeth, implants, jaw surgery, oral pathology and emergency care.' },
  { name: 'Dr. Aswathy', degree: 'MDS', role: 'Orthodontist', focus: 'Braces, clear aligners, early orthodontics, retainers and habit-correction appliances.' },
]

const serviceGroups = {
  children: [
    ['Paediatric care', 'Examinations, prevention, restorations, trauma care and early orthodontic assessment for infants, children and adolescents.'],
    ['Conscious sedation', 'Nitrous-oxide conscious sedation for children and adults who need additional support with dental anxiety.'],
    ['Differently abled care', 'Individualised care for children with sensory concerns, developmental delays, autism and other additional needs.'],
    ['Preventive orthodontics', 'Early assessment, space management, habit correction and treatment planning for developing smiles.'],
    ['Fillings & sealants', 'Tooth-coloured fillings and protective sealants to manage and help prevent decay.'],
    ['Emergency dental care', 'Assessment for toothache, dental trauma, broken teeth and other urgent concerns.'],
  ],
  complete: [
    ['Root canal treatment', 'Treatment to remove infected tissue, relieve tooth pain and preserve the natural tooth.'],
    ['Dental implants', 'Permanent tooth-replacement assessment and treatment with the clinic’s implant team.'],
    ['Crowns, veneers & bridges', 'Custom restorations for strength, function and a natural-looking smile.'],
    ['Dentures', 'Full and partial denture solutions designed to restore comfortable eating, speaking and smiling.'],
    ['Braces & clear aligners', 'Orthodontic assessment and treatment for children, adolescents and adults.'],
    ['Oral surgery', 'Extractions, impacted-tooth exposure, frenectomy, biopsy and other specialist procedures.'],
    ['Laser dentistry', 'Selected minimally invasive procedures using laser technology where clinically appropriate.'],
    ['Smile design', 'Whitening, bonding, reshaping and cosmetic treatment planning for individual smile goals.'],
    ['Gum care', 'Preventive, non-surgical and surgical periodontal care and ongoing maintenance.'],
  ],
}

const faqs = [
  ['When should my child first visit a dentist?', 'The clinic recommends a first dental visit by the first birthday, or within six months after the first tooth appears. Early visits help families establish healthy habits and identify concerns early.'],
  ['How often should my child visit the dentist?', 'A check-up every six months is commonly recommended so the dentist can monitor development, support prevention and address concerns early. The exact interval may vary by the child’s needs.'],
  ['How do you help children with dental anxiety?', 'Early familiarisation, child-friendly explanations, positive reinforcement and an unhurried introduction to the dental team can help. The clinic also provides nitrous-oxide conscious sedation when clinically suitable.'],
  ['Do you provide care for children with additional needs?', 'Yes. The clinic publishes that it supports children with sensory concerns, developmental delays, autism and other special needs through a personalised approach. Share your child’s needs when arranging the visit.'],
  ['Are dental X-rays safe for children?', 'The clinic uses dental X-rays when needed to identify problems that cannot be seen during a routine examination. Your dentist can explain why an X-ray is advised and the safeguards used.'],
  ['What should I do if a permanent tooth is knocked out?', 'Seek urgent dental care. Hold the tooth by the crown, not the root. If possible, place it back in position; otherwise keep it in milk or saliva while travelling to the dentist. Do not reinsert a baby tooth.'],
  ['When should my child have an orthodontic evaluation?', 'The clinic recommends an orthodontic evaluation around age seven so developing alignment and bite concerns can be identified at an appropriate stage.'],
  ['Do you treat adults as well as children?', 'Yes. The clinic lists comprehensive family care including check-ups, cleaning, fillings, root canals, crowns, implants, dentures, orthodontics, cosmetic care and oral surgery.'],
]

const gallery = [
  { src: './clinic/child-care.jpg', alt: 'Dr. Rohini with a young patient in the clinic', label: 'Child-friendly care' },
  { src: './clinic/sedation-care.jpg', alt: 'Conscious sedation treatment at the clinic', label: 'Conscious sedation' },
  { src: './clinic/treatment-room.jpg', alt: 'Dental treatment room at Dr. Rohini’s Dental Square', label: 'Modern treatment room' },
  { src: './clinic/play-area.jpg', alt: 'Colourful children’s play area at the clinic', label: 'Children’s play area' },
  { src: './clinic/sterilisation.jpg', alt: 'Sterilisation equipment at the clinic', label: 'Sterilisation facilities' },
  { src: './clinic/bravery-wall.jpg', alt: 'Children holding bravery certificates with Dr. Rohini', label: 'Bravery celebrations' },
]

function Arrow() { return <span aria-hidden="true">↗</span> }

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 3.8 9.4 8 7.8 9.6c1.1 2.4 3.1 4.4 5.5 5.5l1.6-1.6 4.2 2.3c.5.3.8.8.7 1.4l-.4 2.5c-.1.7-.7 1.2-1.4 1.2C9.8 20.8 3.2 14.2 3.1 6c0-.7.5-1.3 1.2-1.4l2.5-.4c.1 0 .2 0 .3-.4Z" /></svg>
}

function MessageIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.4a8.3 8.3 0 0 1-11.8 7.5L4 20l1.1-4.5A8.3 8.3 0 1 1 20.5 11.4Z" /><path d="M8.1 8.4c.8 3 2.3 4.5 5.5 5.5" /><path d="m8.2 8.3 1.4-.7 1.1 2-1 1M13.4 13.7l1-1 2 1.1-.7 1.4" /></svg>
}

function DetailsIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5.5" width="16" height="14" rx="2" /><path d="M8 3.5v4M16 3.5v4M4 10h16M8 14h3M8 17h6" /></svg>
}

function BrandLockup({ footer = false }) {
  return <>
    <span className="brand-copy">
      <strong>Dr. Rohini’s</strong>
      <small>{footer ? 'Dental Square · Palakkad' : 'Dental Square'}</small>
    </span>
  </>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviceTab, setServiceTab] = useState('children')
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="concept-banner">Independent redesign concept · Information and photographs from the clinic’s public website</div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Rohini's Dental Square home">
          <BrandLockup />
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span /><span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#doctor" onClick={closeMenu}>Dr. Rohini</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#team" onClick={closeMenu}>Experts</a>
          <a href="#gallery" onClick={closeMenu}>Clinic</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-cta" href="#book" onClick={closeMenu}>Book now <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-image" src="./hero-pediatric-dentistry.png" alt="Illustrative concept showing a child and parent speaking with a dentist" />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <p className="eyebrow">Paediatric · Preventive · Family dentistry</p>
            <h1>Little smiles.<br /><em>Big confidence.</em></h1>
            <p className="hero-intro">Thoughtful dental care for children, adults and patients who need a little more time, comfort and understanding.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:+919778023261">Call to book <Arrow /></a>
              <a className="button button-soft" href="#doctor">Meet Dr. Rohini</a>
            </div>
            <div className="hero-trust">
              <div><strong>MDS</strong><span>Paediatric specialist</span></div>
              <div><strong>8</strong><span>Dental experts</span></div>
              <div><strong>All ages</strong><span>One family clinic</span></div>
            </div>
          </div>
          <div className="availability"><span className="pulse" /><div><strong>Plan your visit</strong><small>Mon–Sat · 9:30 AM–6:30 PM</small></div></div>
        </section>

        <section id="doctor" className="doctor-section section-pad">
          <figure className="doctor-portrait">
            <img src="./clinic/dr-rohini.jpg" alt="Dr. Rohini Kootala, Chief Dental Surgeon" />
            <figcaption><strong>Dr. Rohini Kootala, MDS</strong><span>Chief Dental Surgeon</span></figcaption>
          </figure>
          <div className="doctor-intro">
            <p className="eyebrow dark">Meet Dr. Rohini Kootala, MDS</p>
            <h2>Passionately caring for smiles.</h2>
          </div>
          <div className="doctor-story">
            <p className="lead">Dr. Rohini Kootala is a Paediatric and Preventive Dentist known for a patient-centred, empathetic approach to children’s and family dental care.</p>
            <p>She completed her Bachelor of Dental Surgery at Karpaga Vinayaga Dental College, Chennai, and her Master of Dental Surgery at Royal Dental College, Palakkad. Her published clinical focus includes preventive dentistry, behaviour management, early orthodontic assessment, dental trauma, oral habits, infant and adolescent care, special-needs dentistry and emergency dental services.</p>
            <div className="credentials">
              <div><span>Education</span><strong>BDS · Karpaga Vinayaga Dental College</strong></div>
              <div><span>Specialisation</span><strong>MDS · Royal Dental College, Palakkad</strong></div>
              <div><span>Clinical role</span><strong>Chief Dental Surgeon</strong></div>
            </div>
          </div>
        </section>

        <section className="quick-book" aria-label="Quick booking options">
          <div><span>Need an appointment?</span><strong>Speak directly with the clinic</strong></div>
          <a href="tel:+919778023261">Call +91 97780 23261 <Arrow /></a>
          <a href="https://wa.me/919778023261?text=Hello%2C%20I%20would%20like%20to%20request%20a%20dental%20appointment." target="_blank" rel="noreferrer">WhatsApp the clinic <Arrow /></a>
        </section>

        <section className="speciality-callout section-pad">
          <div className="callout-copy">
            <p className="eyebrow light">A stronger reason to choose this clinic</p>
            <h2>Gentle care for patients who need a little more support.</h2>
            <p>The clinic’s combination of paediatric expertise, conscious sedation and differently abled care is brought forward—not buried inside a long treatment list.</p>
          </div>
          <div className="callout-image"><img src="./clinic/sedation-care.jpg" alt="A child receiving conscious sedation care at the clinic" /><span>Conscious sedation</span></div>
          <div className="callout-points">
            <div><strong>01</strong><span>Behaviour guidance</span></div>
            <div><strong>02</strong><span>Nitrous-oxide conscious sedation</span></div>
            <div><strong>03</strong><span>Individualised special-needs care</span></div>
          </div>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="service-heading">
            <div><p className="eyebrow dark">Specialised services</p><h2>Complete dental care,<br />made easier to explore.</h2></div>
            <p>Choose the type of care you are looking for. Every item below comes from the services published by Dr. Rohini’s Dental Square.</p>
          </div>
          <div className="service-tabs" role="tablist" aria-label="Service categories">
            <button role="tab" aria-selected={serviceTab === 'children'} onClick={() => setServiceTab('children')}>Children & special care</button>
            <button role="tab" aria-selected={serviceTab === 'complete'} onClick={() => setServiceTab('complete')}>Complete family dentistry</button>
          </div>
          <div className="service-grid" role="tabpanel">
            {serviceGroups[serviceTab].map(([title, text], index) => (
              <article className="service-card" key={title}>
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
          <div className="service-guide">
            <div><span>Not sure which service to choose?</span><strong>Tell the clinic what is troubling you. The team will guide you to the right specialist.</strong></div>
            <a className="button button-primary" href="#book">Find the right care <Arrow /></a>
          </div>
        </section>

        <section id="team" className="team-section section-pad">
          <div className="team-heading"><p className="eyebrow light">Team of experts</p><h2>One clinic.<br />Eight specialists.</h2><p>Specialist expertise across paediatric, gum, restorative, diagnostic, implant, surgical and orthodontic care.</p></div>
          <div className="team-list">
            {specialists.map((doctor, index) => (
              <article className="team-member" key={doctor.name}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{doctor.name} <small>{doctor.degree}</small></h3><strong>{doctor.role}</strong><p>{doctor.focus}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="gallery-section section-pad">
          <div className="gallery-heading"><div><p className="eyebrow dark">Inside Dental Square</p><h2>A clinic designed to feel welcoming.</h2></div><p>Real photographs from the clinic’s current website show its treatment environment, child-friendly facilities and approach to care.</p></div>
          <div className="gallery-track">
            {gallery.map((item) => <figure key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption>{item.label}</figcaption></figure>)}
          </div>
        </section>

        <section className="reviews-section section-pad">
          <div className="reviews-heading"><p className="eyebrow light">Patient stories</p><h2>Families remember<br />how care felt.</h2><p>Real moments from the clinic, paired with feedback published by patients and families.</p></div>
          <div className="story-mosaic">
            <figure className="story-main"><img src="./clinic/patient-story.jpg" alt="Dr. Rohini with a patient holding a bravery certificate" loading="lazy" /><figcaption>Celebrating a brave visit</figcaption></figure>
            <figure><img src="./clinic/patient-story-2.jpg" alt="Dr. Rohini with patients at the clinic" loading="lazy" /><figcaption>A visit completed with confidence</figcaption></figure>
            <figure><img src="./clinic/bravery-wall.jpg" alt="Children receiving bravery certificates with Dr. Rohini" loading="lazy" /><figcaption>Young patients, proud moments</figcaption></figure>
          </div>
          <div className="story-quotes">
            <article><span>01</span><p>“Highly recommended dental clinic, especially for kids and differently abled children.”</p><small>Published patient feedback</small></article>
            <article><span>02</span><p>“Very good service and very child-friendly staff.”</p><small>Published patient feedback</small></article>
            <article><span>03</span><p>“Friendly, approachable and patient.”</p><small>Published patient feedback</small></article>
            <article><span>04</span><p>“The doctor explained the procedure and all my questions patiently.”</p><small>Published patient feedback</small></article>
          </div>
          <small className="review-note">Testimonials condensed from feedback displayed on the clinic’s public website.</small>
        </section>

        <section id="faq" className="faq-section section-pad">
          <div className="faq-heading"><p className="eyebrow dark">Frequently asked questions</p><h2>Answers before<br />your appointment.</h2><p>Clear preparation can make a first visit easier for the whole family.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}
          </div>
        </section>

        <section id="book" className="contact-section section-pad">
          <div className="contact-copy"><p className="eyebrow light">Book your visit</p><h2>A healthier smile starts with one conversation.</h2><p>Call or message the clinic to discuss your concern, preferred time and any support your child or family member may need.</p>
            <div className="contact-actions"><a className="button button-coral" href="tel:+919778023261">Call +91 97780 23261 <Arrow /></a><a className="button button-ghost" href="https://wa.me/919778023261?text=Hello%2C%20I%20would%20like%20to%20request%20a%20dental%20appointment." target="_blank" rel="noreferrer">Request on WhatsApp</a></div>
          </div>
          <div className="contact-details">
            <div><span>Visit</span><p>Near SA Homes, Kallepully Road,<br />Ramanathapuram, Palakkad</p></div>
            <div><span>Clinic hours</span><p>Monday–Saturday · 9:30 AM–6:30 PM<br />Sunday · By appointment only</p></div>
            <div><span>Phone</span><p><a href="tel:+919778323261">+91 97783 23261</a><br /><a href="tel:+919778023261">+91 97780 23261</a></p></div>
            <div><span>Email</span><p><a href="mailto:rohinikootala@gmail.com">rohinikootala@gmail.com</a></p></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-intro">
            <a className="brand footer-brand" href="#top" aria-label="Dr. Rohini's Dental Square home"><BrandLockup footer /></a>
            <p>Specialist paediatric, preventive and complete family dentistry in Palakkad.</p>
          </div>
          <div className="footer-links">
            <span>Explore</span>
            <a href="#doctor">Dr. Rohini</a><a href="#services">Services</a><a href="#team">Experts</a><a href="#faq">FAQ</a>
          </div>
          <div className="footer-contact">
            <span>Arrange a visit</span>
            <a href="tel:+919778023261">+91 97780 23261</a>
            <a href="mailto:rohinikootala@gmail.com">rohinikootala@gmail.com</a>
            <a className="footer-top" href="#top">Back to top <Arrow /></a>
          </div>
        </div>
        <div className="footer-bottom"><p>Independent redesign concept. Not the clinic’s official website.</p><p>Created by <strong>NJX</strong></p></div>
      </footer>

      <nav className="mobile-book-bar" aria-label="Mobile booking actions">
        <a href="tel:+919778023261"><PhoneIcon />Call</a>
        <a href="https://wa.me/919778023261?text=Hello%2C%20I%20would%20like%20to%20request%20a%20dental%20appointment." target="_blank" rel="noreferrer"><MessageIcon />WhatsApp</a>
        <a href="#book"><DetailsIcon />Details</a>
      </nav>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
