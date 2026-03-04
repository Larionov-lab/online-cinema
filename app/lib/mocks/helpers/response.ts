export const mockResponse = <T>(data: T) => ({
  data,
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
})

export const mockError = (message: string, status: number = 400) => {
  throw new Error(message)
}
