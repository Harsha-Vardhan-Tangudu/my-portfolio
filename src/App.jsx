import { useMemo, useState } from "react"

const projects = [
  {
    title: "my-portfolio",
    description:
      "Personal portfolio website built with React and Vite to present profile, experience, skills, projects, publications, and contact details in a modern responsive layout.",
    tech: ["JavaScript", "React", "Vite"],
    github: "https://github.com/Harsha-Vardhan-Tangudu/my-portfolio",
    demo: "https://my-portfolio-ruddy-nine-29.vercel.app",
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
  "Computer Skills": [
    "Python",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "SQL",
    "Spring Boot",
    "ReactJS",
    "NodeJS",
    "TypeScript",
    "Angular",
  ],
  Tools: [
    "VS Code",
    "Eclipse",
    "IntelliJ IDEA",
    "PyCharm",
    "Arduino IDE",
    "Jupyter Notebook",
    "Grafana",
    "MySQL",
    "PostgreSQL",
  ],
}

const experience = [
  {
    role: "SDE 1",
    company: "Amadeus Software Labs, Bangalore",
    period: "Jul 2025 - Present",
    points: [
      "Actively involved in C++ backend development for MRS and ReactJS development for CIT frontend, including bug fixes, new features, and component/library upgrades.",
      "Contributed to CIT version upgrades and feature enhancements, and led the design of copy customization.",
      "Integrated advertisement slot subscription functionality within the CIT layout design tool with proper permission management.",
      "Supported IR and PTR backlogs by assisting in issue resolution and backlog management.",
    ],
  },
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
  {
    title: "Implementation and Impact of Sustainable Agriculture and Water Management Solutions in Sadivayal Village, Tamil Nadu",
    venue: "ICSRF 2025 / Amrita",
    year: "2025",
    url: "https://www.amrita.edu/publication/implementation-and-impact-of-sustainable-agriculture-and-water-management-solutions-in-sadivayal-village-tamil-nadu/",
  },
  {
    title: "AasivU: A Framework for Detecting Violence in College Environment using Computer Vision Techniques",
    venue: "I-SMAC 2024 (IEEE)",
    year: "2024",
    url: "https://ieeexplore.ieee.org/document/10714723/",
  },
  {
    title: "A Comparative Analysis of SDN Controller Placement Problem: IoT-Specific Tactics and Generalized Solutions",
    venue: "RAIT 2025 (IEEE)",
    year: "2025",
    url: "https://ieeexplore.ieee.org/document/11089072/",
  },
  {
    title: "Sustainable Solutions for Livelihood Enhancement in Sadivayal Village",
    venue: "IEEE GHTC 2024",
    year: "2024",
    url: "https://ieeexplore.ieee.org/document/10771511/",
  },
]

const contactCards = [
  {
    icon: "✉️",
    platform: "Email",
    handle: "harshavardhantangudu1507@gmail.com",
    description: "Best way to reach me. I reply within 24 hours.",
    href: "mailto:harshavardhantangudu1507@gmail.com",
    cta: "Send a message",
    color: "#c84b31",
  },
  {
    icon: "💼",
    platform: "LinkedIn",
    handle: "tangudu-harsha-vardhan",
    description: "Connect professionally — open to SDE roles and collaboration.",
    href: "https://www.linkedin.com/in/tangudu-harsha-vardhan-2714971aa/",
    cta: "Connect on LinkedIn",
    color: "#0a66c2",
  },
  {
    icon: "🐙",
    platform: "GitHub",
    handle: "Harsha-Vardhan-Tangudu",
    description: "Browse 21+ projects across ML, IoT, backend, and more.",
    href: "https://github.com/Harsha-Vardhan-Tangudu",
    cta: "View my repositories",
    color: "#1b1f23",
  },
  {
    icon: "🔬",
    platform: "ResearchGate",
    handle: "Research Publications",
    description: "4 peer-reviewed papers on CV, IoT, and cybersecurity.",
    href: "https://www.researchgate.net/publication/385203128_AasivU_A_Framework_for_Detecting_Violence_in_College_Environment_using_Computer_Vision_Techniques?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
    cta: "Read my research",
    color: "#40ba8f",
  },
  {
    icon: "📞",
    platform: "Phone",
    handle: "+91 9110522381",
    description: "For quick chats, calls, or WhatsApp messages.",
    href: "tel:+919110522381",
    cta: "Call me",
    color: "#8b5cf6",
  },
]

const memberships = [
  "IoT Team Lead, Intel IoT Club - Amrita Vishwa Vidyapeetham, 2023",
  "Hostel Committee Head, CSE Department - Amrita Vishwa Vidyapeetham, 2023",
  "Public Relations Head, IETE Chapter - Amrita Vishwa Vidyapeetham, 2024",
  "Technical Core Member, Elite Club - Amrita Vishwa Vidyapeetham, 2024",
  "Placement Coordinator, CSE Department - Amrita Vishwa Vidyapeetham, 2024",
]

const certificates = [
  "Supervised Machine Learning: Regression and Classification - Coursera, 2023",
  "Head of CSE Department, Anokha Tech Fest 2024 - Amrita Vishwa Vidyapeetham",
  "Central Coordinator, Event Management for Gokulashtami 2023 and 2024 - Amrita Vishwa Vidyapeetham",
  "Participant, Aviskar Project Expo 2023 and 2025 - Amrita Vishwa Vidyapeetham",
  "Presentation Certificate - I-SMAC Conference",
]

const projectFilters = ["All", "Machine Learning", "Python", "IoT", "Cybersecurity", "Web"]

function inferCategory(project) {
  const text = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase()
  if (text.includes("machine learning") || text.includes("computer vision") || text.includes("anomaly")) {
    return "Machine Learning"
  }
  if (text.includes("cyber") || text.includes("intrusion") || text.includes("phishing")) {
    return "Cybersecurity"
  }
  if (text.includes("iot") || text.includes("sensor") || text.includes("embedded")) {
    return "IoT"
  }
  if (text.includes("react") || text.includes("html") || text.includes("ui") || text.includes("portfolio")) {
    return "Web"
  }
  if (text.includes("python")) {
    return "Python"
  }
  return "Python"
}

function SectionTitle({ children, hint }) {
  return (
    <div className="section-title-wrap">
      <h2 className="section-title">{children}</h2>
      {hint ? <p className="section-hint">{hint}</p> : null}
    </div>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const taggedProjects = useMemo(
    () => projects.map((project) => ({ ...project, category: inferCategory(project) })),
    [],
  )

  const filteredProjects = useMemo(() => {
    return taggedProjects.filter((project) => {
      const matchesFilter = activeFilter === "All" || project.category === activeFilter
      const haystack = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase()
      const matchesSearch = haystack.includes(searchQuery.trim().toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery, taggedProjects])

  const stats = [
    { label: "Projects", value: taggedProjects.length },
    { label: "Publications", value: publications.length },
    { label: "Certificates", value: certificates.length },
    { label: "Leadership Roles", value: memberships.length },
  ]

  return (
    <div className="app">
      <div className="bg-grid" aria-hidden="true" />
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
                  I build practical products across ML, backend systems, and interactive web
                  experiences. I enjoy taking ideas from rough concept to reliable implementation.
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#projects">Explore My Work</a>
                  <a className="btn btn-secondary" href="#contact">Book a Conversation</a>
                </div>
                <div className="stats-grid">
                  {stats.map((item) => (
                    <div key={item.label} className="stat-card">
                      <p className="stat-value">{item.value}+</p>
                      <p className="stat-label">{item.label}</p>
                    </div>
                  ))}
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
                <div className="hero-note">Open to SDE opportunities</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle hint="My focus is blending engineering depth with product thinking.">
            About Me
          </SectionTitle>
          <p className="section-text">
            Enthusiastic software engineer with a strong Python and systems background. Passionate
            about innovative problem-solving, clean implementation, and continuous learning. I love
            building tools that are measurable, maintainable, and valuable in real-world settings.
          </p>
        </section>

        <section id="experience" className="section">
          <SectionTitle hint="Hands-on product and research execution.">Experience</SectionTitle>
          <div className="experience-list">
            {experience.map((job) => (
              <article key={job.role + job.period} className="card experience-card">
                <div className="exp-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <span className="badge">{job.period}</span>
                </div>
                <ul className="exp-points">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle hint="Tooling I use regularly to ship and iterate.">Skills</SectionTitle>
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
          <SectionTitle hint="Search and filter across all repositories.">Project Explorer</SectionTitle>
          <div className="project-controls card">
            <label className="search-wrap" htmlFor="project-search">
              <span>Search projects</span>
              <input
                id="project-search"
                type="text"
                placeholder="Try: IoT, ML, Python, monitoring"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </label>
            <div className="filter-row" role="tablist" aria-label="Project category filter">
              {projectFilters.map((filterName) => (
                <button
                  key={filterName}
                  type="button"
                  className={`filter-chip ${activeFilter === filterName ? "active" : ""}`}
                  onClick={() => setActiveFilter(filterName)}
                >
                  {filterName}
                </button>
              ))}
            </div>
            <p className="result-count">Showing {filteredProjects.length} projects</p>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.title} className="card project-card">
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="badge badge-soft">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="badge-list">
                  {project.tech.map((item) => (
                    <span key={item} className="badge">{item}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">View Source</a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionTitle hint="Consistent academic performance and technical foundations.">
            Education
          </SectionTitle>
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

        <section className="section dual-grid">
          <div className="card">
            <SectionTitle hint="Peer-reviewed and conference-backed work.">Publications</SectionTitle>
            <div className="publication-list">
              {publications.map((pub) => (
                <article key={pub.title} className="publication-item">
                  <p>{pub.title}</p>
                  <div className="publication-meta">
                    <span>{pub.venue}</span>
                    <span>{pub.year}</span>
                  </div>
                  {pub.url ? (
                    <a href={pub.url} target="_blank" rel="noreferrer">View Publication</a>
                  ) : (
                    <span>Link available on request</span>
                  )}
                </article>
              ))}
            </div>
          </div>
          <div className="card">
            <SectionTitle hint="Roles where I owned coordination and execution.">Memberships</SectionTitle>
            <ul className="pub-list">
              {memberships.map((membership) => (
                <li key={membership}>{membership}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="card">
            <SectionTitle hint="Continuous learning and event leadership.">Certificates</SectionTitle>
            <ul className="pub-list">
              {certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <SectionTitle hint="Open to full-time SDE roles, internships, research collabs, and more.">
            Let's Connect
          </SectionTitle>
          <p className="contact-intro">
            Whether you have a project idea, a job opportunity, or just want to talk tech — I'm always happy to chat.
          </p>
          <div className="contact-cards-grid">
            {contactCards.map((card) => (
              <a
                key={card.platform}
                href={card.href}
                target={card.href.startsWith("mailto") || card.href.startsWith("tel") ? "_self" : "_blank"}
                rel="noreferrer"
                className="contact-card-link"
                style={{ "--card-accent": card.color }}
              >
                <div className="contact-card-icon">{card.icon}</div>
                <div className="contact-card-body">
                  <p className="contact-card-platform">{card.platform}</p>
                  <p className="contact-card-handle">{card.handle}</p>
                  <p className="contact-card-desc">{card.description}</p>
                </div>
                <span className="contact-card-cta">{card.cta} →</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">2026 Tangudu Harsha Vardhan. Built with intent and curiosity.</footer>
    </div>
  )
}

export default App
