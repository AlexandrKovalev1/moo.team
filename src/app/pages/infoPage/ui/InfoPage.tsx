import Container from '../../../components/Container/Container.tsx'
import s from './infoPage.module.css'
import { useEffect } from 'react'
import { AppRootStateType, useAppDispatch } from '../../../providers/store/store.ts'
import { fetchAboutInfoTC } from '../model/infoPageReducer.ts'
import { useSelector } from 'react-redux'

const InfoPage = () => {
  const dispatch = useAppDispatch()
  const description = useSelector<AppRootStateType, string | TrustedHTML>(
    state => state.infoPage.description
  )

  useEffect(() => {
    dispatch(fetchAboutInfoTC())
  }, [])

  return (
    <div>
      <Container>
        <p className={s.content} dangerouslySetInnerHTML={{ __html: description }} />
      </Container>
    </div>
  )
}

export default InfoPage
