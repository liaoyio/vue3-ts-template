import { App } from "vue";

import copy from "./copy";
import debounce from "./debounce";
import throttle from "./throttle";

const directivesList: any = { copy, debounce, throttle };

/* 	注册所有自定义指令 */
const directives = {
	install: function (app: App<Element>) {
		Object.keys(directivesList).forEach((key) => {
			app.directive(key, directivesList[key]);
		});
	}
};

export default directives;
