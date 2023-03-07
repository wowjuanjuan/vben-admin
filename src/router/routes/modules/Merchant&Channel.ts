import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
// import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/Merchant&Channel',
  name: 'Merchant&Channel',
  component: LAYOUT,
  redirect: '/Merchant&Channel/merchantApplicationList',
  meta: {
    orderNo: 10,
    icon: 'dashicons:businessman',
    // title: t('routes.dashboard.dashboard'),
    title: '商户&渠道',
  },
  children: [
    {
      path: 'merchantApplicationList',
      name: 'merchantApplicationList',
      component: () => import('/@/views/sys/Merchant&Channel/merchantApplicationList/index.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '商户应用列表',
      },
    },
    {
      path: 'editMerchantApplicationList',
      name: 'editMerchantApplicationList',
      component: () =>
        import(
          '/@/views/sys/Merchant&Channel/merchantApplicationList/editMerchantApplicationList/editMerchantApplicationList.vue'
        ),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '商品应用编辑',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'channelsList',
      name: 'channelsList',
      component: () => import('/@/views/sys/Merchant&Channel/channel/index.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '渠道列表',
      },
    },
    {
      path: 'editChannelsList',
      name: 'editChannelsList',
      component: () => import('/@/views/sys/Merchant&Channel/channel/editChannel.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '新建渠道',
        hideMenu: true, //隐藏菜单
      },
    },
  ],
}

export default dashboard
