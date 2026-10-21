import { useState } from "react";
import {
  ArrowDown, ArrowRight, ExternalLink, Github, Mail, Menu, X,
  Code2, BriefcaseBusiness, Sparkles, MonitorSmartphone, Send, Download
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Travel Agency Landing Page",
    category: "Landing page",
    description: "A travel-themed landing page built to present destinations and create a clear browsing experience.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Praveen-07058/Travel-agency-landing-page",
    demo: "https://travel-agency-landing-page-12.netlify.app/",
    visual: "travel",
    mark: "✈",
  },
  {
    number: "02",
    title: "Card Flipping Memory Game",
    category: "Interactive game",
    description: "A memory game experience focused on interactive card flips and matching gameplay.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Praveen-07058/Card-flipping-memory-game",
    demo: "https://card-flipping-memory-game-12.netlify.app/",
    visual: "memory",
    mark: "◈",
  },
  {
    number: "03",
    title: "Income & Expense Calculator",
    category: "Utility app",
    description: "A practical calculator interface for recording income and expenses and viewing totals.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Praveen-07058/Income-expense-calculator-task",
    demo: "https://income-expense-calculator-task-12.netlify.app/",
    visual: "finance",
    mark: "↗",
  },
  {
    number: "04",
    title: "Add to Cart — Modal",
    category: "E-commerce",
    description: "A shopping-cart project featuring product selection and a modal-based cart experience.",
    stack: ["React", "CSS", "API"],
    repo: "https://github.com/Praveen-07058/Add-to-cart-task-using-modal",
    demo: "https://add-to-cart-task-using-modal-12.netlify.app/",
    visual: "cart",
    mark: "＋",
  },
  {
    number: "05",
    title: "Add to Cart — React Router",
    category: "Multi-page app",
    description: "A multi-page shopping-cart project that demonstrates navigation and cart management.",
    stack: ["React", "React Router", "CSS"],
    repo: "https://github.com/Praveen-07058/Add-to-cart-task-using-router",
    demo: "https://add-to-cart-task-using-router-12.netlify.app/",
    visual: "router",
    mark: "↔",
  },
  {
    number: "06",
    title: "Movie Search App",
    category: "API-powered app",
    description: "A movie discovery interface for searching titles and exploring movie information.",
    stack: ["React", "API", "CSS"],
    repo: "https://github.com/Praveen-07058/Movies-search-app",
    demo: "https://movies-search-app-12.netlify.app/",
    visual: "movies",
    mark: "▶",
  },
];

const skills = [
  { name: "HTML", detail: "Semantic structure", icon: "H" },
  { name: "CSS", detail: "Responsive styling", icon: "C" },
  { name: "Tailwind CSS", detail: "Utility-first CSS", icon: "T" },
  { name: "JavaScript", detail: "Interactive experiences", icon: "JS" },
  { name: "React", detail: "Component-based UI", icon: "R" },
  { name: "Git & GitHub", detail: "Version control", icon: "⌘" },
];

