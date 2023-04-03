import { resolve } from "path";
import { AliasOptions, CSSOptions, ServerOptions } from "vite";

/* alias */
export const alias = {
	"@": resolve(__dirname, "../src"),
	"#": resolve(__dirname, "../types")
} as AliasOptions;

/*  css  */
export const css = {} as CSSOptions;

/* server */
export function getServer(env: ImportMetaEnv) {
	return {
		host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
		port: env.VITE_PORT,
		open: env.VITE_OPEN,
		cors: true,
		hmr: true,
		proxy: {
			"/engula": {
				target: env.VITE_API_URL,
				secure: true,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/engula/, "")
			}
		}
	} as ServerOptions;
}
