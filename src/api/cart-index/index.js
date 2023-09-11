import request from '@/plugins/axios.js'

/**
 * 封面图 Banners
 */
export const IBanners = (params) => {
    return request.get({ url: '/api/v1/banners', params }, async (res) => {
        return res
    })
}
