const routes = [
    {
        path: '/',
        redirect: '/homeIndex'
    },
    {
        path: '/homeIndex',
        component: () => import('../views/HomeIndex.vue')
    }
]

export { routes }
