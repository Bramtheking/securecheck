import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>SecureCheck Pro</h3>
          <p>Professional security monitoring for your digital identity. Check if your credentials have been compromised in data breaches.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/email-checker">Email Checker</Link></li>
            <li><Link href="/password-checker">Password Checker</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Data Sources</h4>
          <ul>
            <li><a href="https://xposedornot.com" target="_blank" rel="noopener noreferrer">XposedOrNot API</a></li>
            <li><a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer">Have I Been Pwned</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:cgichuru47@gmail.com">cgichuru47@gmail.com</a></li>
            <li><a href="mailto:bramwela8@gmail.com">bramwela8@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SecureCheck Pro. Created by Chris Gichuru, assisted by Bramwelagina.</p>
        <p className="footer-disclaimer">This service is provided for informational purposes only. Always practice good security hygiene.</p>
      </div>
    </footer>
  )
}
