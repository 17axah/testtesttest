const gulp = require('gulp');
const replace = require('gulp-replace');

module.exports = function () {
  return gulp.src('dest/**/*')
    .pipe(replace('"/', `"${process.env.BASE_URL}`))
    .pipe(gulp.dest('dest/'));
}
