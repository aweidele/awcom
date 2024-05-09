const config = {
  tailwindjs: "./tailwind.config.js",
};

// base folder paths
const basePaths = ["src", "dist", "docroot"];

// folder assets paths
const folders = ["css", "js", "img", "fonts", "third-party"];

const paths = {
  root: "./",
};

basePaths.forEach((base) => {
  paths[base] = {
    base: `./${base}`,
  };
  folders.forEach((folderName) => {
    const toCamelCase = folderName.replace(/\b-([a-z])/g, (_, c) => c.toUpperCase());
    paths[base][toCamelCase] = `./${base}/${folderName}`;
  });
});

module.exports = {
  config,
  // plugins,
  paths,
};
