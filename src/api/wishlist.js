import request from '@/utils/request'

const name = "wishlist"

export function get(_id) {
	return request({
		url    : `/${name}/select/${_id}`,
		method : 'get'
	})
}

export function getList() {
	return request({
		url    : `/${name}`,
		method : 'get'
	})
}
export function put(data) {
	return request({
		url    : `/${name}`,
		method : 'put',
		data
	})
}

export function del(_id) {
	return request({
		url    : `/${name}`,
		method : 'delete',
		params : {_id}
	})
}