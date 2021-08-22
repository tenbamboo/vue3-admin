<template>
  <div class="error403Container">

    <img src="/static/images/403.png"
      class="bg" />
    <p class="title">403</p>
    <p class="info">抱歉，您无权访问此页面。</p>
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
    const { closeCurrnetTab } = useTabs();
    const gotoIndex = () => {
      closeCurrnetTab("/");
    };
    const gotoBack = () => {
      router.back();
      closeCurrnetTab();
    };
    return {
      gotoIndex,
      gotoBack,
    };
  },
});
</script>
<style lang="scss" scoped>
.error403Container {
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