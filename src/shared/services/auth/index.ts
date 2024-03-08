import { api } from '@/shared/common/api'

export const authServices = {
  login: async (phoneNumber: string, password: string) => {
    const reponse = await api.post('/auth/login', { phoneNumber, password })
    return reponse
  },
}
