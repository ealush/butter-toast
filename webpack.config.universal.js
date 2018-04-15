const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    env = process.env.WEBPACK_ENV;

let jsName,
    styleName,
    entry;

if (env === 'base') {
    jsName = 'base';
    styleName = 'base';
    entry = './src/ButterToast/index.js';
} else {
    jsName = 'index';
    styleName = 'style';
    entry = './src/index.js';
}

module.exports = {
    entry,
    devtool: 'source-map',
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist/universal'),
        filename: `${jsName}.js`,
        library: 'ButterToast',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
            include: path.resolve(__dirname, '../')
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        }),
        new ExtractTextPlugin(`${styleName}.css`)
    ]
};