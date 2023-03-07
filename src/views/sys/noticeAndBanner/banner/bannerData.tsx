import { BasicColumn } from '/@/components/Table'

export const columns: BasicColumn[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    editRow: true,
    editComponentProps: {
      // prefix: '$',
    },
    width: 150,
  },
  {
    title: '标题',
    dataIndex: 'title',
    editRow: true,
    editComponentProps: {
      // prefix: '$',
    },
    width: 150,
  },
  {
    title: '短标题',
    dataIndex: 'shortTitle',
    editRow: true,
    editComponentProps: {
      // prefix: '$',
    },
    width: 150,
  },
  {
    title: '日期选择',
    dataIndex: 'date',
    editRow: true,
    editComponent: 'DatePicker',
    editComponentProps: {
      valueFormat: 'YYYY-MM-DD',
      format: 'YYYY-MM-DD',
    },
    width: 150,
  },
 
]
