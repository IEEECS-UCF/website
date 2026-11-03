const readableDate = require("./lib/readable-date.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");

  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.ignores.add("README.md");

  return {
    dir: { input: ".", output: "out" },
    templateFormats: ["html", "njk", "md"],
  };
};
