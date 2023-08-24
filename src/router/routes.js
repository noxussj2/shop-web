const routes = [
    {
        path: '/',
        redirect: '/homeIndex'
    },
    {
        path: '/homeIndex',
        component: () => import('../views/HomeIndex.vue')
    },
    {
        path: '/shopIndex',
        component: () => import('../views/ShopIndex.vue')
    },
    {
        path: '/shopDetail',
        component: () => import('../views/ShopDetail.vue')
    }
]

export { routes }
