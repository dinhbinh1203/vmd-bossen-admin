import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import { ThemeProvider } from './contexts'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#29ABE2'
            }
          }}
        >
          <MainLayout />
        </ConfigProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
