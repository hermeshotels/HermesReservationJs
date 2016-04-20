var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin');

gulp.task('default', ['scripts', 'css']);

gulp.task('scripts', function(){
  return gulp.src('vendor/*.js')
    .pipe(concat('hh-bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
  gulp.src('main.css')
    .pipe(cssmin())
    .pipe(gulp.dest('dist'));
});
