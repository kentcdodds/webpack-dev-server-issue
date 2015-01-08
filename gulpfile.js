'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');

var webpackDevConfig = {
  devtool: 'eval',
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: '6to5', exclude: /node_modules/ },
    ]
  }
};

gulp.task('server', function() {
  var compiler = webpack(webpackDevConfig);
  new WebpackDevServer(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: {
      colors: true
    }
    // server and middleware options
  }).listen(8080, 'localhost', function(err) {
    if(err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    // Server listening
    gutil.log('[webpack-dev-server]', 'listening on 8080');
  });
});
