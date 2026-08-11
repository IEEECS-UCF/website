const readableDate = require("./lib/readable-date.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("csglobe.png");

  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.ignores.add("README.md");

  return {
    dir: { input: ".", output: "out" },
    templateFormats: ["html", "njk", "md"],
  };
};
