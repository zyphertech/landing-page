  var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps');




  gulp.task('css', function () {
  return gulp.src('src/scss/style.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
  });

  gulp.task('js', function () {
  gulp.src('src/assets/js/scripts.js')
    .pipe(sourcemaps.init())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/assets/js'))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
  });

  gulp.task('browser-sync', function () {
  browserSync.init(null, {
    server: {
      baseDir: "app"
    }
  });
  });
  gulp.task('bs-reload', function () {
  browserSync.reload();
  });

  gulp.task('default', ['css', 'js', 'browser-sync'], function () {
  gulp.watch("src/scss/**/*.*", ['css']);
  gulp.watch("src/assets/js/*.js", ['js']);
  gulp.watch("app/*.html", ['bs-reload']);
  });


  gulp.task('build', ['css', 'js', ])