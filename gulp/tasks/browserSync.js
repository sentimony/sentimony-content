var browserSync = require('browser-sync');
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var config      = require('../config').browserSync;

gulp.task('browserSync', ['build'], function() {
  browserSync(config);
});
