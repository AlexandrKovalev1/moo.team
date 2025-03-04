import { Button } from '../../../components/Button/Button.tsx'
import avatar from '../../../assets/images/avatar.jpg'
import s from './profilePage.module.css'
import Container from '../../../components/Container/Container.tsx'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../providers/store/store.ts'
import { fetchProfileTC } from '../model/profileReducer.ts'

export const ProfilePage = () => {
  const [_, setSearchParams] = useSearchParams()

  const userName = useAppSelector(state => state.profile.fullname)

  const dispath = useAppDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setSearchParams({ token: [token] })
      dispath(fetchProfileTC())
    }
  }, [])
  return (
    <div>
      <Container>
        <div className={s.profileBlock}>
          <img src={avatar} alt="avatar-image" className={s.avatar} />
          <h1>Welcome,{userName}!</h1>
          <Button>Update</Button>
        </div>
        <div>здесь место для объединенного результата длительного вызова</div>
      </Container>
    </div>
  )
}
