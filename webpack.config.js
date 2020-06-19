const path = require('path')

module.exports = {
    entry: './src/app.js',
    output: {
        //path.join used to avoid cross OS issues
        path: path.join(__dirname, 'public'),
        //live generated file in development, must build for production
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: ['style-loader',
                'css-loader',
                'sass-loader'    
            ]
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}