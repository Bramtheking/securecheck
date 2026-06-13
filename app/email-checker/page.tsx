'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function EmailChecker() {
  const [email, setEmail] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const checkEmail = async () => {
    if (!email) return
    setLoading(true)
    setResult(null)
    
    try {
      const res = await fetch('/api/check-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      setResult(data)
    } catch (error) {
      setResult({ error: 'Failed to check email' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="checker-page">
      <div className="page-hero">
        <h1>Email Breach Scanner</h1>
        <p>Check if your email has been exposed in any data breaches</p>
      </div>

      <div className="checker-container">
        <div className="checker-box">
          <div className="checker-description">
            <h2>How it works</h2>
            <p>
              Enter your email address to search through billions of compromised accounts from 
              thousands of data breaches. We'll tell you if your email was found and which 
              breaches it appeared in.
            </p>
          </div>

          <div className="input-section">
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkEmail()}
              className="checker-input"
            />
            <button 
              onClick={checkEmail} 
              disabled={loading || !email}
              className="btn btn-primary btn-large"
            >
              {loading ? 'Searching...' : 'Check Email'}
            </button>
          </div>

          {loading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Searching breach databases...</p>
            </div>
          )}

          {result && !result.error && result.breached && (
            <div className="result-box danger">
              <div className="result-header">
                <h3>⚠️ Email Compromised</h3>
                <div className="breach-count-badge">{result.count} breaches</div>
              </div>
              
              <p className="result-summary">
                Your email was found in <strong>{result.count}</strong> data breach{result.count > 1 ? 'es' : ''}.
              </p>

              <div className="breaches-list">
                <h4>Breaches you were pwned in:</h4>
                {result.breaches.map((breach: any, idx: number) => (
                  <div key={idx} className="breach-item-card">
                    <div className="breach-header">
                      <span className="breach-name">{breach.name}</span>
                      <span className="breach-date">{breach.date}</span>
                    </div>
                    {breach.exposedData && breach.exposedData !== 'Check breach details for exposed data types' && (
                      <div className="breach-details">
                        <strong>Exposed:</strong> {breach.exposedData}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="recommendations-box">
                <h4>🛡️ What you should do:</h4>
                <ul>
                  <li>Change passwords on all accounts using this email immediately</li>
                  <li>Enable two-factor authentication (2FA) wherever possible</li>
                  <li>Be alert for phishing attempts targeting this email</li>
                  <li>Monitor accounts for suspicious activity</li>
                  <li>Consider using unique passwords for each service</li>
                </ul>
              </div>
            </div>
          )}

          {result && !result.error && !result.breached && (
            <div className="result-box safe">
              <h3>✅ Good News!</h3>
              <p className="result-summary">
                This email address wasn't found in any known data breaches. 
                That's a great sign, but stay vigilant!
              </p>
              <div className="recommendations-box">
                <h4>Keep your account secure:</h4>
                <ul>
                  <li>Use strong, unique passwords for each account</li>
                  <li>Enable 2FA on important accounts</li>
                  <li>Check back periodically as new breaches are discovered</li>
                  <li>Be cautious of phishing emails and suspicious links</li>
                </ul>
              </div>
            </div>
          )}

          {result?.error && (
            <div className="result-box error">
              <strong>Error:</strong> {result.error}
            </div>
          )}
        </div>

        <div className="sidebar-info">
          <div className="info-box">
            <h3>About Email Checking</h3>
            <p>
              Our email checker searches through over 12 billion compromised accounts 
              from thousands of data breaches collected over the years.
            </p>
          </div>

          <div className="info-box">
            <h3>Your Privacy</h3>
            <p>
              We don't store any emails you check. Your search is completely private 
              and secure.
            </p>
          </div>

          <div className="info-box">
            <h3>Need Password Check?</h3>
            <p>
              After checking your email, make sure your passwords are secure too.
            </p>
            <Link href="/password-checker" className="btn btn-secondary btn-small">
              Check Password →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
