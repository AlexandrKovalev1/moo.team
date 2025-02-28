import Container from '../Container/Container.tsx'
import { Button } from '../Button/Button.tsx'
import { Link } from 'react-router-dom'
import s from './header.module.css'

const Header = () => {
  return (
    <header>
      <Container className={s.headerContainer}>
        <Button>Btn</Button>
        <Button disabled>Btn disabled</Button>
        <Button as={Link} to={'/d'} variant={'link'}>
          Link
        </Button>
      </Container>
    </header>
  )
}

export default Header
