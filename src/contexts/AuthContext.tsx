import { createContext, ReactNode } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { getAuthFromStorage } from '~/utils'

type Props = {
  children: ReactNode
}

type AuthType = {
  token?: string | null
  user?: object | null
}

type AuthContextType = AuthType & { isLoggedIn: boolean; onChange: (data: AuthType) => void }

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useLocalStorage('auth', getAuthFromStorage())

  const handleAuthChange = (data: AuthType) => {
    setAuth({
      ...auth,
      ...data
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: auth.token,
        user: auth.user,
        isLoggedIn: Boolean(auth.token),
        onChange: handleAuthChange
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
