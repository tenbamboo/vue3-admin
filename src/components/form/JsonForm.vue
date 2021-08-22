<script>
import { defineComponent ,h} from "vue";
export default defineComponent({
  name: "DJsonForm",
  render() {
    return h(
      'h1' ,
      {title:'hello Would',text:'123123'}, // props/attributes
    )
  }
//   props: {
//     pager: {
//       type: Object,
//       default: () => {
//         return {
//           pageNo: 1,
//           pageSize: 10,
//           total: 0,
//         };
//       },
//     },
//     showPager: {
//       type: Boolean,
//       default: true,
//     },
//   },
});
</script>
