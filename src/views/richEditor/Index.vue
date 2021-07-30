<template>
  <div>

    <el-alert type="success" style="margin-bottom: 20px;">
      基于：<el-link href="https://github.com/wangeditor-team/wangEditor"
        type="primary"
        target="_blank">wangeditor</el-link>
    </el-alert>
    <rich-editor v-model="testHtml"></rich-editor>

  </div>
</template>
<script>
import RichEditor from "@/components/richEditor/Index.vue";
import { ref, defineComponent } from "vue";

export default defineComponent({
  name: "baseRichEditor",
  components: {
    RichEditor,
  },
  setup() {
    const testHtml = ref("");
    // setTimeout(() => {
      testHtml.value = "<p>😁😀😊😋😎<br/></p><p><br/></p><p><br/></p><p>哈哈哈</p>";
    // }, 3000);
    // const tableList = ref([]);

    return {
      testHtml,
    };
  },
});
</script>
<style lang="scss" scoped>
.baseTableHeader {
}
</style>
