import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
// import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/commodityManagement',
  name: 'commodityManagement',
  component: LAYOUT,
  redirect: '/commodityManagement/commodityList',
  meta: {
    orderNo: 10,
    icon: 'carbon:cloud-service-management',
    // title: t('routes.dashboard.dashboard'),
    title: '商品管理',
  },
  children: [
    {
      path: 'commodityList',
      name: 'commodityList',
      component: () => import('/@/views/sys/commodityManagement/commodityList/index.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '商品列表',
      },
    },
    {
      path: 'editCommodityList',
      name: 'editCommodityList',
      component: () =>
        import(
          '/@/views/sys/commodityManagement/commodityList/editCommodity/editCommodityList.vue'
        ),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '编辑商品列表',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'commodityListExchangeCode',
      name: 'commodityListExchangeCode',
      component: () =>
        import('/@/views/sys/commodityManagement/commodityList/exchangeCode/exchangeCode.vue'),
      meta: {
        title: '兑换码',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'commodityListEditExchangeCode',
      name: 'commodityListEditExchangeCode',
      component: () =>
        import(
          '/@/views/sys/commodityManagement/commodityList/exchangeCode/editExchangeCode/editExchangeCode.vue'
        ),
      meta: {
        title: '生成兑换码',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'commodityClass',
      name: 'commodityClass',
      component: () => import('/@/views/sys/commodityManagement/commodityClass/index.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '商品分类',
      
      },
    },
    {
      path: 'editCommodityClass',
      name: 'editCommodityClass',
      component: () => import('/@/views/sys/commodityManagement/commodityClass/editCommodityClass/editCommodityClass.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '新建商品分类',
        hideMenu: true, //隐藏菜单
        // hideTab:true, //隐藏标签页
      },
    },
    {
      path: 'topicsList',
      name: 'topicsList',
      component: () => import('/@/views/sys/commodityManagement/topicsList/index.vue'),
      meta: {
        // title: t('routes.dashboard.workbench'),
        title: '专题列表',
      },
    },
    {
      path: 'editTopicsList',
      name: 'editTopicsList',
      component: () => import('/@/views/sys/commodityManagement/topicsList/editTopicsList/editTopicsList.vue'),
      meta: {
        // title: t('routes.dashboard.workbench'),
        title: '新建专题',
        hideMenu: true, //隐藏菜单
        // hideTab:true, //隐藏标签页
      },
    },
  ],
}

export default dashboard
