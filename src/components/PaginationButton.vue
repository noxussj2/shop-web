<template>
    <div class="pagination-button">
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>Next</button>
    </div>
</template>

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
