'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function() {
  connect.server({
    port : 9009,
    root: './'
  });
});
