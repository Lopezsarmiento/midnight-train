import { getRandomIndex } from '@/utils'

export class BotService {
  private static responses = [
    "Wow that's interesting! Tell me more.",
    "I'm here to help!",
    'Can you tell me more?',
    'Hmm, let me think...',
    'Dont worry! About a thing... Every little thing is gonna be alright man.'
  ]

  public static getResponse(userInput: string): string {
    if (userInput.toLowerCase().includes('hello')) {
      return "Hey! what's up?"
    }

    if (userInput.toLowerCase().includes('help')) {
      return 'Sure! but I am kind of busy right now. call me later.'
    }

    if (userInput.toLowerCase().includes('bye')) {
      return 'See you later alligator!'
    }

    // random responses
    const randomIndex = getRandomIndex(BotService.responses.length)
    return BotService.responses[randomIndex]
  }
}
