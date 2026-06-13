import Link from 'next/link'

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero-section-large">
        <div className="hero-content">
          <h1>Have You Been Pwned?</h1>
          <p className="hero-description">
            Check if your email or password has been compromised in a data breach. 
            Search through billions of leaked credentials from real-world security incidents.
          </p>
          <div className="hero-buttons">
            <Link href="/email-checker" className="btn btn-primary">
              Check Email Address
            </Link>
            <Link href="/password-checker" className="btn btn-secondary">
              Check Password
            </Link>
          </div>
        </div>
      </div>

      <div className="stats-banner">
        <div className="stat-item">
          <div className="stat-number">12B+</div>
          <div className="stat-label">Breached Accounts</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">600M+</div>
          <div className="stat-label">Pwned Passwords</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Daily</div>
          <div className="stat-label">Updates</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100%</div>
          <div className="stat-label">Free</div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <h2>Why Use SecureCheck Pro?</h2>
          <p>Professional security monitoring tools accessible to everyone</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Comprehensive Search</h3>
            <p>Search through billions of breached records from thousands of security incidents worldwide.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Privacy Protected</h3>
            <p>Passwords use k-anonymity and SHA-1 hashing. Your actual credentials never leave your browser.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Instant Results</h3>
            <p>Get immediate feedback on your security status with detailed breach information.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Detailed Reports</h3>
            <p>See exactly which breaches exposed your data and what information was compromised.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🆓</div>
            <h3>Completely Free</h3>
            <p>No registration, no API keys, no hidden costs. Professional security for everyone.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Always Updated</h3>
            <p>Our databases are continuously updated with the latest breach information.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Protect Your Digital Identity Today</h2>
        <p>Don't wait until it's too late. Check your security status now.</p>
        <div className="cta-buttons">
          <Link href="/email-checker" className="btn btn-large btn-primary">
            Start Email Check
          </Link>
          <Link href="/password-checker" className="btn btn-large btn-secondary">
            Check Password Security
          </Link>
        </div>
      </div>
    </div>
  )
}
