var gulp = require('gulp'),
  imageResize = require('gulp-image-resize');

gulp.task('img-resize-small', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 120,
      height : 120,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/small/'));
});

gulp.task('img-resize-small-retina', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 240,
      height : 240,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/small-retina/'));
});

gulp.task('img-resize-medium', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 190,
      height : 190,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/medium/'));
});

gulp.task('img-resize-medium-retina', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 380,
      height : 380,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/medium-retina/'));
});

gulp.task('img-resize-og-images', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 526,
      height : 274,
      upscale: true,
      crop: true
    }))
    .pipe(gulp.dest('assets/img/releases/og-images/'));
});
