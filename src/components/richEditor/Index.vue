<template>
  <div ref='editor'></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, watch, defineComponent } from "vue";
import WangEditor from "wangeditor";

export default defineComponent({
  name: "baseRichEditor",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, content) {
    const editor = ref();
    const innerValue = ref("");
    let instance;
    watch(
      () => props.modelValue,
      (val) => {
        if (val !== innerValue.value) {
          setInnerVal(val);
        }
      }
    );
    onMounted(() => {
      instance = new WangEditor(editor.value);
      Object.assign(instance.config, {
        uploadImgServer: "/test",
        onchange(newHtml) {
          innerValue.value = newHtml;
          content.emit("update:modelValue", newHtml);
        },
      });
      instance.create();
      setInnerVal(props.modelValue);
    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });

    const setInnerVal = (val) => {
      innerValue.value = val;
      instance.txt.html(val);
    };
    return {
      editor,
    };
  },
});
</script>

<style>
</style>