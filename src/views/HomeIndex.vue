<template>
    <div class="home-index">
        <div class="index__banner">
            <div class="banner__card">
                <h5>New Arrival</h5>
                <h4>Discover Our <br />New Collection</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                <button>BUY Now</button>
            </div>
        </div>

        <h3>Our Products</h3>

        <div class="index__products">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>

        <button>Show More</button>

        <FooterFuniro />
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import FooterFuniro from '@/components/FooterFuniro.vue'

export default {
    components: { ProductCard, FooterFuniro }
}
</script>

<style lang="scss" scoped>
.home-index {
    display: flex;
    flex-direction: column;
    align-items: center;

    .index__banner {
        padding-top: 158px;
        padding-right: 58px;
        width: 100%;
        height: 718px;
        background-image: url('@/assets/home/banner.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        justify-content: flex-end;

        > img {
            width: 100%;
        }

        .banner__card {
            padding: 62px 40px 36px;
            width: 643px;
            height: 443px;
            background-color: #fff3e3;
            display: flex;
            flex-direction: column;

            h5 {
                color: #333;
                font-size: 16px;
                line-height: 24px;
            }

            h4 {
                margin-top: 4px;
                color: #b88e2f;
                font-size: 52px;
                line-height: 64px;
            }

            p {
                margin-top: 16px;
                color: #333;
                font-size: 18px;
                line-height: 24px;
            }

            button {
                margin-top: 46px;
                width: 222px;
                height: 74px;
                font-size: 16px;
                color: #fff;
                background-color: #b88e2f;
            }
        }
    }

    .index__products {
        padding: 0 102px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 32px;
        grid-column-gap: 32px;
    }

    button {
        margin-top: 32px;
        width: 245px;
        height: 48px;
        color: #b88e2f;
        font-size: 16px;
        font-weight: bold;
        background-color: #fff;
        border: 1px solid #b88e2f;
    }
}
</style>
