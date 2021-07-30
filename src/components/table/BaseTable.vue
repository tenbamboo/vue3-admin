<template>
    <el-table border
      v-bind="$attrs"
      v-on="$attrs"
      class="baseTable">
      <slot></slot>
    </el-table>

    <div class="pagination"
      v-if="showPager">
      <el-pagination background
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[ 10,20, 40, 60, 100]"
        :current-page="props.pager.pageNo"
        :page-size="props.pager.pageSize"
        :total="props.pager.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"></el-pagination>
    </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DBaseTable",
  props: {
    pager: {
      type: Object,
      default: () => {
        return {
          pageNo: 1,
          pageSize: 10,
          total: 0,
        };
      },
    },
    showPager: {
      type: Boolean,
      default: true,
    },
  },
  emits: {
    pagerChange: null,
  },
  setup(props, { emit }) {
    const handleSizeChange = (val) => {
      emit("pagerChange", props.pager.pageNo, val);
    };
    const handleCurrentChange = (val) => {
      emit("pagerChange", val, props.pager.pageSize);
    };

    return {
      handleSizeChange,
      handleCurrentChange,
      props,
    };
  },
});
</script>
<style lang="scss" scoped>
.baseTable {
  :deep th {
    background-color: #f5f7fa;
  }
}
.pagination {
  margin-top: 10px;
}
</style>
