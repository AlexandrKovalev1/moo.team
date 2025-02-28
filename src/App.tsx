import { Layout } from './app/components/Layout/Layout.tsx'
import { Outlet } from 'react-router-dom'
export const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
