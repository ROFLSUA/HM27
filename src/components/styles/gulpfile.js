const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

gulp.task('styles', function () {
  return gulp
    .src('./src/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss', gulp.series('styles'));
});

gulp.task('default', gulp.parallel('styles', 'watch'));
