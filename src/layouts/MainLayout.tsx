import { Layout, theme } from 'antd'
import dayjs from 'dayjs'
// import DefaultHeader from 'layouts/DefaultHeader'
// import DefaultNavigate from 'layouts/DefaultNavigate'
import { Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useWindowSize } from 'usehooks-ts'
import Navigation from './Navigation'

const { Header, Sider, Content, Footer } = Layout

const { useToken } = theme

export default function MainLayout() {
  const { width } = useWindowSize()
  const [collapsed, setCollapsed] = useState(false)
  const year = dayjs().format('YYYY')

  useEffect(() => {
    if (width < 1100) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }, [width])

  const { token } = useToken()

  return (
    <Layout className="min-h-screen flex-row">
      <Sider
        width={270}
        collapsed={collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          zIndex: 10,
          left: 0,
          top: 0,
          backgroundColor: '#fff'
        }}
      >
        <Navigation collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header
          className="!h-[60px] fixed inset-0 z-10"
          style={{ backgroundColor: token.colorPrimary }}
        >
          {/* <DefaultHeader /> */}
        </Header>
        <Content className="p-4">
          <Suspense fallback={'Loading...'}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer className="text-center !py-4">
          Copyright &copy; {year} Powered by Estuary Solutions
        </Footer>
      </Layout>
    </Layout>
  )
}
