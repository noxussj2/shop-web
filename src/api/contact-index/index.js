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
 * 联系信息 Contact Info
 */
export const IContactInfo = (params) => {
    return request.get({ url: '/api/v1/contact', params }, async (res) => {
        return res
    })
}

/**
 * 提交表单 Submit Contact
 */
export const ISubmitContact = (data) => {
    return request.post({ url: '/api/v1/contact', data }, async (res) => {
        return res
    })
}
