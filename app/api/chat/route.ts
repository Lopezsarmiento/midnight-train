import { NextRequest, NextResponse } from 'next/server'
import { BotService } from '@/services/botservice'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    const { message } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      )
    }

    const botResponse = BotService.getResponse(message)

    return NextResponse.json({
      userMessage: message,
      botResponse
    })
  } catch (error) {
    console.error('Error in chat API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
