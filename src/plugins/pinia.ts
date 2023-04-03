import { App } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";

export default function setupPinia(app: App) {
	const pinia = createPinia();
	pinia.use(piniaPersist); // piniaPersist(持久化)
	app.use(pinia);
}
