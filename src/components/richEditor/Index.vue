<template>
  <div ref='editor'></div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, watch,defineComponent} from "vue";
import WangEditor from "wangeditor";
export default defineComponent({
  name: "baseRichEditor",
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, content) {
    const editor = ref();
    let instance;
    watch(
      () => props.modelValue,
      (val) => {
        instance.txt.html(val);
      }
    );
    onMounted(() => {
      instance = new WangEditor(editor.value);
      Object.assign(instance.config, {
        uploadImgServer:'/test',
        onchange(newHtml) {
          content.emit("update:modelValue", newHtml);
        },
      });
      instance.create();
      instance.txt.html(props.modelValue);
    });
    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    return {
      editor,
    };
  },
});
</script>

<style>
</style>