module.exports = {
    lintOnSave: false,
    devServer: {
        port: 8080,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
        },
        host: "0.0.0.0",
        disableHostCheck: true
    },
    pwa: {
        // configure the workbox plugin
        // workboxPluginMode: 'InjectManifest',
        // workboxOptions: {
        //     swSrc: "src/firebase-messaging-sw.js"
        // }
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                }
            ]
        },
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js"
            }
        }
    },
    publicPath: ".",
    productionSourceMap: true
}
