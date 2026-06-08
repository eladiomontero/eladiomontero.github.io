/* =============================================================================
   YOUR CONTENT  —  edit this file to update the site. Nothing else needed.

   Each section below is a plain list. To add an item, copy an existing block
   between the { } braces, paste it, and change the text. Keep the commas.
   Lines starting with // are notes to you and don't show up on the site.
   ============================================================================= */

window.SITE_CONTENT = {

  /* --- Who you are (shows in the hero up top) ------------------------------ */
  name: "Eladio Montero-Porras",
  role: "Postdoctoral Researcher · ULB, Brussels",
  // The big intro line. Keep it short and human.
  tagline: "I study how people, and now AI, make decisions and what those choices add up to.",
  // A couple of sentences under the intro.
  intro: "Researcher and data scientist with a PhD in AI and game theory, now a postdoc in Brussels. I care about technology that's built responsibly and made to last, and I use behavioural science, data and computational models to help get it there. Now that AI agents are starting to decide alongside us, getting these collective dynamics right matters more than ever.",
  photo: "https://eladiomontero.com/images/profile_square.jpg",

  // Top links / contact. icon is one of: email, linkedin, scholar, github, twitter, web
  links: [
    { label: "Email",          icon: "email",   href: "mailto:eladiomontero@gmail.com" },
    { label: "LinkedIn",       icon: "linkedin", href: "https://www.linkedin.com/in/eladiomontero/" },
    { label: "Google Scholar", icon: "scholar",  href: "https://scholar.google.com/citations?user=XiiTJ4UAAAAJ&hl=en" },
    { label: "GitHub",         icon: "github",   href: "https://github.com/eladiomontero/" },
  ],

  /* --- A few things you're known for / care about (small chips in hero) ---- */
  focus: ["Social dilemmas", "Collective behaviour", "Human–AI interaction", "AI governance", "Behavioural experiments"],

  /* --- Selected research --------------------------------------------------- */
  research: [
    {
      title: "From self-interest to collective action: the role of defaults",
      venue: "PLOS One",
      year: "2025",
      url: "https://arxiv.org/abs/2403.06796",
      thumb: "https://eladiomontero.com/images/thumbs/cpr.jpg",
      blurb: "Set a default and selfish players start cooperating. But the same nudge quietly pulls the already-generous toward taking more. One lever, two opposite effects.",
    },
    {
      title: "Drift-diffusion models in strategic games",
      venue: "Scientific Reports",
      year: "2022",
      url: "https://www.nature.com/articles/s41598-022-24849-4",
      thumb: "https://eladiomontero.com/images/thumbs/ddm2.jpg",
      blurb: "How long someone takes to decide says a lot about how they play. Fast deciders tend to repeat the same move no matter what the other side does.",
    },
    {
      title: "Inferring strategies in the Prisoner's Dilemma with machine learning",
      venue: "Scientific Reports",
      year: "2022",
      url: "https://www.nature.com/articles/s41598-022-11654-2",
      thumb: "https://eladiomontero.com/images/thumbs/strategy.jpg",
      blurb: "People don't use the tidy strategies game theory assumes. This is a method to read the noisy, context-dependent ones they actually fall back on.",
    },
  ],

  /* --- What I'm working on now --------------------------------------------
     `tag` is the little label, `link` is optional (delete the line if none). */
  projects: [
    {
      title: "TrafficTwin",
      tag: "Digital twin · ULB",
      blurb: "A digital twin of city traffic. I feed live and historical sensor data into mobility models so cities can test a road change before they commit to it.",
      link: "https://traffictwin.ulb.be/",
    },
    {
      title: "LLMs in resource dilemmas",
      tag: "AI behaviour",
      blurb: "Benchmarking flagship language models on risk and shared-resource decisions, then checking how their choices line up against what real people do.",
      link: "",
    },
    {
      title: "When personalisation goes bad",
      tag: "AI governance",
      blurb: "Modelling how recommendation algorithms reshape content quality and the incentives of creators and users, and where personalisation quietly makes everyone worse off.",
      link: "",
    },
  ],

  /* --- Writing / notes ----------------------------------------------------
     Hidden for now (writing: []). To bring it back, add items like:
       { title: "What overfishing teaches us about AI agents", date: "Jun 2026", href: "" },
     and the Writing section + nav link reappear automatically. */
  writing: [],

  /* --- Reading / bookshelf ------------------------------------------------
     Brag a little. `status` is the small label (e.g. "Reading now",
     "Finished", "On the shelf"). Add or remove freely; set reading: [] to hide. */
  reading: [
    { title: "Governing the Commons", author: "Elinor Ostrom", status: "Re-reading" },
    { title: "The Alignment Problem", author: "Brian Christian", status: "Reading now" },
    { title: "The Evolution of Cooperation", author: "Robert Axelrod", status: "On the shelf" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", status: "Finished" },
  ],

  /* --- Experience timeline ------------------------------------------------
     PLACEHOLDERS — fill in real roles, places and years from your CV.
     Most recent first. */
  experience: [
    { period: "2024 – now",  role: "Postdoctoral Researcher", org: "Université Libre de Bruxelles", note: "Extending behavioural game-theory work to LLMs, and coordinating the TrafficTwin digital twin." },
    { period: "2018 – 2024", role: "PhD Researcher",          org: "VUB / ULB",                    note: "Doctorate in AI and game theory. Online experiments and cognitive models of decisions in social dilemmas." },
    { period: "2017 – 2018", role: "MSc, Artificial Intelligence", org: "KU Leuven",               note: "Cum laude." },
    { period: "2015 – 2016", role: "Data Engineer",           org: "Intel",                       note: "Automated HR forecasting pipelines, cutting processing overhead by 60%." },
  ],

  /* --- Footer call-to-action ---------------------------------------------- */
  contactHeadline: "Want to compare notes?",
  contactBody: "I'm always up for talking research, collaborations, or interesting problems where people and technology interact.",
};
