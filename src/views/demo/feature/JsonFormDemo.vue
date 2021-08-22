<template>
  <div>
    <d-json-form />

  </div>
</template>

<script>
import DJsonForm from "@/components/form/JsonForm.vue";
import { defineComponent  } from "vue";
// import { useTabs } from "@/hooks/pageTabs/index";
// import { closeAll, closeOther, closeTags } from "@/hooks/pageTags/index";\
// import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    DJsonForm,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 30px;
}
</style>