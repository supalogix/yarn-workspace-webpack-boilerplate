const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 1200,
        stats: "errors-only",
        open: true
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                include: path.resolve(__dirname, '../../'),
                query: {
                    presets: [
                        'es2015',
                        'react', 
                    ]
                }
            },
        ]
    }
}