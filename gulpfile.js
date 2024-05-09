const { src, dest, watch, series, parallel } = require("gulp");
const options = require("./config");
const clean = require("gulp-clean");

const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

function prodClean() {
  console.log("\n\t" + "Cleaning build folder for fresh start.\n");
  return src(options.paths.docroot.base, { read: false, allowEmpty: true }).pipe(clean());
}

function prodStyles() {
  console.log("HOWDY DOOOOOO!!");
  return src(`${options.paths.src.css}/**/*.scss`).pipe(sass().on("error", sass.logError)).pipe(dest(options.paths.docroot.css));
}

function buildFinish(done) {
  console.log("\n\t" + `Production build is complete. Files are located at ${options.paths.docroot.base}\n`);
  done();
}

exports.prod = series(
  prodClean, // Clean Build Folder
  parallel(prodStyles),
  // parallel(prodStyles, prodScripts, prodImages, prodHTML, prodFonts, prodThirdParty), //Run All tasks in parallel
  buildFinish
);
