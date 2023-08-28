import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        car: {
            namespaced: true,
            state: {
                show: true
            },
            mutations: {
                showCar(state, payload) {
                    state.show = payload
                }
            }
        }
    }
})

export default store
