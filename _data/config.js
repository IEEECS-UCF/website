// everything on the page that isn't a post
const readableDate = require("../lib/readable-date.js");

module.exports = {
  site: {
    // this is shown in the opengraph embeds (e.g. discord)
    pageTitle: "UCF IEEE Computer Society",
    description:
      "Official site of the University of Central Florida Student Chapter of the IEEE Computer Society",
    title: "IEEE Computer Society",
    subtitle: "University of Central Florida Student Chapter",
    location: "Orlando, Florida",
    chapterNo: "676942",
  },

  nav: [
    { label: "Home", href: "index.html", current: true },
  ],
  // navDisabled: "disabled link",

  ticker: [
    "We're officially a UCF RSO! Join us on <a href='https://knightconnect.campuslabs.com/engage/organization/ieee-cs'>KnightConnect</a>!",
    // "i wuz here",
  ],


  news: [
    { date: "08/01/2026", text: "Join us on KnightConnect <a href='https://knightconnect.campuslabs.com/engage/organization/ieee-cs'>here</a>!" },
  ],

  board: { term: "2026–2027" },
  officers: [
    { role: "President", name: "Eren Siegman", standing: "-" },
    { role: "Vice President", name: "Rafeed Khan", standing: "-" },
    { role: "Secretary", name: "Dawn Balaschak", standing: "-" },
    { role: "Treasurer", name: "Harrison Hilpert", standing: "-" },
    { role: "Graduate Student Advisor", name: "Michael Castiglia", standing: "-" },
    { role: "Marketing Chair", name: "Yacobe Amin", standing: "-" },
    { role: "Design Chair", name: "Leah Greco", standing: "-" },
    { role: "Workshop Chair", name: "Richard Hammingh", standing: "-" },
    { role: "Software Chair", name: "Nishant Gandhi", standing: "-" },
    { role: "Project Chair", name: "Ayman lastname", standing: "-" },
    { role: "Outreach Chair", name: "Vacant", standing: "-" },
  ],

  meeting: [
    { label: "General Body", value: "TBA" },
  ],

  footer: {
    updated: readableDate(new Date(), "America/New_York"),
    emailHref: "webmaster@csucf.org",
    emailText: "webmaster@csucf.org",
    legal: "Copyright &#169; smile :)",
  },

  counter: { digits: String(Math.floor(Math.random()*999999)).padStart(6, '0'), since: "08/11/2026" },

  badges: [
    { top: "IEEE REGION 3", bottom: "STUDENT CHAPTER" },
    { top: "OFFICIAL UCF", bottom: "STUDENT RSO", variant: "gold" },
    { top: "VALID", bottom: "HTML 5" },
    { top: "JOIN US ON", bottom: "KNIGHTCONNECT", variant: "knightconnect", href: "https://knightconnect.campuslabs.com/engage/organization/ieee-cs" },
    { top: "UNDER", bottom: "CONSTRUCTION", variant: "construction" },
  ],
};
