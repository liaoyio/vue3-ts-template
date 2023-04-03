import { onBeforeMount } from "vue";
import { getLightColor, getDarkColor } from "./tool";

/**
 * @description 设置主题颜色
 * */
export const useTheme = () => {
	const color = "#67c23a";
	const isDark = false;
	const initPrimary = (val: string) => {
		// 为了兼容暗黑模式下主题颜色也正常，以下方法计算主题颜色 由深到浅 的具体颜色
		document.documentElement.style.setProperty("--el-color-primary", val);
		document.documentElement.style.setProperty("--el-component-size", "36px");
		document.documentElement.style.setProperty(
			"--el-color-primary-dark-2",
			isDark ? `${getLightColor(val, 0.2)}` : `${getDarkColor(color, 0.3)}`
		);
		// 颜色加深或变浅
		for (let i = 1; i <= 9; i++) {
			document.documentElement.style.setProperty(
				`--el-color-primary-light-${i}`,
				isDark ? `${getDarkColor(val, i / 10)}` : `${getLightColor(val, i / 10)}`
			);
		}
	};
	onBeforeMount(() => {
		initPrimary(color);
	});

	return {
		initPrimary
	};
};
