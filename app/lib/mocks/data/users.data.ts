import { IUser } from '@/shared/types/user.types'

export const mockUser: IUser = {
  _id: 'u1',
  email: 'demo@example.com',
  password: 'hidden',
  createdAt: new Date().toISOString(),
  isAdmin: true,
}
