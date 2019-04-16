const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

let entry;

const externals = {
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
};

if (process.env.NO_CONFLICT === 'true') {
    Object.assign(externals, {
        'styled-components': 'styled-components',
        'polished': 'polished'
    });

    entry = {
        'noconflict.min': './src/index.js',
        'noconflict': './src/index.js'
    };
} else {
    entry = {
        'butter-toast.min': './src/index.js',
        'butter-toast': './src/index.js',
        'lean.min': './src/ButterToast/index.js',
        'lean': './src/ButterToast/index.js',
    };
}

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry,
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        globalObject: '((function f() { return 0; }).constructor("return this"))()'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    externals,
    optimization: {
        minimizer: [new TerserPlugin()],
    }
};
