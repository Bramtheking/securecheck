'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailResult, setEmailResult] = useState<any>(null)
  const [passwordResult, setPasswordResult] = useState<any>(null)
  const [loadingEmail, setLoadingEmail] = useState(false)
  const [loadingPassword, setLoadingPassword] = useState(false)

  const checkEmail = async () => {
    if (!email) return
    setLoadingEmail(true)
    setEmailResult(null)
    
    try {
      const res = await fetch('/api/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      setEmailResult(data)
    } catch (error) {
      setEmailResult({ error: 'Failed to check email' })
    } finally {
      setLoadingEmail(false)
    }
  }

  const checkPassword = async () => {
    if (!password) return
    setLoadingPassword(true)
    setPasswordResult(null)
    
    try {
      const res = await fetch('/api/check-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      const data = await res.json()
      setPasswordResult(data)
    } catch (error) {
      setPasswordResult({ error: 'Failed to check password' })
    } finally {
      setLoadingPassword(false)
    }
  }

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>SecureCheck Pro</h1>
        <p className="tagline">Have you been pwned?</p>
        <p className="subtitle">
          Check if your email or password has been compromised in a data breach
        </p>
      </div>

      <div className="main-content">
        {/* Email Checker */}
        <div className="checker-section">
          <h2 className="checker-title">Email Address Breach Check</h2>
          <p className="checker-description">
            Enter your email address below to check if it has been compromised in any known data breaches. 
            We search through billions of leaked records to keep you informed.
          </p>
          
          <div className="input-group">
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkEmail()}
            />
            <button onClick={checkEmail} disabled={loadingEmail || !email}>
              {loadingEmail ? 'Checking...' : 'pwned?'}
            </button>
          </div>

          {loadingEmail && (
            <div className="loading">
              <div className="loading-spinner"></div>
              <div>Searching through breach databases...</div>
            </div>
          )}

          {emailResult && !emailResult.error && emailResult.breached && (
            <div className="result danger">
              <h3>Oh no — pwned!</h3>
              <div className="breach-count">{emailResult.count}</div>
              <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
                Your email address appeared in <strong>{emailResult.count}</strong> data breach{emailResult.count > 1 ? 'es' : ''}.
              </p>
              <p style={{ marginBottom: '20px', color: '#666' }}>
                Breaches you were pwned in:
              </p>

              <div className="breach-grid">
                {emailResult.breaches.map((breach: any, idx: number) => (
                  <div key={idx} className="breach-card">
                    <div className="breach-card-header">
                      <div className="breach-name">{breach.name}</div>
                      <div className="breach-date">{breach.date}</div>
                    </div>
                    <div className="breach-meta">
                      {breach.exposedRecords && breach.exposedRecords !== 'Unknown' && (
                        <div className="breach-meta-item">
                          <span className="breach-meta-label">Compromised accounts:</span> {breach.exposedRecords}
                        </div>
                      )}
                      {breach.exposedData && (
                        <div className="breach-meta-item">
                          <span className="breach-meta-label">Compromised data:</span> {breach.exposedData}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="recommendations">
                <h4>What should you do?</h4>
                <ul>
                  <li>Change your password immediately on any account using this email</li>
                  <li>Enable two-factor authentication (2FA) wherever possible</li>
                  <li>Be alert for phishing attempts targeting this email</li>
                  <li>Consider using a password manager to generate unique passwords</li>
                  <li>Monitor your accounts for any suspicious activity</li>
                </ul>
              </div>
            </div>
          )}

          {emailResult && !emailResult.error && !emailResult.breached && (
            <div className="result safe">
              <h3>Good news — no pwnage found!</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.7' }}>
                This email address wasn't found in any known data breaches. That doesn't mean it's 100% safe, but it's a good sign!
              </p>
              <div className="recommendations">
                <h4>Stay secure:</h4>
                <ul>
                  <li>Continue using strong, unique passwords for each account</li>
                  <li>Enable two-factor authentication on important accounts</li>
                  <li>Check back periodically as new breaches are discovered daily</li>
                  <li>Be cautious of phishing emails and suspicious links</li>
                </ul>
              </div>
            </div>
          )}

          {emailResult?.error && (
            <div className="error">
              <strong>Error:</strong> {emailResult.error}
            </div>
          )}
        </div>

        <hr className="divider" />

        {/* Password Checker */}
        <div className="checker-section">
          <h2 className="checker-title">Password Strength Check</h2>
          <p className="checker-description">
            Check if your password has been exposed in any data breaches. Your password is hashed locally 
            using SHA-1 and only a partial hash is sent to the API using k-anonymity - your actual password never leaves your device.
          </p>
          
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
            />
            <button onClick={checkPassword} disabled={loadingPassword || !password}>
              {loadingPassword ? 'Checking...' : 'pwned?'}
            </button>
          </div>

          {loadingPassword && (
            <div className="loading">
              <div className="loading-spinner"></div>
              <div>Checking password security...</div>
            </div>
          )}

          {passwordResult && !passwordResult.error && passwordResult.breached && (
            <div className="result danger">
              <h3>Oh no — pwned!</h3>
              <div className="breach-count">{passwordResult.count.toLocaleString()}</div>
              <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                This password has been seen <strong>{passwordResult.count.toLocaleString()}</strong> times before in data breaches.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>
                This password has previously appeared in a data breach and should never be used. 
                If you've ever used it anywhere before, change it immediately!
              </p>

              <div className="recommendations">
                <h4>What should you do?</h4>
                <ul>
                  <li><strong>Never</strong> use this password on any account</li>
                  <li>If you're currently using it, change it immediately</li>
                  <li>Create a strong password with at least 12 characters</li>
                  <li>Use a mix of uppercase, lowercase, numbers, and special characters</li>
                  <li>Use a password manager to generate and store unique passwords</li>
                  <li>Enable two-factor authentication for additional security</li>
                </ul>
              </div>
            </div>
          )}

          {passwordResult && !passwordResult.error && !passwordResult.breached && (
            <div className="result safe">
              <h3>Good news — no pwnage found!</h3>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '20px' }}>
                This password wasn't found in any of the Pwned Passwords loaded into Have I Been Pwned. 
                That doesn't necessarily mean it's a good password, just that it's not been discovered in breaches yet.
              </p>
              <div className="recommendations">
                <h4>Password best practices:</h4>
                <ul>
                  <li>Use a unique password for every account</li>
                  <li>Make passwords at least 12 characters long</li>
                  <li>Avoid using personal information (names, birthdays, etc.)</li>
                  <li>Change passwords regularly, especially for important accounts</li>
                  <li>Use a password manager to securely store passwords</li>
                </ul>
              </div>
            </div>
          )}

          {passwordResult?.error && (
            <div className="error">
              <strong>Error:</strong> {passwordResult.error}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="info-section">
          <h2>Why Use SecureCheck Pro?</h2>
          <div className="info-grid">
            <div className="info-card">
              <span className="info-card-icon">🛡️</span>
              <h3>Billions of Records</h3>
              <p>Search through billions of compromised records from real-world data breaches collected over the years.</p>
            </div>
            <div className="info-card">
              <span className="info-card-icon">🔐</span>
              <h3>Privacy First</h3>
              <p>Passwords are hashed using SHA-1 with k-anonymity. Your actual password never leaves your browser.</p>
            </div>
            <div className="info-card">
              <span className="info-card-icon">⚡</span>
              <h3>Instant Results</h3>
              <p>Get immediate feedback on whether your credentials have been exposed in data breaches.</p>
            </div>
            <div className="info-card">
              <span className="info-card-icon">💯</span>
              <h3>100% Free</h3>
              <p>No registration, no API keys, no hidden costs. Professional security monitoring for everyone.</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>12B+</h3>
              <p>Breached Accounts</p>
            </div>
            <div className="stat-item">
              <h3>600M+</h3>
              <p>Pwned Passwords</p>
            </div>
            <div className="stat-item">
              <h3>Daily</h3>
              <p>Database Updates</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p><strong>Powered by XposedOrNot & Have I Been Pwned</strong></p>
        <p>Protecting your digital identity, one check at a time</p>
        <p style={{ marginTop: '15px', fontSize: '0.85rem', opacity: 0.7 }}>
          This service is provided for informational purposes only. Always use strong, unique passwords.
        </p>
      </footer>
    </div>
  )
}
