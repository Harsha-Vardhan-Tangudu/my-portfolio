const projects = [
  {
    title: "Phishing Website Detection",
    description:
      "Phishing website detection using Evolutionary Algorithms for feature and model selection. Applied Genetic Algorithms for feature optimization and trained an ensemble of models for improved accuracy. Includes a web extension for real-time phishing detection.",
    tech: ["Machine Learning", "Evolutionary Algorithms", "Python"],
    github: "https://github.com/Harsha-Vardhan-Tangudu",
  },
  {
    title: "Mentor and Me",
    description:
      "Online learning platform mirroring Udemy and Coursera. Enables users to access and enroll in courses with a focus on UI design, course management, and secure authentication. Integrated payment gateways and feedback systems.",
    tech: ["HTML", "CSS", "JavaScript", "DSA"],
    github: "https://github.com/Harsha-Vardhan-Tangudu",
  },
  {
    title: "Water Meter Analyser",
    description:
      "Comprehensive system for water meter data analysis, storing and managing user and meter data in a structured database. Real-time monitoring, issue resolution, and user-friendly dashboards for data visualization.",
    tech: ["DBMS", "SQL"],
    github: "https://github.com/Harsha-Vardhan-Tangudu",
  },
  {
    title: "Intrusion Detection System",
    description:
      "IDS leveraging machine learning to detect unauthorized access attempts with high accuracy. Includes model evaluation and selection to improve detection rates, reduce false positives, and real-time alerts with logging.",
    tech: ["Machine Learning", "Python"],
    github: "https://github.com/Harsha-Vardhan-Tangudu",
  },
  {
    title: "Smart Regulation for Oyster Mushroom Farming",
    description:
      "IoT-based system to optimize mushroom cultivation using sensors to monitor and control environmental factors. Automated adjustments to increase yield and quality by maintaining optimal growing conditions.",
    tech: ["IoT", "Python", "Sensors"],
    github: "https://github.com/Harsha-Vardhan-Tangudu",
  },
]

const skills = {
  Languages: ["Python", "C++", "Java", "HTML", "CSS", "SQL"],
  Backend: ["Spring Boot", "REST APIs"],
  Tools: ["VS Code", "IntelliJ IDEA", "PyCharm", "Grafana", "MySQL", "PostgreSQL", "Arduino IDE"],
}

const experience = [
  {
    role: "SDE Intern",
    company: "Amadeus Software Labs, Bangalore",
    period: "Jan 2025 - Jun 2025",
    points: [
      "Created and maintained Grafana dashboards for memory usage and TPS monitoring for the SITI project.",
      "Collaborated with the team to enhance monitoring and visualization capabilities.",
      "Developed a Spring Boot feature to calculate TPS by implementing logic and updating results in the database.",
      "Gained hands-on experience in data visualization and real-time monitoring tools.",
    ],
  },
  {
    role: "Sustainable Development Program Participant",
    company: "Live-in-Labs Program (UN-backed initiative)",
    period: "Jan 2024 - Aug 2024",
    points: [
      "Applied development knowledge to implement sustainable solutions in Sadivayal village.",
      "Conducted human-centered design interviews to understand local needs and challenges.",
      "Led brainstorming sessions and contributed innovative ideas to address community needs.",
      "Gained experience translating theoretical concepts into practical, impactful solutions.",
    ],
  },
]

const publications = [
  "Sustainable Solutions for Livelihood Enhancement in Sadivayal Village — IEEE GHTC 2024",
  "A Framework for Detecting Violence in College Environment Using Computer Vision Techniques — I-SMAC 2024",
  "A Comparative Analysis of SDN Controller Placement Problem: IoT-Specific Tactics and Generalized Solutions — RAIT 2025",
]

const memberships = [
  "IoT Team Lead, Intel IoT Club — Amrita Vishwa Vidyapeetham, 2023",
  "Hostel Committee Head, CSE Department — Amrita Vishwa Vidyapeetham, 2023",
  "Public Relations Head, IETE Chapter — Amrita Vishwa Vidyapeetham, 2024",
  "Technical Core Member, Elite Club — Amrita Vishwa Vidyapeetham, 2024",
  "Placement Coordinator, CSE Department — Amrita Vishwa Vidyapeetham, 2024",
]

