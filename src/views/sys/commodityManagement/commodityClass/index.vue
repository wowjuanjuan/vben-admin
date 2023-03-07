<template>
  <div class="p-4">
    <a-button color="success" @click="goNew">添加</a-button>
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
  import { defineComponent, ref } from 'vue';
  import {
    BasicTable,
    useTable,
    TableAction,
    BasicColumn,
    ActionItem,
    EditRecordRow,
  } from '/@/components/Table';
  import { optionsListApi } from '/@/api/demo/select';
  import { demoListApi } from '/@/api/demo/table';
  // import { treeOptionsListApi } from '/@/api/demo/tree';
  import { cloneDeep } from 'lodash-es';
  import { useMessage } from '/@/hooks/web/useMessage';
import { router } from '/@/router';
  const columns: BasicColumn[] = [
    {
      title: '分类ID',
      dataIndex: 'id',
      // editRow: true,
      editComponentProps: {
        prefix: '$',
      },
      width: 150,
    },
    {
      title: '分类名称',
      dataIndex: 'name',
      editRow: true,
      // editComponentProps: {
      //   prefix: '$',
      // },
      width: 150,
    },
    {
      title: '英文分类名称',
      dataIndex: 'brand',
      editRow: true,
      // editComponentProps: {
      //   prefix: '$',
      // },
      width: 150,
    },
    {
      title: 'URL Tag',
      dataIndex: 'ENname',
      editRow: true,
      // editComponentProps: {
      //   prefix: '$',
      // },
      width: 150,
    },
    {
      title: '是否隐藏显示',
      dataIndex: 'radio1',
      editRow: true,
      editComponent: 'RadioGroup',
      editComponentProps: {
        options: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '2',
          },
        ],
      },
      width: 200,
    },
    {
      title: '创建时间',
      dataIndex: 'ENname1',
      // editRow: true,
      editComponentProps: {
        prefix: '$',
      },
      width: 150,
    },
    {
      title: '更新时间',
      dataIndex: 'ENname2',
      // editRow: true,
      editComponentProps: {
        prefix: '$',
      },
      width: 150,
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const { createMessage: msg } = useMessage();
      const currentEditKeyRef = ref('');
      const [registerTable] = useTable({
        title: '商品分类',
        titleHelpMessage: [
          'tips',
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
      });
      function goNew() {
        router.push({
          name: 'editCommodityClass',
          query: { isNew: 1 },
        })
      }

      function handleEdit(record: EditRecordRow) {
        currentEditKeyRef.value = record.key;
        record.onEdit?.(true);
      }

      function handleCancel(record: EditRecordRow) {
        currentEditKeyRef.value = '';
        record.onEdit?.(false, false);
      }

      async function handleSave(record: EditRecordRow) {
        // 校验
        msg.loading({ content: '正在保存...', duration: 0, key: 'saving' });
        const valid = await record.onValid?.();
        if (valid) {
          try {
            const data = cloneDeep(record.editValueRefs);
            console.log(data);
            //TODO 此处将数据提交给服务器保存
            // ...
            // 保存之后提交编辑状态
            const pass = await record.onEdit?.(false, true);
            if (pass) {
              currentEditKeyRef.value = '';
            }
            msg.success({ content: '数据已保存', key: 'saving' });
          } catch (error) {
            msg.error({ content: '保存失败', key: 'saving' });
          }
        } else {
          msg.error({ content: '请填写正确的数据', key: 'saving' });
        }
      }

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        if (!record.editable) {
          return [
            {
              label: '编辑',
              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
              onClick: handleEdit.bind(null, record),
            },
          ];
        }
        return [
          {
            label: '保存',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '取消',
            popConfirm: {
              title: '是否取消编辑',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

      function onEditChange({ column, value, record }) {
        // 本例
        if (column.dataIndex === 'id') {
          record.editValueRefs.name4.value = `${value}`;
        }
        console.log(column, value, record);
      }

      return {
        registerTable,
        handleEdit,
        createActions,
        onEditChange,
        goNew
      };
    },
  });
</script>
