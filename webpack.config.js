const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'butter-toast.min': './src/index.js',
        'lean.min': './src/ButterToast/index.js',
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        },
        'react-dom': {
          root: 'ReactDOM',
          commonjs2: 'react-dom',
          commonjs: 'react-dom',
          amd: 'react-dom'
        }
      },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            sourceMap: true,
            include: /\.min\.js$/
        })]
    }
};
