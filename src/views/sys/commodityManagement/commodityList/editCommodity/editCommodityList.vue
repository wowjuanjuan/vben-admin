<template>
  <PageWrapper title="商品编辑">
    <CollapseContainer title="商品编辑">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        :baseColProps="{ span: 24 }"
        @submit="handleSubmit"
      >
      </BasicForm>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent, ref, unref } from 'vue'
  import { BasicForm } from '/@/components/Form/index'
  import { CollapseContainer } from '/@/components/Container/index'
  import { Select } from 'ant-design-vue'
  import { PageWrapper } from '/@/components/Page'
  import { useRouter } from 'vue-router'
  import { FormSchema } from '/@/components/Form/index'
  import { Tinymce } from '/@/components/Tinymce/index'
  import { h } from 'vue'
  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper, ASelect: Select },
    setup() {
      function dayin(obj) {
        console.log(obj)
      }
      const router = useRouter()
      const { currentRoute } = router
      const route = unref(currentRoute)
      //判断是不是新增的
      const isNew = computed(() => route.query.isNew)
      //不是新增的，需要修改的数据
      const data = computed(() => route.query.data)
      const dataObj = data.value ? JSON.parse(String(data.value)) : {}
      //等确定属性名之后把dataObj数据传到schemas默认数据defaultValue中
      const schemas: FormSchema[] = [
        // {
        //   field: 'title',
        //   component: 'DatePicker',
        //   label: '标题',
        //   defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
        //   rules: [{ required: true }],
        //   componentProps: {
        //     format: 'YYYY-MM-DD HH:mm:ss',
        //     // placeholder: ['开始时间', '结束时间'],
        //     showTime: { format: 'HH:mm:ss' },
        //   },
        // },
        // {
        //   field: 'title',
        //   component: 'Input',
        //   label: '标题',
        //   // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
        //   rules: [{ required: true }],
        // },
        {
          field: 'title1',
          component: 'Input',
          label: '货号',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title3',
          component: 'Select',
          label: '分类',
          // defaultValue: '公告',
          rules: [{ required: true }],
          componentProps: {
            options: [
              {
                label: '网址链接',
                value: '1',
                key: '1',
              },
              {
                label: 'NFT商品',
                value: '2',
                key: '2',
              },
              {
                label: '公告',
                value: '3',
                key: '3',
              },
            ],
          },
        },
        {
          field: 'field4',
          component: 'Select',
          label: '专题',
          // colProps: {
          //   span: 8,
          // },
          componentProps: {
            mode: 'multiple',
            options: [
              {
                label: '选项1',
                value: '1',
                key: '1',
              },
              {
                label: '选项2',
                value: '2',
                key: '2',
              },
            ],
          },
          rules: [
            {
              required: true,
              // message: '请输入aa',
              type: 'array',
            },
          ],
        },
        {
          field: 'title3',
          component: 'Select',
          label: '版权方',
          // defaultValue: '公告',
          rules: [{ required: true }],
          componentProps: {
            options: [
              {
                label: '网址链接',
                value: '1',
                key: '1',
              },
              {
                label: 'NFT商品',
                value: '2',
                key: '2',
              },
              {
                label: '公告',
                value: '3',
                key: '3',
              },
            ],
          },
        },
        {
          field: 'title3',
          component: 'Select',
          label: '品牌',
          // defaultValue: '公告',
          rules: [{ required: true }],
          componentProps: {
            options: [
              {
                label: '网址链接',
                value: '1',
                key: '1',
              },
              {
                label: 'NFT商品',
                value: '2',
                key: '2',
              },
              {
                label: '公告',
                value: '3',
                key: '3',
              },
            ],
          },
        },
        {
          field: 'title3',
          component: 'Select',
          label: '发行方',
          // defaultValue: '公告',
          rules: [{ required: true }],
          componentProps: {
            options: [
              {
                label: '网址链接',
                value: '1',
                key: '1',
              },
              {
                label: 'NFT商品',
                value: '2',
                key: '2',
              },
              {
                label: '公告',
                value: '3',
                key: '3',
              },
            ],
          },
        },
        {
          field: 'title3',
          component: 'Select',
          label: '商品类型',
          // defaultValue: '公告',
          rules: [{ required: true }],
          componentProps: {
            options: [
              {
                label: '网址链接',
                value: '1',
                key: '1',
              },
              {
                label: 'NFT商品',
                value: '2',
                key: '2',
              },
              {
                label: '公告',
                value: '3',
                key: '3',
              },
            ],
          },
        },
        {
          field: 'title1',
          component: 'Input',
          label: '关联赠送商品',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title3',
          component: 'Select',
          label: '合约模板',
          // defaultValue: '公告',
          rules: [{ required: true }],
          componentProps: {
            options: [
              {
                label: '网址链接',
                value: '1',
                key: '1',
              },
              {
                label: 'NFT商品',
                value: '2',
                key: '2',
              },
              {
                label: '公告',
                value: '3',
                key: '3',
              },
            ],
          },
        },
        {
          field: 'field5',
          component: 'Select',
          label: '合约模板metadataID',
          // colProps: {
          //   span: 8,
          // },
          componentProps: {
            mode: 'multiple',
            options: [
              {
                label: '选项1',
                value: '1',
                key: '1',
              },
              {
                label: '选项2',
                value: '2',
                key: '2',
              },
            ],
          },
          rules: [
            {
              required: true,
              // message: '请输入aa',
              type: 'array',
            },
          ],
        },
        {
          field: 'field7',
          component: 'RadioGroup',
          label: '是否隐藏',
          componentProps: {
            options: [
              {
                label: '选项1',

                value: '1',
              },
              {
                label: '选项2',
                value: '2',
              },
            ],
          },
          rules: [{ required: true }],
        },
        {
          field: 'field7',
          component: 'RadioGroup',
          label: '商品状态',
          componentProps: {
            options: [
              {
                label: '选项1',

                value: '1',
              },
              {
                label: '选项2',
                value: '2',
              },
            ],
          },
          rules: [{ required: true }],
        },
        {
          field: 'title1',
          component: 'Input',
          label: '商品名称',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title1',
          component: 'Input',
          label: 'URL Tag',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title1',
          component: 'Input',
          label: '商品价格',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title1',
          component: 'Input',
          label: '市场价',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title1',
          component: 'Input',
          label: '当前库存',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title1',
          component: 'Input',
          label: '发行总量',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title1',
          component: 'Input',
          label: '限购数量',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title111',
          component: 'DatePicker',
          label: '发行时间',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
          componentProps: {
            format: 'YYYY-MM-DD HH:mm:ss',
            // placeholder: ['开始时间', '结束时间'],
            showTime: { format: 'HH:mm:ss' },
          },
        },
        {
          field: 'title1112',
          component: 'DatePicker',
          label: '销售时间',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
          componentProps: {
            format: 'YYYY-MM-DD HH:mm:ss',
            // placeholder: ['开始时间', '结束时间'],
            showTime: { format: 'HH:mm:ss' },
          },
        },
        {
          field: 'title1',
          component: 'Input',
          label: '排序',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'field71',
          component: 'RadioGroup',
          label: '运费类型',
          rules: [{ required: true }],
          componentProps: {
            options: [
              {
                label: '免运费',

                value: '1',
              },
              {
                label: '全国运费',
                value: '2',
              },
              {
                label: '距离计价',
                value: '3',
              },
            ],
          },
        },
        {
          field: 'title11132',
          component: 'Input',
          label: '商品运费',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title15',
          component: 'Input',
          label: '商品单位重量（g）',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title30',
          component: 'Upload',
          label: '标题图',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title39',
          component: 'Upload',
          label: '缩略图',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title38',
          component: 'Upload',
          label: '商品图',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title37',
          component: 'Upload',
          label: 'ar 模型',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title36',
          component: 'Upload',
          label: 'ar加载图',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title35',
          component: 'Input',
          label: '标签',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
      ]
      return {
        schemas,
        dayin,
        handleSubmit: (values: any) => {
          console.log('表单数据？', values)
          // createMessage.success('click search,values:' + JSON.stringify(values))
        },
      }
    },
  })
</script>
