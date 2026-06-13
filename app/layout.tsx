import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SecureCheck Pro - Advanced Security Monitoring',
  description: 'Professional security monitoring tool to check if your email or password has been compromised in data breaches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
