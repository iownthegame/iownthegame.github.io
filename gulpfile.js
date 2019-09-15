var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

function style() {
  return (
    gulp
      .src('css/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream())
  )
}

function reload() {
  browserSync.reload();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('css/*.scss', style);
  // gulp.watch('index.html', reload);
  gulp.watch('index.html').on('change', browserSync.reload);
}

exports.style = style
exports.watch = watch

exports.default = watch
