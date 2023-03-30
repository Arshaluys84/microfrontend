const { merge } = require('webpack-merge')
const ModulePlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require("../package.json")
const commonConfig = require('./webpack.common')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModulePlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstap"
            },
            shared: packageJson.dependencies
        }),
        
    ]
}

module.exports = merge(commonConfig, devConfig)