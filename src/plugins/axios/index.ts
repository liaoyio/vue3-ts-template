import Request from "./axios";
import { AxiosResponse, CustomParamsSerializer } from "axios";
import { stringify } from "qs";

/* 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1 */
const defaultConfig = {
	// https://dev.montplex.com
	baseURL: "/engula",
	timeout: 10000,
	showLoading: true,
	headers: {
		Accept: "application/json, text/plain, */*",
		"Content-Type": "application/json",
		"X-Requested-With": "XMLHttpRequest"
	},
	withCredentials: false,
	// 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
	paramsSerializer: {
		serialize: stringify as unknown as CustomParamsSerializer
	}
};

export const http = new Request({
	...defaultConfig,
	interceptors: {
		requestSuccessInterceptor(config) {
			// console.log("Request实例请求成功的拦截器---->");
			return config;
		},
		requestErrorInterceptor(err) {
			// console.log("Request实例请求失败的拦截器---->");
			return err;
		},
		responseSuccessInterceptor(res) {
			responseLog(res);
			// console.log("Request实例响应成功的拦截器---->");
			return res.data;
		},
		responseErrorInterceptor(err) {
			// console.log("Request实例响应失败的拦截器--->");
			console.log(err);
			return err;
		}
	}
});

/* 辅助函数 */
function responseLog(res: AxiosResponse): void {
	if (process.env.NODE_ENV === "development") {
		const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(
			Math.random() * 255
		)})`;

		const payload = res.config.method === "POST" ? res.config.data : res.config.params;

		console.log("%c┍------------------------------------------------------------------┑", `color:${randomColor};`);
		console.log("| 请求地址：", res.config.url);
		console.log("| 请求参数：", payload);
		console.log("| 返回数据：", res.data);
		console.log("%c┕------------------------------------------------------------------┙", `color:${randomColor};`);
	}
}
