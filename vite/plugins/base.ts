import { PluginOption } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import importToCDN from "vite-plugin-cdn-import";

export default function buildPlugin(plugins: PluginOption[], env: ImportMetaEnv) {
	plugins.push(
		createHtmlPlugin({
			inject: {
				data: {
					title: env.VITE_GLOB_APP_TITLE
				}
			}
		}),
		// * 是否生成包预览(分析依赖包大小,方便做优化处理)
		env.VITE_REPORT && visualizer()
	);
	// * gzip compress
	env.VITE_BUILD_GZIP &&
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: "gzip",
			ext: ".gz"
		}),
		// * cdn 引入（vue按需引入会导致依赖vue的插件出现问题(列如:pinia/vuex)）
		importToCDN({
			modules: []
		});
}
