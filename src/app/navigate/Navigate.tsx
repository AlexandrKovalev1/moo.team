import s from './navigate.module.css'
import { Button } from '../components/Button/Button.tsx'
import { NavLink } from 'react-router-dom'
import { PATH } from '../providers/router/router.tsx'
import { highlightActiveLink } from '../components/Header/Header.tsx'
import { useSelector } from 'react-redux'
import { AppRootStateType, useAppDispatch } from '../providers/store/store.ts'
import { logOutTC } from '../pages/loginPage/model/authReducer.ts'

export const Navigate = () => {
  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

  const dispatch = useAppDispatch()

  const onLogoutHandler = () => {
    dispatch(logOutTC())
  }
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
            <Button
              as={NavLink}
              to={''}
              variant={'link'}
              style={highlightActiveLink}
              onClick={onLogoutHandler}
            >
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
