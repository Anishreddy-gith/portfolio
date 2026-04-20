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
        <ul>
          <li><strong>Name:</strong> Boppidi Anish Reddy</li>
          <li><strong>Phone:</strong> +91-9392148106</li>
          <li><strong>Personal Email:</strong> anishreddyboppidi@gmail.com</li>
          <li><strong>College Email:</strong> anishreddy@mahindrauniversity.edu.in</li>
          <li><strong>Location:</strong> Hyderabad, India</li>
        </ul>
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
