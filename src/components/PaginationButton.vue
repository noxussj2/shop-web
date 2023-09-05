<template>
    <div class="pagination-button">
        <button :class="{ active: index + 1 === _value.page }" v-for="(item, index) in totalPage" :key="index" @click="handlePage(index + 1)">{{ index + 1 }}</button>
        <button v-if="_value.page < totalPage" @click="handleNext">Next</button>
        <button v-else @click="handlePrev">Prev</button>
    </div>
</template>

<script>
export default {
    model: {
        event: 'update:modelValue'
    },
    props: {
        count: {
            type: Number,
            default: 0
        },
        value: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        totalPage() {
            return Math.ceil(this.count / this._value.pageSize)
        },
        _value: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('update:modelValue', val)
            }
        }
    },
    methods: {
        handlePage(page) {
            if (page !== this._value.page) {
                this._value = { page, pageSize: this._value.pageSize }
                this.$emit('change')
            }
        },
        handlePrev() {
            const page = this._value.page - 1
            this._value = { page, pageSize: this._value.pageSize }
            this.$emit('change')
        },
        handleNext() {
            const page = this._value.page + 1
            this._value = { page, pageSize: this._value.pageSize }
            this.$emit('change')
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination-button {
    margin-top: 70px;

    button {
        width: 60px;
        height: 60px;
        font-size: 20px;
        border-radius: 10px;
        color: #000;
        background: #f9f1e7;
        cursor: pointer;
    }

    button + button {
        margin-left: 38px;
    }

    button:last-of-type {
        width: 98px;
    }

    button.active {
        color: #fff;
        background-color: #b88e2f;
    }
}
</style>
