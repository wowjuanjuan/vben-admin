<template>
  <div>
    <BasicTable @register="registerTable">
      <template #form-custom> custom-slot </template>
      <template #bodyCell="{ column, record, text }">
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
          <TableAction
            :actions="[
              {
                label: '发货',
                onClick: send.bind(column, record),
              },
            ]"
          />
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
    <Modal @register="registerModal" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { BasicTable, useTable, TableImg, TableAction } from '/@/components/Table'
  // import { getBasicColumns } from '../tableData'
  import { Alert, Tag, Avatar } from 'ant-design-vue'
  import { demoListApi } from '/@/api/demo/table'
  import { getFormConfig, columns } from './orderData'
  import Modal from './editOrder.vue'
  import { useModal } from '/@/components/Modal'

  export default defineComponent({
    components: { BasicTable, AAlert: Alert, TableImg, Tag, Avatar, TableAction, Modal },
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

      const [registerModal, { openModal: openModal }] = useModal()
      function send(column, record) {
        // console.log('我是columns', columns, column, record)
        // console.log(column)

        //在这里对modal弹出框里面的值进行传递
        openModal(true, {
          data: 'content',
          info: 'Info',
          obj: column,
        })
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
        send,
        registerModal,
      }
    },
  })
</script>
