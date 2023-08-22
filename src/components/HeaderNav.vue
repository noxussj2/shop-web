<template>
    <div class="header-nav">
        <img src="@/assets/logo.png" class="nav__logo" />

        <header>
            <div class="nav__menu">
                <span>Home</span>
                <span>Shop</span>
                <span>About</span>
                <span>Concat</span>
            </div>

            <div class="nav__operate">
                <img src="@/assets/icon-user.png" />
                <img src="@/assets/icon-search.png" />
                <img src="@/assets/icon-shoping.png" />
            </div>
        </header>
    </div>
</template>

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
            span {
                font-size: 16px;
                line-height: 16px;
                font-weight: bold;
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
            }

            img + img {
                margin-left: 82px;
            }
        }
    }
}
</style>
