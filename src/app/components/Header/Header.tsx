import Container from '../Container/Container.tsx'

import s from './header.module.css'
import { Button } from '../Button/Button.tsx'
import { NavLink } from 'react-router-dom'
import { PATH } from '../../providers/router/router.tsx'

const Header = () => {
  return (
    <header>
      <Container>
        <nav>
          <ul className={s.navigateList}>
            <li>
              <Button
                as={NavLink}
                to={PATH.ABOUT_US}
                variant={'link'}
                style={highlightActiveLink}
                className={s.active}
              >
                About us
              </Button>
            </li>
            <li>
              <Button as={NavLink} to={PATH.SIGN_IN} variant={'link'} style={highlightActiveLink}>
                Sign in
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header

export const highlightActiveLink = ({ isActive }: { isActive: boolean }) => ({
  backgroundColor: isActive ? 'lightgray' : 'inherit',
})
