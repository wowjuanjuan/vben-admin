<template>
    <PageWrapper title="生成兑换码">
      <CollapseContainer title="生成兑换码">
        <BasicForm
          :labelWidth="100"
          :schemas="schemas"
          :actionColOptions="{ span: 24 }"
          :baseColProps="{ span: 24 }"
          @submit="handleSubmit"
        >
          <template #title13="{ model, field }">
            <a-select
              v-model:value="model[field]"
              mode="multiple"
              :options="opations"
              @change="dayin({ model, field })"
            />
          </template>
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
   
    // import { h } from 'vue'
    export default defineComponent({
      components: { BasicForm, CollapseContainer, PageWrapper, ASelect: Select },
      setup() {
        function dayin(obj) {
          console.log(obj)
        }
        const opations = [
          { label: '网址链接', value: '1', key: '1' },
          { label: 'NFT商品', value: '2', key: '2' },
          { label: '公告', value: '3', key: '3' },
        ]
        const router = useRouter()
        const { currentRoute } = router
        // const route = unref(currentRoute)
        //判断是不是新增的
        // const isNew = computed(() => route.query.isNew)
        //不是新增的，需要修改的数据
        // const data = computed(() => route.query.data)
        // const dataObj = data.value ? JSON.parse(String(data.value)) : {}
        //等确定属性名之后把dataObj数据传到schemas默认数据defaultValue中
        const schemas: FormSchema[] = [
          {
            field: 'time1',
            component: 'DatePicker',
            label: '生效开始时间',
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
            label: '生效结束时间',
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
            label: '绑定用户ID',
            // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
            rules: [{ required: true }],
          },
          {
            field: 'title2',
            component: 'Input',
            label: '绑定用户',
            // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
            rules: [{ required: true }],
          },
          {
            field: 'title3',
            component: 'Input',
            label: '剩余次数',
            // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
            rules: [{ required: true }],
          },
          {
            field: 'title4',
            component: 'Input',
            label: '批次ID',
            // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
            rules: [{ required: true }],
          },
          {
            field: 'title5',
            component: 'Input',
            label: '兑换券个数',
            // defaultValue: isNew.value == '1' ? '' : dataObj.beginTime,
            rules: [{ required: true }],
          },
        ]
        return {
          schemas,
          dayin,
          opations,
          handleSubmit: (values: any) => {
            console.log('表单数据？', values)
            // createMessage.success('click search,values:' + JSON.stringify(values))
          },
        }
      },
    })
  </script>
  