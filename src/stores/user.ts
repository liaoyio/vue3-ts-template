import { defineStore } from "pinia";
import { IUserInfo, userInfo } from "@/api/auth";


type User = {
	info: null | IUserInfo;
};

export const userStore = defineStore({
	id: "user",
	persist: {
		key: "user",
		storage: localStorage
	},
	state: (): User => ({
		info: {} as null | IUserInfo
	}),
	actions: {
		async getUserInfo() {
			const res = await userInfo();
			this.info = res;
		}
	}
});
