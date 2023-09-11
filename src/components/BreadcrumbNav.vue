<template>
    <div class="breadcrumb-nav">
        <!-- has end -->
        <template v-if="end">
            <section v-for="(item, index) in path" :key="index" @click="link(item.path)">
                <span>{{ item.name }}</span>
                <img src="@/assets/icon-arrow.png" alt="" />
            </section>
            <div class="end">{{ end }}</div>
        </template>

        <!-- not end -->
        <template v-else>
            <section v-for="(item, index) in path" :key="index" :class="{ active: index === path.length - 1 }" @click="link(item.path)">
                <span>{{ item.name }}</span>
                <img src="@/assets/icon-arrow.png" alt="" v-if="index !== path.length - 1" />
            </section>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        path: {
            type: Array,
            default: () => []
        },
        end: {
            type: String,
            default: ''
        }
    },
    methods: {
        link(path) {
            if (this.$route.path === path) return
            this.$router.push(path)
        }
    }
}
</script>

<style lang="scss" scoped>
.breadcrumb-nav {
    color: #9f9f9f;
    font-size: 16px;
    line-height: 36px;
    display: flex;

    section {
        display: flex;
        align-items: center;

        img {
            margin-left: 14px;
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

    section + section {
        margin-left: 24px;
    }

    section:hover {
        color: #000;
        cursor: pointer;
    }

    section.active {
        color: #000;
    }

    .end {
        margin-left: 24px;
        padding-left: 34px;
        color: #000;
        border-left: 2px solid #9f9f9f;
    }
}
</style>
