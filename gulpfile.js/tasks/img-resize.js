var gulp = require('gulp');
var imageResize = require('gulp-image-resize');

gulp.task('img:resize', [
    'img:releases:resize:small',
    'img:releases:resize:small-retina',
    'img:releases:resize:medium',
    'img:releases:resize:medium-retina',
    'img:releases:resize:og-image',
    'img:releases:resize:micro',
    'img:artists:resize:small',
    'img:artists:resize:small-retina',
    'img:artists:resize:medium',
    'img:artists:resize:medium-retina',
    'img:artists:resize:og-image',
    'img:artists:resize:micro'
  ], function () {
});

gulp.task('img:releases:resize:small', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 120,
      height : 120,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/small/'));
});

gulp.task('img:releases:resize:small-retina', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 240,
      height : 240,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/small-retina/'));
});

gulp.task('img:releases:resize:medium', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 190,
      height : 190,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/medium/'));
});

gulp.task('img:releases:resize:medium-retina', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 380,
      height : 380,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/releases/medium-retina/'));
});

gulp.task('img:releases:resize:og-image', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 526,
      height : 274,
      upscale: true,
      crop: true,
      gravity: 'North'
    }))
    .pipe(gulp.dest('assets/img/releases/og-images/'));
});

gulp.task('img:releases:resize:micro', function () {
  gulp.src('assets/img/releases/large/**/*.*')
    .pipe(imageResize({ 
      width : 5,
      height : 5,
      upscale: true,
      crop: true
    }))
    .pipe(gulp.dest('assets/img/releases/micro/'));
});

gulp.task('img:artists:resize:small', function () {
  gulp.src('assets/img/artists/large/**/*.*')
    .pipe(imageResize({ 
      width : 120,
      height : 120,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/artists/small/'));
});

gulp.task('img:artists:resize:small-retina', function () {
  gulp.src('assets/img/artists/large/**/*.*')
    .pipe(imageResize({ 
      width : 240,
      height : 240,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/artists/small-retina/'));
});

gulp.task('img:artists:resize:medium', function () {
  gulp.src('assets/img/artists/large/**/*.*')
    .pipe(imageResize({ 
      width : 190,
      height : 190,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/artists/medium/'));
});

gulp.task('img:artists:resize:medium-retina', function () {
  gulp.src('assets/img/artists/large/**/*.*')
    .pipe(imageResize({ 
      width : 380,
      height : 380,
      upscale: true
    }))
    .pipe(gulp.dest('assets/img/artists/medium-retina/'));
});

gulp.task('img:artists:resize:og-image', function () {
  gulp.src('assets/img/artists/large/**/*.*')
    .pipe(imageResize({ 
      width : 526,
      height : 274,
      upscale: true,
      crop: true,
      gravity: 'North'
    }))
    .pipe(gulp.dest('assets/img/artists/og-images/'));
});

gulp.task('img:artists:resize:micro', function () {
  gulp.src('assets/img/artists/large/**/*.*')
    .pipe(imageResize({ 
      width : 5,
      height : 5,
      upscale: true,
      crop: true
    }))
    .pipe(gulp.dest('assets/img/artists/micro/'));
});
