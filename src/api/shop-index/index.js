import request from '@/plugins/axios.js'

/**
 * 封面图 Banners
 */
export const IBanners = (params) => {
    return request.get({ url: '/api/v1/banners', params }, async (res) => {
        return res
    })
}

/**
 * 商品列表 Products List
 */
export const IProductsList = (params) => {
    return request.get({ url: '/api/v1/products', params }, async (res) => {
        return res
    })
}

/**
 * 商品详情 Products Detail
 */
export const IProductsDetail = (params) => {
    return request.get({ url: '/api/v1/products/' + params.productId }, async (res) => {
        return res
    })
}
