var gulp = require('gulp');
var config = require('../config').sass;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
