import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "53da801b-c64e-4e50-953b-bcb23465e910",
	},
});

export const api = {
	auth: {
		setAuthUserData(){
			
			return instance.get('auth/me').then(response => response.data)
		},
		login(email, password, rememberMe = false, captcha = true){
			return instance.post('auth/login', {email, password, rememberMe, captcha})
		},
		logout(){
			return instance.delete('auth/login')
		}
	},
	profile: {
		getProfile(id){
			return instance.get(`profile/${id}`).then(response => response.data)
		},
		getStatus(userId){
			return instance.get('profile/status/'+userId)
		},
		updateStatus(status){
			return instance.put('profile/status', {status: status})
		}
	},
	users: {
		getUsers(currentPage, pageSize) {
			return instance
				.get(`users?page=${currentPage}&count=${pageSize}`)
				.then((response) => response.data);
		},
		follow(id) {
			return instance.post(`follow/${id}`).then((response) => response.data);
		},
		unfollow(id) {
			return instance.delete(`follow/${id}`).then((response) => response.data);
		},
	}
}