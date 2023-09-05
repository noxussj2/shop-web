const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        port: 10000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:2032',
                // target: 'https://shop.noxussj.top'
            }
        }
    }
})
