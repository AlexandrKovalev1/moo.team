import {
  LoginResponse,
  loginResponseError,
  loginResponseSuccess,
  logOutResponse,
} from '../../../common/data/responseData.ts'
import { loginPayload } from '../../../common/data/payloadData.ts'

export const authApi = {
  login: (payload: { email: string; password: string }) => {
    return new Promise<LoginResponse>(resolve => {
      if (payload.email === loginPayload.email && payload.password === loginPayload.password) {
        resolve(loginResponseSuccess)
      } else {
        resolve(loginResponseError)
      }
    })
  },
  logOut: () => {
    return new Promise<LoginResponse>(resolve => resolve(logOutResponse))
  },
}
