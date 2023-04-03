import { http } from "@/plugins/axios";
export interface IUserInfo {
	id: number;
	nickname: string;
	roles: string[];
	picture: string;
	email?: string;
	lastLoginTime: number;
}

/**
 * Get Login user
 */
export const userInfo = () => {
	return http.get<IUserInfo>({
		url: "/auth0/user",
		showLoading: false
	});
};
