<template>
  <BasicTable @register="registerTable">
    <template #form-custom> custom-slot </template>
    <template #bodyCell="{ column, record, text }">
      <template v-if="column.key === 'id'"> {{ record.id }} </template>
      <!-- 如果表单columns中相仿除了文本之外的元素的话可以用v-if加接的标签写进去，比如图片avatar -->
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
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { BasicTable, useTable, BasicColumn, TableImg, FormProps } from '/@/components/Table'
  // import { getBasicColumns } from '../tableData'
  import { Alert, Tag, Avatar } from 'ant-design-vue'
  import { demoListApi } from '/@/api/demo/table'
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      // slots: { customRender: 'id' },
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      width: 100,
      // slots: { customRender: 'avatar' },
    },
    {
      title: '分类',
      dataIndex: 'category',
      width: 80,
      align: 'center',
      // defaultHidden: true,
      // slots: { customRender: 'category' },
    },
    {
      title: '昵称',
      dataIndex: 'name',
      width: 120,
      // filters: [
      //   { text: 'Male', value: 'male' },
      //   { text: 'Female', value: 'female' },
      // ],
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '姓名',
      dataIndex: 'realName',
    },
    {
      title: '手机号码',
      dataIndex: 'telNumber',
    },
    {
      title: '是否身份验证',
      dataIndex: 'isValidate',
    },
    {
      title: '身份证号',
      dataIndex: 'identityCard',
    },
    {
      title: 'openid',
      dataIndex: 'openid',
    },
    // {
    //   title: '编号',
    //   dataIndex: 'no',
    //   // slots: { customRender: 'no' },
    // },
    // {
    //   title: '开始时间',
    //   dataIndex: 'beginTime',
    // },
    // {
    //   title: '结束时间',
    //   dataIndex: 'endTime',
    // },
  ]
  export default defineComponent({
    components: { BasicTable, AAlert: Alert, TableImg, Tag, Avatar },
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
      })

      function getFormValues() {
        console.log(getForm().getFieldsValue())
        // console.log(getForm())
      }

      function onSelectChange(selectedRowKeys: (string | number)[]) {
        console.log(selectedRowKeys)
        checkedKeys.value = selectedRowKeys
      }
      function getFormConfig(): Partial<FormProps> {
        return {
          // resetFunc: ()=>{
          //   console.log(n);
          // },
          labelWidth: 100,
          schemas: [
            {
              field: 'isValidate',
              component: 'Select',
              label: '是否身份校验',
              colProps: {
                span: 8,
              },
              componentProps: {
                options: [
                  {
                    label: '是',
                    value: '1',
                    key: '1',
                  },
                  {
                    label: '否',
                    value: '2',
                    key: '2',
                  },
                ],
              },
            },
            {
              field: 'SourceOfChannels',
              component: 'Select',
              label: '渠道来源',
              colProps: {
                span: 8,
              },
              componentProps: {
                options: [
                  {
                    label: '是',
                    value: '1',
                    key: '1',
                  },
                  {
                    label: '否',
                    value: '2',
                    key: '2',
                  },
                ],
              },
            },
            {
              field: `id`,
              label: `ID`,
              component: 'Input',
              colProps: {
                xl: 12,
                xxl: 8,
              },
            },
            {
              field: `name`,
              label: `昵称`,
              component: 'Input',
              colProps: {
                xl: 12,
                xxl: 8,
              },
            },
            {
              field: `telNumber`,
              label: `手机号码`,
              component: 'Input',
              colProps: {
                xl: 12,
                xxl: 8,
              },
            },
            {
              field: `openid`,
              label: `openid`,
              component: 'Input',
              colProps: {
                xl: 12,
                xxl: 8,
              },
            },
          ],
        }
      }
      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelectChange,
      }
    },
  })
</script>
