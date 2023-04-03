import { DirectiveBinding } from "vue";

interface ElType extends HTMLElement {
	copyData: string | number;
	__handleClick__: any;
}

const copy = {
	mounted(el: ElType, binding: DirectiveBinding) {
		// 双击触发复制
		if (binding.modifiers.dblclick) {
			el.addEventListener("dblclick", () => handleCopyClick(el.innerText));
		}
		// 单击触发复制
		else {
			el.addEventListener("click", () => handleCopyClick(el.innerText));
		}
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};
function handleCopyClick(e: string) {
	const input = document.createElement("input");
	console.log(e);
	input.value = e;
	document.body.appendChild(input);
	input.select();
	document.execCommand("Copy");
	document.body.removeChild(input);
	ElMessage({
		message: "复制成功",
		type: "success"
	});
}
export default copy;
