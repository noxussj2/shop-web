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
    },
    {
        path: '/cartIndex',
        component: () => import('../views/CartIndex.vue')
    }
]

export { routes }
