import { BasicColumn, FormProps } from '/@/components/Table'
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'goodsType',
        component: 'Select',
        label: '发布状态',
        colProps: {
          span: 8,
        },
        componentProps: {
          options: [
            {
              label: '测试中',
              value: '1',
              key: '1',
            },
            {
              label: '已上线',
              value: '2',
              key: '2',
            },
          ],
        },
      }
    ],
  }
}
export const columns: BasicColumn[] = [
  {
    title: '应用ID',
    dataIndex: 'id',
    // slots: { customRender: 'id' },
    width: 80,
  },
  {
    title: '应用名称',
    dataIndex: 'userUID',
    width: 80,
    // align: 'center',
    // defaultHidden: true,
    // slots: { customRender: 'category' },
  },
  {
    title: '应用上链跳转承载地址',
    dataIndex: 'goods',
    width: 200,
  },
  {
    title: '上链商品ID',
    dataIndex: 'goodsType',
  },
  {
    title: '强制跳转地址',
    dataIndex: 'goodsType1',
  },
  {
    title: '异步通知安全域名',
    dataIndex: 'goodsType3',
  },
  {
    title: '发布状态',
    dataIndex: 'goodsType2',
  },
]
