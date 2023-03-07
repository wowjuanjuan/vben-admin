<template>
  <div>
    <div><a-button color="success" @click="goNew">添加</a-button></div>
    <BasicTable @register="registerTable">
      <template>
        <a-button color="success" @click="goNew">添加</a-button>
      </template>
      <template #form-custom>
        custom-slot <a-button color="success" @click="goNew">添加</a-button></template
      >
      <template #bodyCell="{ column, record, text }">
        <!-- <a-button @click="dayin({ column, record, text })">查看column，record，text</a-button> -->
        <template v-if="column.key === 'id'"> {{ record.id }} </template>
        <template v-else-if="column.key === 'no'">
          <Tag color="green">
            {{ record.no }}
          </Tag>
        </template>
        <template v-else-if="column.key === 'avatar'">
          <Avatar :size="60" :src="record.avatar" />
        </template>
        <template v-else-if="column.key === 'imgArr'">
          <TableImg :size="60" :simpleShow="true" :imgList="text" />
        </template>
        <template v-else-if="column.key === 'imgs'">
          <TableImg :size="60" :imgList="text" />
        </template>
        <template v-else-if="column.key === 'category'">
          <Tag color="green">
            {{ record.no }}
          </Tag>
        </template>
        <template v-if="column.key === 'action'">
          <!-- <TableAction
              :actions="[
                {
                  label: '发货',
                  onClick: send.bind(column, record),
                },
              ]"
            /> -->
          <TableAction :actions="createActions(record, column)" />
        </template>
      </template>
      <template #headerTop>
        <a-alert type="info" show-icon>
          <template #message>
            <template v-if="checkedKeys.length > 0">
              <span>已选中{{ checkedKeys.length }}条记录(可跨页)</span>
              <a-button type="link" @click="checkedKeys = []" size="small">清空</a-button>
            </template>
            <template v-else>
              <span>未选中任何项目</span>
            </template>
          </template>
        </a-alert>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="getFormValues">获取表单数据</a-button>
      </template>
    </BasicTable>
    <!-- <Modal @register="registerModal" /> -->
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import {
    BasicTable,
    useTable,
    TableImg,
    TableAction,
    EditRecordRow,
    BasicColumn,
    ActionItem,
  } from '/@/components/Table'
  import { Alert, Tag, Avatar } from 'ant-design-vue'
  import { demoListApi } from '/@/api/demo/table'
  import { getFormConfig, columns } from './orderData'
  // import { router } from '/@/router'
  import { cloneDeep } from 'lodash-es'
  import { router } from '/@/router'
  export default defineComponent({
    components: { BasicTable, AAlert: Alert, TableImg, Tag, Avatar, TableAction },
    setup() {
      const checkedKeys = ref<Array<string | number>>([])
      const [registerTable, { getForm }] = useTable({
        title: '开启搜索区域',
        api: demoListApi,
        columns: columns,
        useSearchForm: true,
        formConfig: getFormConfig(),
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        showIndexColumn: false,
        rowKey: 'id',
        rowSelection: {
          type: 'checkbox',
          selectedRowKeys: checkedKeys,
          onChange: onSelectChange,
        },
        actionColumn: {
          width: 160,
          title: 'Action',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      })
      function dayin(con) {
        console.log(con)
      }
      // const [registerModal, { openModal: openModal }] = useModal()
      // function send(column, record) {
      //   // console.log('我是columns', columns, column, record)
      //   // console.log(column)

      //   //在这里对modal弹出框里面的值进行传递
      //   openModal(true, {
      //     data: 'content',
      //     info: 'Info',
      //     obj: column,
      //   })
      // }
      function goNew() {
        router.push({
          name: 'editCommodityList',
          query: { isNew: 1 },
        })
      }

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        return [
          {
            label: '编辑',
            // disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
            // onClick: handleEdit.bind(null, record),
            onClick: function () {
              // alert('编辑')
              console.log(record, column, JSON.stringify(record))
              router.push({
                name: 'editCommodityList',
                query: { data: JSON.stringify(record), isNew: 0 },
              })
              // router.push({ name: 'EditNotice', query: { id: 1 } })
              // router.push({
              //   name: 'editCommodityList',
              //   query: { data: JSON.stringify(record), isNew: 0 },
              // })
            },
          },
          {
            label: '兑换码',
            onClick: function () {
              router.push({
                name: 'commodityListExchangeCode',
                // query: { id: record.id },
              })
            },
          },
        ]
      }
      function getFormValues() {
        // console.log(getForm().getFieldsValue())
        // console.log(getForm())
      }
      function onSelectChange(selectedRowKeys: (string | number)[]) {
        // console.log(selectedRowKeys)
        checkedKeys.value = selectedRowKeys
      }
      // function editOrder(){

      // }
      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelectChange,
        createActions,
        dayin,
        goNew,
        //   send,
        //   registerModal,
      }
    },
  })
</script>
