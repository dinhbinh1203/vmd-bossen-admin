import { getNavigation } from '~/_nav'
import { Card, Layout, Table } from 'antd'
import dayjs from 'dayjs'
import { Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useWindowSize } from 'usehooks-ts'
// import { getNavigation } from '../_nav.jsx'

const { Header, Sider, Content, Footer } = Layout

export default function MainLayout() {
  // const { width } = useWindowSize()
  const [collapsed, setCollapsed] = useState(false)
  const year = dayjs().format('YYYY')

  // useEffect(() => {
  //   if (width < 1100) {
  //     setCollapsed(true)
  //   } else {
  //     setCollapsed(false)
  //   }
  // }, [width])

  // console.log(getNavigation())

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={270}
        collapsed={collapsed}
        // style={{
        //   overflow: 'auto',
        //   height: '100vh',
        //   position: 'sticky',
        //   zIndex: 10,
        //   left: 0,
        //   top: 0,
        //   backgroundColor: '#fff'
        // }}
      >
        {/* <DefaultNavigate collapsed={collapsed} /> */}
      </Sider>
      <Layout>
        <Header>{/* <DefaultHeader /> */} Header</Header>
        <Content className="p-4">
          <Suspense fallback={<div>Loading</div>}>
            {/* <Outlet /> */}
            <Card title="ABC" />
          </Suspense>
        </Content>
        <Footer className="text-center !py-4">
          Copyright &copy; {year} Powered by Estuary Solutions, version {import.meta.env.BUILD}
        </Footer>
      </Layout>
    </Layout>
  )
}
