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
        field: 'isPay',
        component: 'Select',
        label: '是否支付',
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
        label: '是否铸造',
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
        label: '订单状态',
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
        label: '渠道来源',
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
        field: `orderId`,
        label: `订单ID`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: `userId`,
        label: `用户UID`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: `orderNumber`,
        label: `订单号`,
        component: 'Input',
        colProps: {
          xl: 12,
          xxl: 8,
        },
      },
      {
        field: `getGoods`,
        label: `下单商品`,
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
    title: '订单ID',
    dataIndex: 'id',
    // slots: { customRender: 'id' },
  },
  {
    title: '订单号',
    dataIndex: 'orderNumber',
    width: 100,
    // slots: { customRender: 'avatar' },
  },
  {
    title: '用户uid',
    dataIndex: 'userUID',
    width: 80,
    // align: 'center',
    // defaultHidden: true,
    // slots: { customRender: 'category' },
  },
  {
    title: '下单商品',
    dataIndex: 'goods',
    width: 120,
    // filters: [
    //   { text: 'Male', value: 'male' },
    //   { text: 'Female', value: 'female' },
    // ],
  },
  {
    title: '商品类型',
    dataIndex: 'goodsType',
  },
  {
    title: '订单总价',
    dataIndex: 'orderTotalPrice',
  },
  {
    title: '购买数量',
    dataIndex: 'buyNumber',
  },
  {
    title: '是否支付',
    dataIndex: 'isPay',
  },
  {
    title: '支付通道',
    dataIndex: 'identityCard',
  },
  {
    title: '支付交易号',
    dataIndex: 'payNumber',
  },
  {
    title: '是否铸造',
    dataIndex: 'isMade',
  },
  {
    title: '支付交易号',
    dataIndex: 'payNumber',
  },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
  },
  {
    title: '快递公司',
    dataIndex: 'deliveryCompany',
  },
  {
    title: '订单创建时间',
    dataIndex: 'time',
  },
  // {
  //   title: '编号',
  //   dataIndex: 'no',
  //   // slots: { customRender: 'no' },
  // },
  // {
  //   title: '开始时间',
  //   dataIndex: 'beginTime',
  // },
  // {
  //   title: '结束时间',
  //   dataIndex: 'endTime',
  // },
]
