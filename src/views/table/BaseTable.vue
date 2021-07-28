<template>
  <div>
    <d-base-table :data="tableList"
      :pager="pager"
      @pagerChange="pagerChange">
      <el-table-column prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column prop="address"
        label="地址">
      </el-table-column>
    </d-base-table>

    <!-- <div class="pagination">
    <el-pagination background
      layout="total, prev, pager, next"
      :current-page="query.pageIndex"
      :page-size="query.pageSize"
      :total="pageTotal"
      @current-change="handlePageChange"></el-pagination>
  </div> -->
  </div>
</template>
<script>
import DBaseTable from "@/components/table/BaseTable.vue";
import { fetchTableData } from "@/api/mock";
import { ref, reactive ,defineComponent} from "vue";

export default defineComponent({
  components: {
    DBaseTable,
  },
  setup() {
    const tableList = ref([]);
    const pager = reactive({
      pageSize: 10,
      pageNo: 1,
      total: 0,
    });
    // 获取表格数据
    const getData = () => {
      fetchTableData().then((res) => {
        tableList.value = res.list;
        pager.total = res.pageTotal;
      });
    };
    getData();

    const pagerChange = (pageNo, pageSize) => {
      pager.pageNo = pageNo;
      pager.pageSize = pageSize;
    };

    return {
      tableList,
      pager,
      pagerChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.baseTableHeader {
}
</style>
