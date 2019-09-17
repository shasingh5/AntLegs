'use strict';

var gulp =  require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var minifyCss = require('gulp-minify-css');


//Clean dist
gulp.task('clean', function () {
    return gulp.src('app/tmp', {read: false}).pipe(clean());
});

//Copy all HTML to dist
gulp.task('copyHTML',function () {
  gulp.src('src/*.html')
  .pipe(gulp.dest('dist'));
});

//Copy all Data to dist
gulp.task('copyData',function () {
  gulp.src('src/data/*')
  .pipe(gulp.dest('dist/data'));
});

//Optimize images
gulp.task('imagemin', function () {
    gulp.src('src/assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/images'));
});

//Minify JS
gulp.task('minifyJS',function () {
  gulp.src('src/assets/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/assets/js'));
});

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass({      
      outputStyle: 'expanded'
    }).on('error', sass.logError))    
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(minifyCss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/assets/css'));
});

//Copy Vendor
gulp.task('copyVendor',function() {
  gulp.src('src/vendor/**/*')
  .pipe(gulp.dest('dist/vendor/'));
});

//Copy fonts
gulp.task('copyFonts',function() {
  gulp.src('src/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts/'));
});

gulp.task('default', ['clean','compileHtml', 'copyData','imagemin', 'minifyJS', 'sass', 'copyVendor', 'copyFonts','serve','watch']);

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./dist"
    });
});

//Convert template to html
gulp.task('compileHtml', function() {
  gulp.src(['src/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'src/templates'
    }))
    .pipe(gulp.dest('dist/'));
});

//Task to watch any changes in real time in Devlopment
gulp.task('watch',  function () {
  gulp.watch('src/assets/js/**/*.js', ['minifyJS']);
  gulp.watch('src/assets/img/**/*', ['imagemin']);
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);
  gulp.watch('src/templates/**/*.hbs', ['compileHtml']);
  gulp.watch('src/*.html', ['compileHtml']);
  // gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch(['src/templates/**/*.hbs', 'src/*.html', 'src/assets/scss/**/*', 'src/assets/js/**/*']).on('change', browserSync.reload);
});
