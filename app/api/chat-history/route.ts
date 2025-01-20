import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma' // Prisma client

export async function GET(): Promise<NextResponse> {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { created_at: 'asc' }
    })

    return NextResponse.json({ messages })
  } catch (error) {
    console.error('Error fetching chat history:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
