import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const user: AppRouteModule = {
  path: '/user',
  name: 'User',
  component: LAYOUT,
  redirect: '/user/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ant-design:usergroup-delete-outlined',
    title: t('routes.myAdmin.user'),
    orderNo: 10,
  },
  children: [
    {
      path: 'index',
      name: 'user',
      component: () => import('/@/views/sys/user/index.vue'),
      meta: {
        title: t('routes.myAdmin.user'),
        icon: 'ant-design:usergroup-delete-outlined',
        // hideMenu: true,
      },
    },
  ],
}

export default user
