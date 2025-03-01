import { createBrowserRouter, Navigate, Outlet, RouteObject } from 'react-router-dom'
import { App } from '../../../App.tsx'
import InfoPage from '../../pages/infoPage/ui/InfoPage.tsx'
import { LoginPage } from '../../pages/loginPage/ui/LoginPage.tsx'
import { ProfilePage } from '../../pages/profilePage/ProfilePage.tsx'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../store/store.ts'

export const PATH = {
  ABOUT_US: '/info',
  SIGN_IN: '/login',
  BASE: '/',
  PROFILE: '/profile',
}

export const ProtectedRoutes = () => {
  const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

  return isAuth ? <Outlet /> : <Navigate to={PATH.ABOUT_US} />
}

const privateRotes: RouteObject[] = [
  {
    path: PATH.PROFILE,
    element: <ProfilePage />,
  },
]

const publicRotes: RouteObject[] = [
  {
    path: PATH.ABOUT_US,
    element: <InfoPage />,
  },
  {
    path: PATH.SIGN_IN,
    element: <LoginPage />,
  },
]

export const router = createBrowserRouter([
  {
    path: PATH.BASE,
    element: <App />,
    children: [{ element: <ProtectedRoutes />, children: privateRotes }, ...publicRotes],
  },
])
