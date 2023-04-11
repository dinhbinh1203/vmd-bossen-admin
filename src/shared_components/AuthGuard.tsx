import { ReactElement, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_PATH } from '~/constants'
import { useAuth } from '~/hooks'

type Props = {
  children: ReactElement
}

export default function AuthGuard({ children }: Props) {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(LOGIN_PATH, { replace: true })
    }
  }, [isLoggedIn, navigate])

  return isLoggedIn ? children : null
}
