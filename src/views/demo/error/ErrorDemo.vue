<template>
  <div>
    <div class="card">
      <el-alert type="success"
        style="margin-bottom: 20px;">
        点击下面按钮，模拟演示一个错误地址并前往404页面。
      </el-alert>
      <el-button @click="gotoUndefinedPage">模拟404</el-button>
    </div>
    <div class="card">
      <el-alert type="success"
        style="margin-bottom: 20px;">
        点击下面按钮，模拟演示一个模拟网络连接错误并前往网络错误页面。(请使用Chrome->F12->Network->No throttling->选择offline->点击下面按钮)
      </el-alert>
      <el-button @click="gotoNetworkErrorPage">模拟网络连接错误</el-button>
    </div>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const gotoUndefinedPage = () => {
      router.push("/undefinedPage");
    };
    const gotoNetworkErrorPage = () => {
      router.push("/");
    };
    return {
      gotoUndefinedPage,
      gotoNetworkErrorPage
    };
  },
});
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 30px;
}
</style>