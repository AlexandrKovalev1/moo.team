import { InfoResponse, infoResponse } from '../../../common/data/responseData.ts'

export const getAboutInfoAPI = () => {
  return new Promise<InfoResponse>(resolve => resolve(infoResponse))
}
