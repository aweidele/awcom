var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pxtorem = require('gulp-pxtorem');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');
var gcmq = require('gulp-group-css-media-queries');

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

var pxtoremOptions = {
  propList: [
    'font',
    'font-size',
    'line-height',
    'padding',
    'padding-top',
    'padding-left',
    'padding-right',
    'padding-bottom',
    'width',
    'height',
    'border',
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'top',
    'left',
    'bottom',
    'right',
    'margin',
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-bottom'
  ]
};

gulp.task('sass', function(){
  return gulp
    .src('src/sass/main.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    //.pipe(sourcemaps.write())
    .pipe(gcmq())
    .pipe(autoprefixer(autoprefixerOptions))
    //.pipe(pxtorem(pxtoremOptions))
    .pipe(gulp.dest('docroot/templates/2017-theme/'))
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

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  //gulp.watch('src/icons/**/*.svg', ['iconfont','sass']);
});

gulp.task('default', ['sass','watch']);
