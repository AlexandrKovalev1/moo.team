import { createBrowserRouter } from 'react-router-dom'
import { App } from '../../../App.tsx'
import InfoPage from '../../pages/infoPage/ui/InfoPage.tsx'
import Container from '../../components/Container/Container.tsx'

export const PATH = {
  ABOUT_US: '/info',
  SIGN_IN: '/login',
  BASE: '/',
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
        element: (
          <div>
            <Container>Login</Container>
          </div>
        ),
      },
    ],
  },
])
