import request from '@/utils/request'

const name = "admin"

export function getList() {
	return request({
		url    : `/${name}`,
		method : 'get'
	})
}

export function get(_id) {
	return request({
		url    : `/${name}/select/${_id}`,
		method : 'get'
	})
}

export function register(data) {
	return request({
		url: `/${name}/register`,
		method: 'post',
		data
	})
}

export function login(data) {
	console.log('data', data)
	return request({
		url: `/${name}/login`,
		method : 'post',
		data
	})
}
export function update(data) {
    return request({
		url    : `/${name}`,
		method : 'put',
        data
    })
}

export function del(params) {
	return request({
		url    : `/${name}`,
		method : 'delete',
        params
    })
}