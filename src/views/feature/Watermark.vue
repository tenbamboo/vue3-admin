<template>
  <div>
    <el-button @click="setWatermark('Hello Would')">设置全局水印</el-button>
    <el-button @click="clearWatermark">清除全局水印</el-button>
  </div>
</template>

<script>
import { setWatermark,clearWatermark } from "@/utils/watermark/index";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      setWatermark,
      clearWatermark
    };
  },
});
</script>