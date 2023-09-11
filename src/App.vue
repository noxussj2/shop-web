<template>
    <div id="app">
        <HeaderNav />

        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import { IToken } from '@/api/csrf-token/index.js'

export default {
    components: {
        HeaderNav
    },
    mounted() {
        /**
         * 获取 CSRF Token
         */
        IToken().then((res) => {
            localStorage.setItem('token', res)
        })
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
