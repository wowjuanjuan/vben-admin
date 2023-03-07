import { FormSchema } from '/@/components/Form'

export const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
    colProps: {
      span: 24,
    },
    defaultValue: '111',
    dynamicDisabled: true,
  },
  {
    field: 'field2',
    component: 'Input',
    label: '字段2',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field3',
    component: 'Input',
    label: '订单号',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field4',
    component: 'Input',
    label: '下单商品',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field5',
    component: 'Input',
    label: '订单总价',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field6',
    component: 'Input',
    label: '购买数量',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field7',
    component: 'Input',
    label: '收货人',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field8',
    component: 'Input',
    label: '收货电话',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field9',
    component: 'Input',
    label: '收货地址',
    colProps: {
      span: 24,
    },
    dynamicDisabled: true,
  },
  {
    field: 'field10',
    component: 'Input',
    label: '快递公司',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'field11',
    component: 'Input',
    label: '快递单号',
    colProps: {
      span: 24,
    },
  },
]
