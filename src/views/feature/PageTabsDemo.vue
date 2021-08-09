<template>
  <div>
    <el-row>
      <el-button @click="closeAll">关闭所有</el-button>
      <el-button @click="closeOther">关闭其他</el-button>
      <el-button @click="closeTabs">关闭当前页</el-button>
      <el-button @click="refreshPage">刷新当前页</el-button>

    </el-row>
    <el-row>
      <el-input v-model="title"
        placeholder="请输入标题">
        <template #append>
          <el-button @click="setTabTitle">修改标题</el-button>
        </template>
      </el-input>

    </el-row>

  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useTabs } from "@/hooks/pageTabs/index";
// import { closeAll, closeOther, closeTags } from "@/hooks/pageTags/index";
export default defineComponent({
  setup() {
    const {
      closeAll,
      closeOther,
      closeTabs,
      setTitle,
      refreshPage,
    } = useTabs();
    const title = ref("");

    function setTabTitle() {
      if (title.value) {
        setTitle(title.value);
      }
    }
    onMounted(() => {
      console.log("onMounted");
    });
    console.log("onCreated");
    return {
      closeAll,
      closeOther,
      closeTabs,
      setTabTitle,
      refreshPage,
      title,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 30px;
}
</style>