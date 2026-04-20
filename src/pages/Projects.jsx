const projects = [
  {
    title: "Supply Chain AI Risk Monitor",
    stack: "Python, Algorand, AI Anomaly Detection",
    summary:
      "Detects supply-chain anomalies and records verifiable risk events for transparent monitoring.",
    repo: "https://github.com/Anishreddy-gith/supplychain-ai-risk-monitor",
  },
  {
    title: "AI Malware Reverse Engineering Framework",
    stack: "Python, GNN, Sandbox Analysis",
    summary:
      "Autonomous malware behavior analysis with structured threat intelligence reporting.",
    repo: "https://github.com/Anishreddy-gith/ai-malware-re-framework",
  },
  {
    title: "NanoDrugOnto",
    stack: "Python, LLM, Ontology Engineering",
    summary:
      "Research project on nanoparticle-drug interaction modeling using an LLM-powered ontology.",
    repo: "https://github.com/Anishreddy-gith/nanodrugonto",
  },
  {
    title: "Web Tech Expense Tracker",
    stack: "HTML, CSS, JavaScript",
    summary:
      "A web application for managing day-to-day expenses with an intuitive UI.",
    repo: "https://github.com/Anishreddy-gith/web-tech-expense-tracker",
  },
];

function Projects() {
  return (
    <section className="projects-wrap">
      <p className="section-tag">Projects Page</p>
      <h2>Selected Projects</h2>
      <p className="intro-line">
        A selection of applied AI, cybersecurity, and software engineering work. Each project card
        links directly to its GitHub repository.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p className="stack">{project.stack}</p>
            <p>{project.summary}</p>
            <a href={project.repo} target="_blank" rel="noreferrer">
              View Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
