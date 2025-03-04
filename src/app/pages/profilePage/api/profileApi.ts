import {
  profileResponse,
  ProfileResponse,
  RandomAuthorResponse,
} from '../../../common/data/responseData.ts'
import { autors } from '../../../common/data/appendixData.ts'
import { useAppSelector } from '../../../providers/store/store.ts'

const isCancelled = useAppSelector(state => state.profile.isCancelledPromise)

export const getProfileApi = () => {
  return new Promise<ProfileResponse>(resolve => resolve(profileResponse))
}

export const getRandomAuthor = () => {
  const randomIndex = Math.floor(Math.random() * (autors.length + 1))

  return new Promise<RandomAuthorResponse>((resolve, reject) =>
    setTimeout(() => {
      if (isCancelled) {
        reject('Promise was cancelled')
      } else {
        resolve({ success: true, data: autors[randomIndex] })
      }
    }, 5000)
  )
}
