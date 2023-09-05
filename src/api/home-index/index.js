import request from '@/plugins/axios.js'

/**
 * 新出商品 New Product
 */
export const INewProduct = (params) => {
    return request.get({ url: '/api/v1/newProduct', params }, async (res) => {
        return res
    })
}

/**
 * 商品列表 Our Products
 */
export const IOurProducts = (params) => {
    return request.get({ url: '/api/v1/products', params }, async (res) => {
        return res
    })
}
