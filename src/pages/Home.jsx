function Home() {
  return (
    <section className="home-page">
      <article className="card hero-panel">
        <div className="hero-top">
          <img
            src="https://github.com/Anishreddy-gith.png"
            alt="Boppidi Anish Reddy"
            className="profile-pic"
          />
          <div className="hero-copy">
            <p className="eyebrow">AI and Security Engineer</p>
            <h2>Boppidi Anish Reddy</h2>
            <p>
              Computer Science student building modern AI, cybersecurity, and research-focused
              systems. I combine clean software engineering with practical ML workflows to deliver
              reliable and impactful solutions.
            </p>
            <div className="contact-links">
              <a href="mailto:anishreddyboppidi@gmail.com">Email Me</a>
              <a href="https://www.linkedin.com/in/anish-reddy-boppidi-55b04827b" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Anishreddy-gith" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="hero-metrics">
          <div>
            <p>06+</p>
            <span>Hands-on Projects</span>
          </div>
          <div>
            <p>2026</p>
            <span>Graduation Year</span>
          </div>
          <div>
            <p>IEEE</p>
            <span>Student Branch Chair</span>
          </div>
        </div>
      </article>

      <div className="home-sections">
        <article className="card info-card">
          <h3>Research Interests</h3>
          <ul>
            <li>Multi-Agent AI systems and Retrieval-Augmented Generation pipelines</li>
            <li>Cybersecurity analytics, vulnerability discovery, and threat intelligence</li>
            <li>LLM-driven ontology design for biomedical and scientific research</li>
            <li>Federated learning and privacy-preserving machine learning methods</li>
          </ul>
        </article>

        <article className="card info-card">
          <h3>Personal Details</h3>
          <div className="details-grid">
            <p><strong>Name</strong><span>Boppidi Anish Reddy</span></p>
            <p><strong>Phone</strong><span>+91-9392148106</span></p>
            <p><strong>Personal Email</strong><span>anishreddyboppidi@gmail.com</span></p>
            <p><strong>College Email</strong><span>anishreddy@mahindrauniversity.edu.in</span></p>
            <p><strong>Location</strong><span>Hyderabad, India</span></p>
          </div>
        </article>

        <article className="card info-card skills-card">
          <h3>Skills</h3>
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
      </div>
    </section>
  );
}

export default Home;
