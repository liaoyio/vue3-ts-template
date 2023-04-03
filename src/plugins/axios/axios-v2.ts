import axios, { AxiosInstance } from "axios";
import { IRequestConfig } from "#/axios";
import { ElLoading, ElMessage } from "element-plus";
import store from "@/utils/store";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";

// 引入Elmessage和Elloading的css样式文件
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";

const DEFAULT_LOADING = true;
class Request {
	private instance: AxiosInstance;
	private showLoading: boolean;
	private loading?: LoadingInstance;

	constructor(config: IRequestConfig) {
		// 默认不加载loading
		this.showLoading = config.showLoading ?? DEFAULT_LOADING;
		this.instance = axios.create(config);
		this.interceptors();
	}

	private interceptors() {
		this.interceptorsRequest();
		this.interceptorsResponse();
	}

	private interceptorsRequest() {
		this.instance.interceptors.request.use(
			(config) => {
				config.headers = {
					Authorization: "Bearer " + store.get("token")
				};
				/* -------------- 全局请求拦截器 success --------- */
				console.log("------GlobalRequest success");
				if (this.showLoading) {
					console.log("loadding.....");
					// 添加加载loading
					this.loading = ElLoading.service({
						lock: true,
						text: "加载中...",
						background: "rgba(255, 255, 255, 0.7)"
					});
				}
				return config;
			},
			(error) => {
				/* --------------- 全局请求拦截器 err ------------ */
				console.log("------GlobalRequest err");
				this.loading?.close();
				return Promise.reject(error);
			}
		);
	}
	private interceptorsResponse() {
		this.instance.interceptors.response.use(
			(response) => {
				/* --------------- 全局响应拦截器 success ------------ */
				console.log("------GlobalResponse success");
				this.loading?.close();
				return response;
			},
			(error) => {
				/* --------------- 全局响应拦截器 err ------------ */
				switch (error.response.status) {
					case 404:
						ElMessage({
							message: "404错误~",
							type: "error",
							showClose: true
						});
						break;
					case 401:
						store.remove("token");
						// router.push({ name: "login" });
						break;
				}
				this.loading?.close();
				return Promise.reject(error);
			}
		);
	}

	public async request<T, D = T>(config: IRequestConfig): Promise<D> {
		return new Promise(async (resolve, reject) => {
			try {
				// 定制该请求是否加loading。当为传入该参数时，默认为true
				if (config.showLoading === false) {
					this.showLoading = false;
				}
				const response = await this.instance.request<D>(config);
				resolve(response.data);
			} catch (error) {
				reject(error);
			}
			/* 避免影响下一次请求设置的 showLoading */
			this.showLoading = DEFAULT_LOADING;
		});
	}
}

export default Request;
