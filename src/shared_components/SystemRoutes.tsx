import { Route, Routes } from 'react-router-dom'
import Login from '~/features/auth/pages/Login'
import useNav from '~/hooks/useNav'
import MainLayout from '~/layouts/MainLayout'
import { AuthGuard, GuestGuard, NotFound } from '~/shared_components'

export default function SystemRoutes() {
  const navs = useNav(true)

  const renderRoutes = () => {
    return navs.map(({ key, component }: any) => <Route key={key} path={key} element={component} />)
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        }
      >
        {renderRoutes()}
      </Route>
      <Route
        path="/login"
        element={
          <GuestGuard>
            <Login />
          </GuestGuard>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
