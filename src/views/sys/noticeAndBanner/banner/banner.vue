<template>
  <div class="p-4">
    <a-button color="success" @click="goEditDetail"> 添加 </a-button>
    <!-- <br/> -->
    <BasicTable @register="registerTable" @edit-change="onEditChange">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction :actions="createActions(record, column)" />
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
  // import { optionsListApi } from '/@/api/demo/select'
  import { demoListApi } from '/@/api/demo/table'
  // import { treeOptionsListApi } from '/@/api/demo/tree'
  // import { clo neDeep } from 'lodash-es'
  // import { useMessage } from '/@/hooks/web/useMessage'
  import { router } from '/@/router'
  import { columns } from './bannerData'

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      // const { createMessage: msg } = useMessage()
      const currentEditKeyRef = ref('')
      const [registerTable] = useTable({
        title: '可编辑行示例',
        titleHelpMessage: [
          '本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变',
        ],
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
        console.log(columns.id)

        router.push({ name: 'EditBanner' })
        console.log('edit')
        // router.push({name:'noticeEditDetail'})
        // router.push({ name: 'goodsDetail', params: { id: item.goodsURL } });
      }
      // function handleCancel(record: EditRecordRow) {
      //   currentEditKeyRef.value = ''
      //   record.onEdit?.(false, false)
      // }
      // async function handleSave(record: EditRecordRow) {
      //   // 校验
      //   msg.loading({ content: '正在保存...', duration: 0, key: 'saving' })
      //   const valid = await record.onValid?.()
      //   if (valid) {
      //     try {
      //       const data = cloneDeep(record.editValueRefs)
      //       console.log(data)
      //       //TODO 此处将数据提交给服务器保存
      //       // ...
      //       // 保存之后提交编辑状态
      //       const pass = await record.onEdit?.(false, true)
      //       if (pass) {
      //         currentEditKeyRef.value = ''
      //       }
      //       msg.success({ content: '数据已保存', key: 'saving' })
      //     } catch (error) {
      //       msg.error({ content: '保存失败', key: 'saving' })
      //     }
      //   } else {
      //     msg.error({ content: '请填写正确的数据', key: 'saving' })
      //   }
      // }
      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        return [
          {
            label: '编辑',
            // disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
            // onClick: handleEdit.bind(null, record),
            onClick: function () {
              // alert("编辑")
              // console.log(record,column);
              router.push({ name: 'EditBanner', query: { data: JSON.stringify(record) } })
            },
          },
          {
            label: '删除',
            onClick: function () {
              alert('删除')
            },
          },
        ]
      }
      // function test(){
      //   console.log(111);
      // }
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
