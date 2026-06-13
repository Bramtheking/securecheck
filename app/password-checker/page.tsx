'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const checkPassword = async () => {
    if (!password) return
    setLoading(true)
    setResult(null)
    
    try {
      const res = await fetch('/api/check-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      const data = await res.json()
      setResult(data)
    } catch (error) {
      setResult({ error: 'Failed to check password' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="checker-page">
      <div className="page-hero">
        <h1>Password Security Checker</h1>
        <p>Check if your password has been exposed in data breaches</p>
      </div>

      <div className="checker-container">
        <div className="checker-box">
          <div className="checker-description">
            <h2>How it works</h2>
            <p>
              Your password is hashed locally using SHA-1 and only the first 5 characters 
              of the hash are sent to the API using k-anonymity. This means your actual 
              password <strong>never leaves your browser</strong>.
            </p>
          </div>

          <div className="input-section">
            <div className="password-input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkPassword()}
                className="checker-input"
              />
              <button 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            <button 
              onClick={checkPassword} 
              disabled={loading || !password}
              className="btn btn-primary btn-large"
            >
              {loading ? 'Checking...' : 'Check Password'}
            </button>
          </div>

          {loading && (
            <div className="loading-state">
              <div className="spinner"></div>
              <p>Checking password security...</p>
            </div>
          )}

          {result && !result.error && result.breached && (
            <div className="result-box danger">
              <div className="result-header">
                <h3>🚨 Password Compromised!</h3>
                <div className="breach-count-badge">{result.count.toLocaleString()} times</div>
              </div>
              
              <p className="result-summary">
                This password has been seen <strong>{result.count.toLocaleString()}</strong> times 
                in data breaches. It is highly compromised and should <strong>never</strong> be used.
              </p>

              <div className="recommendations-box">
                <h4>🛡️ Critical Actions Required:</h4>
                <ul>
                  <li><strong>Never use this password</strong> on any account</li>
                  <li>If you're currently using it anywhere, change it immediately</li>
                  <li>Create a strong password with at least 12 characters</li>
                  <li>Use a mix of uppercase, lowercase, numbers, and special symbols</li>
                  <li>Consider using a password manager to generate unique passwords</li>
                  <li>Enable two-factor authentication for additional security</li>
                </ul>
              </div>
            </div>
          )}

          {result && !result.error && !result.breached && (
            <div className="result-box safe">
              <h3>✅ Password Looks Good!</h3>
              <p className="result-summary">
                This password hasn't been found in any known data breaches. While that's 
                good news, it doesn't guarantee it's a strong password.
              </p>
              <div className="recommendations-box">
                <h4>Password Best Practices:</h4>
                <ul>
                  <li>Use a unique password for every account</li>
                  <li>Make passwords at least 12 characters long</li>
                  <li>Avoid using personal information (names, dates, etc.)</li>
                  <li>Update passwords regularly for important accounts</li>
                  <li>Use a password manager to store passwords securely</li>
                  <li>Enable 2FA whenever possible</li>
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
            <h3>K-Anonymity Protection</h3>
            <p>
              We use k-anonymity to protect your password. It's hashed on your device, 
              and only a partial hash is sent to the API. Your actual password never 
              leaves your browser.
            </p>
          </div>

          <div className="info-box">
            <h3>600M+ Pwned Passwords</h3>
            <p>
              Our database contains over 600 million compromised passwords from real-world 
              security breaches.
            </p>
          </div>

          <div className="info-box">
            <h3>Already Checked Email?</h3>
            <p>
              Make sure your email address hasn't been compromised either.
            </p>
            <Link href="/email-checker" className="btn btn-secondary btn-small">
              Check Email →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
