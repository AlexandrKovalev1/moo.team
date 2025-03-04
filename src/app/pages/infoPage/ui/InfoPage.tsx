import Container from '../../../components/Container/Container.tsx'
import s from './infoPage.module.css'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../providers/store/store.ts'
import { fetchAboutInfoTC } from '../model/infoPageReducer.ts'

const InfoPage = () => {
  const dispatch = useAppDispatch()
  const description = useAppSelector(state => state.infoPage.description)

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
