import React from 'react';

export default function Home() {
  return (
    <>
      {/* 1. Header */}
      <header className="site-header" role="banner">
        <div className="container">
          <div>
            <a href="#hero" className="brand-title">
              Yaboroo Imperium Party
            </a>
            <span className="party-status-tag">in formation</span>
          </div>

          <nav role="navigation" aria-label="Main Navigation">
            <ul className="nav-list">
              <li>
                <a href="#purpose" className="nav-link">
                  Our Purpose
                </a>
              </li>
              <li>
                <a href="#how-we-contest" className="nav-link">
                  How We Contest
                </a>
              </li>
              <li>
                <a href="#what-we-pursue" className="nav-link">
                  What We Pursue
                </a>
              </li>
              <li>
                <a href="#three-lanes" className="nav-link">
                  Three Lanes
                </a>
              </li>
              <li>
                <a href="#register" className="nav-link">
                  Register Interest
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Banner */}
        <section id="hero" className="section section-alt">
          <div className="container">
            <h1>Yaboroo Imperium Party</h1>
            <p style={{ fontSize: '1.25rem', color: '#8F3A1E', fontWeight: 600 }}>
              (in formation)
            </p>
            <p style={{ maxWidth: '720px', fontSize: '1.125rem' }}>
              Official public holding website for the Yaboroo Imperium Party (in formation).
            </p>
          </div>
        </section>

        {/* 2. Our Purpose */}
        <section id="purpose" className="section">
          <div className="container">
            <h2>Our Purpose</h2>
            <div className="dev-placeholder">
              <span className="dev-placeholder-tag">[DEVELOPMENT PLACEHOLDER]</span>
              <p className="dev-placeholder-text">
                The Party&apos;s approved Positioning Statement for &ldquo;Our Purpose&rdquo; has not yet been provided. 
                This section will contain the exact approved wording upon release.
              </p>
            </div>
          </div>
        </section>

        {/* 3. How We Contest */}
        <section id="how-we-contest" className="section section-alt">
          <div className="container">
            <h2>How We Contest</h2>
            <div className="dev-placeholder">
              <span className="dev-placeholder-tag">[DEVELOPMENT PLACEHOLDER]</span>
              <p className="dev-placeholder-text">
                The Party&apos;s approved strategy and framework statement for &ldquo;How We Contest&rdquo; has not yet been provided. 
                This section will contain the exact approved wording upon release.
              </p>
            </div>
          </div>
        </section>

        {/* 4. What We Will Pursue */}
        <section id="what-we-pursue" className="section">
          <div className="container">
            <h2>What We Will Pursue</h2>
            <div className="dev-placeholder">
              <span className="dev-placeholder-tag">[DEVELOPMENT PLACEHOLDER]</span>
              <p className="dev-placeholder-text">
                The Party&apos;s approved platform objectives statement for &ldquo;What We Will Pursue&rdquo; has not yet been provided. 
                This section will contain the exact approved wording upon release.
              </p>
            </div>
          </div>
        </section>

        {/* 5. One Fire, Three Lanes */}
        <section id="three-lanes" className="section section-alt">
          <div className="container">
            <h2>One Fire, Three Lanes</h2>
            <div className="grid-three">
              <div className="lane-card">
                <h3>Lane One</h3>
                <div className="dev-placeholder">
                  <span className="dev-placeholder-tag">[DEVELOPMENT PLACEHOLDER]</span>
                  <p className="dev-placeholder-text">
                    Lane One description and key objectives to be updated with approved wording.
                  </p>
                </div>
              </div>

              <div className="lane-card">
                <h3>Lane Two</h3>
                <div className="dev-placeholder">
                  <span className="dev-placeholder-tag">[DEVELOPMENT PLACEHOLDER]</span>
                  <p className="dev-placeholder-text">
                    Lane Two description and key objectives to be updated with approved wording.
                  </p>
                </div>
              </div>

              <div className="lane-card">
                <h3>Lane Three</h3>
                <div className="dev-placeholder">
                  <span className="dev-placeholder-tag">[DEVELOPMENT PLACEHOLDER]</span>
                  <p className="dev-placeholder-text">
                    Lane Three description and key objectives to be updated with approved wording.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Register Your Interest */}
        <section id="register" className="section">
          <div className="container" style={{ maxWidth: '680px' }}>
            <h2>Register Your Interest</h2>
            <p>
              Express your interest in receiving official updates as the Yaboroo Imperium Party (in formation) progresses.
            </p>

            <form action="/api/interest" method="POST" style={{ marginTop: '2rem' }}>
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="region" className="form-label">
                  Postcode or Region
                </label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  className="form-input"
                  placeholder="e.g. 2000 or Regional NSW"
                />
              </div>

              <div className="form-group">
                <label htmlFor="comments" className="form-label">
                  Message / Expression of Interest
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  className="form-textarea"
                  placeholder="Optional message"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Submit Expression of Interest
              </button>
            </form>
          </div>
        </section>

        {/* 7. Contact */}
        <section id="contact" className="section section-alt">
          <div className="container">
            <h2>Contact</h2>
            <p>
              Official contact details for the Yaboroo Imperium Party (in formation).
            </p>

            <div className="dev-placeholder" style={{ maxWidth: '600px' }}>
              <span className="dev-placeholder-tag">[DEVELOPMENT PLACEHOLDER]</span>
              <p className="dev-placeholder-text">
                <strong>Email:</strong> [DEVELOPMENT PLACEHOLDER: Party Email Address]
                <br />
                <strong>Telephone:</strong> [DEVELOPMENT PLACEHOLDER: Party Phone Number]
                <br />
                <strong>Postal Address:</strong> [DEVELOPMENT PLACEHOLDER: Postal / Contact Address]
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <p>
            <strong>Yaboroo Imperium Party (in formation)</strong>
          </p>
          <div className="footer-disclaimer">
            <p>
              This is an official holding website for the Yaboroo Imperium Party (in formation). 
              The Party is currently in formation and is not registered with electoral commissions. 
              This website does not accept donations or formal membership applications.
            </p>
            <p style={{ marginTop: '0.5rem', marginBottom: 0 }}>
              &copy; {new Date().getFullYear()} Yaboroo Imperium Party (in formation). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
