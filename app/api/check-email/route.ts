import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    console.log('Checking email:', email)

    // Call XposedOrNot API
    const response = await fetch(`https://api.xposedornot.com/v1/check-email/${encodeURIComponent(email)}`, {
      headers: {
        'Accept': 'application/json'
      }
    })

    console.log('API Status:', response.status)

    // 404 means no breaches found
    if (response.status === 404) {
      return NextResponse.json({ breached: false, breaches: [], count: 0 })
    }

    // Other error statuses
    if (!response.ok) {
      console.error('API error:', response.status, response.statusText)
      return NextResponse.json({ error: 'Failed to check email. Service may be temporarily unavailable.' }, { status: 500 })
    }

    const data = await response.json()
    console.log('API Response:', JSON.stringify(data, null, 2))

    // XposedOrNot returns format: { breaches: [[name1, name2, ...]], email: "...", status: "success" }
    if (data.breaches && Array.isArray(data.breaches) && data.breaches.length > 0) {
      // Flatten the nested array and get breach names
      const breachNames = data.breaches[0] || []
      
      if (breachNames.length === 0) {
        return NextResponse.json({ breached: false, breaches: [], count: 0 })
      }

      return NextResponse.json({
        breached: true,
        count: breachNames.length,
        breaches: breachNames.map((name: string) => ({
          name: name || 'Undisclosed Breach',
          date: 'Date not provided by API',
          exposedData: 'Check breach details for exposed data types',
          exposedRecords: 'Unknown'
        }))
      })
    }

    // No breaches found
    return NextResponse.json({ breached: false, breaches: [], count: 0 })
    
  } catch (error) {
    console.error('Email check error:', error)
    return NextResponse.json({ error: 'Service unavailable. Please try again later.' }, { status: 500 })
  }
}
