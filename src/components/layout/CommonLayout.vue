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
import { ref, defineComponent } from "vue";
import { fetchMenuData } from "@/api/mock";

export default defineComponent({
  components: {
    DHeader,
    DMenuBar,
    DContent,
  },
  setup() {
    const menuList = ref([]);
    fetchMenuData().then((res) => {
      menuList.value = res.list;
    });
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
