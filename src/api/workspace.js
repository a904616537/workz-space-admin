import request from '@/utils/request'

const name = "workspace"

export function create(data) {
	return request({
		url: `/${name}`,
		method: 'post',
		data
	})
}
export function put(data) {
	return request({
		url: `/${name}`,
		method: 'put',
		data
	})
}

export function getList() {
	return request({
		url: `/${name}`,
		method : 'get'
	})
}

export function getbyId(_id) {
	return request({
		url: `/${name}/select/${_id}`,
		method : 'get'
	})
}

export function submitUpdate(data) {
	return request({
		url: `/${name}/update`,
		method : 'post',
		data
	})
}

export function onDel(_id) {
	return request({
		url: `/${name}`,
		method : 'delete',
		params : {_id}
	})
}
export function validation(data) {
	return request({
		url    : `/${name}/validation`,
		method : 'post',
        data
    })
}

export function updateList() {
	return request({
		url: `/${name}/update`,
		method : 'get'
	})
}
export function update(data) {
	return request({
		url: `/${name}/update`,
		method : 'put',
		data
	})
}
export function del(params) {
	return request({
		url: `/${name}/update`,
		method : 'delete',
		params
	})
}