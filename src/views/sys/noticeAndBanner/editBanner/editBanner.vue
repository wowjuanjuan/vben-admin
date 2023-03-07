<template>
  <PageWrapper title="公告编辑">
    <CollapseContainer title="公告表单">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        :baseColProps="{ span: 24 }"
        @submit="handleSubmit"
      />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent, h, unref } from 'vue'
  import { BasicForm, FormSchema } from '/@/components/Form/index'
  import { CollapseContainer } from '/@/components/Container/index'
  import { useMessage } from '/@/hooks/web/useMessage'
  import { Tinymce } from '/@/components/Tinymce/index'
  import { PageWrapper } from '/@/components/Page'
  import { useRouter } from 'vue-router'

  const schemas: FormSchema[] = [
    {
      field: 'title',
      component: 'Input',
      label: '标题',
      // defaultValue: 'defaultValue',
      rules: [{ required: true }],
    },
    {
      field: 'title1',
      component: 'Input',
      label: '短标题',
      // defaultValue: 'defaultValue',
      rules: [{ required: true }],
    },
    {
      field: 'title2',
      component: 'Upload',
      label: '标题图片',
      rules: [{ required: true }],
    },
    {
      field: 'title3',
      component: 'Select',
      label: '类型',
      // defaultValue: 'defaultValue',
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
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'title4',
      component: 'Input',
      label: '类型值',
      rules: [{ required: true }],
      helpMessage: '类型关联数据(链接 或者 ID), 当类型为公告时 此项不需要填写',
    },
    {
      field: 'title5',
      component: 'Input',
      label: '排序',
      rules: [{ required: true }],
      helpMessage: '越大越靠前',
    },
    {
      field: 'time1',
      component: 'DatePicker',
      label: '开始时间',
      // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
      rules: [{ required: true }],
      componentProps: {
        format: 'YYYY-MM-DD HH:mm:ss',
        // placeholder: ['开始时间', '结束时间'],
        showTime: { format: 'HH:mm:ss' },
      },
    },
    {
      field: 'time2',
      component: 'DatePicker',
      label: '结束时间',
      // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
      rules: [{ required: true }],
      componentProps: {
        format: 'YYYY-MM-DD HH:mm:ss',
        // placeholder: ['开始时间', '结束时间'],
        showTime: { format: 'HH:mm:ss' },
      },
    },
  ]
  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const { createMessage } = useMessage()
      const router = useRouter()
      const { currentRoute } = router
      const route = unref(currentRoute)
      //判断是不是新增的
      const isNew = computed(() => route.query.isNew)
      //不是新增的，需要修改的数据
      const data = computed(() => route.query.data)
      const dataObj = data.value ? JSON.parse(String(data.value)) : {}

      return {
        schemas,
        handleSubmit: (values: any) => {
          console.log('表单数据？', values)

          createMessage.success('click search,values:' + JSON.stringify(values))
        },
      }
    },
  })
</script>
