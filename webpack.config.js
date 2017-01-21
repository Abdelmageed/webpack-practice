const path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack')

const PATHS = {
    build: path.join(__dirname, 'build'),
    app: path.join(__dirname, 'app')
}
const common = {
    entry: {

        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: "[name].js"
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Webpack Demo'
        })
    ]

}

const devConfig = {
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,

        // Unlike the cli flag, this doesn't set
        // HotModuleReplacementPlugin!
        hot: true,

        // Don't refresh if hot loading fails. If you want
        // refresh behavior, set inline: true instead.
        hotOnly: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env to allow customization.
        //
        // If you use Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080

    },
    plugins: [
    // Enable multi-pass compilation for enhanced performance
    // in larger projects. Good default.
    new webpack.HotModuleReplacementPlugin({
            // Disabled as this won't work with html-webpack-template yet
            //multiStep: true,
        }),
    new webpack.NamedModulesPlugin()
  ],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    emitWarning: true
                }
            }
        ]
    }
}

module.exports = function (env) {
    if (env === 'production')
        return common

    return Object.assign({}, common, devConfig, {
        plugins: devConfig.plugins.concat(common.plugins)
    })
}