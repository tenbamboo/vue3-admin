<template>
  <div class="contentContainer">

    <d-page-tabs />
    <div class="innerContent">
      <router-view v-slot="{ Component }">
        <transition name="move"
          mode="out-in">
          <keep-alive :include="tabsList">
            <component class="componentContainer"
              :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>

  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import DPageTabs from "@/components/common/PageTabs.vue";

export default defineComponent({
  components: {
    DPageTabs,
  },
  setup() {
    const store = useStore();
    const tabsList = computed(() =>
      store.state.layout.tabsList.map((item) => item.name)
    );

    const collapse = computed(() => store.state.layout.collapse);
    return {
      tabsList,
      collapse,
    };
  },
});
</script>
<style lang="scss" scoped>
.contentContainer {
  flex: 1;
  width: 0;
  .innerContent {
    width: 100%;
    height: 100%;
    padding: 10px 10px 50px;
    overflow-y: auto;
    box-sizing: border-box;
    background: #f0f0f0;
    .componentContainer {
      padding: 20px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
    .move-enter-active,
    .move-leave-active {
      transition: opacity 0.1s ease;
    }

    .move-enter-from,
    .move-leave-to {
      opacity: 0;
    }
  }
}
</style>

