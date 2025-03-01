import s from './navigate.module.css'
import { Button } from '../components/Button/Button.tsx'
import { NavLink } from 'react-router-dom'
import { PATH } from '../providers/router/router.tsx'
import { highlightActiveLink } from '../components/Header/Header.tsx'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../providers/store/store.ts'

export const Navigate = () => {
  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
  return (
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
        {isAuth && (
          <li>
            <Button
              to={PATH.PROFILE}
              as={NavLink}
              variant={'link'}
              style={highlightActiveLink}
              className={s.active}
            >
              Profile
            </Button>
          </li>
        )}
        <li>
          {isAuth ? (
            <Button as={NavLink} to={''} variant={'link'} style={highlightActiveLink}>
              Sign out
            </Button>
          ) : (
            <Button as={NavLink} to={PATH.SIGN_IN} variant={'link'} style={highlightActiveLink}>
              Sign in
            </Button>
          )}
        </li>
      </ul>
    </nav>
  )
}
