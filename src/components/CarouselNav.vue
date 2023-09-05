<template>
    <div class="carousel-nav">
        <aside>
            <section v-for="(url, index) in data" :key="index" @click="activeIndex = index"><img :src="url" /></section>
        </aside>

        <main>
            <img :src="data[activeIndex]" alt="" />
        </main>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            activeIndex: 0
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel-nav {
    display: flex;

    aside {
        display: flex;
        flex-direction: column;

        section {
            width: 76px;
            height: 80px;
            border-radius: 10px;
            background: #f9f1e7;
            cursor: pointer;

            img {
                padding: 10px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        section + section {
            margin-top: 26px;
        }
    }

    main {
        margin-left: 28px;
        width: 423px;
        height: 500px;
        border-radius: 10px;
        background: #f9f1e7;

        img {
            padding: 20px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
