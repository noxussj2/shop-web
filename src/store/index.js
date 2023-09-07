import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        cart: {
            namespaced: true,
            state: {
                show: false,
                items: JSON.parse(localStorage.getItem('carts') || '[]')
            },
            getters: {
                /**
                 * 购物车商品总金额
                 */
                totalPrice(state) {
                    return state.items.reduce((total, item) => total + item.number * item.price, 0)
                }
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
                        return (state.items[findIndex].number += payload.number)
                    }

                    state.items.push(payload)

                    localStorage.setItem('carts', JSON.stringify(state.items))
                },

                /**
                 * 删除购物车商品
                 */
                delCart(state, payload) {
                    state.items.splice(payload, 1)

                    localStorage.setItem('carts', JSON.stringify(state.items))
                }
            }
        }
    }
})

export default store
