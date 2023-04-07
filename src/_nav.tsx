import { AiOutlineUser } from 'react-icons/ai'
import UserList from '~/features/user/pages/UserList'
import UserAdd from '~/features/user/pages/UserAdd'
import UserDetail from '~/features/user/pages/UserDetail'
import { cloneDeep } from 'lodash'

const _nav = [
  {
    key: '/users',
    action_key: 'VIEW_USER',
    label: 'Quản lý người dùng',
    title: 'Quản lý người dùng',
    display: 1,
    icon: <AiOutlineUser />,
    component: () => <UserList />,
    children: [
      {
        key: '/users/add',
        action_key: 'ADD_USER',
        label: 'Thêm người dùng',
        title: 'Thêm người dùng',
        component: () => <UserAdd />
      },
      {
        key: '/users/:id',
        action_key: 'VIEW_USER_DETAIL',
        label: 'Chi tiết người dùng',
        title: 'Chi tiết người dùng',
        component: () => <UserDetail />
      }
    ]
  }
]

export const getNavigation = ({ navs = cloneDeep([]), isRoute = false } = {}) => {
  return navs.reduce((result: any, nav: any, index) => {
    const { children } = nav
    const isDisplayForNav = !!nav.display // display in left navigation
    if (isDisplayForNav || isRoute) result.push(nav)
    if (children?.length > 0) {
      const childNavs = getNavigation({ navs: children, isRoute }) ?? [] // recursive children
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
