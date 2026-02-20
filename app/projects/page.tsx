export default function Projects() {
  return (
    <>
      <div className="projects-container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="subtitle">Terry Suite</div>
            <h1>
              <span>Apps That</span>
              <span className="highlight">Don't Expire</span>
            </h1>
            <p className="tagline">
              Pay once. Own forever. No subscriptions. No monthly anxiety. Just
              powerful tools that work together seamlessly.
            </p>
            <div className="cta-buttons">
              <a href="#bundles" className="btn btn-primary">
                Browse Bundles
              </a>
              <a href="#apps" className="btn btn-secondary">
                Explore Apps
              </a>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="hero">
          <div className="philosophy-content">
            <div className="subtitle">My Philosophy</div>
            <h2>Software Should Be Owned, Not Rented</h2>
            <p className="philosophy-text">
              I'm pushing back against subscription fatigue. Every app you
              purchase is yours forever, no recurring fees, no expiration dates. Just honest tools that respect your wallet
              and your time.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">18</span>
                <span className="stat-label">Apps & Counting</span>
              </div>
              <div className="stat">
                <span className="stat-number">$0</span>
                <span className="stat-label">Monthly Fees</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Lifetime Access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bundles Section */}
        <section className="bundles" id="bundles">
          <div className="bundles-container">
            <h2 data-scroll>Choose Your Suite</h2>
            <p className="bundles-subtitle" data-scroll>
              Curated collections that work together seamlessly
            </p>

            <div className="bundle-grid">
              <div className="bundle-card" data-scroll>
                <div className="bundle-tag">Utilities</div>
                <h3 className="bundle-name">Creative Toolkit</h3>
                <div className="bundle-price">$29</div>
                <div className="bundle-price-subtitle">One-time purchase</div>
                <ul className="bundle-apps">
                  <li>QR Code Designer</li>
                  <li>Chroma Studio</li>
                  <li>Unicode Explorer</li>
                  <li>Password Generator</li>
                  <li>Poll Party</li>
                  <li>Task Log</li>
                </ul>
                <button className="bundle-btn">Get Creative Toolkit</button>
              </div>

              <div className="bundle-card featured" data-scroll>
                <div className="bundle-tag">Most Popular</div>
                <h3 className="bundle-name">Relationship Suite</h3>
                <div className="bundle-price">$49</div>
                <div className="bundle-price-subtitle">One-time purchase</div>
                <ul className="bundle-apps">
                  <li>Love Language Tracker</li>
                  <li>VibeMatch</li>
                  <li>40 Day Love Journey</li>
                  <li>Who's Most Likely</li>
                  <li>Cupid's Corner</li>
                  <li>Countdown Together</li>
                  <li>A-Z Date Ideas</li>
                  <li>Dream Together</li>
                </ul>
                <button className="bundle-btn">Get Relationship Suite</button>
              </div>

              <div className="bundle-card" data-scroll>
                <div className="bundle-tag">Wellness</div>
                <h3 className="bundle-name">Growth & Wellness</h3>
                <div className="bundle-price">$39</div>
                <div className="bundle-price-subtitle">One-time purchase</div>
                <ul className="bundle-apps">
                  <li>Daily Affirmations</li>
                  <li>Pinocchio's Journey</li>
                  <li>Focus</li>
                  <li>MedGuard</li>
                  <li>Gentleman's Code</li>
                </ul>
                <button className="bundle-btn">Get Growth & Wellness</button>
              </div>
            </div>

            <div
              className="bundle-card featured"
              data-scroll
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <div className="bundle-tag">Best Value</div>
              <h3 className="bundle-name">Complete Collection</h3>
              <div className="bundle-price">$99</div>
              <div className="bundle-price-subtitle">
                All 18 apps · Save $18
              </div>
              <p style={{ marginBottom: "2rem", opacity: 0.8 }}>
                Get every app we've ever made and everything we'll make in the
                future. Lifetime access to the complete suite.
              </p>
              <button className="bundle-btn">Get Complete Collection</button>
            </div>
          </div>
        </section>

        {/* Apps Showcase */}
        <section className="apps-showcase" id="apps">
          <div className="apps-container">
            <h2 data-scroll>Every App, Explained</h2>

            <div className="app-categories">
              <div className="app-category" data-scroll>
                <div className="category-header">
                  <div className="category-number">01</div>
                  <div className="category-info">
                    <h3>Creative Utilities</h3>
                    <div className="category-count">6 Apps</div>
                  </div>
                </div>
                <div className="app-list">
                  <div className="app-item">
                    <div className="app-name">Poll Party</div>
                    <div className="app-description">
                      Create engaging real-time polls that make decision-making
                      fun
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Unicode Explorer</div>
                    <div className="app-description">
                      Discover and copy beautiful symbols and special characters
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">QR Code Designer</div>
                    <div className="app-description">
                      Generate stunning, customizable QR codes in seconds
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Chroma Studio</div>
                    <div className="app-description">
                      Professional color picker and palette creator
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Password Generator</div>
                    <div className="app-description">
                      Create secure, memorable passwords instantly
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Task Log</div>
                    <div className="app-description">
                      Simple, beautiful task tracking that actually works
                    </div>
                  </div>
                </div>
              </div>

              <div className="app-category" data-scroll>
                <div className="category-header">
                  <div className="category-number">02</div>
                  <div className="category-info">
                    <h3>Relationship Tools</h3>
                    <div className="category-count">8 Apps</div>
                  </div>
                </div>
                <div className="app-list">
                  <div className="app-item">
                    <div className="app-name">Love Language Tracker</div>
                    <div className="app-description">
                      Understand how you and your partner express love
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">VibeMatch</div>
                    <div className="app-description">
                      Tinder-style discovery of shared interests and activities
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">40 Day Love Journey</div>
                    <div className="app-description">
                      A new way to show love every single day
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Who's Most Likely</div>
                    <div className="app-description">
                      Fun relationship game to learn more about each other
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Cupid's Corner</div>
                    <div className="app-description">
                      Playful quizzes and games for couples
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Countdown Together</div>
                    <div className="app-description">
                      Beautiful milestone clocks for special moments
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">A-Z Date Ideas</div>
                    <div className="app-description">
                      Creative date inspiration from A to Z
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Dream Together</div>
                    <div className="app-description">
                      Set and track shared goals as a couple
                    </div>
                  </div>
                </div>
              </div>

              <div className="app-category" data-scroll>
                <div className="category-header">
                  <div className="category-number">03</div>
                  <div className="category-info">
                    <h3>Wellness & Growth</h3>
                    <div className="category-count">5 Apps</div>
                  </div>
                </div>
                <div className="app-list">
                  <div className="app-item">
                    <div className="app-name">Daily Affirmations</div>
                    <div className="app-description">
                      Start each day with positive, personalized affirmations
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Pinocchio's Journey</div>
                    <div className="app-description">
                      Self-help companion for personal growth
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Focus</div>
                    <div className="app-description">
                      Use technology to unplug and find clarity
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">MedGuard</div>
                    <div className="app-description">
                      Medicine info, interactions, and safety tracking
                    </div>
                  </div>
                  <div className="app-item">
                    <div className="app-name">Gentleman's Code</div>
                    <div className="app-description">
                      Modern guide to character and conduct
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="integration" id="integration">
          <div className="integration-container">
            <h2 data-scroll>Designed to Work Together</h2>
            <div className="integration-features">
              <div className="feature" data-scroll>
                <span className="feature-icon">🔗</span>
                <h3>Seamless Sync</h3>
                <p>
                  Your data flows naturally between apps. Pick a color in Chroma
                  Studio, use it instantly in QR Code Designer.
                </p>
              </div>
              <div className="feature" data-scroll>
                <span className="feature-icon">🎯</span>
                <h3>Single Sign-On</h3>
                <p>
                  One account, all your apps. Purchase once, access everywhere,
                  no repeated logins.
                </p>
              </div>
              <div className="feature" data-scroll>
                <span className="feature-icon">💾</span>
                <h3>Unified Backup</h3>
                <p>
                  Export all your data from every app in one file. Your
                  information, your control.
                </p>
              </div>
              <div className="feature" data-scroll>
                <span className="feature-icon">⚡</span>
                <h3>Quick Actions</h3>
                <p>
                  Send data from any app to another instantly. Create
                  countdowns, log tasks, generate codes — all connected.
                </p>
              </div>
              <div className="feature" data-scroll>
                <span className="feature-icon">🌙</span>
                <h3>Works Offline</h3>
                <p>
                  Progressive web apps that function without internet. Your
                  tools, always available.
                </p>
              </div>
              <div className="feature" data-scroll>
                <span className="feature-icon">🎨</span>
                <h3>Shared Themes</h3>
                <p>
                  Set your preferences once, see them everywhere. Cohesive
                  experience across the suite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <h2>Ready to Own Your Tools?</h2>
          <p>Join the movement against subscription fatigue</p>
          <a href="#bundles" className="btn">
            Choose Your Bundle
          </a>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-logo">Terry Suite</div>
            <div className="footer-links">
              <a href="#bundles">Bundles</a>
              <a href="#apps">Apps</a>
              <a href="#integration">Integration</a>
              <a href="https://ericterry.netlify.app/">About Eric</a>
              <a href="mailto:hello@terrysuite.com">Contact</a>
            </div>
            <div className="copyright">
              © 2026 Terry Suite. Built with intention, sold with integrity.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
