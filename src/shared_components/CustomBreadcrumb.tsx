import { Breadcrumb } from 'antd'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

const defaultRoutes = { url: '/', name: 'Trang chủ' }

function itemRender(route, _, items) {
  const isLast = items.indexOf(route) === items.length - 1
  return isLast ? <span>{route.name}</span> : <Link to={route.url}>{route.name}</Link>
}

type Props = {
  routes: any[]
}

export default function CustomBreadcrumb({ routes = [] }: Props) {
  const currentRoutes = useMemo(() => [defaultRoutes, ...routes], [routes])

  return (
    <Breadcrumb
      style={{ marginBottom: currentRoutes.length > 0 ? 10 : 0 }}
      items={currentRoutes}
      itemRender={itemRender}
    />
  )
}
