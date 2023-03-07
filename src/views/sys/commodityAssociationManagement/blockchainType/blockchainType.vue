<template>
  <div class="p-4">
    <a-button color="success" @click="goEditDetail"> 添加 </a-button>
    <!-- <br/> -->
    <BasicTable @register="registerTable" @edit-change="onEditChange">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="createActions(record, column)" />
        </template>
        <!-- 再此处把图片的属性名传入 -->
        <template v-else-if="column.key === 'avatar'">
          <Avatar :size="60" :src="record.avatar" />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import {
    BasicTable,
    useTable,
    TableAction,
    BasicColumn,
    ActionItem,
    EditRecordRow,
  } from '/@/components/Table'
  import { demoListApi } from '/@/api/demo/table'
  import { router } from '/@/router'
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const columns: BasicColumn[] = [
        {
          title: '区块链ID',
          dataIndex: 'id',
          editRow: true,
          editComponentProps: {
            // prefix: '$',
          },
          width: 150,
        },
        {
          title: '区块链名字',
          dataIndex: 'title',
          editRow: true,
          editComponentProps: {
            // prefix: '$',
          },
          width: 150,
        },
        {
          title: '区块链key',
          dataIndex: 'shortTitle',
          editRow: true,
          editComponentProps: {
            // prefix: '$',
          },
          width: 150,
        },
        {
          title: '区块链icon',
          dataIndex: 'avatar',
          width: 100,
          // slots: { customRender: 'avatar' },
        },
        {
          title: '创建时间',
          dataIndex: 'shortTitle3',
          editRow: true,
          editComponentProps: {
            // prefix: '$',
          },
          width: 150,
        },
        {
          title: '更新时间',
          dataIndex: 'shortTitle4',
          editRow: true,
          editComponentProps: {
            // prefix: '$',
          },
          width: 150,
        },
      ]
      // const { createMessage: msg } = useMessage()
      const currentEditKeyRef = ref('')
      const [registerTable] = useTable({
        title: '区块链类型',
        // titleHelpMessage: [
        //   '本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变',
        // ],
        api: demoListApi,
        columns: columns,
        showIndexColumn: false,
        showTableSetting: true,
        tableSetting: { fullScreen: true },
        actionColumn: {
          width: 160,
          title: 'Action',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      })

      function handleEdit(record: EditRecordRow) {
        currentEditKeyRef.value = record.key
        record.onEdit?.(true)
      }
      //在这里传id过去对其进行新建
      function goEditDetail(columns, record) {
        console.log(columns, record)
        router.push({ name: 'editBlockchainType', query: { isNew: 1 } })
      }
      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        return [
          {
            label: '编辑',
            onClick: function () {
              router.push({ name: 'editBlockchainType', query: { data: JSON.stringify(record) } })
            },
          },
        ]
      }
      function onEditChange({ column, value, record }) {
        // 本例
        if (column.dataIndex === 'id') {
          record.editValueRefs.name4.value = `${value}`
        }
        console.log(column, value, record)
      }
      return {
        registerTable,
        handleEdit,
        createActions,
        onEditChange,
        goEditDetail,
      }
    },
  })
</script>
