import { getRandomIndex } from '@/utils'
import { specificResponses, randomResponses } from '@/data/responses'

export class BotService {
  public static getResponse(userInput: string): string {
    const lowercasedInput = userInput.toLowerCase()

    // Return specific response
    for (const [keyword, response] of specificResponses) {
      if (lowercasedInput.includes(keyword)) return response
    }

    // Return random response
    const randomIndex = getRandomIndex(randomResponses.length)
    return randomResponses[randomIndex]
  }
}
