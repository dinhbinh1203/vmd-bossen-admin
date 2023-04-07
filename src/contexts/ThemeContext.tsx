import { ConfigProvider, theme } from 'antd'
import { createContext, ReactNode } from 'react'

const { defaultAlgorithm, darkAlgorithm } = theme

export const ThemeContext = createContext(null)

type Props = {
  children: ReactNode
}
export default function ThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={null}>
      <ConfigProvider
        theme={{
          algorithm: false ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorPrimary: '#29ABE2'
          }
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  )
}
