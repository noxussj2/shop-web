<template>
    <div class="cart-index">
        <div class="base__banner">
            <img :src="banners.images && banners.images[0]" />
            <h4>Checkout</h4>
            <BreadcrumbNav :path="path" />
        </div>

        <el-row :gutter="26" :style="{ marginTop: '62px' }">
            <el-col :span="12">
                <div class="index__details">
                    <h4>Billing details</h4>

                    <el-form ref="formRef" :model="form" label-position="top" :rules="formRules">
                        <el-form-item>
                            <el-row :gutter="30">
                                <el-col :span="12">
                                    <el-form-item label="First Name" prop="firstName">
                                        <el-input v-model="form.firstName" />
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="Last Name" prop="lastName">
                                        <el-input v-model="form.lastName" />
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form-item>
                        <el-form-item label="Address" prop="address">
                            <el-input v-model="form.address" />
                        </el-form-item>
                        <el-form-item label="ZIP code" prop="code">
                            <el-input v-model="form.code" />
                        </el-form-item>
                        <el-form-item label="Phone" prop="phone">
                            <el-input v-model="form.phone" />
                        </el-form-item>
                        <el-form-item label="Email address" prop="email">
                            <el-input v-model="form.email" />
                        </el-form-item>
                        <el-form-item label="Remark" prop="remark">
                            <el-input v-model="form.remark" placeholder="" />
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="index__product">
                    <div class="product__row">
                        <h5>Product</h5>
                        <h5>Subtotal</h5>
                    </div>
                    <div class="product__row" v-for="(item, index) in carts" :key="index">
                        <span>
                            <span class="row__name">{{ item.name }}</span>
                            <span class="row__x">x</span>
                            <span>{{ item.number }}</span>
                        </span>
                        <span>Rs. {{ item.price }}</span>
                    </div>
                    <div class="product__row">
                        <span>Subtotal</span>
                        <span>Rs. {{ form.totalPrice }}</span>
                    </div>
                    <div class="product__row">
                        <span>Total</span>
                        <h5 class="row__total">Rs. {{ form.totalPrice }}</h5>
                    </div>

                    <footer>
                        <ul>
                            <li class="selected">Direct Bank Transfer</li>
                            <p>
                                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until
                                the funds have cleared in our account.
                            </p>
                            <li>Direct Bank Transfer</li>
                            <li>Cash On Delivery</li>
                            <summary>
                                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other
                                purposes described in our privacy policy.
                            </summary>
                        </ul>

                        <button @click="submitForm">Place order</button>
                    </footer>
                </div>
            </el-col>
        </el-row>

        <FooterFuniro />
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { IBanners, ISubmitOrder } from '@/api/checkout-index/index.js'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'
import FooterFuniro from '@/components/FooterFuniro.vue'

export default {
    components: { BreadcrumbNav, FooterFuniro },
    data() {
        return {
            input: 1,
            path: [
                { name: 'Home', path: '/homeIndex' },
                { name: 'Checkout', path: '/checkoutIndex' }
            ],
            form: {
                firstName: '',
                lastName: '',
                address: '',
                code: '',
                phone: '',
                email: '',
                remark: '',
                totalPrice: 100,
                items: []
            },
            formRules: {
                firstName: [{ required: true, message: 'Place Input FirstName', trigger: 'blur' }],
                lastName: [{ required: true, message: 'Place Input LastName', trigger: 'blur' }],
                address: [{ required: true, message: 'Place Input Address', trigger: 'blur' }],
                companyName: [{ required: true, message: 'Place Input CompanyName', trigger: 'blur' }],
                country: [{ required: true, message: 'Place Input Country', trigger: 'blur' }],
                code: [{ required: true, message: 'Place Input Zip Code', trigger: 'blur' }],
                phone: [{ required: true, message: 'Place Input Phone', trigger: 'blur' }],
                email: [{ required: true, message: 'Place Input Email', trigger: 'blur' }],
                remark: [{ required: true, message: 'Place Input Remark', trigger: 'blur' }]
            },
            banners: {
                images: []
            }
        }
    },
    computed: {
        ...mapState({
            carts: (state) => state.cart.items
        }),

        ...mapGetters({
            totalPrice: 'cart/totalPrice'
        })
    },
    methods: {
        /**
         * 表单提交
         */
        submitForm() {
            this.$refs.formRef.validate((valid) => {
                if (valid) {
                    const items = this.carts.map((x) => {
                        return { number: x.number, productId: x.productId }
                    })

                    this.form.items = JSON.stringify(items)
                    this.form.totalPrice = this.totalPrice

                    ISubmitOrder(this.form).then(() => {
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        })
                    })
                }
            })
        },

        /**
         * 获取封面图
         */
        getBanners() {
            IBanners({ page: 'checkoutIndex' }).then((res) => {
                this.banners = res
            })
        }
    },
    mounted() {
        this.getBanners()
    }
}
</script>

<style lang="scss" scoped>
.cart-index {
    display: flex;
    flex-direction: column;
    align-items: center;

    > .el-row {
        padding: 0 100px;
        width: 100%;
    }

    .index__details {
        padding: 35px 78px 70px;

        h4 {
            margin-bottom: 36px;
            font-size: 36px;
            line-height: 54px;
        }
    }

    .index__product {
        padding: 86px 38px 86px;

        .product__row {
            color: #000;
            font-size: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            h5 {
                font-size: 24px;
                line-height: 24px;
            }

            .row__name {
                color: #9f9f9f;
            }

            .row__x {
                margin: 0 10px;
                font-size: 16px;
            }

            .row__total {
                color: #b88e2f;
                font-size: 24px;
                line-height: 24px;
            }
        }

        .product__row + .product__row {
            margin-top: 28px;
        }

        footer {
            margin-top: 32px;
            padding-top: 22px;
            border-top: 1px solid #d9d9d9;
            display: flex;
            flex-direction: column;
            align-items: center;

            ul {
                li::before {
                    content: '';
                    margin-right: 15px;
                    background-image: url('@/assets/icon-circle.png');
                    background-repeat: no-repeat;
                    width: 14px;
                    height: 14px;
                }

                li {
                    color: #9f9f9f;
                    font-size: 16px;
                    line-height: 24px;
                    list-style: none;
                    display: flex;
                    align-items: center;
                }

                li + li {
                    margin-top: 12px;
                }

                li.selected::before {
                    background-image: url('@/assets/icon-circle-selected.png');
                }

                li.selected {
                    color: #000;
                }

                p {
                    margin-top: 10px;
                    margin-bottom: 25px;
                    color: #9f9f9f;
                    font-size: 16px;
                    line-height: 24px;
                }

                summary {
                    margin-top: 22px;
                    color: #000;
                    font-size: 16px;
                    line-height: 24px;
                    text-align: justify;
                }
            }

            button {
                margin-top: 40px;
                width: 318px;
                height: 64px;
                border-radius: 15px;
                background-color: transparent;
                border: 1px solid #000;
                cursor: pointer;
            }
        }
    }
}
</style>
