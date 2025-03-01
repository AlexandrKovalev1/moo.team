export const infoResponse = {
  success: true,
  data: {
    info: 'Some information about the <b>company</b>.',
  },
}

export type InfoResponse = {
  success: boolean
  data: {
    info?: string
    massage?: string
  }
}
