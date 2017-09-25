var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var pump = require('pump');
var twig = require('gulp-twig');

var content = require('./src/content/content.json');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 4 versions']
};

gulp.task('sass', function(){
  return gulp
    .src('src/sass/str.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('css/'))
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('js')
    ],
    cb
  );
});

gulp.task('compile', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src('src/twig/index.twig')
        .pipe(twig({
            data: content
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('reset',function(done) {
  try {
    content = require('./src/content/content.json');
  } catch(e) {
    console.error("Failed to reload content.json! Error: ", e);
  }

  done();
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['compress']);
  gulp.watch('src/twig/**/*.twig', ['compile']);
  gulp.watch('src/content/content.json', ['reset','compile']);
});
