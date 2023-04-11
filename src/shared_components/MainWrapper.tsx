import { Spin } from 'antd'
import { ReactNode } from 'react'
import CustomBreadcrumb from './CustomBreadcrumb'

type Props = {
  breadcrumb: any[]
  isLoading: boolean
  children: ReactNode
  rest: any
}

export default function MainWrapper({ breadcrumb, children, isLoading, ...rest }: Props) {
  return (
    <div {...rest}>
      <CustomBreadcrumb routes={breadcrumb} />
      <Spin spinning={Boolean(isLoading)}>{children}</Spin>
    </div>
  )
}
