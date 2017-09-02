var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('img:min', () =>
  gulp.src('assets/img/**/*')
    .pipe(imagemin({}))
    .pipe(gulp.dest('assets/img/'))
);
