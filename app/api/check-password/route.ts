import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()

    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 })
    }

    // Hash the password using SHA-1
    const hash = createHash('sha1').update(password).digest('hex').toUpperCase()
    
    // K-Anonymity: send only first 5 characters
    const prefix = hash.substring(0, 5)
    const suffix = hash.substring(5)

    // Call Have I Been Pwned API
    const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
      headers: {
        'Add-Padding': 'true' // Additional privacy protection
      }
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to check password' }, { status: 500 })
    }

    const text = await response.text()
    
    // Parse response and find matching hash
    const hashes = text.split('\n')
    for (const line of hashes) {
      const [hashSuffix, count] = line.split(':')
      if (hashSuffix.trim() === suffix) {
        return NextResponse.json({
          breached: true,
          count: parseInt(count.trim(), 10)
        })
      }
    }

    // Password not found in breaches
    return NextResponse.json({ breached: false, count: 0 })
  } catch (error) {
    console.error('Password check error:', error)
    return NextResponse.json({ error: 'Service unavailable' }, { status: 500 })
  }
}
