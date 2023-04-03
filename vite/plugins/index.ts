import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { Plugin } from "vite";
import autoImport from "./autoImport";
import buildPlugin from "./base";
import { setupMockPlugin } from "./mock";

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
	const plugins: Plugin[] = [vue(), vueJsx()];
	plugins.push(setupMockPlugin(isBuild));
	autoImport(plugins);
	buildPlugin(plugins, env);
	return plugins;
}
