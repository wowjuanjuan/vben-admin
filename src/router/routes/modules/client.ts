import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
// import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/client',
  name: 'client',
  component: LAYOUT,
  redirect: '/client',
  meta: {
    orderNo: 10,
    icon: 'material-symbols:computer',
    // title: t('routes.dashboard.dashboard'),
    title: '客户端版本',
  },
  children: [
    {
      path: 'versionList',
      name: 'versionList',
      component: () => import('/@/views/sys/client/versionList.vue'),
      meta: {
        title: '版本列表',
      },
    },
    {
      path: 'editVersionList',
      name: 'editVersionList',
      component: () =>
        import(
          '/@/views/sys/client/editVersionList.vue'
        ),
      meta: {
        title: '客户端版本编辑',
        hideMenu: true, //隐藏菜单
      },
    },
  ],
}

export default dashboard
