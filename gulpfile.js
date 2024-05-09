const { src, dest, watch, series, parallel } = require("gulp");
const options = require("./config");

function prodClean() {
  console.log("\n\t" + logSymbols.info, "Cleaning build folder for fresh start.\n");
  return src(options.paths.docroot.base, { read: false, allowEmpty: true }).pipe(clean());
}

exports.prod = series();
// prodClean // Clean Build Folder
// parallel(prodStyles, prodScripts, prodImages, prodHTML, prodFonts, prodThirdParty), //Run All tasks in parallel
// buildFinish
