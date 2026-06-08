/* global React */
const { useState, useEffect, useRef } = React;

const C = window.SITE_CONTENT;

/* ---- accent + theme maps (CSS-variable driven) -------------------------- */
const ACCENTS = {
  Clay: "#C0663F",
  Forest: "#587E5F",
  Indigo: "#5566A0",
  Plum: "#8C5E8E"
};
const THEMES = {
  paper: { bg: "#f4f0e7", surface: "#fffdf7", ink: "#221d16", muted: "#6f6557", line: "rgba(34,29,22,.12)", code: "#8a7c66" },
  cool: { bg: "#eef0f3", surface: "#ffffff", ink: "#191c22", muted: "#697080", line: "rgba(25,28,34,.12)", code: "#838b9b" },
  dark: { bg: "#15130e", surface: "#211d16", ink: "#f1ecdf", muted: "#a79d8b", line: "rgba(241,236,223,.14)", code: "#9c907a" }
};

/* ---- tiny scroll-reveal hook -------------------------------------------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) {e.target.setAttribute("data-shown", "");io.unobserve(e.target);}});
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((el) => io.observe(el));
    // safety: if observer never fires (some embedded viewports), reveal everything
    const fallback = setTimeout(() => els.forEach((el) => el.setAttribute("data-shown", "")), 1400);
    return () => {io.disconnect();clearTimeout(fallback);};
  }, []);
}

/* ---- icons -------------------------------------------------------------- */
function Icon({ name }) {
  const p = { width: 17, height: 17, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "email":return <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
    case "linkedin":return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" /></svg>;
    case "scholar":return <svg {...p}><path d="M12 4 2 9l10 5 8-4v6" /><path d="M6 12v4c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-4" /></svg>;
    case "github":return <svg {...p}><path d="M9 19c-4 1.4-4-2-6-2.5M15 21v-3.4c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C9.3 1.4 8.3 1.7 8.3 1.7a4.4 4.4 0 0 0-.1 3.2A4.7 4.7 0 0 0 6.8 8c0 4.6 2.7 5.7 5.5 6-.4.4-.6.9-.5 1.6V21" /></svg>;
    default:return <svg {...p}><path d="M7 17 17 7M9 7h8v8" /></svg>;
  }
}

/* ---- nav ---------------------------------------------------------------- */
function Nav() {
  const items = [
  ["research", "Research"],
  C.projects && C.projects.length ? ["projects", "Projects"] : null,
  C.writing && C.writing.length ? ["writing", "Writing"] : null,
  C.reading && C.reading.length ? ["reading", "Reading"] : null,
  C.experience && C.experience.length ? ["experience", "Experience"] : null,
  ["contact", "Contact"]].
  filter(Boolean);
  return (
    <nav className="nav">
      <a href="#top" className="nav-name">EM<span>.</span></a>
      <div className="nav-links">
        {items.map(([id, label]) => <a key={id} href={"#" + id}>{label}</a>)}
      </div>
    </nav>);

}

/* ---- hero --------------------------------------------------------------- */
function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-text" data-reveal>
        <p className="eyebrow">{C.role}</p>
        <h1 className="hero-name">{C.name}</h1>
        <p className="hero-tagline">{C.tagline}</p>
        <p className="lede">{C.intro}</p>
        <div className="chips">
          {C.focus.map((f) => <span className="chip" key={f}>{f}</span>)}
        </div>
        <div className="link-row">
          {C.links.map((l) =>
          l.icon === "email" ?
          <a className="linkbtn" key={l.label} href="#contact">
              <Icon name="email" /><span>Contact</span>
            </a> :
          <a className="linkbtn" key={l.label} href={l.href} target="_blank" rel="noreferrer">
              <Icon name={l.icon} /><span>{l.label}</span>
            </a>
          )}
        </div>
      </div>
      <div className="hero-photo" data-reveal>
        <div className="photo-wrap">
          <img src={C.photo} alt={C.name} onError={(e) => {e.target.parentNode.classList.add("photo-fallback");e.target.style.display = "none";}} />
          <span className="photo-ph">your photo</span>
        </div>
      </div>
    </header>);

}

/* ---- section heading ---------------------------------------------------- */
function Head({ n, kicker, title }) {
  return (
    <div className="head" data-reveal>
      <span className="head-n">{n}</span>
      <div>
        <p className="kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
    </div>);

}

/* ---- research ----------------------------------------------------------- */
function Research({ n }) {
  return (
    <section id="research" className="section">
      <Head n={n} kicker="Selected publications" title="Work I'm proud of" />
      <div className="papers">
        {C.research.map((r, i) =>
        <a className="paper" href={r.url} target="_blank" rel="noreferrer" data-reveal style={{ transitionDelay: `${i * 70}ms` }} key={r.title}>
            <div className="paper-thumb">
              <img src={r.thumb} alt="" onError={(e) => {e.target.style.display = "none";}} />
            </div>
            <div className="paper-body">
              <div className="paper-meta"><span>{r.venue}</span><span className="dot">·</span><span>{r.year}</span></div>
              <h3>{r.title}</h3>
              <p>{r.blurb}</p>
              <span className="paper-link">Read it <Icon name="ext" /></span>
            </div>
          </a>
        )}
      </div>
      <a className="more" href="https://scholar.google.com/citations?user=XiiTJ4UAAAAJ&hl=en" target="_blank" rel="noreferrer">Full list on Google Scholar <Icon name="ext" /></a>
    </section>);

}

