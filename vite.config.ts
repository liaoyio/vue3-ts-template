import { defineConfig, loadEnv, ConfigEnv } from "vite";
import { alias, css, getServer } from "./vite/config";
import { setEsbuild, build } from "./vite/build";
import { parseEnv } from "./vite/util";
import setupPlugins from "./vite/plugins";

// @see: https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv) => {
	const isBuild = command == "build";
	const root = process.cwd();
	const env = parseEnv(loadEnv(mode, root));
	return {
		// base: env.NODE_ENV === "production" ? "./" : "./",
		resolve: { alias },
		css,
		server: getServer(env),
		plugins: setupPlugins(isBuild, env),
		esbuild: setEsbuild(env),
		build
	};
});
