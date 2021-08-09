<template>
  <el-form :model="form"
    ref="formRef"
    :rules="rules"
    label-width="80px">
    <el-form-item prop="name"
      label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item prop="region"
      label="活动区域">
      <el-select v-model="form.region"
        placeholder="请选择活动区域">
        <el-option label="区域一"
          value="shanghai"></el-option>
        <el-option label="区域二"
          value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间"
      prop="date1">
      <el-date-picker type="date"
        placeholder="选择日期"
        v-model="form.date1"
        style="width: 100%;"></el-date-picker>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item label="活动性质"
      prop="type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="美食/餐厅线上活动"
          name="type"></el-checkbox>
        <el-checkbox label="地推活动"
          name="type"></el-checkbox>
        <el-checkbox label="线下主题活动"
          name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光"
          name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源"
      prop="resource">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式"
      prop="desc">
      <el-input type="textarea"
        v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
        @click="onSubmit">立即创建</el-button>
      <el-button @click="onReset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref,defineComponent } from "vue";
import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const formRef = ref(null);

    const rules = {
      name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
      region: [
        { required: true, message: "请选择活动区域", trigger: "change" },
      ],
      date1: [{ required: true, message: "请选择活动时间", trigger: "change" }],
      type: [{ required: true, message: "请选择活动性质", trigger: "change" }],
      resource: [
        { required: true, message: "请选择特殊资源", trigger: "change" },
      ],
      desc: [{ required: true, message: "请输入活动形式", trigger: "blur" }],
    };

    const form = reactive({
      name: "",
      region: "",
      date1: "",
      delivery: true,
      type: [],
      resource: "",
      desc: "",
    });


    // 提交
    const onSubmit = () => {
      // 表单校验
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(form);
          ElMessage.success("提交成功！");
        } else {
          return false;
        }
      });
    };
    // 重置
    const onReset = () => {
      formRef.value.resetFields();
    };
    return {
      rules,
      formRef,
      form,
      onSubmit,
      onReset,
    };
  },
});
</script>