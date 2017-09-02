var gulp = require('gulp');

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch([
    '_layouts/**/*.html',
    '_pages/**/*',
    'assets/img/**/*',
    '_config.yml'
  ], ['jekyll:rebuild']);
});
