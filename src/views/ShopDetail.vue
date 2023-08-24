<template>
    <div class="shop-index">
        <div class="index__breadcrumb">
            <BreadcrumbNav :path="path" end="Asgaard sofa" />
        </div>

        <div class="index__good">
            <CarouselNav :data="calouselList" />

            <div class="good__info">
                <h4>Asgaard sofa</h4>
                <div class="info__price">Rs. 250,000.00</div>

                <p>
                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a
                    clear midrange and extended highs for a sound.
                </p>

                <h5>Size</h5>

                <ButtonGroup v-model="sizeActive" :options="sizeList" />

                <h5>Color</h5>

                <div class="info__colors">
                    <button :style="{ background: '#816DFA' }"></button>
                    <button :style="{ background: '#000' }"></button>
                    <button :style="{ background: '#B88E2F' }"></button>
                </div>

                <div class="info__count">
                    <NumberCounter v-model="num" />

                    <button>Add To Cart</button>
                </div>

                <div class="info__describe">
                    <div class="describe__item">
                        <div class="item__name">SKU</div>
                        <div class="item__value">SS001</div>
                    </div>

                    <div class="describe__item">
                        <div class="item__name">Category</div>
                        <div class="item__value">Sofas</div>
                    </div>

                    <div class="describe__item">
                        <div class="item__name">Tags</div>
                        <div class="item__value">Sofa, Chair, Home, Shop</div>
                    </div>

                    <div class="describe__item">
                        <div class="item__name">Share</div>
                        <div class="item__value">
                            <img src="@/assets/shop-detail/icon-facebook.png" alt="" />
                            <img src="@/assets/shop-detail/icon-linkedin.png" alt="" />
                            <img src="@/assets/shop-detail/icon-twitter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterFuniro />
    </div>
</template>

<script>
import BreadcrumbNav from '@/components/BreadcrumbNav.vue'
import FooterFuniro from '@/components/FooterFuniro.vue'
import CarouselNav from '@/components/CarouselNav.vue'

import Carousel1 from '@/assets/shop-detail/carousel1.png'
import Carousel2 from '@/assets/shop-detail/carousel2.png'
import Carousel3 from '@/assets/shop-detail/carousel3.png'
import Carousel4 from '@/assets/shop-detail/carousel4.png'

import ButtonGroup from '@/components/ButtonGroup.vue'
import NumberCounter from '@/components/NumberCounter.vue'

export default {
    components: { BreadcrumbNav, FooterFuniro, CarouselNav, ButtonGroup, NumberCounter },
    data() {
        return {
            path: [
                { name: 'Home', path: '/homeIndex' },
                { name: 'Shop', path: '/shopIndex' }
            ],
            calouselList: [Carousel1, Carousel2, Carousel3, Carousel4],
            sizeActive: '1',
            sizeList: [
                { name: 'L', value: '1' },
                { name: 'XL', value: '2' },
                { name: 'XS', value: '3' }
            ],
            num: 1
        }
    }
}
</script>

<style lang="scss" scoped>
.shop-index {
    .index__breadcrumb {
        padding: 0 102px;
        height: 100px;
        background: #f9f1e7;
        display: flex;
        align-items: center;
    }

    .index__good {
        margin-top: 42px;
        padding: 0 102px;
        display: flex;

        .good__info {
            margin-left: 106px;
            width: 424px;

            h4 {
                color: #000;
                font-weight: bold;
                font-size: 42px;
                line-height: 62px;
            }

            .info__price {
                color: #9f9f9f;
                font-size: 24px;
                line-height: 36px;
            }

            p {
                margin-top: 52px;
                color: #000;
                font-size: 13px;
                line-height: 20px;
            }

            h5 {
                margin-top: 18px;
                margin-bottom: 12px;
                color: #9f9f9f;
                font-size: 14px;
                line-height: 22px;
                font-weight: normal;
            }
        }

        .info__colors {
            button {
                width: 30px;
                height: 30px;
                border-radius: 50%;
            }

            button + button {
                margin-left: 16px;
            }
        }

        .info__count {
            margin-top: 32px;
            display: flex;

            button {
                margin-left: 18px;
                width: 215px;
                height: 64px;
                font-size: 20px;
                color: #000;
                background-color: #fff;
                border-radius: 15px;
                border: 1px solid #000;
            }

            button:hover {
                cursor: pointer;
            }
        }

        .info__describe {
            margin-top: 60px;
            margin-bottom: 120px;
            padding-top: 40px;
            border-top: 1px solid #d9d9d9;
            display: flex;
            flex-direction: column;

            .describe__item {
                color: #9f9f9f;
                font-size: 16px;
                line-height: 24px;
                display: flex;

                .item__name {
                    width: 90px;
                }

                .item__value::before {
                    content: '：';
                }

                .item__value {
                    display: flex;
                    align-items: center;

                    img {
                        width: 20px;
                        height: 20px;
                    }

                    img + img {
                        margin-left: 25px;
                    }
                }
            }

            .describe__item + .describe__item {
                margin-top: 12px;
            }
        }
    }
}
</style>
