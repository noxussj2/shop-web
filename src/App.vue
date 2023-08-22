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

export default {
    components: {
        HeaderNav
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
