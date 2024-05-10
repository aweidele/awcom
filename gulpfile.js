const { src, dest, watch, series, parallel } = require("gulp");
const options = require("./config");
const browserSync = require("browser-sync").create();

const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const clean = require("gulp-clean");
const tailwindcss = require("tailwindcss");

const concat = require("gulp-concat"); //For Concatinating js,css files
const uglify = require("gulp-terser");

var twig = require("gulp-twig");

const jsQueue = [`${options.paths.src.js}/**/*.js`];
// const jsQueue = [`${options.paths.src.js}/libs/**/*.js`, `${options.paths.src.js}/**/*.js`];

/** Browser Sync */
function livePreview(done) {
  browserSync.init({
    server: {
      baseDir: options.paths.dist.base,
    },
    port: options.config.port || 1225,
  });
  done();
}

function previewReload(done) {
  console.log("\n\t" + "Reloading Browser Preview.\n");
  browserSync.reload();
  done();
}

function watchFiles() {
  watch(`${options.paths.src.base}/**/*.twig`, series(devTwig, devStyles, previewReload));
  watch([options.config.tailwindjs, `${options.paths.src.css}/**/*.scss`], series(devStyles, previewReload));
  watch(`${options.paths.src.js}/**/*.js`, series(devScripts, previewReload));
}

/** Dev Tasks */
function devClean() {
  console.log("\n\t" + "Cleaning dist folder for fresh start.\n");
  return src(options.paths.dist.base, { read: false, allowEmpty: true }).pipe(clean());
}

function devStyles() {
  console.log("\n\t" + "Compiling styles.\n");
  return src(`${options.paths.src.css}/**/*.scss`)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([tailwindcss(options.config.tailwindjs), autoprefixer()]))
    .pipe(dest(options.paths.dist.css));
}

function devTwig() {
  console.log("\n\t" + "Compiling HTML.\n");
  return src([`${options.paths.src.base}/**/*.twig`, `!${options.paths.src.base}/twig/templates/**/*.twig`])
    .pipe(twig())
    .pipe(dest(options.paths.dist.base));
}

function devScripts() {
  return src(jsQueue)
    .pipe(concat({ path: "scripts.js" }))
    .pipe(dest(options.paths.dist.js));
}

/** Production Tasks */
function prodClean() {
  console.log("\n\t" + "Cleaning build folder for fresh start.\n");
  return src(options.paths.docroot.base, { read: false, allowEmpty: true }).pipe(clean());
}

function prodStyles() {
  console.log("\n\t" + "Compiling styles.\n");
  return (
    src(`${options.paths.src.css}/**/*.scss`)
      .pipe(sass().on("error", sass.logError))
      // .pipe(postcss([tailwindcss(options.config.tailwindjs), autoprefixer(), cssnano()]))
      .pipe(postcss([tailwindcss(options.config.tailwindjs), autoprefixer()]))
      .pipe(dest(options.paths.docroot.css))
  );
}

function prodTwig() {
  console.log("\n\t" + "Compiling HTML.\n");
  return src([`${options.paths.src.base}/**/*.twig`, `!${options.paths.src.base}/twig/templates/**/*.twig`])
    .pipe(twig())
    .pipe(dest(options.paths.docroot.base));
}

function prodScripts() {
  return src(jsQueue)
    .pipe(concat({ path: "scripts.js" }))
    .pipe(uglify())
    .pipe(dest(options.paths.docroot.js));
}

function buildFinish(done) {
  console.log("\n\t" + `Production build is complete. Files are located at ${options.paths.docroot.base}\n`);
  done();
}

exports.prod = series(
  prodClean, // Clean Build Folder
  parallel(prodStyles, prodTwig, prodScripts),
  // parallel(prodStyles, prodScripts, prodImages, prodHTML, prodFonts, prodThirdParty), //Run All tasks in parallel
  buildFinish
);

exports.default = series(devClean, parallel(devStyles, devTwig, devScripts), livePreview, watchFiles);
