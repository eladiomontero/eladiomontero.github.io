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
  tagline: "My work focuses on the human side of technology.",
  // A couple of sentences under the intro.
  intro: "I’m a researcher and data scientist with a PhD in AI and game theory, currently a postdoc in Brussels. I care about technology that's built responsibly and made to last, and often use data and computational models to help get it there. A challenge I’m focusing on is AI-human cooperation: as AI increasingly makes decisions for and with us, understanding how to develop it in alignment with our values matters more than ever.",
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
      blurb: "A digital twin of city traffic. It uses live and historical sensor data into mobility models so cities can test a road change before they commit to it.",
      link: "https://traffictwin.ulb.be/",
    },
    {
      title: "When personalisation goes bad",
      tag: "Digital Platforms",
      blurb: "Modelling how recommendation algorithms reshape content quality and the incentives of creators and users, and where personalisation quietly makes everyone worse off.",
      link: "",
    },
    {
      title: "LLMs in resource dilemmas",
      tag: "AI behaviour",
      blurb: "Benchmarking flagship language models on risk and shared-resource decisions, then checking how their choices line up against what real people do.",
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
     "Finished", "On the shelf"). `review` is your one-line take — leave it as
     "" to show nothing, or add a sentence and it appears under the book.
     Long titles: put a ": " before the subtitle and it tucks underneath.
     Add or remove freely; set reading: [] to hide. Shows 6 per page. */
  reading: [
    { title: "The Alignment Problem", author: "Brian Christian", status: "Reading now", review: "" },
    { title: "Human Compatible", author: "Stuart Russell", status: "On the shelf", review: "" },
    { title: "If Anyone Builds It, Everyone Dies: Why Superhuman AI Would Kill Us All", author: "Eliezer Yudkowsky, Nate Soares", status: "On the shelf", review: "" },
    { title: "Enshittification: Why Everything Suddenly Got Worse and What to Do About It", author: "Cory Doctorow", status: "Finished", review: "" },
    { title: "Perfection", author: "Vincenzo Latronico", status: "Finished", review: "" },
    { title: "El oficio de ser extranjero", author: "Roger Bartra", status: "Finished", review: "" },
  ],

  /* --- Skills / toolkit ---------------------------------------------------
     Grouped so it reads as scannable chips, not a paragraph. Trim or reorder
     items freely; the shortest, most recognisable labels read best. */
  skills: [
    { group: "Programming & data", items: ["Python", "R", "SQL", "Java", "JavaScript", "Pandas / NumPy", "scikit-learn", "ETL pipelines"] },
    { group: "Statistical modelling", items: ["Machine Learning","Mixed-effects models", "GAMs", "Bayesian inference", "Regression", "Bootstrapping", "Power analysis"] },
    { group: "Behavioural science", items: ["Experiment design","oTree", "Prolific", "Pre-registration", "Data privacy compliance"] },
    { group: "Simulation & modelling", items: ["Agent-based models", "Evolutionary game theory", "SUMO traffic sim", "Digital twins"] },
    { group: "Geospatial", items: ["QGIS", "OpenStreetMap", "GeoPandas"] },
    { group: "Communication & teams", items: ["Peer-reviewed writing", "Funding proposal writing", "Science comms", "Student supervision", "Multi-stakeholder projects"] },
  ],
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "C2" },
    { name: "French", level: "B1" },
    { name: "Portuguese", level: "A2" },
  ],

  /* --- Experience timeline ------------------------------------------------
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
