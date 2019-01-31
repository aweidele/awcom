var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var pxtorem = require('gulp-pxtorem');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var twig = require('gulp-twig');
var pump = require('pump');
var data = require('gulp-data');
// var iconfont = require('gulp-iconfont');
// var iconfontCss = require('gulp-iconfont-css');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions'],
  grid: true
};

var jsQueue = [
  'node_modules/jquery/dist/jquery.js',
  'src/js/*.js'
];

gulp.task('sass', function(){
  return gulp
    .src('src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    //.pipe(sourcemaps.write())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(pxtorem())
    .pipe(gulp.dest('docroot/css/'))
});

gulp.task('compress', function() {
  return gulp.src(jsQueue)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('docroot/js'))
    .pipe(rename('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest('docroot/js'));
});

gulp.task('iconfont', function(){
  gulp.src(['src/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: 'aw_glyphs',
      targetPath: 'src/sass/_icons.scss',
      fontPath: 'fonts/'
    }))
    .pipe(iconfont({
      fontName: 'aw_glyphs',
      normalize:true,
      fontHeight: 1001
     }))
    .pipe(gulp.dest('docroot/fonts/'));
});

gulp.task('compile', function () {
  'use strict';
  return gulp.src(['src/twig/**/*.twig','!src/twig/templates/**/*.twig'])
    .pipe(twig(
      data(function(file) {
        return JSON.parse(fs.readFileSync('src/content/site.json'));
      })
    )
    )
    .pipe(gulp.dest('docroot/'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['compress']);
  gulp.watch('src/twig/**/*.twig', ['compile']);
  //gulp.watch('src/icons/**/*.svg', ['iconfont','sass']);
});

gulp.task('default', ['sass', 'compress', 'compile', 'watch']);
