import request from '@/plugins/axios.js'

/**
 * 获取鉴权凭证
 * 因为 post 请求的数据是重要的，所以需要鉴权
 * 需要在请求头中添加 X-CSRF-TOKEN
 */
export const IToken = (params) => {
    return request.get({ url: '/api/v1/csrf', params }, async (res) => {
        return res
    })
}
