<template>
    <div class="shop-index">
        <div class="base__banner">
            <img :src="banners.images && banners.images[0]" />
            <h4>Shop</h4>
            <BreadcrumbNav :path="path" />
        </div>

        <div class="index__products">
            <ProductCard v-for="(item, index) in products.data" :key="index" :data="item" />
        </div>

        <PaginationButton :count="products.count" v-model="cond" @change="getProducts" />

        <footer>
            <div class="footer__item">
                <img src="@/assets/shop/icon-quality.png" alt="" />
                <main>
                    <h4>High Quality</h4>
                    <p>crafted from top materials</p>
                </main>
            </div>
            <div class="footer__item">
                <img src="@/assets/shop/icon-protection.png" alt="" />
                <main>
                    <h4>Warranty Protection</h4>
                    <p>Over 2 years</p>
                </main>
            </div>
            <div class="footer__item">
                <img src="@/assets/shop/icon-shipping.png" alt="" />
                <main>
                    <h4>Free Shipping</h4>
                    <p>Order over 150 $</p>
                </main>
            </div>
            <div class="footer__item">
                <img src="@/assets/shop/icon-support.png" alt="" />
                <main>
                    <h4>24 / 7 Support</h4>
                    <p>Dedicated support</p>
                </main>
            </div>
        </footer>
    </div>
</template>

<script>
import { IBanners, IProductsList } from '@/api/shop-index/index.js'
import ProductCard from '@/components/ProductCard.vue'
import PaginationButton from '@/components/PaginationButton.vue'
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'

export default {
    components: { ProductCard, PaginationButton, BreadcrumbNav },
    data() {
        return {
            path: [
                { name: 'Home', path: '/homeIndex' },
                { name: 'Shop', path: '/shopIndex' }
            ],
            banners: {
                images: []
            },
            products: {
                data: [],
                count: 0
            },
            cond: {
                page: 1,
                pageSize: 4
            }
        }
    },
    methods: {
        /**
         * 获取封面图
         */
        getBanners() {
            IBanners({ page: 'shopIndex' }).then((res) => {
                this.banners = res
            })
        },

        /**
         * 获取商品列表
         */
        getProducts() {
            IProductsList(this.cond).then((res) => {
                this.products = res
            })
        }
    },
    mounted() {
        this.getBanners()
        this.getProducts()
    }
}
</script>

<style lang="scss" scoped>
.shop-index {
    display: flex;
    flex-direction: column;
    align-items: center;

    .index__products {
        margin-top: 70px;
        padding: 0 102px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 32px;
        grid-column-gap: 32px;
    }

    footer {
        margin-top: 209px;
        padding: 0 52px;
        width: 100%;
        height: 270px;
        background: #faf3ea;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer__item {
            display: flex;
            align-items: center;

            img {
                width: 60px;
                height: 60px;
            }

            main {
                margin-left: 10px;

                h4 {
                    color: #242424;
                    font-size: 25px;
                    line-height: 36px;
                }

                p {
                    margin-top: 2px;
                    overflow: hidden;
                    color: #898989;
                    font-size: 20px;
                    line-height: 30px;
                }
            }
        }
    }
}
</style>
