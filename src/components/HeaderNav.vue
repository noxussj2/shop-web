<template>
    <div class="header-nav">
        <img src="@/assets/logo.png" class="nav__logo" />

        <header>
            <div class="nav__menu">
                <span @click="link('/homeIndex')">Home</span>
                <span @click="link('/shopIndex')">Shop</span>
                <span>About</span>
                <span>Concat</span>
            </div>

            <div class="nav__operate">
                <img src="@/assets/icon-user.png" />
                <img src="@/assets/icon-search.png" />
                <img src="@/assets/icon-shoping.png" @click="carDrawer = !carDrawer" />
            </div>
        </header>

        <ShopCar />
    </div>
</template>

<script>
import ShopCar from '@/components/ShopCar.vue'

export default {
    components: { ShopCar },
    methods: {
        link(path) {
            if (this.$route.path === path) return
            this.$router.push(path)
        }
    },
    computed: {
        carDrawer: {
            get() {
                return this.$store.state.car.show
            },
            set(val) {
                this.$store.commit('car/showCar', val)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header-nav {
    padding-right: 100px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav__logo {
        width: 185px;
        height: 41px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav__menu {
            span:hover {
                color: #000;
            }

            span {
                font-size: 16px;
                line-height: 16px;
                font-weight: bold;
                cursor: pointer;
            }

            span + span {
                margin-left: 75px;
            }
        }

        .nav__operate {
            margin-left: 158px;

            img {
                width: 28px;
                height: 28px;
                cursor: pointer;
            }

            img + img {
                margin-left: 82px;
            }
        }
    }
}
</style>
