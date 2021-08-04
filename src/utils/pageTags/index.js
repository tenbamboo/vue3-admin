import { useStore } from "vuex";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";


export const closeAll = () => {
    const store = useStore();
    const router = useRouter();
    store.commit("layout/clearTags");
    router.push("/");
}
export default {
    closeAll
}