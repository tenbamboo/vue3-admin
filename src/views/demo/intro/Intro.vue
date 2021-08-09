<template>
  <div>
    <el-alert type="success"
      style="margin-bottom: 20px;">
      引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。基于：<el-link href="https://github.com/usablica/intro.js"
        type="primary"
        target="_blank">intro.js</el-link>
    </el-alert>
    <el-button @click="startIntro">开始</el-button>

  </div>
</template>

<script>
import { defineComponent } from "vue";
import intro from "intro.js";
import "intro.js/introjs.css";
export default defineComponent({
  setup() {
    const startIntro = () => {
      intro()
        .setOptions({
          nextLabel: "→",
          prevLabel: "←",
          doneLabel: "完成",
          exitOnOverlayClick: false,
          steps: [
            {
              title: "你好~",
              intro: "Hello World! 👋",
            },
            {
              title: "收缩菜单按钮",
              element: document.querySelector(`.collapseSilderBtn`),
              intro: "点击按钮可以随时收缩展开菜单",
            },
            {
              title: "未读消息",
              element: document.querySelector(`.bellArea`),
              intro: "点击查看未读消息",
            },
            {
              title: "其他操作",
              element: document.querySelector(`.userAvator`),
              intro: "点击这里获取其他用户相关操作",
            },
            {
              title: "Tabs快捷操作",
              element: document.querySelector(`.pageTabsContainer .operArea`),
              intro: "点击这里可以批量操作Tabs页",
            },
          ],
        })
        .start();
    };

    return {
      startIntro,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 30px;
}
</style>