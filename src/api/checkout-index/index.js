import request from '@/plugins/axios.js'

/**
 * 提交订单 Submit Order
 */
export const ISubmitOrder = (data) => {
    return request.post({ url: '/api/v1/order', data }, async (res) => {
        return res
    })
}
