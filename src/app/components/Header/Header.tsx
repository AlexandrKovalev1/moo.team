import Container from '../Container/Container.tsx'
import { Navigate } from '../../navigate/Navigate.tsx'
const Header = () => {
  return (
    <header>
      <Container>
        <Navigate />
      </Container>
    </header>
  )
}

export default Header

export const highlightActiveLink = ({ isActive }: { isActive: boolean }) => ({
  backgroundColor: isActive ? 'lightgray' : 'inherit',
})
