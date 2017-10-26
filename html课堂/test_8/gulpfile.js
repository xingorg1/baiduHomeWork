var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var paths = {
  // css
  sassWatch: 'scss/**/*.scss',
  css: 'css',
  // html
  pugWatch: 'views/*.pug',
  pugWatch2: 'views/**/*.pug',
  html: 'html'
};

gulp.task('pug', function () {
  return gulp.src(paths.pugWatch)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(rename(function(path){
      var filename = path.basename.split('_')[1];
      if(!filename) {
        return path;
      }
      path.basename = filename;
      return path;
    }))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(paths.html))
});

gulp.task('sass', function () {
  return gulp.src(paths.sassWatch)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(paths.css))
});

gulp.task('watch', ['sass'], function () {
  gulp.watch(paths.pugWatch2, ['pug']);
  gulp.watch(paths.sassWatch, ['sass']);
});

gulp.task('default', ['watch', 'pug' ]);
