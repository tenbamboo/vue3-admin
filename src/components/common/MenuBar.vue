<template>
  <div class="menuBarContainer">
    <el-scrollbar wrap-class="scrollbarWrapper">
      <el-menu class="menuBarContainerMenu"
        :default-active="onRoutes"
        :collapse="collapse"
        background-color="#324157"
        text-color="#bfcbd9"
        active-text-color="#20a0ff"
        unique-opened
        router>
        <template v-for="item in props.items">
          <template v-if="item.subs">
            <el-submenu :index="item.index"
              :key="item.index">
              <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs"
                  :index="subItem.index"
                  :key="subItem.index">
                  <template #title>{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem, i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index">
                    {{ threeItem.title }}</el-menu-item>
                </el-submenu>
                <el-menu-item v-else
                  :index="subItem.index"
                  :key="subItem.index">{{ subItem.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index"
              :key="item.index">
              <i :class="item.icon"></i>
              <template #title>{{ item.title }}</template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { computed,defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props) {
    const route = useRoute();

    const onRoutes = computed(() => route.path);

    const store = useStore();
    const collapse = computed(() => store.state.layout.collapse);

    return {
      props,
      //   items,
      onRoutes,
      collapse,
    };
  },
});
</script>

<style  lang="scss" scoped>
.menuBarContainer {
  height: 100%;
  background: #324157;
  .menuBarContainerMenu:not(.el-menu--collapse) {
    width: 250px;
  }
}
/* .menuBarContainer::-webkit-scrollbar {
  width: 0;
} */
</style>
