import { ESBuildOptions, BuildOptions } from "vite";

export const setEsbuild = (env: ImportMetaEnv): ESBuildOptions => ({
	pure: env.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
});

export const build: BuildOptions = {
	outDir: "dist",
	minify: "esbuild",
	chunkSizeWarningLimit: 1500,
	rollupOptions: {
		output: {
			// Static resource classification and packaging
			chunkFileNames: "assets/js/[name]-[hash].js",
			entryFileNames: "assets/js/[name]-[hash].js",
			assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
		}
	}
};
