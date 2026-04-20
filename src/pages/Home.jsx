function Home() {
  return (
    <section className="home-grid">
      <article className="hero-card">
        <img
          src="https://github.com/Anishreddy-gith.png"
          alt="Boppidi Anish Reddy"
          className="profile-pic"
        />
        <div>
          <p className="section-tag">About Me</p>
          <h2>Boppidi Anish Reddy</h2>
          <p>
            Computer Science student focused on AI/ML, cybersecurity, and research-driven software
            engineering. I enjoy building practical systems that combine intelligent automation with
            strong security and risk awareness.
          </p>
          <div className="contact-links">
            <a href="mailto:anishreddyboppidi@gmail.com">anishreddyboppidi@gmail.com</a>
            <a href="https://www.linkedin.com/in/anish-reddy-boppidi-55b04827b" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/Anishreddy-gith" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="hero-highlights">
            <div>
              <p className="metric">6+</p>
              <p className="metric-label">AI and Security Projects</p>
            </div>
            <div>
              <p className="metric">2026</p>
              <p className="metric-label">B.Tech Graduation</p>
            </div>
            <div>
              <p className="metric">IEEE</p>
              <p className="metric-label">Student Branch Chair</p>
            </div>
          </div>
        </div>
      </article>

      <article className="info-card">
        <p className="section-tag">Research Interests</p>
        <ul>
          <li>Multi-Agent AI Systems and RAG Pipelines for research automation</li>
          <li>Cybersecurity analytics, vulnerability discovery, and threat intelligence</li>
          <li>LLM-based ontologies for biomedical and scientific knowledge mapping</li>
          <li>Federated learning and privacy-preserving AI</li>
        </ul>
      </article>

      <article className="info-card">
        <p className="section-tag">Personal Details</p>
        <div className="details-grid">
          <p><strong>Name</strong><span>Boppidi Anish Reddy</span></p>
          <p><strong>Phone</strong><span>+91-9392148106</span></p>
          <p><strong>Personal Email</strong><span>anishreddyboppidi@gmail.com</span></p>
          <p><strong>College Email</strong><span>anishreddy@mahindrauniversity.edu.in</span></p>
          <p><strong>Location</strong><span>Hyderabad, India</span></p>
        </div>
      </article>

      <article className="info-card">
        <p className="section-tag">Skills</p>
        <div className="chips">
          {[
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "PyTorch",
            "LangChain",
            "FAISS",
            "FastAPI",
            "Kafka",
            "SQL",
            "Risk Management",
            "Threat Intelligence",
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Home;
