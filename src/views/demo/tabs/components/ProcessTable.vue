<template>
  <div>
    <d-base-table :show-header="false"
      :border="false"
      :data="data">

      <el-table-column prop="taskName"
        label="名称">
        <template #default="{row}">
          <el-link type="primary"
            @click="handleTitleClick(row)">{{row.taskName}}}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="submitPerson"
        label="提交人"
        width="180">
      </el-table-column>
      <el-table-column prop="submitDate"
        label="提交时间"
        width="180">
      </el-table-column>
      <el-table-column prop="oper"
        label="操作"
        width="180"
        v-if="isProcess">
        <template #default="scope">
          <el-button @click="handleOperClick(scope.row)">标记{{btnLabel}}</el-button>
        </template>
      </el-table-column>
    </d-base-table>

  </div>
</template>


<script>
import DBaseTable from "@/components/table/BaseTable.vue";
import { toRefs, defineComponent } from "vue";
// import { ElMessage } from "element-plus";
export default defineComponent({
  components: {
    DBaseTable,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
    isProcess: {
      type: Boolean,
      default: true,
    },
    btnLabel: {
      type: String,
      default: "",
    },
  },
  emits: {
    operClick: null,
    titleClick:null,
  },
  setup(props, { emit }) {
    const handleOperClick = (row) => {
      emit("operClick", row);
    };
     const handleTitleClick = (row) => {
      emit("titleClick", row);
    };
    return {
      ...toRefs(props),
      handleOperClick,
      handleTitleClick
    };
  },
});
</script>