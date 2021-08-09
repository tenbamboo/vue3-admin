<template>
  <div class="draggerTodoContainer">
    <el-alert type="success"
      style="margin-bottom: 20px;">
      基于：<el-link href="https://github.com/SortableJS/vue.draggable.next"
        type="primary"
        target="_blank">vue.draggable.next</el-link>
    </el-alert>
    <el-row>
      <el-col :span="12">
        <h3>Draggable 1</h3>
        <draggable :list="list1"
          v-bind="dragOptions"
          class="dragList"
          @change="draggerChange">
          <template #item="{ element, index }">
            <div class="item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </el-col>
      <el-col :span="12">
        <h3>Draggable 2</h3>
        <draggable :list="list2"
          v-bind="dragOptions"
          class="dragList"
          @change="draggerChange">
          <template #item="{ element, index }">
            <div class="item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import draggable from "vuedraggable";
// import { ElMessage } from "element-plus";
export default defineComponent({
  components: {
    draggable,
  },
  setup() {
    const list1 = ref([
      { name: "John", id: 1 },
      { name: "Joao", id: 2 },
      { name: "Jean", id: 3 },
      { name: "Gerard", id: 4 },
    ]);
    const list2 = ref([
      { name: "Juan", id: 5 },
      { name: "Edgard", id: 6 },
      { name: "Johnson", id: 7 },
    ]);

    const dragOptions = {
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost",
      itemKey: "name",
    };
    const draggerChange = (e) => {
      console.log(e);
    };
    return {
      list1,
      list2,
      draggerChange,
      dragOptions,
    };
  },
});
</script>

<style lang="scss" scoped>
.draggerTodoContainer {
  .dragList {
    margin: 10px;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
    .item {
      padding: 12px;
      border-bottom: 1px solid #e3e3e3;
      cursor: move;
    }
    .ghost {
      opacity: 0.5;
      background: #d3d3d3;
    }
  }
}
</style>