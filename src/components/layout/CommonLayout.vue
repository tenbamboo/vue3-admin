<template>
  <div class="commonLayout">
    <d-header />
    <div class="flexWrapper">
      <d-menu-bar :items="menuList" />
      <d-content />
    </div>

  </div>
</template>
<script>
import DHeader from "@/components/common/Header.vue";
import DMenuBar from "@/components/common/MenuBar.vue";
import DContent from "@/components/common/Content.vue";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    DHeader,
    DMenuBar,
    DContent,
  },
  setup() {
    const store = useStore();
    const menuList = computed(() => store.state.permission.menuList);
    return {
      menuList,
    };
  },
});
</script>
<style lang="scss" scoped>
.commonLayout {
  height: 100%;
  .flexWrapper {
    height: calc(100% - 55px);
    display: flex;
  }
}
</style>
