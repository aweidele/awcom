var gulp = require("gulp");
var sass = require("gulp-sass")(require("node-sass"));
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var pxtorem = require("gulp-pxtorem");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var terser = require("gulp-terser");
var twig = require("gulp-twig");
var pump = require("pump");
var imagemin = require("gulp-imagemin");
var server = require("gulp-webserver");
var gcmq = require("gulp-group-css-media-queries");

var content = require("./src/content/site.json");
// var iconfont = require('gulp-iconfont');
// var iconfontCss = require('gulp-iconfont-css');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "compressed",
};

var autoprefixerOptions = {
  browsers: ["last 2 versions"],
  grid: true,
};

var pxtoremOptions = {
  propList: ["font", "font-size", "line-height", "padding", "padding-top", "padding-left", "padding-right", "padding-bottom", "width", "height", "border", "border-radius", "border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius", "top", "left", "bottom", "right", "margin", "margin-left", "margin-right", "margin-top", "margin-bottom"],
};

var jsQueue = ["node_modules/tiny-slider/dist/tiny-slider.js", "src/js/*.js"];

gulp.task("sass", function () {
  return (
    gulp
      .src("src/sass/style.scss")
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on("error", sass.logError))
      //.pipe(sourcemaps.write())
      .pipe(gcmq())
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(pxtorem(pxtoremOptions))
      .pipe(gulp.dest("docroot/css/"))
  );
});

gulp.task("compress", function () {
  return gulp.src(jsQueue).pipe(concat("scripts.js")).pipe(gulp.dest("docroot/js")).pipe(rename("site.js")).pipe(terser()).pipe(gulp.dest("docroot/js"));
});

gulp.task("iconfont", function () {
  gulp
    .src(["src/icons/*.svg"])
    .pipe(
      iconfontCss({
        fontName: "aw_glyphs",
        targetPath: "src/sass/_icons.scss",
        fontPath: "fonts/",
      })
    )
    .pipe(
      iconfont({
        fontName: "aw_glyphs",
        normalize: true,
        fontHeight: 1001,
      })
    )
    .pipe(gulp.dest("docroot/fonts/"));
});

gulp.task("compile", function () {
  "use strict";
  return gulp
    .src(["src/twig/**/*.twig", "!src/twig/templates/**/*.twig"])
    .pipe(
      twig({
        data: content,
      })
    )
    .pipe(gulp.dest("docroot/"));
});

gulp.task("images", function () {
  return gulp.src("src/images/**/*").pipe(imagemin()).pipe(gulp.dest("docroot/images"));
});

gulp.task("server", function () {
  gulp
    .src("docroot") // <-- your app folder
    .pipe(
      server({
        livereload: true,
        open: true,
        port: 1234, // set a port to avoid conflicts with other local apps
      })
    );
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("src/js/**/*.js", gulp.series("compress"));
  gulp.watch("src/twig/**/*.twig", gulp.series("compile"));
  gulp.watch("src/images/**/*", gulp.series("images"));
  //gulp.watch('src/icons/**/*.svg', ['iconfont','sass']);
});

gulp.task("default", gulp.series("sass", "compress", "compile", "images", "watch", "server"));
gulp.task("start", gulp.series("server", "watch"));
