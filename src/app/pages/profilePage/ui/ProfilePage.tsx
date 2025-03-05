import { Button } from '../../../components/Button/Button.tsx'
import avatar from '../../../assets/images/avatar.jpg'
import s from './profilePage.module.css'
import Container from '../../../components/Container/Container.tsx'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../providers/store/store.ts'
import { fetchProfileTC } from '../model/profileReducer.ts'
import Modal from '../../../components/Modal/Modal.tsx'
import { getRandomAuthor, getRandomQuote } from '../api/profileApi.ts'

export const ProfilePage = () => {
  type Status = 'Fetching' | 'Completed' | 'Canceled' | 'Idle'
  const [, setSearchParams] = useSearchParams()
  const [isFetchingAuthorStatus, setIsFetchingAuthorStatus] = useState<Status>('Idle')
  const [isFetchingQuoteStatus, setIsFetchingQuoteStatus] = useState<Status>('Idle')
  const [quote, setQuote] = useState<string>('')
  const authorTimeout = useRef<number | null>(null)
  const quoteTimeout = useRef<number | null>(null)

  const userName = useAppSelector(state => state.profile.fullname)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setSearchParams({ token: [token] })
      dispatch(fetchProfileTC())
    }

    // Функция очистки таймеров при размонтировании
    return () => {
      if (authorTimeout.current) {
        clearTimeout(authorTimeout.current)
      }
      if (quoteTimeout.current) {
        clearTimeout(quoteTimeout.current)
      }
    }
  }, [dispatch, setSearchParams])

  const onUpdateHandler = () => {
    setIsFetchingAuthorStatus('Fetching')
    setIsFetchingQuoteStatus('Fetching')

    authorTimeout.current = window.setTimeout(() => {
      getRandomAuthor()
        .then(res => {
          setIsFetchingAuthorStatus('Completed')
          quoteTimeout.current = window.setTimeout(() => {
            getRandomQuote(res.data.authorId)
              .then(res => {
                setIsFetchingQuoteStatus('Completed')
                setQuote(res.data.quote)
              })
              .catch(error => {
                console.error('Error fetching quote:', error)
                setIsFetchingQuoteStatus('Canceled')
              })
          }, 5000)
        })
        .catch(error => {
          console.error('Error fetching author:', error)
          setIsFetchingAuthorStatus('Canceled')
        })
    }, 5000)
  }

  const onCancelHandler = () => {
    if (authorTimeout.current) {
      clearTimeout(authorTimeout.current)
      setIsFetchingAuthorStatus('Canceled')
    }
    if (quoteTimeout.current) {
      clearTimeout(quoteTimeout.current)
      setIsFetchingQuoteStatus('Canceled')
    }
  }

  return (
    <div>
      <Container>
        <div className={s.profileBlock}>
          <img src={avatar} alt="avatar-image" className={s.avatar} />
          <h1>Welcome,{userName}!</h1>
          <Modal
            trigger={<Button onClick={onUpdateHandler}>Update</Button>}
            close={<Button onClick={onCancelHandler}>Cancel</Button>}
            title={'Requesting the quote'}
          >
            <p className={s.modalContent}>
              <span>
                Step1:Requesting author..{' '}
                {isFetchingAuthorStatus !== 'Idle' && isFetchingAuthorStatus}
              </span>
              <span>
                Step2:Requesting quote..
                {isFetchingQuoteStatus !== 'Idle' && isFetchingQuoteStatus}
              </span>
            </p>
          </Modal>
        </div>
        {quote ? (
          <span>{quote}</span>
        ) : (
          <div>здесь место для объединенного результата длительного вызова</div>
        )}
      </Container>
    </div>
  )
}
