import { BotService } from '@/services/botservice'
import * as utils from '@/utils'

jest.mock('@/utils', () => ({
  getRandomIndex: jest.fn()
}))

const getRandomIndexMock = jest.mocked(utils.getRandomIndex)

describe('BotService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should respond to "hello" keyword', () => {
    const response = BotService.getResponse('Hello there')
    expect(response).toBe("Hey! what's up?")
  })

  it('should respond to "help" keyword', () => {
    const response = BotService.getResponse('I need help')
    expect(response).toBe(
      'Sure! but I am kind of busy right now. call me later.'
    )
  })

  it('should respond to "bye" keyword', () => {
    const response = BotService.getResponse('Goodbye!')
    expect(response).toBe('See you later alligator!')
  })

  it('should return a random response for other inputs', () => {
    getRandomIndexMock.mockReturnValue(0)

    const response = BotService.getResponse('What is your name?')
    expect(response).toBe("Wow that's interesting! Tell me more.")
    expect(getRandomIndexMock).toHaveBeenCalledWith(
      BotService['responses'].length
    )
  })

  it('should return another random response when index changes', () => {
    getRandomIndexMock.mockReturnValue(3)

    const response = BotService.getResponse('Tell me something interesting.')
    expect(response).toBe('Hmm, let me think...')
    expect(getRandomIndexMock).toHaveBeenCalledWith(
      BotService['responses'].length
    )
  })
})
