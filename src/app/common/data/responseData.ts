export const infoResponse = JSON.stringify({
  success: true,
  data: {
    info: 'Some information about the <b>company</b>.',
  },
})

export type InfoResponse = {
  success: boolean
  data: {
    info?: string
    massage?: string
  }
}
