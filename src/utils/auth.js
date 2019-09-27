import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserKey = 'Vue_user'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUser() {
	const user = Cookies.get(UserKey);
	if(user) return JSON.parse(user);
	return {name : '', avatar : ''}
}

export function setUser(user) {
	return Cookies.set(UserKey, user)
}

export function removeUser() {
	return Cookies.remove(UserKey)
}