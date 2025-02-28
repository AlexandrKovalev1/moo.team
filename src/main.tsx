import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/providers/store/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/providers/router/router.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)
