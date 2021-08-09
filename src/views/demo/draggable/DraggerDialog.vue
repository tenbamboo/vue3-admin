<template>
  <div>
    <el-button type="text"
      @click="dialogVisible = true">点击打开 可拖拽的Dialog</el-button>
    <div v-dialogDrag>
      <el-dialog title="提示"
        v-model="dialogVisible"
        width="30%">
        <span>这是一段信息，我是可以拖拽的Dialog~</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary"
              @click="dialogVisible = false">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
// import { ElMessage } from "element-plus";
export default defineComponent({
  setup() {
    const dialogVisible = ref(false);

    return {
      dialogVisible,
    };
  },
});
</script>