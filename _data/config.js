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
    chapterNo: "SBC13081",
  },

  banner: {
    src: "/assets/CS_X_CS_MAIN.jpg",
    alt: "IEEE Computer Society Main x IEEE Computer Society UCF"
    // src: "/assets/csglobe.png",
    // alt: "IEEE Computer Society globe logo over the horizon",
  },

  nav: [
    { label: "Home", href: "index.html", current: true },
  ],
  // navDisabled: "disabled link",

  ticker: [
    "We're officially a UCF RSO! Join us on <a href='https://knightconnect.campuslabs.com/engage/organization/ieee-cs'>KnightConnect</a>!",
    "Follow us on <a href='go.csucf.org/ig'>Instagram</a>!",
    "Join us on <a href='go.csucf.org/discord'>Discord</a>!",
  ],


  news: [
    { date: "08/01/2026", text: "Join us on KnightConnect <a href='https://knightconnect.campuslabs.com/engage/organization/ieee-cs'>here</a>!" },
  ],

  board: { term: "2026–2027" },
  officers: [
    { role: "President", name: "Eren Siegman" },
    { role: "Vice President", name: "Rafeed Khan" },
    { role: "Secretary", name: "Dawn Balaschak" },
    { role: "Treasurer", name: "Harrison Hilpert" },
    { role: "Graduate Student Advisor", name: "Michael Castiglia" },
    { role: "Marketing Chair", name: "Yacobe Amin" },
    { role: "Design Chair", name: "Leah Greco" },
    { role: "Workshop Chair", name: "Richard Hammingh" },
    { role: "Software Chair", name: "Nishant Gandhi" },
    { role: "Project Chair", name: "Ayman Bennani" },
    { role: "Outreach Chair", name: "Jack Vertus" },
  ],

  meeting: [
    { label: "TechX", value: "TBA" },
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

    { top: "JOIN OUR", bottom: "DISCORD", variant: "knightconnect", href: "https://go.csucf.org/discord" },
    { top: "FOLLOW US ON", bottom: "INSTAGRAM", variant: "knightconnect", href: "https://go.csucf.org/ig" },
    { top: "JOIN US ON", bottom: "KNIGHTCONNECT", variant: "knightconnect", href: "https://knightconnect.campuslabs.com/engage/organization/ieee-cs" },
    { top: "VALID", bottom: "HTML 5" },
    { top: "UNDER", bottom: "CONSTRUCTION", variant: "construction" },
  ],
};
