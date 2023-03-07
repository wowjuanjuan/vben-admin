import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/noticeAndBanner',
  name: 'NoticeAndBanner',
  component: LAYOUT,
  redirect: '/noticeAndBanner/banner',
  meta: {
    orderNo: 10,
    icon: 'ant-design:notification-twotone',
    // title: t('routes.dashboard.dashboard'),
    title: '公告&横幅',
  },
  children: [
    {
      path: 'banner',
      name: 'Banner',
      component: () => import('../../../views/sys/noticeAndBanner/banner/banner.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '横幅',
      },
    },
    {
      path: 'editBanner',
      name: 'EditBanner',
      component: () => import('../../../views/sys/noticeAndBanner/editBanner/editBanner.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: 'editBanner',
        hideMenu: true, //隐藏菜单
        // hideTab:true, //隐藏标签页
      },
    },
    {
      path: 'notice',
      name: 'Notice',
      component: () => import('../../../views/sys/noticeAndBanner/notice/notice.vue'),
      meta: {
        // title: t('routes.dashboard.workbench'),
        title: '公告',
      },
    },
    {
      path: 'editNotice',
      name: 'EditNotice',
      component: () => import('../../../views/sys/noticeAndBanner/editNotice/editNotice.vue'),
      meta: {
        // title: t('routes.dashboard.workbench'),
        title: 'editNotice',
        hideMenu: true,
      },
    },
  ],
}

export default dashboard
