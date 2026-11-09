// everything on the page that isn't a post
const readableDate = require("../lib/readable-date.js");

const links = {
  discord: "https://go.csucf.org/discord",
  instagram: "https://www.instagram.com/ieeecsucf",
  linkedin: "https://www.linkedin.com/company/ieee-computer-society-at-ucf",
  github: "https://github.com/IEEECS-UCF",
  knightconnect: "https://knightconnect.campuslabs.com/engage/organization/ieee-cs",
};

module.exports = {
  links,

  site: {
    // this is shown in the opengraph embeds (e.g. discord)
    pageTitle: "IEEE Computer Society at UCF",
    description:
      "IEEE Computer Society student chapter at UCF for computer architecture, systems programming, GPUs, embedded and HPC. All majors welcome.",
    title: "IEEE Computer Society",
    url: "https://csucf.org",
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
    { label: "Home", href: "/", page: "/" },
    { label: "Projects", href: "/projects", page: "/projects.html" },
    { label: "TechX", href: "/techx", page: "/techx.html" },
  ],
  // navDisabled: "disabled link",

  ticker: [
    "We're an official UCF RSO! Join us on <a href='https://knightconnect.campuslabs.com/engage/organization/ieee-cs'>KnightConnect</a>!",
    "Follow us on <a href='https://go.csucf.org/ig'>Instagram</a>!",
    "Join us on <a href='https://go.csucf.org/discord'>Discord</a>!",
  ],


  news: [
    { date: "11/02/2026", text: `We're on LinkedIn! Follow us <a href="${links.linkedin}">here</a> for event recaps.` },
    { date: "11/02/2026", text: `Missed a workshop? Slides and code from Linux, Embedded and GPU Kernels are on our <a href="${links.github}">GitHub</a>.` },
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
    { role: "Project Chair", name: "Ethan Willover" },
    { role: "Outreach Chair", name: "Jack Vertus" },
  ],

  getInvolved: [
    { label: "Discord", value: `Join our <a href="${links.discord}">Discord</a> for events, announcements and help from other members.` },
    { label: "KnightConnect", value: `Join us on <a href="${links.knightconnect}">KnightConnect</a> to RSVP for events.` },
    { label: "Follow Us", value: `<a href="${links.instagram}">Instagram</a> &#183; <a href="${links.linkedin}">LinkedIn</a> &#183; <a href="${links.github}">GitHub</a>` },
  ],

  // functions/index.js swaps this row for the next events on Discord
  eventsFallback: "Check our <a href='https://go.csucf.org/discord'>Discord</a> for upcoming events.",

  footer: {
    updated: readableDate(new Date(), "America/New_York"),
    emailHref: "webmaster@csucf.org",
    emailText: "webmaster@csucf.org",
    legal: "Copyright &#169; smile :)",
  },

  // functions/index.js fills in the real count
  counter: { digits: "000000", since: "08/11/2026" },

  badges: [
    { top: "IEEE REGION 3", bottom: "STUDENT CHAPTER" },
    { top: "OFFICIAL UCF", bottom: "STUDENT RSO", variant: "gold" },

    { top: "JOIN OUR", bottom: "DISCORD", variant: "knightconnect", href: "https://go.csucf.org/discord" },
    { top: "FOLLOW US ON", bottom: "INSTAGRAM", variant: "knightconnect", href: "https://go.csucf.org/ig" },
    { top: "JOIN US ON", bottom: "KNIGHTCONNECT", variant: "knightconnect", href: "https://knightconnect.campuslabs.com/engage/organization/ieee-cs" },
    { top: "FOLLOW US ON", bottom: "LINKEDIN", variant: "knightconnect", href: "https://www.linkedin.com/company/ieee-computer-society-at-ucf" },
    { top: "SEE OUR", bottom: "GITHUB", variant: "knightconnect", href: "https://github.com/IEEECS-UCF" },
    { top: "VALID", bottom: "HTML 5" },
    { top: "UNDER", bottom: "CONSTRUCTION", variant: "construction" },
  ],
};
