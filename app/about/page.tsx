import Link from 'next/link'

export default function About() {
  return (
    <div className="static-page">
      <div className="page-hero">
        <h1>About SecureCheck Pro</h1>
        <p>Professional security monitoring for everyone</p>
      </div>

      <div className="content-container">
        <section className="content-section">
          <h2>Our Mission</h2>
          <p>
            SecureCheck Pro was created to make professional security monitoring accessible to everyone. 
            We believe that everyone deserves to know if their personal information has been compromised 
            in a data breach, and they shouldn't have to pay for that information.
          </p>
        </section>

        <section className="content-section">
          <h2>What We Do</h2>
          <p>
            We provide free tools to check if your email address or password has been exposed in known 
            data breaches. Our platform searches through billions of compromised records to give you 
            instant, accurate results.
          </p>
          
          <div className="features-grid-small">
            <div className="feature-item">
              <h3>🔍 Email Breach Checker</h3>
              <p>Search through 12+ billion breached accounts from thousands of security incidents</p>
            </div>
            <div className="feature-item">
              <h3>🔐 Password Security Checker</h3>
              <p>Check against 600+ million compromised passwords using privacy-preserving technology</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Our Technology</h2>
          <p>
            We use industry-standard APIs from trusted sources including XposedOrNot and Have I Been Pwned. 
            Your privacy is our top priority:
          </p>
          <ul>
            <li>Email searches are not stored or logged</li>
            <li>Passwords use k-anonymity and SHA-1 hashing - your actual password never leaves your device</li>
            <li>No registration or personal information required</li>
            <li>All checks are performed securely over HTTPS</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>The Team</h2>
          <p>
            SecureCheck Pro was created by <strong>Chris Gichuru</strong>, assisted by <strong>Bramwelagina</strong>. 
            We're passionate about improving online security awareness and making professional security tools accessible to everyone.
          </p>
          
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have questions or feedback? We'd love to hear from you:</p>
            <ul>
              <li>📧 <a href="mailto:cgichuru47@gmail.com">cgichuru47@gmail.com</a></li>
              <li>📧 <a href="mailto:bramwela8@gmail.com">bramwela8@gmail.com</a></li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Data Sources</h2>
          <p>We aggregate breach data from the following trusted sources:</p>
          <ul>
            <li><strong>XposedOrNot</strong> - Email breach monitoring covering billions of records</li>
            <li><strong>Have I Been Pwned</strong> - Password breach database with 600M+ pwned passwords</li>
          </ul>
        </section>

        <div className="cta-box">
          <h2>Start Protecting Yourself Today</h2>
          <p>Check your security status now - it's quick, free, and private.</p>
          <div className="button-group">
            <Link href="/email-checker" className="btn btn-primary">
              Check Email
            </Link>
            <Link href="/password-checker" className="btn btn-secondary">
              Check Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
