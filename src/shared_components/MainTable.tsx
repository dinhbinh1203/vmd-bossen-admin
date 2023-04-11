import { Table } from 'antd'

type Props = {
  name: string
  isLoading: boolean
  scrollX: number
  pagination: any
  columns: any[]
  dataSource: any[]
  rest: any
  onPageChange: () => void
}

export function CommonTable({
  dataSource = [],
  columns = [],
  name,
  isLoading,
  pagination,
  scrollX = 1200,
  onPageChange,
  ...rest
}: Props) {
  return (
    <Table
      rowKey="id"
      size="middle"
      dataSource={dataSource}
      columns={columns}
      onChange={onPageChange}
      pagination={{
        position: ['topRight', 'bottomRight'],
        showSizeChanger: false,
        showLessItems: true,
        showTotal: (total, range) =>
          `${renderAmount(total)}${name ? ' '.concat(name) : ''} | Từ ${range[0]} đến ${range[1]}`,
        ...pagination
      }}
      scroll={{ x: scrollX }}
      loading={isLoading}
      {...rest}
    />
  )
}
