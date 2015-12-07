var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var config = require('../config').sass;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(concat('main.css'))
    .pipe(gulp.dest(config.dest));
});
