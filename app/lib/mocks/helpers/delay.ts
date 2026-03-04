export const mockDelay = (ms: number = 300) => 
  new Promise(resolve => setTimeout(resolve, ms))
