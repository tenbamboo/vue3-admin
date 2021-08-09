import { useRouter } from 'vue-router';
import { unref } from 'vue';

export const useRedo = (_router) => {
    let router;
    if (!_router) {
        router = useRouter();
    }
    const { push, currentRoute } = _router || router;
    const { query, params } = currentRoute.value;
    return new Promise((resolve) => {
        return push({
            path: '/redirect' + unref(currentRoute).fullPath,
            query,
            params,
        }).then(() => resolve(true));

    })
};

export default {
    useRedo
}