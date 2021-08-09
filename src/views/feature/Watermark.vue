<template>
  <div>
    <el-button @click="setWatermark('Hello Would')">设置全局水印</el-button>
    <el-button @click="clearWatermark">清除全局水印</el-button>
  </div>
</template>

<script>
import { useWatermark } from "@/hooks/watermark/index";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const { setWatermark, clearWatermark } = useWatermark();
    return {
      setWatermark,
      clearWatermark,
    };
  },
});
</script>