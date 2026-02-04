"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
      {/* COMMUNITY ANNOUNCEMENT */}
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <span>
            Guys, this is the community group for participants and athletes —
            make sure to join the community!
          </span>
          <a
            className="announcement-link"
            href="https://chat.whatsapp.com/FSRZYdgwSB6Ax6WmZax3Pd?mode=gi_c"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join WhatsApp Community
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Link href="/registration">
              <button className="nav-btn">Register</button>
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION - FIGMA DESIGN */}
      <section className="hero-new">
        <div className="hero-new-content">
          {/* Left Side - Logo and Text */}
          <div className="hero-left">
            <div className="hero-logo-wrapper">
              <Image
                src="/tt.png"
                alt="Turfingo Tournaments"
                width={500}
                height={200}
                className="hero-logo-img"
                priority
              />
            </div>
            <Link href="/registration">
            <button className="hero-cta-btn">3x your money NOW</button>
            </Link>
            <a href="#showcase" className="hero-know-more">Know More</a>
          </div>

          {/* Right Side - Football Player with Stripes */}
          <div className="hero-right">
            <div className="hero-stripes"></div>
            <Image
              src="/football.png"
              alt="Football Player"
              width={600}
              height={800}
              className="hero-player-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* HERO HIGHLIGHTS */}
      <section id="showcase" className="showcase-section">
        <div className="showcase-grid">
          {/* LEFT COLUMN */}
          <div className="showcase-col">
            <div className="showcase-card">
              <div className="showcase-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Tournament Dates</h3>
              <p>8th Feb</p>
              <p>10:30am to 2:30pm</p>
            </div>

            <div className="showcase-card">
              <div className="showcase-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Format</h3>
              <p>1v1 Single Elimination Bracket</p>
            </div>
          </div>

          {/* CENTER */}
          <div className="showcase-center">
            <img
              src="/clutcharenalogo.png"
              alt="Clutch Arena"
              className="showcase-logo"
            />
            <div className="showcase-description">
              <h3>About the Tournament</h3>
              <p>
                <span className="showcase-highlight">Turfingo</span> is proud to
                present the inaugural{" "}
                <span className="showcase-highlight">Clutch Arena </span>
                tournament series, kicking things off with a high-stakes 1v1
                football competition that brings together the most talented
                players from across the region. This event represents our core
                commitment to fostering competitive sports and creating
                unforgettable experiences for athletes of every skill level.
                Whether you are a seasoned veteran on the pitch or a newcomer
                looking to test your mettle,{" "}
                <span className="showcase-highlight">Clutch Arena</span> delivers
                professionally organized matches paired with exciting prizes.
                This is your chance to come play, compete, own the spotlight,
                and be part of something bigger.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="showcase-col">
            <div className="showcase-card">
              <div className="showcase-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M8 6H24M8 6C6.5 6 5 7 5 9C5 11 6 12 8 12M8 6V12 M24 6C25.5 6 27 7 27 9C27 11 26 12 24 12M24 6V12 M8 12H11M24 12H21 M11 12V14C11 17 13 19 16 19 C19 19 21 17 21 14V12 M16 19V22M16 22H12V26H20V22H16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Prize Pool</h3>
              <p>₹4000</p>
              <p>Win <b>3 rounds</b> & <b>3x</b> your <b>Money</b></p>
            </div>

            <div className="showcase-card">
              <div className="showcase-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="8"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 21C5 17 8 15 12 15C16 15 19 17 21 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>Participants</h3>
              <p>Limited to 50 Players</p>
            </div>
          </div>
        </div>
      </section>


      {/* ABOUT TURFINGO SECTION */}
      <section id="about" className="about-section">
        <div className="container about-grid">
          {/* TEXT */}
          <div className="about-content">
            <h2 className="about-title">
              More About <span>turfingo</span>
            </h2>

            <p>
              Turfingo is a sports infrastructure and technology company focused
              on two core pillars, building turfs and intelligently managing
              them.
            </p>

            <p>
              Beyond infrastructure, we create a series of exciting tournaments
              at multiple levels to identify players with real potential who
              lack recognition and support them with the right opportunities,
              training, and exposure to help them grow professionally.
            </p>

            <p>
              From local competitions to large-scale events, Turfingo brings
              everything together in one place. Discover tournaments that match
              your skill level, track participation, and stay informed.
            </p>
            <p>
              Be part of Turfingo's community as we reshape how India plays,
              competes, and experiences sports.
            </p>
          </div>

          {/* IMAGE */}
          <div className="about-image-wrapper">
            <img
              src="/about.png"
              alt="Tournament illustration"
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container contact-content">
          <div className="contact-info">
            <h2 className="section-title">
              Get in <span className="highlight">Touch</span>
            </h2>
            <p className="contact-subtitle">
              Have questions about the tournament or our platform? We'd love to
              hear from you.
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 8L10.89 13.26C11.55 13.67 12.45 13.67 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:turfingo@gmail.com">turfingo@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Vnest, VIT Chennai, Kelambakkam<br /> Chennai, Tamil Nadu 600130,<br /> India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form">
              <h3>Send us a message</h3>

              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>

              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-logo">turfingo</h3>
              <p>
                Your gateway to competitive sports tournaments. Join, compete,
                and win.
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/company/turfingo/"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm8 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C21.4 7.6 24 10.1 24 15.2V24h-5v-8.1c0-1.93-.04-4.41-2.7-4.41-2.7 0-3.11 2.1-3.11 4.27V24H8V8z" />
                  </svg>
                </a>

                <a
                  href="https://chat.whatsapp.com/FSRZYdgwSB6Ax6WmZax3Pd?mode=gi_c
"
                  aria-label="WhatsApp"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.52 3.48A11.87 11.87 0 0012.02 0C5.38 0 .02 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.18-1.62A11.94 11.94 0 0012.02 24C18.66 24 24 18.63 24 12a11.9 11.9 0 00-3.48-8.52zM12.02 22c-1.92 0-3.8-.5-5.46-1.45l-.39-.23-3.67.96.98-3.57-.25-.41A9.94 9.94 0 012.02 12c0-5.51 4.49-10 10-10 2.67 0 5.18 1.04 7.07 2.93A9.94 9.94 0 0122.02 12c0 5.51-4.49 10-10 10zm5.48-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.06 2.9 1.21 3.1c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.7.22 1.33.19 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/turfingo/?hl=en"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#showcase">Tournaments</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="mailto:turfingo@gmail.com">Help Center</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacypolicy">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Turfingo. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
}
