import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes.js'

Vue.use(Router)
const router = new Router({
    routes
})

export default router

/**
 * 路由跳转
 */
export const link = (path) => {
    if (router.currentRoute.path === path) return // 禁止跳转回自己
    router.push(path)
}

Vue.prototype.$link = link
