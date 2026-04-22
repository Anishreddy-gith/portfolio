function Home() {
  const assetBase = import.meta.env.BASE_URL;

  const jumpTo = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="home-page">
      <article className="card hero-panel">
        <div className="hero-top">
          <img
            src={`${assetBase}boppidi-anish-reddy.png`}
            alt="Boppidi Anish Reddy"
            className="profile-pic"
          />
          <div className="hero-copy">
            <p className="eyebrow">AI, Cybersecurity, and Research</p>
            <h2>Boppidi Anish Reddy</h2>
            <p>
              Computer Science Engineer focused on shipping AI systems, cybersecurity intelligence
              pipelines, and research-driven products with measurable impact.
            </p>
            <p className="availability-pill">Open to Internships and Full-Time Opportunities</p>
            <div className="contact-links">
              <a href="mailto:anishreddyboppidi@gmail.com">Personal Email</a>
              <a href="mailto:anishreddy@mahindrauniversity.edu.in">College Email</a>
              <a href="https://www.linkedin.com/in/anish-reddy-boppidi-55b04827b" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Anishreddy-gith" target="_blank" rel="noreferrer">GitHub</a>
              <a href={`${assetBase}Boppidi_Anish_Reddy_CV.pdf`} target="_blank" rel="noreferrer" className="resume-btn">Download Resume</a>
            </div>
          </div>
        </div>

        <div className="hero-metrics">
          <div>
            <p>6.25</p>
            <span>B.Tech CGPA</span>
          </div>
          <div>
            <p>06+</p>
            <span>Major Projects</span>
          </div>
          <div>
            <p>200+</p>
            <span>IEEE Members Led</span>
          </div>
        </div>
      </article>

      <article className="card mini-nav-card" aria-label="Quick section navigation">
        <button type="button" onClick={() => jumpTo("research")}>Research</button>
        <button type="button" onClick={() => jumpTo("timeline")}>Timeline</button>
        <button type="button" onClick={() => jumpTo("skills")}>Skills</button>
        <button type="button" onClick={() => jumpTo("availability")}>Availability</button>
      </article>

      <div className="home-sections">
        <article className="card info-card details-card">
          <h3>Personal Details</h3>
          <div className="details-grid">
            <p><strong>Name</strong><span>Boppidi Anish Reddy</span></p>
            <p><strong>Phone</strong><span>+91-9392148106</span></p>
            <p><strong>Location</strong><span>Hyderabad, Telangana, India</span></p>
            <p><strong>Status</strong><span>Open to relocation</span></p>
          </div>
        </article>

        <article className="card info-card research-card" id="research">
          <h3>Research Interests</h3>
          <ul>
            <li>Multi-Agent AI systems and Retrieval-Augmented Generation pipelines</li>
            <li>Cybersecurity analytics, vulnerability discovery, and threat intelligence</li>
            <li>LLM-powered ontology design for biomedical and scientific research</li>
            <li>Federated learning and privacy-preserving machine learning systems</li>
          </ul>
        </article>

        <article className="card info-card timeline-card" id="timeline">
          <h3>Education and Experience Timeline</h3>
          <div className="timeline-list">
            <div className="timeline-item">
              <p className="timeline-year">2025</p>
              <div>
                <p className="timeline-title">Software Developer Intern - Art of Living International Centre</p>
                <p className="timeline-desc">Built automation workflows and an employee lifecycle management platform in Bengaluru.</p>
              </div>
            </div>
            <div className="timeline-item">
              <p className="timeline-year">2023 - 2026</p>
              <div>
                <p className="timeline-title">B.Tech CSE - Mahindra University</p>
                <p className="timeline-desc">Core focus on AI/ML, software engineering, cybersecurity, and risk management.</p>
              </div>
            </div>
            <div className="timeline-item">
              <p className="timeline-year">2025</p>
              <div>
                <p className="timeline-title">IRM Level 1 - Enterprise Risk Management</p>
                <p className="timeline-desc">Professional risk certification evaluated by AICTE.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="card info-card education-card">
          <h3>Education</h3>
          <ul>
            <li><strong>Mahindra University, Hyderabad</strong> - B.Tech CSE (Aug 2023 - Jun 2026), CGPA: 6.25/10</li>
            <li><strong>IRM, United Kingdom</strong> - Level 1 Enterprise Risk Management (2025)</li>
            <li><strong>Narayana Junior College, Hyderabad</strong> - Class XII TSBIE (2021 - 2023), 84.2%</li>
          </ul>
        </article>

        <article className="card info-card experience-card">
          <h3>Experience</h3>
          <p className="role-title">Software Developer Intern - Art of Living International Centre, Bengaluru</p>
          <p className="role-meta">Jul 2025 - Aug 2025</p>
          <ul>
            <li>Developed automation for core services and built an Employee Lifecycle Management System.</li>
            <li>Designed a web platform for employee data management with database-backed workflows.</li>
          </ul>
        </article>

        <article className="card info-card leadership-card">
          <h3>Leadership</h3>
          <div className="leadership-role">
            <p className="role-title">Chair, IEEE Student Branch + IEEE CS Chapter | Mahindra University</p>
            <p className="role-meta">Nov 2025 – Present</p>
            <ul>
              <li>Lead a 200+ member organization at Mahindra University; drive technical initiatives, organize large-scale events, and coordinate with faculty, industry professionals, and global IEEE networks.</li>
              <li>Facilitate connections between students and professionals worldwide, enabling exposure to real-world industry practices and supporting their transition into the professional ecosystem.</li>
            </ul>
          </div>
          <div className="leadership-role">
            <p className="role-title">President, Qubit MU – Quantum Computing Club | Mahindra University</p>
            <p className="role-meta">Jul 2025 – Present</p>
            <ul>
              <li>Scaled a specialized quantum computing and AI club; leading workshops, member onboarding, and technical sessions on core quantum concepts.</li>
              <li>Built and nurtured collaborations with industry partners in quantum computing; facilitating student engagement through live projects, knowledge exchange, and mentorship opportunities.</li>
              <li>Act as a bridge between academia and industry by connecting students with professionals for hands-on experience, internships, and collaborative research initiatives in quantum and AI security domains.</li>
            </ul>
          </div>
        </article>

        <article className="card info-card certifications-card">
          <h3>Certifications and Achievements</h3>
          <ul>
            <li>IRM Level 1 - Enterprise Risk Management (AICTE Evaluated)</li>
            <li>Power BI Masterclass, HackerRank Problem Solving, Data Science Workshop</li>
            <li>3rd Place - Cognitive Coup AI Challenge (AEON Tech Fest 2025)</li>
            <li>3rd Place - Quantum Computing Challenge (AEON Tech Fest 2025)</li>
          </ul>
        </article>

        <article className="card info-card skills-card" id="skills">
          <h3>Technical Skills</h3>
          <div className="chips">
            {[
              "Python",
              "C",
              "JavaScript",
              "React",
              "Node.js",
              "SQL",
              "PyTorch",
              "LangChain",
              "FAISS",
              "FastAPI",
              "Kafka",
              "Docker",
              "Power BI",
              "MITRE ATT&CK",
              "NIST NVD",
              "CVSS",
              "ISO 31000",
              "COSO",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="card info-card availability-card" id="availability">
          <h3>Current Availability</h3>
          <p>
            I am currently open to <strong>Internship</strong> and <strong>Full-Time</strong> roles in AI/ML,
            cybersecurity, and software engineering. I am available for remote, hybrid, or on-site
            opportunities.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
