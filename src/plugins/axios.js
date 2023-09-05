import axios from 'axios'

/**
 * 请求拦截器
 */
axios.interceptors.request.use((config) => {
    return config
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use((response) => {
    return response.data
})

/**
 * 接口请求方法
 */
const request = (method, option) => {
    return axios({
        method: method,
        url: option.url,
        params: option.params,
        data: option.data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-csrf-token': localStorage.getItem('token')
        }
    })
}

export default {
    get: (option) => request('get', option),
    post: (option) => request('post', option),
    put: (option) => request('put', option)
}
