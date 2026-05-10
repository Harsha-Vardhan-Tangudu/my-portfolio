const projects = [
  {
    title: "my-portfolio",
    description:
      "Personal portfolio website built with React and Vite to present profile, experience, skills, projects, publications, and contact details in a modern responsive layout.",
    tech: ["JavaScript", "React", "Vite"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/my-portfolio",
  },
  {
    title: "Phishing Detection Using Evolutionary Algorithms",
    description:
      "Machine learning project focused on phishing website detection using evolutionary algorithm-based feature selection and model ensembling for stronger classification performance.",
    tech: ["Jupyter Notebook", "Machine Learning", "Evolutionary Algorithms"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Phishing-Detection-Using-Evolutionary-Algorithm-Based-Feature-Selection-and-Model-Ensembling",
  },
  {
    title: "Information Retrieval Using WebAP Dataset",
    description:
      "Information retrieval implementation and experiments on the WebAP dataset, covering search relevance and retrieval quality analysis.",
    tech: ["Jupyter Notebook", "Information Retrieval"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Information-retrieval-using-WebAP-dataset-",
  },
  {
    title: "Database Management System Project",
    description:
      "Smart water meter data analysis system designed with DBMS concepts to identify water usage issues and support data-driven resolution.",
    tech: ["DBMS", "SQL", "Data Analysis"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/DataBase-Management-System-Project",
  },
  {
    title: "AI-based IoT for Oyster Mushroom Production",
    description:
      "AI and IoT-driven environment control system for oyster mushroom production in hot areas, targeting better yield through continuous sensing and regulation.",
    tech: ["IoT", "AI", "Automation"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/AI-based-IoT-for-Environment-Control-for-Oyster-Mushroom-Production-in-Hot-Areas",
  },
  {
    title: "GitHub Profile Repository",
    description:
      "Profile README repository used to present developer highlights, activity, and quick links on the GitHub profile page.",
    tech: ["Markdown", "GitHub"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Harsha-Vardhan-Tangudu",
  },
  {
    title: "LA County Health Services Phishing Case Study",
    description:
      "Case-study style security analysis of a healthcare data exposure incident related to phishing, with focus on attack impact and lessons learned.",
    tech: ["Cybersecurity", "Case Study"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/LA-County-Health-Services-Patient-s-Data-Exposed-in-Phishing-Attack",
  },
  {
    title: "Chandy-Misra-Haas AND Model Algorithm",
    description:
      "Distributed systems implementation around the Chandy-Misra-Haas AND model algorithm, demonstrating deadlock-related coordination logic.",
    tech: ["Distributed Systems", "Algorithms"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Chandy-Misra-Hass-AND-Model-Algorithm_-Distributed-system",
  },
  {
    title: "Anomaly Detection in College Environment",
    description:
      "Computer vision pipeline for anomaly and violence-related detection in campus environments, explored through notebook-based experimentation.",
    tech: ["Jupyter Notebook", "Computer Vision", "Anomaly Detection"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Anomaly-Detection-in-college-environment-Using-Computer-Vision",
  },
  {
    title: "Theory of Computation: PDA and Turing Machine",
    description:
      "Theory of computation project modeling a safe submarine battle scenario with Pushdown Automata and Turing Machine design.",
    tech: ["Theory of Computation", "Automata"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Theory-Of-Computation-Designing-PDA-Turingmachine-Safe-Submarine-Battle",
  },
  {
    title: "Machine Learning Intrusion Detection System",
    description:
      "Dataset-driven intrusion detection system using machine learning models to classify malicious activity and improve network security visibility.",
    tech: ["Jupyter Notebook", "Machine Learning", "Cybersecurity"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/MACHINE-LEARNING-INTRUSION-DETECTION-SYSTEM",
  },
  {
    title: "Computer Networks Server Monitoring System",
    description:
      "Python-based server monitoring project focused on tracking health metrics and improving operational awareness in computer network environments.",
    tech: ["Python", "Monitoring", "Computer Networks"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Computer-Networks-Server-Monitering-System",
  },
  {
    title: "Design Analysis and Algorithms Codes",
    description:
      "Collection of design and analysis of algorithms practice implementations prepared for end-semester learning and revision.",
    tech: ["Python", "Algorithms"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Design-Analysis-And-Algorithms-CODES",
  },
  {
    title: "Smart Irrigation System (Embedded)",
    description:
      "Embedded and Python-assisted smart irrigation setup for automated water management using sensor-driven control.",
    tech: ["Python", "Embedded Systems", "IoT"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Smart-irrigation-System-Embedded-",
  },
  {
    title: "CODSOFT Projects",
    description:
      "Python task collection developed as part of CODSOFT activities, covering practical coding exercises and mini applications.",
    tech: ["Python", "Problem Solving"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/CODSOFT",
  },
  {
    title: "IPL Scheduler Project",
    description:
      "C programming project that designs an IPL match scheduler with logic for fixture generation and sequence planning.",
    tech: ["C", "Scheduling", "Algorithms"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/IPL-Scheduler-project",
  },
  {
    title: "User Interface Design Project",
    description:
      "Mentor and Me - online learning platform prototype emphasizing interface design, usability, and course interaction flows.",
    tech: ["HTML", "CSS", "UI Design"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/User-Interface-Design-Project",
  },
  {
    title: "Online Newspaper Case Study",
    description:
      "Case study for an online newspaper application combining operating systems concepts, database design, queries, and networking model ideas.",
    tech: ["Case Study", "Database Design", "Networking"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/An-Online-News-Paper-using-Computer-Essentials",
  },
  {
    title: "Wireless Sensor Networks",
    description:
      "Academic repository focused on wireless sensor networks and core concepts prepared through course presentation material.",
    tech: ["Wireless Sensor Networks", "Networking"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Wireless-Sensor-Networks",
  },
  {
    title: "Advanced Programming Report",
    description:
      "Comparative study discussing C++ and Python for university-level coding contests with emphasis on practical trade-offs.",
    tech: ["C++", "Python", "Comparative Study"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Advanced-programming-report",
  },
  {
    title: "Online Learning Platform with Hybrid Data Structures",
    description:
      "Mentor and Me implementation variant that applies hybrid data structures to improve core learning platform operations.",
    tech: ["Python", "Data Structures", "EdTech"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/Online-Learning-Platform-Using-Hybrid-Data-Structures",
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