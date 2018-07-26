const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ["style-loader", "css-loader"],
        include: path.join(__dirname, "../")
      }
    ]
  }
};
