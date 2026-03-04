import { mockDelay } from '../helpers/delay'
import { mockResponse } from '../helpers/response'
import { mockMoviesData } from '../data/movies.data'

export const AdminMockService = {
  async getCountUsers() {
    await mockDelay(200)
    return mockResponse(1247)
  },

  async getPopularMovie() {
    await mockDelay(250)
    const mostPopular = [...mockMoviesData].sort((a, b) => b.countOpened - a.countOpened)[0]
    return mockResponse(mostPopular)
  },
}
