'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          <span className="logo-icon">🔐</span>
          <span className="logo-text">SecureCheck Pro</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            href="/" 
            className={pathname === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            href="/email-checker" 
            className={pathname === '/email-checker' ? 'nav-link active' : 'nav-link'}
          >
            Email Checker
          </Link>
          <Link 
            href="/password-checker" 
            className={pathname === '/password-checker' ? 'nav-link active' : 'nav-link'}
          >
            Password Checker
          </Link>
          <Link 
            href="/about" 
            className={pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
          <Link 
            href="/privacy" 
            className={pathname === '/privacy' ? 'nav-link active' : 'nav-link'}
          >
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  )
}
