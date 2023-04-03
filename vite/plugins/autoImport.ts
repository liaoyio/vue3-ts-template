import { PluginOption } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconResolver from "unplugin-icons/resolver";
import { resolve } from "path";

export default function autoImport(plugins: PluginOption[]) {
	plugins.push(
		AutoImport({
			resolvers: [ElementPlusResolver({ importStyle: "sass" })],
			// imports: ["vue", "vue-router"],
			//为true时在项目根目录自动创建
			dts: "types/auto-imports.d.ts"
		}),
		Components({
			resolvers: [ElementPlusResolver(), IconResolver()],
			// dirs: ["src/components"],
			//组件名称包含目录，防止同名组件冲突
			// directoryAsNamespace: true,
			//指定类型声明文件，为true时在项目根目录创建
			dts: "types/components.d.ts"
		}),
		// * 使用 svg 图标
		Icons({ autoInstall: true }),
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), "src/assets/svg")],
			symbolId: "icon-[name]"
		})
	);
}
