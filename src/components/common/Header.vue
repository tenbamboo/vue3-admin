<template>
  <div class="headerContainer">
    <!-- 折叠按钮 -->
    <div class="headerLeft">

      <div class="collapseSilderBtn"
        @click="collapseChage">

        <el-icon  v-if="!collapse"><fold /></el-icon>

        <el-icon v-else><expand /></el-icon>
      </div>
      <div class="logo">{{appName}}</div>
    </div>

    <div class="headerRight">
      <!-- 我的待办 -->
      <div class="bellArea">
        <el-tooltip effect="dark"
          :content="message?`有${message}条未读消息`:`我的待办`"
          placement="bottom">
          <router-link to="/baseTabs">
          <el-icon class="el-icon-bell"><bell-filled /></el-icon>
          </router-link>
        </el-tooltip>
        <span class="badge"
          v-if="message"></span>
      </div>

      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name"
        trigger="click"
        @command="handleCommand">
        <span class="el-dropdown-link">
          <div class="userAvator">
            <img src="/static/images/avator.png" />
            {{userName}}
            <el-icon>
              <caret-bottom />
            </el-icon>
          </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <a href="https://github.com/lin-xin/vue-manage-system"
              target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item command="user">个人中心</el-dropdown-item>
            <el-dropdown-item divided
              command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { CaretBottom,BellFilled,Fold,Expand } from "@element-plus/icons-vue";

// import { createNamespacedHelpers } from 'vuex'

// const { mapState, mapActions,mapMutations } = createNamespacedHelpers('some/nested/module')
export default defineComponent({
  components: { CaretBottom, BellFilled,Fold,Expand },
  setup() {
    const store = useStore();
    const collapse = computed(() => store.state.layout.collapse);
    const userName = computed(() => store.state.base.currentUserInfo.userName);
    const message = 2;
    const appName = import.meta.env.VITE_APP_NAME;

    // 侧边栏折叠
    const collapseChage = () => {
      store.commit("layout/handleCollapse", !collapse.value);
    };

    onMounted(() => {
      if (document.body.clientWidth < 1500) {
        // collapseChage();
      }
    });

    // 用户名下拉菜单选择事件
    const router = useRouter();
    const handleCommand = async (command) => {
      if (command === "loginout") {
        store.commit("base/logoutCurrentUser");
        store.commit("layout/clearTabs");
        router.replace("/login");
      } else if (command === "user") {
        router.push("/user");
      }
    };

    return {
      appName,
      userName,
      message,
      collapse,
      collapseChage,
      handleCommand,
    };
  },
});
</script>
<style lang="scss" scoped>
.headerContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  font-size: 22px;
  color: #fff;
  background-color: #242f42;
  .headerLeft {
    display: flex;
    .collapseSilderBtn {
      padding: 0 20px;
      cursor: pointer;
    }
    .logo {
      width: 230px;
    }
  }
  .headerRight {
    display: flex;
    padding-right: 50px;
    align-items: center;
    .bellArea {
      position: relative;
      .el-icon-bell {
        color: #fff;
      }
      .badge {
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
      }
    }
    .userAvator {
      color: #fff;
      cursor: pointer;
      img {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        margin-left: 20px;
      }
    }
  }
}
// .header .logo {
//     float: left;
//     width: 250px;
//     line-height: 70px;
// }
// .header-right {
//     float: right;
//     padding-right: 50px;
// }
// .header-user-con {
//     display: flex;
//     height: 70px;
//     align-items: center;
// }
// .btn-fullscreen {
//     transform: rotate(45deg);
//     margin-right: 5px;
//     font-size: 24px;
// }
// .btn-bell,
// .btn-fullscreen {
//     position: relative;
//     width: 30px;
//     height: 30px;
//     text-align: center;
//     border-radius: 15px;
//     cursor: pointer;
// }
// .btn-bell-badge {
//     position: absolute;
//     right: 0;
//     top: -2px;
//     width: 8px;
//     height: 8px;
//     border-radius: 4px;
//     background: #f56c6c;
//     color: #fff;
// }
// .btn-bell .el-icon-bell {
//     color: #fff;
// }
// .user-name {
//     margin-left: 10px;
// }
// .user-avator {
//     margin-left: 20px;
// }
// .user-avator img {
//     display: block;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
// }
// .el-dropdown-link {
//     color: #fff;
//     cursor: pointer;
// }
// .el-dropdown-menu__item {
//     text-align: center;
// }
</style>
