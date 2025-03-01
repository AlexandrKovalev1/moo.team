import { createBrowserRouter } from 'react-router-dom'
import { App } from '../../../App.tsx'
import InfoPage from '../../pages/infoPage/ui/InfoPage.tsx'
import { LoginPage } from '../../pages/loginPage/LoginPage.tsx'

export const PATH = {
  ABOUT_US: '/info',
  SIGN_IN: '/login',
  BASE: '/',
  PROFILE: '/profile',
}

export const router = createBrowserRouter([
  {
    path: PATH.BASE,
    element: <App />,
    children: [
      {
        path: PATH.ABOUT_US,
        element: <InfoPage />,
      },
      {
        path: PATH.SIGN_IN,
        element: <LoginPage />,
      },
    ],
  },
])
