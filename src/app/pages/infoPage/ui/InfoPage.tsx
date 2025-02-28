import Container from '../../../components/Container/Container.tsx'
import s from './infoPage.module.css'

const InfoPage = () => {
  return (
    <div>
      <Container>
        <p className={s.content}>Some text</p>
      </Container>
    </div>
  )
}

export default InfoPage
