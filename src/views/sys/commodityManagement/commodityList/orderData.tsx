import { BasicColumn, FormProps } from '/@/components/Table'
export function getFormConfig(): Partial<FormProps> {
  return {
    // resetFunc: ()=>{
    //   console.log(n);
    // },
    labelWidth: 100,
    schemas: [
      {
        field: 'goodsType',
        component: 'Select',
        label: '分类',
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
        label: '专题',
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
        field: 'isMade',
        component: 'Select',
        label: '商品类型',
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
        field: 'orderStatus',
        component: 'Select',
        label: '合约模板',
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
        field: 'SourceOfChannels',
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
      },
      {
        field: 'SourceOfChannels',
        component: 'Select',
        label: '商品状态',
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
        field: `getGoods`,
        label: `商品名称`,
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
    title: 'ID',
    dataIndex: 'id',
    // slots: { customRender: 'id' },
  },
  {
    title: '货号',
    dataIndex: 'orderNumber',
    width: 100,
    // slots: { customRender: 'avatar' },
  },
  {
    title: '商品类型',
    dataIndex: 'userUID',
    width: 80,
    // align: 'center',
    // defaultHidden: true,
    // slots: { customRender: 'category' },
  },
  {
    title: '关联赠送商品',
    dataIndex: 'goods',
    width: 120,
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
  },
  {
    title: '合约模板',
    dataIndex: 'goodsType',
  },
  {
    title: '公链类型',
    dataIndex: 'orderTotalPrice',
  },
  {
    title: '合约metadataID',
    dataIndex: 'buyNumber',
  },
  {
    title: '是否隐藏',
    dataIndex: 'isPay',
  },
  {
    title: '商品状态',
    dataIndex: 'identityCard',
  },
  {
    title: '商品名称',
    dataIndex: 'payNumber',
  },
  {
    title: 'URL Tag',
    dataIndex: 'isMade',
  },
  {
    title: '商品价格',
    dataIndex: 'payNumber',
  },
  {
    title: '当前库存',
    dataIndex: 'orderStatus',
  },
  {
    title: '发行总量',
    dataIndex: 'deliveryCompany',
  },
  {
    title: '限购数量',
    dataIndex: 'time',
  },
  {
    title: '发行时间',
    dataIndex: 'time2',
  },
  {
    title: '销售时间',
    dataIndex: 'time3',
  },
  {
    title: '排序',
    dataIndex: 'time4',
  },
  {
    title: '标签',
    dataIndex: 'time0',
  },
]
