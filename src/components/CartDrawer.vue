<template>
    <el-drawer :visible.sync="drawer" direction="rtl" size="417px" :with-header="false">
        <header>
            <h4>Shopping Cart</h4>
            <img src="@/assets/cart-drawer/icon-close.png" />
        </header>

        <main>
            <section v-for="(item, index) in data.items" :key="index">
                <img :src="item.images && item.images[0]" />
                <div class="section__info">
                    <h5>{{ item.name }}</h5>
                    <p>
                        <span>{{ item.number }}</span> <span>x</span> <span class="info__price">Rs. {{ item.price }}</span>
                    </p>
                </div>
                <img src="@/assets/cart-drawer/icon-del.png" class="section__del" @click="delCart(index)" />
            </section>
        </main>

        <footer>
            <div class="footer__total">
                <h5>Subtotal</h5>
                <span>Rs. {{ totalPrice }}</span>
            </div>

            <div class="footer__button-group">
                <button @click="$link('/cartIndex')">Cart</button>
                <button @click="$link('/checkoutIndex')">Checkout</button>
                <button>Comparison</button>
            </div>
        </footer>
    </el-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState({
            data: (state) => state.cart
        }),

        ...mapGetters({
            totalPrice: 'cart/totalPrice'
        }),

        subtotal() {
            return this.data.items.reduce((acc, cur) => acc + cur.price * cur.num, 0)
        },

        drawer: {
            get() {
                return this.$store.state.cart.show
            },
            set(val) {
                this.$store.commit('cart/showCart', val)
            }
        }
    },
    methods: {
        ...mapMutations({
            delCart: 'cart/delCart'
        })
    }
}
</script>

<style lang="scss" scoped>
:deep(.el-drawer) {
    height: 677px !important;

    .el-drawer__body {
        display: flex;
        flex-direction: column;

        header {
            padding-left: 30px;
            padding-right: 40px;
            height: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h4 {
                flex-grow: 1;
                width: 0;
                color: #000;
                font-size: 24px;
                border-bottom: 1px solid #ddd;
                height: 80px;
                line-height: 80px;
            }

            img {
                margin-left: 42px;
                cursor: pointer;
            }
        }

        main {
            padding: 38px 40px 20px 30px;
            height: 0;
            flex-grow: 1;

            section {
                display: flex;
                align-items: center;

                > img:first-of-type {
                    width: 105px;
                    height: 95px;
                    border-radius: 10px;
                }

                .section__info {
                    margin-left: 32px;
                    flex-grow: 1;
                    width: 0;

                    h5 {
                        font-size: 16px;
                        line-height: 22px;
                    }

                    p {
                        margin-top: 10px;
                        font-size: 16px;
                        line-height: 16px;

                        span + span {
                            margin-left: 15px;
                        }

                        .info__price {
                            color: #b88e2f;
                            font-size: 12px;
                        }
                    }
                }

                .section__del {
                    cursor: pointer;
                }
            }

            section + section {
                margin-top: 18px;
            }
        }

        footer {
            .footer__total {
                padding-left: 30px;
                padding-right: 100px;
                display: flex;
                justify-content: space-between;

                h5 {
                    font-size: 16px;
                    line-height: 22px;
                }

                span {
                    font-size: 16px;
                    line-height: 22px;
                    color: #b88e2f;
                }
            }

            .footer__button-group {
                margin-top: 20px;
                border-top: 1px solid #d9d9d9;
                height: 76px;
                display: flex;
                justify-content: center;
                align-items: center;

                button {
                    padding: 0 30px;
                    height: 30px;
                    font-size: 12px;
                    border-radius: 50px;
                    background-color: transparent;
                    border: 1px solid #000;
                    cursor: pointer;
                }

                button + button {
                    margin-left: 14px;
                }
            }
        }
    }
}
</style>
