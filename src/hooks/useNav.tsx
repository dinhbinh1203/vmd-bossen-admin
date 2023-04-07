import { useMemo } from 'react'
import { getNavigation } from '~/_nav'

const useNav = (isRoute = false) => {
  const authNav = useMemo(() => {
    return getNavigation({ isRoute })
  }, [isRoute])

  return authNav
}

export default useNav
