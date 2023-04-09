import { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DASHBOARD_PATH } from '~/constants'
import { useAuth } from '~/hooks'

type Props = {
  children: ReactElement
}

export default function GuestGuard({ children }: Props) {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate(DASHBOARD_PATH, { replace: true })
    }
  }, [isLoggedIn, navigate])

  return children
}
