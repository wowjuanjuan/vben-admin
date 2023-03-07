<template>
  <div>
    <a-button color="success" @click="makeNewCode">生成兑换券</a-button>
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
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { BasicTable, useTable, BasicColumn, TableImg, FormProps } from '/@/components/Table'
  // import { getBasicColumns } from '../tableData'
  import { Alert, Tag, Avatar } from 'ant-design-vue'
  import { demoListApi } from '/@/api/demo/table'
import { router } from '/@/router'
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      // slots: { customRender: 'id' },
    },
    // {
    //   title: '头像',
    //   dataIndex: 'avatar',
    //   width: 100,
    //   // slots: { customRender: 'avatar' },
    // },
    {
      title: '兑换码',
      dataIndex: 'category',
      width: 80,
      align: 'center',
      // defaultHidden: true,
      // slots: { customRender: 'category' },
    },
    {
      title: '绑定商品ID',
      dataIndex: 'name',
      width: 120,
      // filters: [
      //   { text: 'Male', value: 'male' },
      //   { text: 'Female', value: 'female' },
      // ],
    },
    {
      title: '绑定用户',
      dataIndex: 'address',
    },
    {
      title: '剩余次数',
      dataIndex: 'realName',
    },
    {
      title: '是否使用',
      dataIndex: 'telNumber',
    },
    {
      title: '是否失效',
      dataIndex: 'isValidate',
    },
    {
      title: '使用时间',
      dataIndex: 'identityCard',
    },
    {
      title: '批次ID',
      dataIndex: 'openid',
    },
    // {
    //   title: '编号',
    //   dataIndex: 'no',
    //   // slots: { customRender: 'no' },
    // },
    {
      title: '生效开始时间',
      dataIndex: 'beginTime',
    },
    {
      title: '生效结束时间',
      dataIndex: 'beginTime',
    },
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
      function makeNewCode(){
        router.push({name:"commodityListEditExchangeCode"})
      }

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
          labelWidth: 100,
          schemas: [
            {
              field: 'isValidate',
              component: 'Select',
              label: '是否使用',
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
              label: '是否失效',
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
          ],
        }
      }
      return {
        registerTable,
        getFormValues,
        checkedKeys,
        onSelectChange,
        makeNewCode
      }
    },
  })
</script>
