import Container from '../Container/Container.tsx'
import { Button } from '../Button/Button.tsx'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Container>
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
