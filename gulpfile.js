'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');

var webpackDevConfig = {
  entry: './entryScript.js',
  output: {
    filename: 'app/scripts/script.js'
  },
  devtool: 'eval'
};

gulp.task('server', function() {
  var compiler = webpack(webpackDevConfig);
  new WebpackDevServer(compiler, {
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
