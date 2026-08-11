// shared by the eleventy `readableDate` filter for posts
// and _data/config.js
module.exports = function readableDate(date, timeZone = "UTC") {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone }).format(date);
};
