import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cart: {
            namespaced: true,
            state: {
                show: false,
                items: []
            },
            mutations: {
                /**
                 * 展示购物车
                 */
                showCart(state, payload) {
                    state.show = payload
                },

                /**
                 * 添加商品到购物车
                 */
                addCart(state, payload) {
                    const findIndex = state.items.findIndex((item) => item.productId === payload.productId)
                    if (findIndex > -1) {
                        return (state.items[findIndex].num += payload.num)
                    }

                    state.items.push(payload)
                }
            }
        }
    }
})

export default store
