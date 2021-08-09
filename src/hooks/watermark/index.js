import { getCurrentInstance, onBeforeUnmount, shallowRef, unref, ref } from 'vue';
import { addResizeListener, removeResizeListener } from '@/utils/event';

const domSymbol = Symbol('watermark-dom');



export function useWatermark() {

    const watermarkEl = shallowRef();
    const id = domSymbol.toString();
    const appendEl = ref(document.body)
    let locked = false;

    const setWatermark = (str) => {
        createWatermark(str);
        addResizeListener(document.documentElement, func);
        const instance = getCurrentInstance();
        if (instance) {
            onBeforeUnmount(() => {
                clearWatermark();
            });
        }
    }
    const clearWatermark = () => {
        const domId = unref(watermarkEl);
        watermarkEl.value = undefined;
        const el = unref(appendEl);
        if (!el) return;
        domId && el.removeChild(domId);
        removeResizeListener(el, func);
    };



    const useRafThrottle = (fn) => {

        return (...args) => {
            if (locked) return;
            locked = true;
            window.requestAnimationFrame(() => {
                fn.apply(this, args);
                locked = false;
            });
        };
    }

    const createWatermark = (str) => {
        if (unref(watermarkEl)) {
            updateWatermark({ str });
            return id;
        }
        const div = document.createElement('div');
        watermarkEl.value = div;
        div.id = id;
        div.style.pointerEvents = 'none';
        div.style.top = '0px';
        div.style.left = '0px';
        div.style.position = 'absolute';
        div.style.zIndex = '100000';
        const el = unref(appendEl);
        if (!el) return id;
        const { clientHeight: height, clientWidth: width } = el;
        updateWatermark({ str, width, height });
        el.appendChild(div);
        return id;
    };

    const updateWatermark = (options) => {
        const el = unref(watermarkEl);
        if (!el) return;
        if (options.width) {
            el.style.width = `${options.width}px`;
        }
        if (options.height) {
            el.style.height = `${options.height}px`;
        }
        if (options.str) {
            el.style.background = `url(${createBase64(options.str)}) left top repeat`;
        }
    }


    const createBase64 = (str) => {
        const can = document.createElement('canvas');
        const width = 300;
        const height = 240;
        Object.assign(can, { width, height });

        const cans = can.getContext('2d');
        if (cans) {
            cans.rotate((-20 * Math.PI) / 120);
            cans.font = '15px Vedana';
            cans.fillStyle = 'rgba(0, 0, 0, 0.15)';
            cans.textAlign = 'left';
            cans.textBaseline = 'middle';
            cans.fillText(str, width / 20, height);
        }
        return can.toDataURL('image/png');
    }





    const func = useRafThrottle(function () {
        const el = unref(appendEl);
        if (!el) return;
        const { clientHeight: height, clientWidth: width } = el;
        updateWatermark({ height, width });
    });

    return {
        setWatermark,
        clearWatermark
    }
}