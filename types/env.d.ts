/// <reference types="vite/client" />

interface ViteEnv {
	VITE_GLOB_APP_TITLE: string;
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_BUILD_GZIP: boolean;
	VITE_DROP_CONSOLE: boolean;
	VITE_REPORT: boolean;
	VITE_API_URL: string;
	VITE_NODE_ENV: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ImportMetaEnv extends ViteEnv {}

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "numeral";

declare module "vue-web-terminal";
