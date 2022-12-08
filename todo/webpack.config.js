const path = require("path")

module.exports = {
  entry: "./src/index.js",
  mode : 'none',
  resolve:{
    extensions:['.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader:'babel-loader', 
        options:{
          presets:['@babel/preset-env','@babel/preset-react'],
        },
      }
    ]
  },
  output: {
    path : path.resolve(__dirname + '/build'),
    filename : 'app.js'
  },
};