var gulp = require('gulp'),
    imageResize = require('gulp-image-resize');

gulp.task('img-resize-small', function () {
    gulp.src('assets/img/releases/large/**/*.*')
        .pipe(imageResize({ 
            width : 100,
            height : 100,
            upscale: true
        }))
        .pipe(gulp.dest('assets/img/releases/small/'));
});

gulp.task('img-resize-medium', function () {
    gulp.src('assets/img/releases/large/**/*.*')
        .pipe(imageResize({ 
            width : 350,
            height : 350,
            upscale: true
        }))
        .pipe(gulp.dest('assets/img/releases/medium/'));
});
