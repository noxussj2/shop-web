import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false

import './styles/reset.scss'
import './styles/common.scss'
import './styles/element-ui.scss'

import { Drawer } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/drawer.css'
import 'element-ui/lib/theme-chalk/dialog.css'

Vue.use(Drawer)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
