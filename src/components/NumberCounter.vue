<template>
    <div class="number-counter">
        <div @click="handleClick('minus')">-</div>
        <span>{{ value }}</span>
        <div @click="handleClick('plus')">+</div>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'value',
        event: 'update:value'
    },
    props: {
        value: {
            type: Number,
            default: 1
        }
    },
    methods: {
        /**
         * 计数器加减
         */
        handleClick(type) {
            if (type === 'minus') {
                if (this.value <= 1) return
                this.$emit('update:value', this.value - 1)
            } else {
                this.$emit('update:value', this.value + 1)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.number-counter {
    padding: 0 15px;
    width: 123px;
    height: 64px;
    border-radius: 10px;
    border: 1px solid #9f9f9f;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color: #000;
        font-size: 16px;
        line-height: 16px;
    }

    div {
        width: 9px;
        height: 24px;
        line-height: 24px;
        cursor: pointer;
    }
}
</style>
