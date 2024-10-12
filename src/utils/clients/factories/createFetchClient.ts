import { Params, request } from "../../helpers/request";

export function createFetchClient<T>(basePath: string, baseParams: Params = {}, baseOptions?: RequestInit) {
	return { 
		async get(path: string, params: Params = {}, options: Omit<RequestInit, 'method'> = {}) {
			return request<T>(basePath + path, {...baseParams, ...params }, {...baseOptions, ...options, method: 'GET'});
		},

		async post(path: string, params: Params = {}, options: Omit<RequestInit, 'method'> = {}) {
			return request<T>(basePath + path, {...baseParams, ...params }, {...baseOptions, ...options, method: 'POST'});
		},

		async put(path: string, params: Params = {}, options: Omit<RequestInit, 'method'> = {}) {
			return request<T>(basePath + path, {...baseParams, ...params }, {...baseOptions, ...options, method: 'PUT'});
		},

		async patch(path: string, params: Params = {}, options: Omit<RequestInit, 'method'> = {}) {
			return request<T>(basePath + path, {...baseParams, ...params }, {...baseOptions, ...options, method: 'PATCH'});
		},

		async delete(path: string, params: Params = {}, options: Omit<RequestInit, 'method'> = {}) {
			return request<T>(basePath + path, {...baseParams, ...params }, {...baseOptions, ...options, method: 'DELETE'});
		} 
	};
}