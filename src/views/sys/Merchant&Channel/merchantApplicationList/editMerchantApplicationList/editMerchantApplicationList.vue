<template>
  <PageWrapper title="商品应用编辑">
    <CollapseContainer title="商品应用编辑">
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
  //   import { Tinymce } from '/@/components/Tinymce/index'
  //   import { h } from 'vue'
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
        {
          field: 'title1',
          component: 'Input',
          label: '应用名称',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
          // labelWidth:"30px",
          // Width:"100px"
        },
        {
          field: 'title2',
          component: 'Input',
          label: '应用上链跳转承载地址',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title3',
          component: 'Input',
          label: '用于加密的密钥',
          // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
          rules: [{ required: true }],
        },
        {
          field: 'title5',
          component: 'Input',
          label: '上链商品ID',
          // defaultValue: '公告',
          rules: [{ required: true }],
        },
        {
          field: 'title6',
          component: 'Input',
          label: '异步通知安全域名',
          // defaultValue: '公告',
          rules: [{ required: true }],
        },
        {
          field: 'field7',
          component: 'RadioGroup',
          label: '发布状态',
          rules: [{ required: true }],
          colProps: {
            span: 8,
          },
          componentProps: {
            options: [
              {
                label: '测试中',
                value: '1',
              },
              {
                label: '已上线',
                value: '2',
              },
            ],
          },
        }
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
