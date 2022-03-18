<template>
  <el-config-provider :locale="locale" >
    <div class="mainContainer">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<script >
import { defineComponent } from "vue";
import locale from "element-plus/lib/locale/lang/zh-cn";
export default defineComponent({
  setup() {
    return {
      locale,
    };
  },
});
</script>
<style >
@import "./assets/css/main.css";
</style>
