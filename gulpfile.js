const { src, dest, watch, series, parallel } = require("gulp");
const options = require("./config");
const clean = require("gulp-clean");

const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");

var twig = require("gulp-twig");

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

function buildFinish(done) {
  console.log("\n\t" + `Production build is complete. Files are located at ${options.paths.docroot.base}\n`);
  done();
}

exports.prod = series(
  prodClean, // Clean Build Folder
  parallel(prodStyles, prodTwig),
  // parallel(prodStyles, prodScripts, prodImages, prodHTML, prodFonts, prodThirdParty), //Run All tasks in parallel
  buildFinish
);
