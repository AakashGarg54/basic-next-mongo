
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { email, password } = body

    // Replace with your own auth logic
    if (email === 'test@example.com' && password === 'password123') {
        return NextResponse.json({ success: true }, { status: 200 })
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
}
