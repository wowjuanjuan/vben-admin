import { BasicColumn, FormProps } from '/@/components/Table'
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `getGoods`,
        label: `metadata ID`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: `getGoods`,
        label: `metadata名称`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      
    ],
  }
}
export const columns: BasicColumn[] = [
  {
    title: 'MetaData ID',
    dataIndex: 'id',
    // slots: { customRender: 'id' },
  },
  {
    title: 'metadata名称',
    dataIndex: 'orderNumber',
    width: 100,
    // slots: { customRender: 'avatar' },
  },
  {
    title: 'metadata描述',
    dataIndex: 'userUID',
    width: 80,
    // align: 'center',
    // defaultHidden: true,
    // slots: { customRender: 'category' },
  },
  {
    title: 'metadata播放媒体地址',
    dataIndex: 'goods',
    width: 120,
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
  },
  {
    title: '关联商品ID',
    dataIndex: 'goodsType',
  },
  {
    title: '创建时间',
    dataIndex: 'goodsType1',
  },
  {
    title: '更新时间',
    dataIndex: 'goodsType3',
  },
]
