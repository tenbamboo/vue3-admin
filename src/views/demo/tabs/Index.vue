<template>
  <div class="tabsContainer">

    <el-tabs>

      <el-tab-pane>
        <template #label>
          <el-badge is-dot
            type="danger"
            :hidden="isTipByProcess">我的待办</el-badge>
          <span></span>
        </template>
        <process-table :data="processList"
          btnLabel="已办"
          @operClick="handlerOperClick" />
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <el-badge is-dot
            type="danger"
            :hidden="isTipByRead">我的待阅</el-badge>
        </template>
        <process-table :data="readList"
          btnLabel="已阅"
          @operClick="handlerOperClick" />
      </el-tab-pane>

      <el-tab-pane label="我的已办">
        <process-table :data="processList"
          :isProcess="false" />
      </el-tab-pane>

      <el-tab-pane label="我的已阅">
        <process-table :data="readDoneList"
          :isProcess="false" />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>


<script>
import ProcessTable from "./components/ProcessTable.vue";
import { ref, defineComponent } from "vue";
import { fetchProcessData, fetchReadData } from "@/api/mock.js";
import { ElMessageBox, ElNotification } from "element-plus";

export default defineComponent({
  name: "BaseTabs",
  components: { ProcessTable },
  setup() {
    const processList = ref([]);
    const processDoneList = ref([]);
    const readList = ref([]);
    const readDoneList = ref([]);
    const isTipByRead = ref(true);
    const isTipByProcess = ref(true);

    fetchProcessData().then((res) => {
      processList.value = res.list;
      isTipByProcess.value = !res.isTip;
      processDoneList.value = res.list;
    });

    fetchReadData().then((res) => {
      readList.value = res.list;
      isTipByRead.value = !res.isTip;
      readDoneList.value = res.list;
    });

    const handlerOperClick = async (row) => {
      await ElMessageBox.confirm("是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      });

      ElNotification({
        title: "提示",
        message: "操作成功",
        type: "success",
      });
    };

    return {
      isTipByProcess,
      isTipByRead,
      processList,
      processDoneList,
      readList,
      readDoneList,
      handlerOperClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.tabsContainer {
  :deep .el-badge__content.is-fixed.is-dot {
    top: 8px;
  }
}
</style>