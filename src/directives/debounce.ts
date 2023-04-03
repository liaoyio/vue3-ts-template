import type { Directive, DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
	__handleClick__: () => any;
}

/**
 * v-debounce
 * 按钮防抖指令，防止同一时间多次点击按钮多次触发事件 (如：表单提交时多次点击导致多次调用后端接口)
 * 接收参数：function类型
 */
const debounce: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		if (typeof binding.value !== "function") {
			throw "callback must be a function";
		}
		let timer: NodeJS.Timeout | null = null;
		el.__handleClick__ = function () {
			if (timer) {
				clearInterval(timer);
			}
			timer = setTimeout(() => {
				binding.value();
			}, 800);
		};
		el.addEventListener("click", el.__handleClick__);
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

export default debounce;
