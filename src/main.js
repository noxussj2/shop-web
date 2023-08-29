import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

Vue.config.productionTip = false

import './styles/reset.scss'
import './styles/common.scss'
import './styles/element-ui.scss'

import { Drawer, Input, Form, FormItem, Col, Row, Select, Option } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/drawer.css'
import 'element-ui/lib/theme-chalk/dialog.css'
import 'element-ui/lib/theme-chalk/input.css'
import 'element-ui/lib/theme-chalk/form.css'
import 'element-ui/lib/theme-chalk/form-item.css'
import 'element-ui/lib/theme-chalk/col.css'
import 'element-ui/lib/theme-chalk/row.css'
import 'element-ui/lib/theme-chalk/select.css'
import 'element-ui/lib/theme-chalk/option.css'

Vue.use(Drawer)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Select)
Vue.use(Option)

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
