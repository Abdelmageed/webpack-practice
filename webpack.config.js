const path = require ('path'),
      htmlWebpackPlugin = require ('html-webpack-plugin')

const PATHS = {
    build: path.join(__dirname, 'build'),
    app: path.join(__dirname, 'app')
}
module.exports = {
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
//    module: {
//        loaders: [
//            { test: /\.css$/, loader: "style!css" }
//        ]
//    }
}