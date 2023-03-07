import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const order: AppRouteModule = {
  path: '/order',
  name: 'Order',
  component: LAYOUT,
  redirect: '/order/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ant-design:unordered-list-outlined',
    // title: t('routes.myAdmin.user'),
    title: '订单',
    orderNo: 999,
  },
  children: [
    {
      path: 'index',
      name: 'order',
      component: () => import('/@/views/sys/order/order.vue'),
      meta: {
        // title: t('routes.myAdmin.user'),
        title: '订单',
        icon: 'ant-design:unordered-list-outlined',
        // hideMenu: true,
      },
    },
  ],
}

export default order
