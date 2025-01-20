import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { BotService } from '@/services/botservice'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    const { content, conversationId, userName } = body

    if (
      !content ||
      typeof content !== 'string' ||
      !conversationId ||
      !userName
    ) {
      return NextResponse.json(
        { error: 'Invalid input format' },
        { status: 400 }
      )
    }

    const userInputTime = new Date()
    const botResponse = BotService.getResponse(content)
    const botResponseTime = new Date()

    await prisma.message.create({
      data: {
        user_input: content,
        bot_response: botResponse,
        user_name: userName,
        conversation_id: conversationId,
        user_input_time: new Date(userInputTime),
        bot_response_time: new Date(botResponseTime)
      }
    })

    return NextResponse.json({
      userMessage: content,
      botMessage: botResponse
    })
  } catch (error) {
    console.error('Error in chat API:', error ?? 'Unknown error')
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
