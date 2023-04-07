import { Menu } from 'antd'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import useNav from '~/hooks/useNav'

type Props = {
  collapsed: boolean
}

const DefaultNavigate = ({ collapsed }: Props) => {
  const [selectedKeys, setSelectedKeys] = useState([''])
  const [openKeys, setOpenKeys] = useState([''])
  const location = useLocation()
  const navs = useNav()
  console.log('🚀 ~ DefaultNavigate ~ navs:', navs)

  const getKeysFromPathname = (pathname: string, isSelectedKey?: boolean) => {
    const pathArray = pathname?.substring(1)?.split?.('/')
    if (!isSelectedKey) {
      pathArray.splice(pathArray.length - 1)
    }
    return pathArray.reduce((result: string[], item: string) => {
      const path = '/' + item
      if (result.length === 0) result.push(path)
      else result.push(result[result.length - 1] + path)
      return result
    }, [])
  }

  useEffect(() => {
    setOpenKeys((prev = []) => {
      const keys = new Set([...prev, ...getKeysFromPathname(location.pathname)])
      return [...keys]
    })
    setSelectedKeys(getKeysFromPathname(location.pathname, true))
  }, [location.pathname, collapsed])

  const onClickMenuItem = ({ keyPath }: { keyPath: typeof selectedKeys }) => {
    setSelectedKeys(keyPath)
  }

  return (
    <Menu
      mode="inline"
      onOpenChange={(props: string[]) => {
        setOpenKeys(props)
      }}
      onClick={onClickMenuItem}
      selectedKeys={selectedKeys ?? getKeysFromPathname(location.pathname, true)}
      openKeys={collapsed ? undefined : openKeys ?? getKeysFromPathname(location.pathname)}
      style={{
        borderRight: 0,
        paddingBottom: 25,
        flexGrow: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        paddingTop: 64,
        userSelect: 'none',
        height: '100%'
      }}
      items={navs ?? undefined}
    />
  )
}

export default React.memo(DefaultNavigate)
