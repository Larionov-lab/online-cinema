import { mockDelay } from '../helpers/delay'

export const FileMockService = {
  async upload(file: FormData, folder?: string) {
    await mockDelay(1000)
    const fakeUrl = `https://images.unsplash.com/photo-${Date.now()}?w=500&h=500&fit=crop`
    return { data: [{ url: fakeUrl, name: 'uploaded.jpg' }] }
  },
}
