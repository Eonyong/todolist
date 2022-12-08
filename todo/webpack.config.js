const path = require("path")

module.exports = {
  entry: "./src/index.js",
  mode : 'none',
  resolve:{
    extensions:['.js','.jsx', '.tsx', 'ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
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