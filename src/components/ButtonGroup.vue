<template>
    <div class="button-group">
        <button :class="{ active: value === item.value }" v-for="(item, index) in options" :key="index" @click="handleClick(item.value)">
            {{ item.name }}
        </button>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'update:value'
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        value: {
            type: String,
            default: null
        }
    },
    methods: {
        handleClick(value) {
            this.$emit('update:value', value)
        }
    }
}
</script>

<style lang="scss" scoped>
.button-group {
    button {
        width: 30px;
        height: 30px;
        font-size: 13px;
        border-radius: 5px;
        color: #000;
        background: #f9f1e7;
    }

    button + button {
        margin-left: 16px;
    }

    button:hover {
        cursor: pointer;
        color: #fff;
        background-color: #b88e2f;
    }

    button.active {
        color: #fff;
        background-color: #b88e2f;
    }
}
</style>
