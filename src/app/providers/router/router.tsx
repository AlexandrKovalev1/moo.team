import { createBrowserRouter } from 'react-router-dom'
import { App } from '../../../App.tsx'

export const PATH = {
  ABOUT_US: '/info',
  SIGN_IN: '/login',
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
])
