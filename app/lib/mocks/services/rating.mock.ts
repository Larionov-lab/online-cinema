import { mockDelay } from '../helpers/delay'
import { mockResponse } from '../helpers/response'

const ratings: Record<string, number> = {}

export const RatingMockService = {
  async getByUserMovie(movieId: string) {
    await mockDelay(150)
    return mockResponse(ratings[movieId] || 0)
  },

  async setRating(movieId: string, value: number) {
    await mockDelay(200)
    ratings[movieId] = value
    return mockResponse('Rating saved')
  },
}
