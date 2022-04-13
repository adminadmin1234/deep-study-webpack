const path = require('path');
module.exports = {
    entry: './src/index.xxx',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.xxx/,
                use: [{
                    loader: path.resolve(__dirname, './loader/index.js')
                }]
            }
        ]
    },
    mode: 'development'
}