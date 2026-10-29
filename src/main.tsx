import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const images = {
  hero: 'https://images.pexels.com/photos/6024213/pexels-photo-6024213.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800',
  detail: 'https://images.pexels.com/photos/6593455/pexels-photo-6593455.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  studio: 'https://images.pexels.com/photos/6593361/pexels-photo-6593361.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
  portrait: 'https://images.pexels.com/photos/4125588/pexels-photo-4125588.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
}

const services = [
  { number: '01', title: 'Custom tattoos', copy: 'Your idea, developed into a one-off piece that feels like yours.' },
  { number: '02', title: 'Fine-line & lettering', copy: 'Clean, considered work with a sharp eye for detail.' },
  { number: '03', title: 'Ornamental work', copy: 'Considered shapes and details made to sit naturally on the body.' },
  { number: '04', title: 'More by confirmation', copy: 'Cover-ups, piercing and cosmetic tattooing where confirmed.' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showBooking, setShowBooking] = useState(false)

  const openBooking = () => setShowBooking(true)
  const closeBooking = () => setShowBooking(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Bindass Tattoos home">
          <span>BINDASS</span>
          <span>TATTOOS</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          <i className={menuOpen ? 'is-open' : ''} />
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="nav-book" onClick={openBooking}>Book a session <span>↗</span></button>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="red-dot" /> Custom tattoo studio / Dehradun</p>
            <h1>Your story.<br /><em>Your ink.</em></h1>
            <p className="hero-intro">Custom tattoos in Dehradun. Explore the work, share your idea, and enquire directly.</p>
            <div className="hero-actions">
              <button className="button button-red" onClick={openBooking}>Book on WhatsApp <span>↗</span></button>
              <a className="text-link" href="#work">See the work <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src={images.hero} alt="Tattoo artist working carefully on a client's arm" />
              <span className="image-label">01 / IN THE CHAIR</span>
            </div>
            <div className="hero-stamp">B<br />T</div>
            <p className="vertical-note">INK WITH INTENT — BY APPOINTMENT</p>
          </div>
        </section>

        <section className="ticker" aria-label="Studio values">
          <div className="ticker-track"><span>BLACK INK</span><b>✳</b><span>CLEAN CRAFT</span><b>✳</b><span>GOOD ENERGY</span><b>✳</b><span>BLACK INK</span><b>✳</b><span>CLEAN CRAFT</span><b>✳</b><span>GOOD ENERGY</span></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work / 01—04</p>
            <h2>Made to stay<br /><em>with you.</em></h2>
            <p className="section-note">Every piece starts with a conversation. Scroll through a few of the marks made in the studio.</p>
          </div>
          <div className="gallery-grid">
            <figure className="gallery-card large"><img src={images.detail} alt="Close-up of detailed black ink tattoo work" /><figcaption><span>01</span><span>Blackwork / Detail</span></figcaption></figure>
            <figure className="gallery-card offset"><img src={images.portrait} alt="Tattoo artist creating a design on a client's arm" /><figcaption><span>02</span><span>Custom / Process</span></figcaption></figure>
            <div className="gallery-aside"><p>“The best tattoos feel inevitable — like they were always meant to be there.”</p><span className="aside-rule" /><small>— BINDASS TATTOOS</small></div>
            <figure className="gallery-card wide"><img src={images.studio} alt="Tattoo artist working in the Bindass studio" /><figcaption><span>03</span><span>Studio / Dehradun</span></figcaption></figure>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-heading service-intro"><p className="eyebrow">What we do / 02</p><h2>Bring the idea.<br /><em>We’ll bring the ink.</em></h2></div>
          <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><span className="service-arrow">↗</span></article>)}</div>
        </section>

        <section className="studio section-pad" id="studio">
          <div className="studio-image"><img src={images.studio} alt="The tattoo studio workspace" /><span className="image-label">02 / THE STUDIO</span></div>
          <div className="studio-copy"><p className="eyebrow">A good place to get inked / 03</p><h2>Low lights.<br />High standards.</h2><p>Come for the work, stay for the energy. Bindass is a calm, considered studio built around good conversations and even better tattoos.</p><div className="studio-meta"><span>BOOKING</span><strong>By appointment</strong><span>DETAILS</span><strong>Confirm on WhatsApp</strong></div><a className="text-link" href="#contact">Ask about the studio <span>↗</span></a></div>
        </section>

        <section className="contact section-pad" id="contact">
          <div><p className="eyebrow"><span className="red-dot" /> Ready when you are / 04</p><h2>Got an idea?<br /><em>Let’s make it real.</em></h2></div>
          <div className="contact-action"><p>Tell us what you’re thinking — placement, size, or just a feeling. We’ll take it from there.</p><button className="button button-red" onClick={openBooking}>Start a conversation <span>↗</span></button></div>
        </section>
      </main>

      <footer className="site-footer"><a className="wordmark footer-mark" href="#top"><span>BINDASS</span><span>TATTOOS</span></a><div className="footer-links"><a href="#work">Work</a><a href="#contact">WhatsApp</a><a href="#services">Services</a></div><p>Bindass Tattoos • Horizon Works</p></footer>
      {showBooking && <BookingModal onClose={closeBooking} />}
    </div>
  )
}

function BookingModal({ onClose }: { onClose: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Close booking form">×</button><p className="eyebrow"><span className="red-dot" /> Let’s talk ink</p><h2 id="booking-title">Start with<br /><em>your idea.</em></h2><p className="modal-copy">WhatsApp us a few details and we’ll get back to you with the next steps.</p><div className="booking-prompts"><span>What are you thinking?</span><span>Where will it go?</span><span>When are you free?</span></div><a className="button button-red full-button" href="https://wa.me/919999999999?text=Hi%20Bindass%20Tattoos%2C%20I%27d%20like%20to%20enquire%20about%20a%20tattoo." target="_blank" rel="noreferrer">Open WhatsApp <span>↗</span></a><small>WhatsApp number and opening hours to be confirmed.</small></div></div>
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