function ProjectArtwork({ project }) {
  return (
    <div className={`project-art art-${project.visual}`} aria-hidden="true">
      <div className="art-topline"><span /><span /><span /></div>
      {project.visual === "travel" && (
        <div className="travel-scene">
          <div className="sun" />
          <div className="mountain mountain-back" />
          <div className="mountain mountain-front" />
          <div className="travel-copy"><small>EXPLORE THE WORLD</small><b>Find your<br />next escape.</b><i>Discover places worth remembering</i></div>
          <div className="travel-pill">Explore destinations ↗</div>
        </div>
      )}
      {project.visual === "memory" && (
        <div className="memory-board">{["✦", "●", "◆", "✦", "▲", "●", "◆", "▲"].map((v, i) => <span className={i === 0 || i === 3 ? "revealed" : ""} key={i}>{v}</span>)}</div>
      )}
      {project.visual === "finance" && (
        <div className="finance-ui"><small>YOUR BALANCE</small><strong>₹ 24,850</strong><div className="finance-stats"><span>Income<b>₹ 32,000</b></span><span>Expenses<b>₹ 7,150</b></span></div><div className="chart-bars">{[35, 55, 42, 74, 50, 88, 62, 95, 69].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div></div>
      )}
      {project.visual === "cart" && (
        <div className="shop-ui"><div className="shop-header"><b>shop.</b><span>⌕　♡　▢</span></div><div className="shop-products"><span className="product-shape shape-one">◒</span><span className="product-shape shape-two">◕</span><span className="product-shape shape-three">◓</span></div><div className="shop-lines"><i /><i /><i /></div><div className="mini-modal"><b>Your cart</b><span>Product added successfully</span><strong>Continue shopping　↗</strong></div></div>
      )}
      {project.visual === "router" && (
        <div className="router-ui"><div className="router-sidebar"><b>SHOP</b><i /><i /><i /><i /></div><div className="router-content"><small>YOUR CART</small><b>Shopping cart</b><div className="router-item"><span>◧</span><i /><strong>₹ 1,299</strong></div><div className="router-item"><span>◩</span><i /><strong>₹ 899</strong></div><div className="router-total">Total <b>₹ 2,198</b></div></div></div>
      )}
      {project.visual === "movies" && (
        <div className="movie-ui"><div className="movie-search">⌕　Search movies...</div><div className="movie-posters"><span>INTER<br />STELLAR</span><span>THE<br />BATMAN</span><span>ARRIVAL</span><span>INCEPTION</span></div><small>DISCOVER YOUR NEXT FAVOURITE</small></div>
      )}
      <div className="art-number">{project.number}</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const categories = ["All", "JavaScript", "React"];
  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "React") return project.stack.includes("React");
    return ["01", "02", "03"].includes(project.number);
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Praveen Sidharth home"><span className="brand-mark">PS</span><span>Praveen<span className="brand-dot">.</span></span></a>
          <button className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#projects" onClick={closeMenu}>Explore my work <ArrowRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> OPEN TO FRONTEND OPPORTUNITIES</div>
              <h1>Hi, I'm Praveen.<br /><span>I build for the web.</span></h1>
              <p className="hero-description">I'm a frontend developer focused on creating clean, responsive and user-friendly web experiences with React and modern web technologies.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my projects <ArrowRight size={17} /></a>
                <a className="button button-secondary" href="mailto:praveen07058@gmail.com"><Mail size={17} /> Get in touch</a>
                <a className="button button-secondary" href="/resume.pdf" download="Praveen-Sidharth-Resume.pdf"><Download size={17} /> Download Resume</a>
              </div>
              <div className="hero-meta"><span><Code2 size={16} /> Frontend Development</span><span><MonitorSmartphone size={16} /> Responsive UI</span></div>
            </div>
            <div className="hero-visual">
              <div className="visual-glow" />
              <div className="profile-card">
                <div className="profile-card-top"><span>PROFILE / 001</span><Sparkles size={17} /></div>
                <div className="photo-placeholder">
                  <img className="profile-photo" src="/profile.jpg" alt="Praveen Sidharth" />
                </div>
                <div className="profile-card-bottom"><div><strong>Praveen Sidharth</strong><span>Frontend Developer</span></div><span className="profile-arrow"><ArrowDown size={18} /></span></div>
              </div>
              <div className="floating-chip chip-react"><span>⚛</span> React</div>
              <div className="floating-chip chip-code"><Code2 size={17} /> Clean code, thoughtful UI</div>
              <div className="hero-decoration decoration-one" /><div className="hero-decoration decoration-two" />
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-grid">
            <div className="section-heading">
              <span className="section-kicker">A LITTLE ABOUT ME</span>
              <h2>Turning ideas into<br /><span>useful experiences.</span></h2>
            </div>
            <div className="about-copy">
              <p>I've completed training in HTML, CSS, Tailwind CSS, JavaScript, React, Git and GitHub, and built six frontend projects to put those skills into practice.</p>
              <p>I enjoy building interfaces that are easy to use, thoughtfully organized and responsive across screen sizes. I'm looking for an opportunity to keep learning, contribute to a team and grow as a frontend developer.</p>
              <a className="text-link" href="#projects">See what I've built <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="container stats-row">
            <div className="stat"><strong>06</strong><span>Frontend projects</span></div>
            <div className="stat"><strong>06</strong><span>Live project demos</span></div>
            <div className="stat"><strong>React</strong><span>Core UI technology</span></div>
            <div className="stat"><strong>100%</strong><span>Curiosity to learn</span></div>
          </div>
        </section>

        <section className="skills section-pad" id="skills">
          <div className="container">
            <div className="section-heading centered-heading"><span className="section-kicker">MY TOOLKIT</span><h2>Skills I bring <span>to the table.</span></h2><p>The technologies I've studied and used while building my projects.</p></div>
            <div className="skills-grid">
              {skills.map((skill, index) => <div className="skill-card" key={skill.name}><div className={`skill-icon skill-icon-${index}`}>{skill.icon}</div><div><h3>{skill.name}</h3><p>{skill.detail}</p></div><ArrowUpRightFallback /></div>)}
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="container">
            <div className="projects-heading">
              <div className="section-heading"><span className="section-kicker">SELECTED WORK</span><h2>Projects built with<br /><span>purpose and practice.</span></h2></div>
              <p>Explore my work, review the source code, or open a live demo to try each project.</p>
            </div>
            <div className="project-toolbar"><span>{String(filteredProjects.length).padStart(2, "0")} PROJECTS</span><div className="filter-tabs" aria-label="Filter projects">{categories.map((category) => <button key={category} className={filter === category ? "filter-active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div></div>
            <div className="projects-grid">
              {filteredProjects.map((project) => <article className="project-card" key={project.number}>
                <ProjectArtwork project={project} />
                <div className="project-content">
                  <div className="project-category">{project.category}<span>{project.number}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ExternalLink size={13} /></a>
                    <a className="demo-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowRight size={15} /></a>
                  </div>
                </div>
              </article>)}
            </div>
            <div className="github-callout"><div className="github-callout-icon"><Github size={24} /></div><div><strong>Want to see more?</strong><p>Explore my GitHub profile for repositories and project code.</p></div><a href="https://github.com/Praveen-07058" target="_blank" rel="noreferrer" className="button button-dark">Visit GitHub <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container contact-panel">
            <div className="contact-decoration contact-decoration-one" /><div className="contact-decoration contact-decoration-two" />
            <div className="contact-copy"><span className="section-kicker">LET'S CONNECT</span><h2>Have an opportunity<br />in mind? <span>Let's talk.</span></h2><p>I'm interested in frontend developer opportunities where I can contribute, learn and build useful digital experiences.</p></div>
            <div className="contact-actions"><a className="button button-light" href="mailto:praveen07058@gmail.com"><Mail size={17} /> praveen07058@gmail.com <ArrowRight size={16} /></a><a className="contact-github" href="https://github.com/Praveen-07058" target="_blank" rel="noreferrer"><Github size={18} /> Find me on GitHub <ExternalLink size={14} /></a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">PS</span><span>Praveen<span className="brand-dot">.</span></span></a><span>Designed with care · Built with React</span><a href="#home" className="back-top">Back to top ↑</a></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Praveen Sidharth</span><span>Frontend Developer · India</span></div>
      </footer>
    </>
  );
}

function ArrowUpRightFallback() {
  return <span className="skill-arrow" aria-hidden="true">↗</span>;
}

export default App;