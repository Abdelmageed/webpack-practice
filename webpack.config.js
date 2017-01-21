const path = require ('path'),
      htmlWebpackPlugin = require ('html-webpack-plugin')

const PATHS = {
    build: path.join(__dirname, 'build'),
    app: path.join(__dirname, 'app')
}
const config = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: "[name].js"
    },
    plugins: [
        new htmlWebpackPlugin ({
            title: 'Webpack Demo'
        })
    ]

}

module.exports = function (env) {
    console.log (`env: ${env}`)
    return config
}