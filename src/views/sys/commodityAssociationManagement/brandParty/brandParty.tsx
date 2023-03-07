import { BasicColumn, FormProps } from '/@/components/Table'
export function getFormConfig(): Partial<FormProps> {
  return {
    // resetFunc: ()=>{
    //   console.log(n);
    // },
    labelWidth: 100,
    schemas: [
      {
        field: `getGoods`,
        label: `品牌方名称`,
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
    title: '品牌方ID',
    dataIndex: 'id',
    // slots: { customRender: 'id' },
  },
  {
    title: '品牌方名称',
    dataIndex: 'orderNumber',
    // width: 100,
    // slots: { customRender: 'avatar' },
  },
  {
    title: '品牌方图片',
    dataIndex: 'avatar',
    // width: 80,
    // align: 'center',
    // defaultHidden: true,
    // slots: { customRender: 'category' },
  },
  {
    title: '创建时间',
    dataIndex: 'goods',
    // width: 120,
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
  },
  {
    title: '更新时间',
    dataIndex: 'goodsType',
  },
]