/* ---- projects ----------------------------------------------------------- */
function Projects({ n }) {
  if (!C.projects || !C.projects.length) return null;
  return (
    <section id="projects" className="section alt">
      <Head n={n} kicker="Right now" title="What I'm working on" />
      <div className="grid">
        {C.projects.map((p, i) =>
        <div className="card" data-reveal style={{ transitionDelay: `${i * 70}ms` }} key={i}>
            <span className="card-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.blurb}</p>
            {p.link ? <a className="card-link" href={p.link} target="_blank" rel="noreferrer">View <Icon name="ext" /></a> : null}
          </div>
        )}
      </div>
    </section>);

}

/* ---- writing ------------------------------------------------------------ */
function Writing({ n }) {
  if (!C.writing || !C.writing.length) return null;
  return (
    <section id="writing" className="section">
      <Head n={n} kicker="Writing" title="Notes & half-formed ideas" />
      <ul className="posts">
        {C.writing.map((w, i) => {
          const Tag = w.href ? "a" : "div";
          const props = w.href ? { href: w.href, target: "_blank", rel: "noreferrer" } : {};
          return (
            <li data-reveal key={i}>
              <Tag className="post" {...props}>
                <span className="post-title">{w.title}</span>
                <span className="post-date">{w.date}{w.href ? <Icon name="ext" /> : null}</span>
              </Tag>
            </li>);

        })}
      </ul>
    </section>);

}

/* ---- reading ------------------------------------------------------------ */
function Reading({ n }) {
  if (!C.reading || !C.reading.length) return null;
  return (
    <section id="reading" className="section alt">
      <Head n={n} kicker="Reading" title="On my shelf" />
      <div className="shelf">
        {C.reading.map((b, i) =>
        <div className="book" data-reveal style={{ transitionDelay: `${i * 55}ms` }} key={i}>
            <span className="book-status">{b.status}</span>
            <h3>{b.title}</h3>
            <p>{b.author}</p>
          </div>
        )}
      </div>
    </section>);

}

/* ---- experience --------------------------------------------------------- */
function Experience({ n }) {
  if (!C.experience || !C.experience.length) return null;
  return (
    <section id="experience" className="section">
      <Head n={n} kicker="The path here" title="Where I've worked" />
      <div className="timeline">
        {C.experience.map((e, i) =>
        <div className="tl-row" data-reveal style={{ transitionDelay: `${i * 60}ms` }} key={i}>
            <div className="tl-period">{e.period}</div>
            <div className="tl-main">
              <h3>{e.role} <span className="tl-org">· {e.org}</span></h3>
              <p>{e.note}</p>
            </div>
          </div>
        )}
      </div>
    </section>);

}

/* ---- contact ------------------------------------------------------------ */
function Contact() {
  return (
    <section id="contact" className="contact">
      <div data-reveal>
        <h2 className="display">{C.contactHeadline}</h2>
        <p className="lede">{C.contactBody}</p>
        <div className="link-row big">
          {C.links.map((l) =>
          <a className="linkbtn" key={l.label} href={l.href} target={l.icon === "email" ? undefined : "_blank"} rel="noreferrer">
              <Icon name={l.icon} /><span>{l.label}</span>
            </a>
          )}
        </div>
      </div>
      <footer className="foot">
        <span>© {new Date().getFullYear()} {C.name}</span>
        <span className="foot-made">Built to be easy to update</span>
      </footer>
    </section>);

}

/* ---- tweaks ------------------------------------------------------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "paper",
  "accent": "Clay",
  "serifHero": true
} /*EDITMODE-END*/;

function Panel({ t, setTweak }) {
  return (
    <window.TweaksPanel>
      <window.TweakSection label="Background" />
      <window.TweakRadio label="Theme" value={t.theme} options={["paper", "cool", "dark"]} onChange={(v) => setTweak("theme", v)} />
      <window.TweakSection label="Accent" />
      <window.TweakColor label="Colour" value={ACCENTS[t.accent]}
      options={Object.values(ACCENTS)}
      onChange={(hex) => setTweak("accent", Object.keys(ACCENTS).find((k) => ACCENTS[k] === hex) || "Clay")} />
      <window.TweakSection label="Type" />
      <window.TweakToggle label="Serif headline" value={t.serifHero} onChange={(v) => setTweak("serifHero", v)} />
    </window.TweaksPanel>);

}

/* ---- app ---------------------------------------------------------------- */
function App() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  useReveal();

  useEffect(() => {
    const r = document.documentElement;
    const th = THEMES[t.theme] || THEMES.paper;
    Object.entries(th).forEach(([k, v]) => r.style.setProperty("--" + k, v));
    r.style.setProperty("--accent", ACCENTS[t.accent] || ACCENTS.Clay);
    r.style.setProperty("--hero-font", t.serifHero ? "var(--serif)" : "var(--sans)");
    r.style.setProperty("--hero-weight", t.serifHero ? "500" : "600");
  }, [t]);

  // auto-number the sections that actually render, so removing one leaves no gap
  const order = [
  ["research", true],
  ["projects", C.projects && C.projects.length],
  ["writing", C.writing && C.writing.length],
  ["reading", C.reading && C.reading.length],
  ["experience", C.experience && C.experience.length]].
  filter(([, v]) => v);
  const num = {};
  order.forEach(([k], i) => {num[k] = String(i + 1).padStart(2, "0");});

  return (
    <React.Fragment>
      <Nav />
      <main className="wrap">
        <Hero />
        <Research n={num.research} />
        <Projects n={num.projects} />
        <Writing n={num.writing} />
        <Reading n={num.reading} />
        <Experience n={num.experience} />
        <Contact />
      </main>
      <Panel t={t} setTweak={setTweak} />
    </React.Fragment>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);