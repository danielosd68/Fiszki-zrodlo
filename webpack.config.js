const path = require('path');


module.exports = {
    entry: ['./src/js/index.js', './src/ts/index.ts'],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist/javascript/')
    },

    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.ts$/, use: ['ts-loader'] }
        ]
    }
}