<template>
    <div class="shop-index">
        <div class="index__banner">
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

    .index__banner {
        position: relative;
        width: 100%;
        height: 316px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
            filter: blur(4px);
        }

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
