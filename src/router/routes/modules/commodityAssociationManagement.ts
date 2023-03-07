import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
// import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/commodityAssociationManagement',
  name: 'commodityAssociationManagement',
  component: LAYOUT,
  redirect: '/commodityAssociationManagement/blockchainType',
  meta: {
    orderNo: 10,
    icon: 'icon-park-outline:association',
    // title: t('routes.dashboard.dashboard'),
    title: '商品关联管理',
  },
  children: [
    {
      path: 'blockchainType',
      name: 'blockchainType',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/blockchainType/blockchainType.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '区块链类型',
      },
    },
    {
      path: 'editBlockchainType',
      name: 'editBlockchainType',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/blockchainType/editBlockchainType.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '编辑区块链类型',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'agreementType',
      name: 'agreementType',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/agreementType/agreementType.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '合约协议类型',
      },
    },
    {
      path: 'editAgreementType',
      name: 'editAgreementType',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/agreementType/editAgreementType.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '合约协议类型编辑',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'contractTemplate',
      name: 'contractTemplate',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/contractTemplate/contractTemplate.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '合约模板',
      },
    },
    {
      path: 'editContractTemplate',
      name: 'editContractTemplate',
      component: () =>
        import(
          '/@/views/sys/commodityAssociationManagement/contractTemplate/editContractTemplate.vue'
        ),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '编辑合约模板',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'contractMetaData',
      name: 'contractMetaData',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/contractMetaData/index.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '合约MetaData',
      },
    },
    {
      path: 'editContractMetaData',
      name: 'editContractMetaData',
      component: () =>
        import(
          '/@/views/sys/commodityAssociationManagement/contractMetaData/editContractMetaData/editContractMetaData.vue'
        ),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '编辑合约MetaData',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'copyrightHolder',
      name: 'copyrightHolder',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/copyrightHolder/copyrightHolder.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '版权方',
      },
    },
    {
      path: 'editCopyrightHolder',
      name: 'editCopyrightHolder',
      component: () =>
        import(
          '/@/views/sys/commodityAssociationManagement/copyrightHolder/editCopyrightHolder/editCopyrightHolder.vue'
        ),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '编辑版权方',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'issuer',
      name: 'issuer',
      component: () => import('/@/views/sys/commodityAssociationManagement/issuer/issuer.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '发行方',
      },
    },
    {
      path: 'editIssuer',
      name: 'editIssuer',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/issuer/editIssuer/editIssuer.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '编辑发行方',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
    {
      path: 'brandParty',
      name: 'brandParty',
      component: () => import('/@/views/sys/commodityAssociationManagement/brandParty/brandParty.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '品牌方',
      },
    },
    {
      path: 'editBrandParty',
      name: 'editBrandParty',
      component: () =>
        import('/@/views/sys/commodityAssociationManagement/brandParty/editBrandParty/editBrandParty.vue'),
      meta: {
        // affix: true,
        // title: t('routes.dashboard.analysis'),
        title: '编辑品牌方',
        hideMenu: true, //隐藏菜单
        // hideTab: true, //隐藏标签页
      },
    },
  ],
}

export default dashboard
