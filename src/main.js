import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

Vue.config.productionTip = false

import './styles/reset.scss'
import './styles/common.scss'

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
