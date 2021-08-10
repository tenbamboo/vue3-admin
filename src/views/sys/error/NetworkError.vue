<template>
  <div class="errorNetworkContainer">
    <i class="el-icon el-icon-error" />
    <p class="title">网络错误</p>
    <p class="info">抱歉，您的网络连接已断开，请检查您的网络！</p>
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
import { defineComponent } from "vue";
import { useTabs } from "@/hooks/pageTabs/index";
export default defineComponent({
  setup() {
    const router = useRouter();
    const { closeTabs } = useTabs();
    const gotoIndex = () => {
      closeTabs("/");
    };
    const gotoBack = () => {
      router.back();
      closeTabs();
    };
    return {
      gotoIndex,
      gotoBack,
    };
  },
});
</script>
<style lang="scss" scoped>
.errorNetworkContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-icon {
    font-size: 70px;
    color: #f56c6c;
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