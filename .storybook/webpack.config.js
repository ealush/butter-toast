const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    }
};