export default function Privacy() {
  return (
    <div className="static-page">
      <div className="page-hero">
        <h1>Privacy Policy</h1>
        <p>Your privacy is our priority</p>
      </div>

      <div className="content-container">
        <section className="content-section">
          <h2>Introduction</h2>
          <p>
            At SecureCheck Pro, we take your privacy seriously. This privacy policy explains how we 
            handle your information when you use our breach checking services.
          </p>
        </section>

        <section className="content-section">
          <h2>Information We Don't Collect</h2>
          <p>Unlike many services, we prioritize your privacy by not collecting unnecessary data:</p>
          <ul>
            <li>We do not store the email addresses you check</li>
            <li>We do not store or log the passwords you check</li>
            <li>We do not require user registration or accounts</li>
            <li>We do not track your personal information</li>
            <li>We do not sell any data to third parties</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>How Our Services Work</h2>
          
          <h3>Email Breach Checker</h3>
          <p>
            When you check an email address, we send a request to the XposedOrNot API to search 
            their database of breached accounts. The email is used only for the search query and 
            is not stored on our servers.
          </p>

          <h3>Password Security Checker</h3>
          <p>
            Your password security is handled with maximum privacy protection:
          </p>
          <ul>
            <li>Passwords are hashed using SHA-1 on your device (in your browser)</li>
            <li>Only the first 5 characters of the hash are sent to the Have I Been Pwned API</li>
            <li>This k-anonymity approach means your actual password never leaves your device</li>
            <li>The API returns a list of hash suffixes, and matching is done locally on your device</li>
            <li>We never see, store, or transmit your actual password</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Third-Party Services</h2>
          <p>We use the following trusted third-party APIs:</p>
          
          <h3>XposedOrNot</h3>
          <p>
            Used for email breach checking. Visit their{' '}
            <a href="https://xposedornot.com" target="_blank" rel="noopener noreferrer">website</a>{' '}
            for their privacy policy.
          </p>

          <h3>Have I Been Pwned</h3>
          <p>
            Used for password checking using the k-anonymity model. Visit their{' '}
            <a href="https://haveibeenpwned.com" target="_blank" rel="noopener noreferrer">website</a>{' '}
            for their privacy policy.
          </p>
        </section>

        <section className="content-section">
          <h2>Cookies and Tracking</h2>
          <p>
            We do not use cookies for tracking purposes. Any cookies used are strictly functional 
            and necessary for the website to operate properly.
          </p>
        </section>

        <section className="content-section">
          <h2>Data Security</h2>
          <p>
            All communication between your browser and our servers is encrypted using HTTPS. 
            Since we don't store your search queries, there's no sensitive data at risk on our servers.
          </p>
        </section>

        <section className="content-section">
          <h2>Your Rights</h2>
          <p>
            Since we don't collect or store your personal information, there's no data for you 
            to access, modify, or delete. Your searches are completely private and anonymous.
          </p>
        </section>

        <section className="content-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on 
            this page with an updated revision date.
          </p>
        </section>

        <section className="content-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our practices, please contact us:
          </p>
          <ul>
            <li>📧 <a href="mailto:cgichuru47@gmail.com">cgichuru47@gmail.com</a></li>
            <li>📧 <a href="mailto:bramwela8@gmail.com">bramwela8@gmail.com</a></li>
          </ul>
        </section>

        <p className="last-updated">
          <em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em>
        </p>
      </div>
    </div>
  )
}
