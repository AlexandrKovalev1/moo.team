import { Button } from '../../components/Button/Button.tsx'
import avatar from '../../assets/images/avatar.jpg'
import s from './profilePage.module.css'
import Container from '../../components/Container/Container.tsx'

export const ProfilePage = () => {
  return (
    <div>
      <Container>
        <div className={s.profileBlock}>
          <img src={avatar} alt="avatar-image" className={s.avatar} />
          <h1>Welcome,Alexey!</h1>
          <Button>Update</Button>
        </div>
        <div>здесь место для объединенного результата длительного вызова</div>
      </Container>
    </div>
  )
}
