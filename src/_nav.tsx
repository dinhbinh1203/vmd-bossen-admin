import { AiOutlineUser } from 'react-icons/ai'
import UserList from '~/features/user/pages/UserList'
import UserAdd from '~/features/user/pages/UserAdd'
import UserDetail from '~/features/user/pages/UserDetail'
import { cloneDeep } from 'lodash'

const _nav = [
  {
    key: '/users',
    label: 'Quản lý người dùng',
    display: 1,
    icon: <AiOutlineUser />,
    component: <UserList />,
    children: [
      {
        key: '/users/add',
        label: 'Thêm người dùng',
        component: <UserAdd />,
        display: 1
      },
      {
        key: '/users/:id',
        label: 'Chi tiết người dùng',
        component: <UserDetail />,
        display: 1
      }
    ]
  }
]

export const getNavigation = ({ navs = cloneDeep(_nav), isRoute = false } = {}) => {
  return navs.reduce((result: any, nav: any, index) => {
    const { children } = nav
    if (Boolean(nav.display) || isRoute) result.push(nav)
    if (children?.length > 0) {
      const childNavs = getNavigation({ navs: children, isRoute }) ?? []
      if (isRoute) {
        if (!nav.component) result.splice(result.length - 1)
        result = [...result, ...childNavs]
      } else {
        if (childNavs.length > 0) result[index].children = [...childNavs]
        else delete result[index].children
      }
    }
    return result
  }, [])
}

export default _nav
