<template>
  <div class="error404Container">
    <img src="/static/images/404.png"
      class="bg" />
    <p class="title">404</p>
    <p class="info">抱歉，您访问的页面不存在。</p>
    <div>
      <el-button size="medium"
        type="primary"
        @click="gotoIndex">返回首页</el-button>
      <el-button size="medium"
        type="primary"
        @click="gotoBack"
        plain>返回上一页</el-button>

    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const router = useRouter();
    const gotoIndex = () => {
      router.push("/");
    };
    const gotoBack = () => {
      router.back();
    };
    return {
      gotoIndex,
      gotoBack,
    };
  },
});
</script>
<style lang="scss" scoped>
.error404Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .bg {
    width: 250px;
  }
  .title {
    font-size: 30px;
    margin: 10px;
  }
  .info {
    margin: 10px 10px 20px;
  }
}
</style>