import mitt from "mitt";
const mittBus = mitt();
export default mittBus;

/* import mittBus from "@/utils/mittBus";
const openDrawer = () => {
	mittBus.emit("openThemeDrawer");
}; */
// mittBus.on("openThemeDrawer", () => (drawerVisible.value = true));
