<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="订单发货"
    @visible-change="handleVisibleChange"
    @ok="test"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" :model="model" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, nextTick } from 'vue'
  import { BasicModal, useModalInner } from '/@/components/Modal'
  import { BasicForm, useForm } from '/@/components/Form/index'
  import { schemas } from './editOrderData'
  export default defineComponent({
    components: { BasicModal, BasicForm },
    props: {
      userData: { type: Object },
    },
    setup(props) {
      const modelRef = ref({})
      //在这里把擦混进来的数据存一下
      const saveUserData=ref({})
      const [
        registerForm,
        {
          // setFieldsValue,
          // setProps
          getFieldsValue
        },
      ] = useForm({
        labelWidth: 120,
        schemas,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 24,
        },
        // submit:()=>{log},
      })

      const [register,{closeModal}] = useModalInner((data) => {
        data && onDataReceive(data)
        saveUserData.value=data;
      })
      // useModal((data:any)=>{console.log(data);
      // })
      function  test() {    
        alert("打印台有传入的信息（saveUserData.value）,表单参数(getFieldsValue())")

        //api传来数据属性名和表格属性名对应上，表格自动渲染
        console.log('我是传入的数据',saveUserData.value);
        console.log('我是表单参数',getFieldsValue());
        closeModal();
      }

      function onDataReceive(data) {
        console.log('Data Received', data)
        console.log('obj传入组件内', data.obj)

        // 方式1;
        // setFieldsValue({
        //   field2: data.data,
        //   field1: data.info,
        // });

        // // 方式2
        modelRef.value = { field2: data.data, field1: data.info }

        // setProps({
        //   model:{ field2: data.data, field1: data.info }
        // })
      }

      function handleVisibleChange(v) {
        v && props.userData && nextTick(() => onDataReceive(props.userData))
      }

      return { register, schemas, registerForm, model: modelRef, handleVisibleChange,test }
    },
  })
</script>
