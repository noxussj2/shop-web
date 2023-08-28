import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cart: {
            namespaced: true,
            state: {
                show: true
            },
            mutations: {
                showCart(state, payload) {
                    state.show = payload
                }
            }
        }
    }
})

export default store