const certificates = [
  "Supervised Machine Learning: Regression and Classification — Coursera, 2023",
  "Head of CSE Department, Anokha Tech Fest 2024 — Amrita Vishwa Vidyapeetham",
  "Central Coordinator, Event Management for Gokulashtami 2023 & 2024 — Amrita Vishwa Vidyapeetham",
  "Participant, Aviskar Project Expo 2023 & 2025 — Amrita Vishwa Vidyapeetham",
  "Presentation Certificate — I-SMAC Conference",
]

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">Harsha Vardhan</div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">Software Development Engineer</p>
                <h1>Tangudu Harsha Vardhan</h1>
                <p className="hero-text">
                  Enthusiastic software engineer with a solid Python background. Passionate about
                  innovative problem-solving and continuous learning. Eager to bring fresh perspectives
                  and drive progress.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#projects">View Projects</a>
                  <a className="btn btn-secondary" href="#contact">Contact Me</a>
                </div>
              </div>
              <div className="hero-photo-wrap">
                <img
                  className="hero-photo"
                  src="https://github.com/Harsha-Vardhan-Tangudu.png"
                  alt="Tangudu Harsha Vardhan"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle>About Me</SectionTitle>
          <p className="section-text">
            Enthusiastic software engineer with a solid Python background, passionate about
            innovative problem-solving and continuous learning. Eager to bring fresh perspectives
            and drive progress. Seeking exciting job opportunities to contribute and grow.
          </p>
        </section>

        <section id="experience" className="section">
          <SectionTitle>Experience</SectionTitle>
          <div className="experience-list">
            {experience.map((job) => (
              <div key={job.role + job.period} className="card experience-card">
                <div className="exp-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <span className="badge">{job.period}</span>
                </div>
                <ul className="exp-points">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle>Skills</SectionTitle>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="card">
                <h3>{group}</h3>
                <div className="badge-list">
                  {items.map((item) => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="badge-list">
                  {project.tech.map((item) => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle>Education</SectionTitle>
          <div className="education-list">
            <div className="card">
              <div className="edu-header">
                <div>
                  <h3>B.Tech in Computer Science</h3>
                  <p>Amrita Vishwa Vidyapeetham, Coimbatore</p>
                </div>
                <span className="badge">2021 - 2025</span>
              </div>
              <p className="edu-meta">CGPA: 8.12</p>
            </div>
            <div className="card">
              <div className="edu-header">
                <div>
                  <h3>BIEAP - MPC</h3>
                  <p>Sri Chaitanya Junior College, Visakhapatnam</p>
                </div>
                <span className="badge">2019 - 2021</span>
              </div>
              <p className="edu-meta">Marks: 949 / 1000</p>
            </div>
            <div className="card">
              <div className="edu-header">
                <div>
                  <h3>SSC</h3>
                  <p>Sri Chaitanya E.M School, Bobbili</p>
                </div>
                <span className="badge">2018 - 2019</span>
              </div>
              <p className="edu-meta">CGPA: 10.0</p>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionTitle>Publications</SectionTitle>
          <div className="card">
            <ul className="pub-list">
              {publications.map((pub, i) => (
                <li key={i}>{pub}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <SectionTitle>Memberships</SectionTitle>
          <div className="card">
            <ul className="pub-list">
              {memberships.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <SectionTitle>Certificates</SectionTitle>
          <div className="card">
            <ul className="pub-list">
              {certificates.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <SectionTitle>Contact</SectionTitle>
          <div className="card">
            <p>Open to collaboration and software development opportunities. Feel free to connect.</p>
            <ul className="contact-list">
              <li>Email: <a href="mailto:harshavardhantangudu1507@gmail.com">harshavardhantangudu1507@gmail.com</a></li>
              <li>GitHub: <a href="https://github.com/Harsha-Vardhan-Tangudu" target="_blank" rel="noreferrer">github.com/Harsha-Vardhan-Tangudu</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/Harsha" target="_blank" rel="noreferrer">linkedin.com/in/Harsha</a></li>
              <li>Phone: +91 9110522381</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        2026 Tangudu Harsha Vardhan. Built with care and curiosity.
      </footer>
    </div>
  )
}

export default App