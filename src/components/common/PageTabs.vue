<template>
  <div class="pageTabsContainer"
    v-if="showTabs">
    <ul>
      <li class="tagItem"
        v-for="(item,index) in tabsList"
        :class="{'active': isActive(item.path)}"
        :key="index">
        <router-link :to="item.path"
          class="title">{{item.title}}</router-link>
        <span @click="closeTabs(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>

    <!-- <el-tabs 
      type="card"
      closable
      @tab-remove="removeTab"
      @tab-click="gotoPage">
      <el-tab-pane v-for="(item) in tabsList"
        :key="item.path"
        :label="item.title"
        :name="item.path">
        {{item.title}}
      </el-tab-pane>
    </el-tabs> -->
    <div class="operArea">
      <el-dropdown @command="handleTabs">
        <el-button size="mini"
          type="primary">
          快捷操作
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useTabs } from "@/hooks/pageTabs/index";


export default defineComponent({
  setup() {
    const route = useRoute();
    const isActive = (path) => path === route.fullPath;

    const store = useStore();
    const tabsList = computed(() => store.state.layout.tabsList);
    const showTabs = computed(() => tabsList.value.length > 0);
    const { closeAll, closeOther, closeTabs, setTabs } = useTabs();

    // 设置标签


    setTabs(route);
    onBeforeRouteUpdate((to) => {
      setTabs(to);
    });
    const handleTabs = (command) => {
      if (command === "other") {
        closeOther();
      } else {
        closeAll();
      }
    };

    return {
      isActive,
      tabsList,
      showTabs,
      closeTabs,
      handleTabs,
    };
  },
});
</script>

<style lang="scss" scoped>
.pageTabsContainer {
  position: relative;
  z-index: 1;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
  ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    .tagItem {
      float: left;
      margin: 3px 5px 2px 3px;
      border-radius: 3px;
      font-size: 12px;
      overflow: hidden;
      cursor: pointer;
      height: 23px;
      line-height: 23px;
      border: 1px solid #e9eaec;
      background: #fff;
      padding: 0 5px 0 12px;
      vertical-align: middle;
      color: #666;
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      .title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
      }

      &:not(.active):hover {
        background: #f8f8f8;
      }
      &.active {
        color: #fff;
        border: 1px solid #409eff;
        background-color: #409eff;

        .title {
          color: #fff;
        }
      }
    }
  }
  .operArea {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
}
</style>
