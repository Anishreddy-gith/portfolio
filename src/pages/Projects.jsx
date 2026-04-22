const projects = [
  {
    title: "Multi-Agent RAG-Based AI Research Scientist",
    stack: "Python, LLM, LangChain, FAISS",
    summary:
      "Designed a 7-agent LLM research workflow to automate literature synthesis and structured report generation.",
    repo: "https://github.com/Anishreddy-gith",
  },
  {
    title: "AI-Powered Insider Threat Detection",
    stack: "PyTorch Geometric, Kafka, FastAPI",
    summary:
      "Built behavioral anomaly detection workflows using graph-based learning and sequence models for enterprise security.",
    repo: "https://github.com/Anishreddy-gith",
  },
  {
    title: "AI Zero-Day Vulnerability Discovery Engine",
    stack: "CodeBERT, AFL++, angr, Python",
    summary:
      "Implemented a multi-stage security pipeline integrating static analysis, fuzzing, and symbolic execution.",
    repo: "https://github.com/Anishreddy-gith",
  },
  {
    title: "Autonomous Malware Reverse Engineering Framework",
    stack: "Python, GNN, Sandbox Analysis",
    summary:
      "Created an AI-assisted malware analysis system that generates explainable threat intelligence outputs.",
    repo: "https://github.com/Anishreddy-gith/ai-malware-re-framework",
  },
  {
    title: "ChainGuard - Blockchain AI Supply Chain Risk Monitor",
    stack: "React, FastAPI, Algorand",
    summary:
      "Developed a full-stack supply-chain risk platform with blockchain-backed audit and anomaly signals.",
    repo: "https://github.com/Anishreddy-gith/supplychain-ai-risk-monitor",
  },
  {
    title: "NanoDrugOnto",
    stack: "Python, LLM, Ontology Engineering",
    summary:
      "Ongoing research on LLM-based ontology construction for nanoparticle-drug interaction prediction.",
    repo: "https://github.com/Anishreddy-gith/nanodrugonto",
  },
];

function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <p className="eyebrow">Projects</p>
        <h2>Featured Work</h2>
        <p>
          A CV-aligned project portfolio across AI research, cybersecurity engineering, and
          full-stack systems. Each card links to GitHub.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="card project-card">
            <p className="project-stack">{project.stack}</p>
            <h3>{project.title}</h3>
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
