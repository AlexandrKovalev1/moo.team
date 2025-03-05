import {
  profileResponse,
  ProfileResponse,
  RandomAuthorResponse,
  RandomQuoteResponse,
} from '../../../common/data/responseData.ts'
import { autors, quotes } from '../../../common/data/appendixData.ts'
import { getRandomIndex } from '../../../common/utils/getRandomIndex.ts'

export const getProfileApi = () => {
  return new Promise<ProfileResponse>(resolve => resolve(profileResponse))
}

export const getRandomAuthor = () => {
  const randomIndex = getRandomIndex(autors.length)
  return new Promise<RandomAuthorResponse>((resolve, reject) => {
    if (randomIndex !== undefined) {
      resolve({ success: true, data: autors[randomIndex] })
    } else {
      reject({ success: false, data: { message: 'Not authors' } })
    }
  })
}

export const getRandomQuote = (authorId: number) => {
  const authorQuotes = quotes.filter(q => q.authorId === authorId)

  const randomIndex = getRandomIndex(authorQuotes.length)

  return new Promise<RandomQuoteResponse>(resolve =>
    resolve({ success: true, data: authorQuotes[randomIndex] })
  )
}
