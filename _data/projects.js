// the projects page (projects.njk). Edit and rebuild.

const github = "https://github.com/IEEECS-UCF";

module.exports = {
  intro:
    "Our projects are student-led and close to the hardware. Anyone can join one, whatever your major or experience: ask in our <a href='https://go.csucf.org/discord'>Discord</a> or talk to our Project Chair at any event.",

  // the chapter's own projects
  chapter: [
    {
      name: "Jetson Orin Laptop",
      status: "In progress",
      summary:
        "A laptop built around an NVIDIA Jetson Orin. Members are designing the carrier board, writing the embedded controller firmware, and working on getting Linux to boot on it.",
      areas: "PCB design, embedded firmware, Linux bring-up",
      next: "Linux running on our own carrier board by Demo Day in April.",
    },
    {
      name: "FPGA Design Competition",
      status: "Starting",
      summary:
        "A chapter competition for learning digital design. This fall is Verilog basics and small projects; in the spring, teams build their own designs.",
      areas: "Verilog, digital design, FPGAs",
      next: "Team designs judged at Demo Day in April.",
    },
  ],

  // software the chapter runs, built and kept up by members
  software: [
    {
      name: "Chapter Discord bot",
      href: `${github}/ieee-cs-bot`,
      summary: "Runs our Discord: event reminders, calendar sync, the job feed, membership checks, and tools for officers.",
    },
    {
      name: "This website",
      href: `${github}/website`,
      summary: "csucf.org, built with Eleventy. The events list comes straight from our Discord.",
    },
  ],

  // things members built on their own. Add one entry per project:
  // { name, by, summary, href (optional), date: "MM/DD/YYYY" }
  members: [],
  membersEmpty:
    "Built something close to the hardware on your own? Tell us in Discord or email <!--email_off--><a href='mailto:ieeecsucf@gmail.com'>ieeecsucf@gmail.com</a><!--/email_off-->, and we'll feature it here and on LinkedIn.",

  // workshop slides and code
  workshops: [
    { name: "Beginner's Guide to Linux", href: `${github}/Beginners-Guide-to-Linux` },
    { name: "Intro to Embedded", href: `${github}/Intro-to-Embedded` },
    { name: "Intro to GPU Kernels", href: `${github}/Intro-to-GPU-Kernels` },
    { name: "Uncommon Programming Languages", href: `${github}/Uncommon-Programming-Languages` },
    { name: "Formal Verification with AMD", href: `${github}/Formal-Verification-w-AMD` },
  ],
};
