const gulp                 = require('gulp'),
      sass                 = require('gulp-sass'),
      sourcemaps           = require('gulp-sourcemaps'),
      autoprefixer         = require('gulp-autoprefixer'),
      concat               = require('gulp-concat'),
      cleanCSS             = require('gulp-clean-css'),
      uglify               = require('gulp-uglify'),
      overrideBrowserslist = require('browser-sync').create(),
      cssFiles             = [
          'sass/style.scss'
      ],
      jsFiles              = [
          'sass/script.js'
      ];
// all css
gulp.task('sass',function () {
   return gulp.src(cssFiles)
       .pipe(sourcemaps.init())
       .pipe(autoprefixer({
           browsers: ['last 2 versions'],
           cascade: false
       }))
       .pipe(sass().on('error',sass.logError))
       .pipe(concat('styles.min.css'))
       .pipe(cleanCSS({
           level: 2
       }))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest('dist/css/'))
       .pipe(overrideBrowserslist.stream())
});
// all js
gulp.task('js',function () {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(concat('scripts.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
        .pipe(overrideBrowserslist.stream())
});


gulp.task('watch',function () {
   gulp.watch('sass/**/*.scss',gulp.series('sass'));
   gulp.watch('sass/**/*.js',gulp.series('js'));
   gulp.watch("./**/*.html").on('change', overrideBrowserslist.reload);
   gulp.watch("./**/*.php").on('change', overrideBrowserslist.reload);
    overrideBrowserslist.init({
        proxi: "",
        notify: false
    });
});