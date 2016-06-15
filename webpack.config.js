var webpack = require('webpack');
var path = require('path');

module.exports = {
  // tell webpack where the application source code lives
  context: __dirname + '/app',
  // tell webpack which file to load as an entry point into the different bundles
  // uses "codesplitting"
  entry: {
    app: './app.js',
    vendor: ['angular']  
  },
  output: {
    path: __dirname + '/public/scripts',
    filename: 'todo.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};