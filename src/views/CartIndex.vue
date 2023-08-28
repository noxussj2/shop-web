<template>
    <div class="cart-index">
        <div class="index__banner">
            <h4>Cart</h4>
            <BreadcrumbNav :path="path" />
        </div>

        <div class="index__products">
            <div class="products__table">
                <table>
                    <thead>
                        <th style="width: 30%">Product</th>
                        <th style="width: 20%">Price</th>
                        <th style="width: 15%">Quantity</th>
                        <th style="width: 30%">Subtotal</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img class="icon-photo" src="@/assets/cart-index/car1.png" /> Asgaard sofa</td>
                            <td>Rs. 250,000.00</td>
                            <td><el-input v-model="input" /></td>
                            <td class="tr__total">
                                <span>Rs. 250,000.00</span>
                                <img class="icon-del" src="@/assets/cart-index/icon-del.png" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="products__totals">
                <h5>Cart Totals</h5>

                <div class="totals__row">
                    <span>Subtotal</span>
                    <p>Rs. 250,000.00</p>
                </div>

                <div class="totals__row">
                    <span>Total</span>
                    <p class="total">Rs. 250,000.00</p>
                </div>

                <button>Check Out</button>
            </div>
        </div>

        <FooterFuniro />
    </div>
</template>

<script>
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'
import FooterFuniro from '@/components/FooterFuniro.vue'

export default {
    components: { BreadcrumbNav, FooterFuniro },
    data() {
        return {
            input: 1,
            path: [
                { name: 'Home', path: '/homeIndex' },
                { name: 'Cart', path: '/cartIndex' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-index {
    display: flex;
    flex-direction: column;
    align-items: center;

    .index__banner {
        width: 100%;
        height: 316px;
        background-image: url('@/assets/shop/banner.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
            color: #000;
            font-size: 48px;
            line-height: 72px;
        }

        h5 {
            margin-top: 2px;
            color: #000;
            font-size: 16px;
            line-height: 24px;
            display: flex;
            align-items: center;

            img {
                margin: 0 6px;
                width: 20px;
                height: 20px;
            }

            span:first-of-type {
                font-weight: bold;
            }

            span:last-of-type {
                font-weight: normal;
            }
        }
    }

    .index__products {
        margin-top: 70px;
        padding: 0 102px;
        width: 100%;
        display: flex;

        .products__table {
            flex-grow: 1;
            width: 0;

            table {
                border-spacing: 0;

                thead {
                    th {
                        padding-left: 40px;
                        height: 55px;
                        color: #000;
                        font-size: 16px;
                        background-color: #f9f1e7;
                        text-align: left;
                    }
                }

                tbody:before {
                    content: '';
                    display: block;
                    height: 55px;
                }

                tbody {
                    tr {
                        height: 95px;
                        vertical-align: middle;

                        td {
                            padding-left: 40px;
                            color: #9f9f9f;
                        }

                        .tr__total {
                            color: #000;

                            span {
                                line-height: 16px;
                                display: inline-block;
                                vertical-align: middle;
                            }
                        }

                        .icon-photo {
                            margin-right: 34px;
                            width: 105px;
                            height: 95px;
                            display: inline-block;
                            vertical-align: middle;
                        }

                        .icon-del {
                            margin-left: 50px;
                            width: 28px;
                            height: 28px;
                            display: inline-block;
                            vertical-align: middle;
                            cursor: pointer;
                        }

                        .el-input {
                            width: 64px;

                            :deep(.el-input__inner) {
                                padding: 0;
                                height: 32px;
                                line-height: 32px;
                                border-radius: 5px;
                                text-align: center;
                                border: 1px solid #9f9f9f;
                            }
                        }
                    }
                }
            }
        }

        .products__totals {
            margin-left: 30px;
            padding: 15px 75px 0;
            width: 393px;
            height: 390px;
            background: #f9f1e7;
            display: flex;
            flex-direction: column;
            align-items: center;

            h5 {
                margin-bottom: 60px;
                color: #000;
                font-size: 32px;
                line-height: 48px;
            }

            .totals__row {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                span {
                    color: #000;
                    font-size: 16px;
                    line-height: 24px;
                }

                p {
                    color: #9f9f9f;
                    font-size: 16px;
                    line-height: 24px;
                }

                p.total {
                    color: #b88e2f;
                    font-size: 20px;
                    line-height: 30px;
                }
            }

            .totals__row + .totals__row {
                margin-top: 30px;
            }

            button {
                margin-top: 42px;
                width: 222px;
                height: 58px;
                border-radius: 15px;
                background-color: transparent;
                border: 1px solid #000;
                cursor: pointer;
            }
        }
    }
}
</style>
