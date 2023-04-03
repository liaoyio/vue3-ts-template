import { RouteRecordRaw } from "vue-router";
import Home from "@/views/index.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	}
] as RouteRecordRaw[];

export default routes;
