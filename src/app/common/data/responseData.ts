export const infoResponse = {
  success: true,
  data: {
    info: 'Some information about the <b>company</b>.',
  },
}

export const loginResponseSuccess = {
  success: true,
  data: {
    token: 'fb566635a66295da0c8ad3f467c32dcf',
  },
}

export const loginResponseError = {
  success: false,
  data: {
    message: 'incorrect email or password',
  },
}

export const profileResponse = {
  success: true,
  data: {
    fullname: 'Aleksei K',
    email: 'aleksei@example.com',
  },
}

export const logOutResponse = { success: true, data: {} }

export type ProfileResponse = BaseResponse<{ fullname: string; email: string }>

export type BaseResponse<D = {}> = {
  success: boolean
  data: D
}

export type Author = { authorId: number; name: string }

export type Quote = { quoteId: number; authorId: number; quote: string }

export type LoginResponse = BaseResponse<{
  token?: string
  message?: string
}>

export type InfoResponse = BaseResponse<{
  info?: string
  message?: string
}>

export type LogOutResponse = BaseResponse

export type RandomAuthorResponse = BaseResponse<Author>

export type RandomQuoteResponse = BaseResponse<Quote>
