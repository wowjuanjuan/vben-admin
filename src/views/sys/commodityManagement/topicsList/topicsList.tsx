import { BasicColumn, FormProps } from '/@/components/Table'
export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: 'goodsType',
        component: 'Select',
        label: '所属分类ID',
        colProps: {
          span: 8,
        },
        componentProps: {
          options: [
            {
              label: '是',
              value: '1',
              key: '1',
            },
            {
              label: '否',
              value: '2',
              key: '2',
            },
          ],
        },
      },
      {
        field: 'isPay',
        component: 'Select',
        label: '是否隐藏',
        colProps: {
          span: 8,
        },
        componentProps: {
          options: [
            {
              label: '是',
              value: '1',
              key: '1',
            },
            {
              label: '否',
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
    title: '专题ID',
    dataIndex: 'id',
    // slots: { customRender: 'id' },
  },
  {
    title: '所属分类ID',
    dataIndex: 'orderNumber',
    width: 100,
    // slots: { customRender: 'avatar' },
  },
  {
    title: '专题名称',
    dataIndex: 'userUID',
    width: 80,
    // align: 'center',
    // defaultHidden: true,
    // slots: { customRender: 'category' },
  },
  {
    title: 'URL Tag',
    dataIndex: 'goods',
    width: 120,
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
  },
  {
    title: '专题文字描述',
    dataIndex: 'goodsType',
  },
  {
    title: '强制跳转地址',
    dataIndex: 'goodsType1',
  },
  {
    title: '是否隐藏',
    dataIndex: 'goodsType3',
  },
  {
    title: '排序',
    dataIndex: 'goodsType2',
  },
]
