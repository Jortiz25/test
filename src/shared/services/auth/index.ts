import {
  type IResponseAuth,
  type IResponseData,
} from './../../common/interfaces'
import { api } from '@/shared/common/api'

export const authServices = {
  login: async (phoneNumber: string, password: string) => {
    const reponse = await api.post<IResponseData<IResponseAuth>>(
      '/auth/login',
      {
        phoneNumber,
        password,
      }
    )
    return reponse
  },
}
