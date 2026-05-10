import { useEffect, useMemo, useRef, useState } from "react"

/* DATA */

const projects = [
  { title: "my-portfolio", description: "Personal portfolio website built with React and Vite — modern responsive layout, project explorer, publications, and contact.", tech: ["JavaScript", "React", "Vite"], github: "https://github.com/Harsha-Vardhan-Tangudu/my-portfolio", demo: "https://my-portfolio-ruddy-nine-29.vercel.app" },
  { title: "Phishing Detection Using Evolutionary Algorithms", description: "ML project for phishing website detection using evolutionary algorithm-based feature selection and model ensembling.", tech: ["Jupyter Notebook", "Machine Learning", "Evolutionary Algorithms"], github: "https://github.com/Harsha-Vardhan-Tangudu/Phishing-Detection-Using-Evolutionary-Algorithm-Based-Feature-Selection-and-Model-Ensembling" },
  { title: "Information Retrieval Using WebAP Dataset", description: "Information retrieval experiments on the WebAP dataset covering search relevance and retrieval quality analysis.", tech: ["Jupyter Notebook", "Information Retrieval"], github: "https://github.com/Harsha-Vardhan-Tangudu/Information-retrieval-using-WebAP-dataset-" },
  { title: "Database Management System Project", description: "Smart water meter data analysis system designed with DBMS concepts to identify usage issues.", tech: ["DBMS", "SQL", "Data Analysis"], github: "https://github.com/Harsha-Vardhan-Tangudu/DataBase-Management-System-Project" },
  { title: "AI-based IoT for Oyster Mushroom Production", description: "AI and IoT-driven environment control system for oyster mushroom production in hot areas.", tech: ["IoT", "AI", "Automation"], github: "https://github.com/Harsha-Vardhan-Tangudu/AI-based-IoT-for-Environment-Control-for-Oyster-Mushroom-Production-in-Hot-Areas" },
  { title: "LA County Health Services Phishing Case Study", description: "Security analysis of a healthcare data exposure incident related to phishing, with attack impact assessment.", tech: ["Cybersecurity", "Case Study"], github: "https://github.com/Harsha-Vardhan-Tangudu/LA-County-Health-Services-Patient-s-Data-Exposed-in-Phishing-Attack" },
  { title: "Chandy-Misra-Haas AND Model Algorithm", description: "Distributed systems implementation of the Chandy-Misra-Haas AND model algorithm for deadlock detection.", tech: ["Distributed Systems", "Algorithms"], github: "https://github.com/Harsha-Vardhan-Tangudu/Chandy-Misra-Hass-AND-Model-Algorithm_-Distributed-system" },
  { title: "Anomaly Detection in College Environment", description: "Computer vision pipeline for anomaly and violence detection in campus environments.", tech: ["Jupyter Notebook", "Computer Vision", "Anomaly Detection"], github: "https://github.com/Harsha-Vardhan-Tangudu/Anomaly-Detection-in-college-environment-Using-Computer-Vision" },
  { title: "Theory of Computation: PDA and Turing Machine", description: "Modeling a safe submarine battle scenario with Pushdown Automata and Turing Machine design.", tech: ["Theory of Computation", "Automata"], github: "https://github.com/Harsha-Vardhan-Tangudu/Theory-Of-Computation-Designing-PDA-Turingmachine-Safe-Submarine-Battle" },
  { title: "Machine Learning Intrusion Detection System", description: "Dataset-driven intrusion detection system using ML models to classify malicious network activity.", tech: ["Jupyter Notebook", "Machine Learning", "Cybersecurity"], github: "https://github.com/Harsha-Vardhan-Tangudu/MACHINE-LEARNING-INTRUSION-DETECTION-SYSTEM" },
  { title: "Computer Networks Server Monitoring System", description: "Python-based server monitoring project tracking health metrics in computer network environments.", tech: ["Python", "Monitoring", "Computer Networks"], github: "https://github.com/Harsha-Vardhan-Tangudu/Computer-Networks-Server-Monitering-System" },
  { title: "Design Analysis and Algorithms Codes", description: "Collection of design and analysis of algorithms practice implementations.", tech: ["Python", "Algorithms"], github: "https://github.com/Harsha-Vardhan-Tangudu/Design-Analysis-And-Algorithms-CODES" },
  { title: "Smart Irrigation System (Embedded)", description: "Embedded smart irrigation setup for automated water management using sensor-driven control.", tech: ["Python", "Embedded Systems", "IoT"], github: "https://github.com/Harsha-Vardhan-Tangudu/Smart-irrigation-System-Embedded-" },
  { title: "CODSOFT Projects", description: "Python task collection developed as part of CODSOFT activities, covering practical mini applications.", tech: ["Python", "Problem Solving"], github: "https://github.com/Harsha-Vardhan-Tangudu/CODSOFT" },
  { title: "IPL Scheduler Project", description: "C programming project that designs an IPL match scheduler with fixture generation logic.", tech: ["C", "Scheduling", "Algorithms"], github: "https://github.com/Harsha-Vardhan-Tangudu/IPL-Scheduler-project" },
  { title: "User Interface Design Project", description: "Mentor and Me — online learning platform prototype emphasizing interface design and usability.", tech: ["HTML", "CSS", "UI Design"], github: "https://github.com/Harsha-Vardhan-Tangudu/User-Interface-Design-Project" },
  { title: "Online Newspaper Case Study", description: "Case study for an online newspaper combining OS concepts, database design, and networking.", tech: ["Case Study", "Database Design", "Networking"], github: "https://github.com/Harsha-Vardhan-Tangudu/An-Online-News-Paper-using-Computer-Essentials" },
  { title: "Wireless Sensor Networks", description: "Academic repository focused on WSN concepts prepared through course presentation material.", tech: ["Wireless Sensor Networks", "Networking"], github: "https://github.com/Harsha-Vardhan-Tangudu/Wireless-Sensor-Networks" },
  { title: "Advanced Programming Report", description: "Comparative study of C++ and Python for university-level coding contests.", tech: ["C++", "Python", "Comparative Study"], github: "https://github.com/Harsha-Vardhan-Tangudu/Advanced-programming-report" },
  { title: "Online Learning Platform with Hybrid Data Structures", description: "Mentor and Me variant applying hybrid data structures to improve core learning platform operations.", tech: ["Python", "Data Structures", "EdTech"], github: "https://github.com/Harsha-Vardhan-Tangudu/Online-Learning-Platform-Using-Hybrid-Data-Structures" },
  { title: "GitHub Profile Repository", description: "Profile README repository presenting developer highlights and activity on the GitHub profile page.", tech: ["Markdown", "GitHub"], github: "https://github.com/Harsha-Vardhan-Tangudu/Harsha-Vardhan-Tangudu" },
]

const skills = {
  "Programming Languages": ["Python", "C++", "Java", "TypeScript", "C", "SQL", "JavaScript", "HTML", "CSS", "Embedded C"],
  "Computer Science Fundamentals": ["Data Structures", "Theory of Computation", "Automata", "Regular Expressions", "Database Management Systems", "Information Retrieval", "Project Management"],
  "AI / ML & Computer Vision": ["Machine Learning", "Machine Learning Algorithms", "Computer Vision", "Artificial Intelligence", "Convolutional Neural Networks (CNN)", "Support Vector Machine (SVM)", "Fuzzy Logic", "Anomaly Detection", "Phishing Detection", "Datasets"],
  "IoT & Embedded Systems": ["Internet of Things (IoT)", "ESP32 Microcontrollers", "Sensors", "Actuators", "Automation", "Real-time Monitoring", "Arduino IDE"],
  "Web, Frameworks & UI": ["ReactJS", "NodeJS", "Spring Boot", "Angular", "Front-End Development", "User Interface Design", "Microsoft PowerPoint", "Logo Design", "Poster Design"],
  "Databases, Cloud & DevOps": ["MySQL", "PostgreSQL", "Oracle Database", "Grafana", "Docker", "Kubernetes", "OpenShift", "Microsoft Azure", "IBM Cloud", "Linux", "Shell Scripting", "Git", "Version Control"],
  "Leadership & Communication": ["Leadership", "Organizational Leadership", "Team Leadership", "Organization Skills", "Event Planning", "Time Management", "Public Speaking", "Public Relations", "Online PR", "Public Affairs", "Business Development", "Research"],
  "Developer Tools": ["GitHub", "VS Code", "IntelliJ IDEA", "Jupyter Notebook", "JFLAP"],
}

const experience = [
  {
    role: "Software Development Engineer 1",
    company: "Amadeus Software Labs",
    location: "Bangalore, India",
    period: "Jul 2025 \u2013 Present",
    type: "Full-time",
    color: "#e17a3f",
    points: [
      "Develop C++ backend components for MRS and ReactJS frontend modules for CIT, including bug fixes, feature delivery, and dependency upgrades.",
      "Led copy customization design and contributed to CIT version upgrades and product enhancements.",
      "Implemented advertisement slot subscription functionality in the CIT layout design tool with role-based permissions.",
      "Supported IR and PTR backlogs by resolving production issues and assisting release readiness.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    company: "Amadeus Software Labs",
    location: "Bangalore, India",
    period: "Jan 2025 \u2013 Jun 2025",
    type: "Internship",
    color: "#0a7a78",
    points: [
      "Built and maintained Grafana dashboards to track memory usage and TPS for the SITI project.",
      "Developed a Spring Boot module to calculate TPS and persist computed metrics to the database.",
      "Collaborated with engineers to improve monitoring visibility and operational reporting.",
    ],
  },
  {
    role: "Sustainable Development Program",
    company: "Live-in-Labs (UN-backed initiative)",
    location: "Sadivayal Village, Tamil Nadu",
    period: "Jan 2024 \u2013 Aug 2024",
    type: "Research",
    color: "#8b5cf6",
    points: [
      "Applied software and problem-solving skills to implement sustainable interventions in Sadivayal village.",
      "Conducted human-centered design interviews to identify community pain points and priorities.",
      "Led ideation sessions and contributed practical, community-focused solution concepts.",
    ],
  },
]

const publications = [
  { title: "Implementation and Impact of Sustainable Agriculture and Water Management Solutions in Sadivayal Village, Tamil Nadu", venue: "ICSRF 2025 / Amrita", year: "2025", url: "https://www.amrita.edu/publication/implementation-and-impact-of-sustainable-agriculture-and-water-management-solutions-in-sadivayal-village-tamil-nadu/", tag: "Sustainability" },
  { title: "AasivU: A Framework for Detecting Violence in College Environment using Computer Vision Techniques", venue: "I-SMAC 2024 (IEEE)", year: "2024", url: "https://ieeexplore.ieee.org/document/10714723/", tag: "Computer Vision" },
  { title: "A Comparative Analysis of SDN Controller Placement Problem: IoT-Specific Tactics and Generalized Solutions", venue: "RAIT 2025 (IEEE)", year: "2025", url: "https://ieeexplore.ieee.org/document/11089072/", tag: "IoT / Networking" },
  { title: "Sustainable Solutions for Livelihood Enhancement in Sadivayal Village", venue: "IEEE GHTC 2024", year: "2024", url: "https://ieeexplore.ieee.org/document/10771511/", tag: "IEEE" },
]

const contactCards = [
  { icon: "\u2709\ufe0f", platform: "Email", handle: "harshavardhantangudu1507@gmail.com", description: "Best way to reach me \u2014 I reply within 24 hours.", href: "mailto:harshavardhantangudu1507@gmail.com", cta: "Send a message", color: "#c84b31" },
  { icon: "\ud83d\udcbc", platform: "LinkedIn", handle: "tangudu-harsha-vardhan-2714971aa", description: "Connect professionally \u2014 500+ connections and open to SDE collaboration.", href: "https://www.linkedin.com/in/tangudu-harsha-vardhan-2714971aa/", cta: "Connect on LinkedIn", color: "#0a66c2" },
  { icon: "\ud83d\udc19", platform: "GitHub", handle: "Harsha-Vardhan-Tangudu", description: "Browse 21+ projects across ML, IoT, backend, and more.", href: "https://github.com/Harsha-Vardhan-Tangudu", cta: "View repositories", color: "#1b1f23" },
  { icon: "\ud83d\udd2c", platform: "ResearchGate", handle: "Research Publications", description: "4 peer-reviewed papers on CV, IoT, and cybersecurity.", href: "https://www.researchgate.net/publication/385203128_AasivU_A_Framework_for_Detecting_Violence_in_College_Environment_using_Computer_Vision_Techniques?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InByb2ZpbGUiLCJwYWdlIjoicHJvZmlsZSJ9fQ", cta: "Read my research", color: "#40ba8f" },
  { icon: "\ud83d\udcde", platform: "Phone", handle: "+91 9110522381", description: "For quick chats, calls, or WhatsApp messages.", href: "tel:+919110522381", cta: "Call me", color: "#8b5cf6" },
]

const memberships = [
  { role: "Head, CSE", org: "Anokha Tech Fest, Amrita Vishwa Vidyapeetham, Coimbatore", year: "2024" },
  { role: "Cultural Head", org: "Gokulashtami Event, Amrita Vishwa Vidyapeetham, Coimbatore", year: "2023 - 2024" },
  { role: "IoT Team Lead", org: "Intel IoT Club, Amrita Vishwa Vidyapeetham", year: "2023" },
  { role: "Hostel Committee Head", org: "CSE Department, Amrita Vishwa Vidyapeetham", year: "2023" },
  { role: "Public Relations Head", org: "IETE Chapter, Amrita Vishwa Vidyapeetham", year: "2024" },
  { role: "Technical Core Member", org: "Elite Club, Amrita Vishwa Vidyapeetham", year: "2024" },
  { role: "Placement Coordinator", org: "CSE Department, Amrita Vishwa Vidyapeetham", year: "2024" },
]

const certificates = [
  "Relational Database Systems — Universidad Nacional Autónoma de México, Apr 2025 (Credential ID: Z92XVHA8CZUJ)",
  "NoSQL Systems — Universidad Nacional Autónoma de México, Apr 2025 (Credential ID: 1NR3WHHQ8DY5)",
  "Crash Course on Python — Google, Apr 2025 (Credential ID: PVDO1TPM332H)",
  "Version Control with Git — Atlassian, Apr 2025 (Credential ID: K2HV6ECUWFS7)",
  "Dive Into Kubernetes: Containers, Docker & Kubernetes — Coursera Instructor Network, May 2025 (Credential ID: NNP4LGBAQMG5)",
  "Introduction to Containers with Docker, Kubernetes & OpenShift — IBM, Apr 2025 (Credential ID: EOAPVI3P752F)",
  "Hands-on Introduction to Linux Commands and Shell Scripting — IBM, May 2025 (Credential ID: IMZUNVOMVIQ4)",
  "Introduction to Microsoft Azure Cloud Services — Microsoft, May 2025 (Credential ID: 669ZFMN3JIP2)",
  "Introduction to Cloud Computing — IBM, May 2025 (Credential ID: 4OCGGTCPGE0S)",
  "DevOps Culture and Mindset — University of California, Davis, Mar 2025 (Credential ID: 3ULVG92A3X1R)",
  "DevOps Capstone Project — IBM, May 2025 (Credential ID: JBRTCSQV1APO)",
  "Presentation Certificate — I-SMAC Conference, 2024",
  "Participant — Aviskar Project Expo, 2023 & 2025",
  "Achievement: Head, CSE — Anokha Tech Fest 2024, Amrita Vishwa Vidyapeetham, Coimbatore",
  "Achievement: Cultural Head — Gokulashtami Event 2023 - 2024, Amrita Vishwa Vidyapeetham, Coimbatore",
]

const projectFilters = ["All", "Machine Learning", "Python", "IoT", "Cybersecurity", "Web"]

function inferCategory(project) {
  const text = `${project.title} ${project.description} ${project.tech.join(" ")}`.toLowerCase()
  if (text.includes("machine learning") || text.includes("computer vision") || text.includes("anomaly") || text.includes("phishing")) return "Machine Learning"
  if (text.includes("cyber") || text.includes("intrusion")) return "Cybersecurity"
  if (text.includes("iot") || text.includes("sensor") || text.includes("embedded") || text.includes("irrigation") || text.includes("mushroom")) return "IoT"
  if (text.includes("react") || text.includes("html") || text.includes("ui") || text.includes("portfolio")) return "Web"
  return "Python"
}

function categoryColor(cat) {
  const map = { "Machine Learning": "#e17a3f", Cybersecurity: "#c84b31", IoT: "#0a7a78", Web: "#0a66c2", Python: "#8b5cf6" }
  return map[cat] || "#888"
}

/* HOOKS */

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

function useActiveSection(ids) {
  const [active, setActive] = useState("")
  useEffect(() => {
    const observers = ids.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((obs) => obs && obs.disconnect())
  }, [ids])
  return active
}

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const current = words[wordIdx]
    const delay = deleting ? speed / 2 : speed
    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1))
        setCharIdx((c) => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setTimeout(() => setDeleting(true), pause)
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx((c) => c - 1)
      } else {
        setDeleting(false)
        setWordIdx((i) => (i + 1) % words.length)
      }
    }, delay)
    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx, words, speed, pause])
  return display
}

/* COMPONENTS */

function RevealSection({ children, className = "", id }) {
  const [ref, visible] = useReveal()
  return (
    <section
      id={id}
      ref={ref}
      className={`reveal-section ${visible ? "revealed" : ""} ${className}`}
    >
      {children}
    </section>
  )
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [darkMode, setDarkMode] = useState(false)
  const [expandedProject, setExpandedProject] = useState(null)
  const navIds = ["about", "experience", "skills", "projects", "contact"]
  const activeSection = useActiveSection(navIds)
  const typed = useTypewriter(["Software Engineer", "ML Enthusiast", "IoT Builder", "Problem Solver"])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light")
  }, [darkMode])

  const taggedProjects = useMemo(() => projects.map((p) => ({ ...p, category: inferCategory(p) })), [])

  const filteredProjects = useMemo(() => {
    return taggedProjects.filter((p) => {
      const matchesFilter = activeFilter === "All" || p.category === activeFilter
      const haystack = `${p.title} ${p.description} ${p.tech.join(" ")}`.toLowerCase()
      const matchesSearch = haystack.includes(searchQuery.trim().toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery, taggedProjects])

  const stats = [
    { label: "Projects", value: taggedProjects.length, icon: "\ud83d\ude80" },
    { label: "Publications", value: publications.length, icon: "\ud83d\udcc4" },
    { label: "Certificates", value: certificates.length, icon: "\ud83c\udfc5" },
    { label: "Leadership", value: memberships.length, icon: "\u2b50" },
  ]

  return (
    <div className="app">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <header className="navbar">
        <div className="brand">
          <span className="brand-dot" />
          HV
        </div>
        <nav>
          {navIds.map((id) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "nav-active" : ""}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode((d) => !d)} aria-label="Toggle dark mode">
          {darkMode ? "\u2600\ufe0f" : "\ud83c\udf19"}
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-left">
              <span className="hero-eyebrow">
                <span className="eyebrow-pulse" />
                SDE-1 @ Amadeus Bangalore
              </span>
              <p className="hero-location">Ex-Intern @ Amadeus | CSE Graduate @ Amrita | Live-in-Labs Participant | Andhra Pradesh, India</p>
              <h1 className="hero-name">Tangudu<br />Harsha<br />Vardhan</h1>
              <p className="hero-role">
                <span className="typed-text">{typed}</span>
                <span className="cursor" aria-hidden="true">|</span>
              </p>
              <p className="hero-bio">
                I build practical products across ML, backend systems, and interactive web
                experiences — from rough concept to reliable implementation.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  Explore Work <span>→</span>
                </a>
                <a className="btn btn-secondary" href="#contact">Get in Touch</a>
              </div>
            </div>
            <div className="hero-right">
              <div className="photo-frame">
                <div className="photo-glow" />
                <div className="photo-ring-outer" />
                <div className="photo-ring-inner" />
                <img
                  className="hero-photo"
                  src="https://github.com/Harsha-Vardhan-Tangudu.png"
                  alt="Tangudu Harsha Vardhan"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="photo-badge">Open to SDE roles ✦</div>
              </div>
              <div className="stats-cluster">
                {stats.map((s) => (
                  <div key={s.label} className="stat-chip">
                    <span className="stat-icon">{s.icon}</span>
                    <span className="stat-value">{s.value}+</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <RevealSection id="about" className="section">
          <div className="section-label">About</div>
          <h2 className="section-heading">Who I Am</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>Enthusiastic software engineer with a solid Python background, strong systems fundamentals, and hands-on product development experience at Amadeus.</p>
              <p>I work across ML, IoT, backend systems, and frontend engineering to build solutions that are <strong>measurable</strong>, <strong>maintainable</strong>, and <strong>impactful</strong>.</p>
            </div>
            <div className="about-tags">
              {["Backend Systems", "Machine Learning", "IoT", "ReactJS", "Research", "Spring Boot"].map((tag) => (
                <span key={tag} className="about-tag">{tag}</span>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="experience" className="section">
          <div className="section-label">Experience</div>
          <h2 className="section-heading">Where I Have Worked</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <div key={job.role + i} className="timeline-item">
                <div className="timeline-track">
                  <div className="timeline-dot" style={{ background: job.color, boxShadow: `0 0 0 4px ${job.color}22` }} />
                  {i < experience.length - 1 && <div className="timeline-line" />}
                </div>
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{job.role}</h3>
                      <p className="timeline-company">{job.company} · {job.location}</p>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-badge" style={{ background: job.color + "18", color: job.color, borderColor: job.color + "44" }}>{job.period}</span>
                      <span className="timeline-type">{job.type}</span>
                    </div>
                  </div>
                  <ul className="timeline-points">
                    {job.points.map((pt) => (
                      <li key={pt}><span className="point-dot" style={{ background: job.color }} />{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="skills" className="section">
          <div className="section-label">Skills</div>
          <h2 className="section-heading">Tech Stack</h2>
          <div className="skills-groups">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <h3 className="skill-group-title">{group}</h3>
                <div className="skill-pills">
                  {items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="projects" className="section">
          <div className="section-label">Projects</div>
          <h2 className="section-heading">What I Have Built</h2>
          <div className="project-controls">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search projects…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="search-clear" onClick={() => setSearchQuery("")}>✕</button>
              )}
            </div>
            <div className="filter-row">
              {projectFilters.map((f) => (
                <button key={f} type="button" className={`filter-chip ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>
                  {f}
                </button>
              ))}
            </div>
            <p className="result-count">{filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const isExpanded = expandedProject === project.title
              return (
                <article
                  key={project.title}
                  className={`project-card ${isExpanded ? "expanded" : ""}`}
                  onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                >
                  <div className="project-card-inner">
                    <div className="project-top">
                      <span className="project-cat-dot" style={{ background: categoryColor(project.category) }} />
                      <span className="project-cat">{project.category}</span>
                      <span className="project-expand">{isExpanded ? "\u2212" : "+"}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className={`project-extra ${isExpanded ? "open" : ""}`}>
                      <div className="project-tech">
                        {project.tech.map((t) => (
                          <span key={t} className="tech-tag">{t}</span>
                        ))}
                      </div>
                      <div className="project-links" onClick={(e) => e.stopPropagation()}>
                        <a href={project.github} target="_blank" rel="noreferrer" className="plink plink-github">GitHub →</a>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="plink plink-demo">Live Demo →</a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </RevealSection>

        <RevealSection className="section">
          <div className="section-label">Education</div>
          <h2 className="section-heading">Academic Background</h2>
          <div className="edu-cards">
            {[
              { degree: "B.Tech in Computer Science", school: "Amrita Vishwa Vidyapeetham, Coimbatore", period: "2021 \u2013 2025", score: "CGPA 8.12" },
              { degree: "BIEAP \u2013 MPC", school: "Sri Chaitanya Junior College, Visakhapatnam", period: "2019 \u2013 2021", score: "949 / 1000" },
              { degree: "SSC", school: "Sri Chaitanya E.M School, Bobbili", period: "2018 \u2013 2019", score: "CGPA 10.0 \ud83c\udfc6" },
            ].map((edu) => (
              <div key={edu.degree} className="edu-card">
                <div className="edu-card-top">
                  <h3>{edu.degree}</h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-school">{edu.school}</p>
                <span className="edu-score">{edu.score}</span>
              </div>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="section">
          <div className="section-label">Research</div>
          <h2 className="section-heading">Publications</h2>
          <div className="pub-grid">
            {publications.map((pub) => (
              <a key={pub.title} href={pub.url} target="_blank" rel="noreferrer" className="pub-card">
                <div className="pub-card-top">
                  <span className="pub-tag">{pub.tag}</span>
                  <span className="pub-year">{pub.year}</span>
                </div>
                <p className="pub-title">{pub.title}</p>
                <p className="pub-venue">{pub.venue}</p>
                <span className="pub-cta">Read paper →</span>
              </a>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="section dual-section">
          <div className="dual-col">
            <div className="section-label">Leadership</div>
            <h2 className="section-heading">Memberships</h2>
            <div className="membership-list">
              {memberships.map((m) => (
                <div key={m.role} className="membership-item">
                  <div className="membership-role">{m.role}</div>
                  <div className="membership-org">{m.org}</div>
                  <span className="membership-year">{m.year}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="dual-col">
            <div className="section-label">Achievements</div>
            <h2 className="section-heading">Certificates</h2>
            <ul className="cert-list">
              {certificates.map((c) => (
                <li key={c} className="cert-item">
                  <span className="cert-check">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="section contact-section">
          <div className="section-label">Contact</div>
          <h2 className="section-heading">Let's Connect</h2>
          <p className="contact-intro">
            Whether you have a project idea, a job opportunity, or just want to talk tech — I am always happy to chat.
          </p>
          <div className="contact-grid">
            {contactCards.map((card) => (
              <a
                key={card.platform}
                href={card.href}
                target={card.href.startsWith("mailto") || card.href.startsWith("tel") ? "_self" : "_blank"}
                rel="noreferrer"
                className="contact-card"
                style={{ "--card-color": card.color }}
              >
                <div className="contact-card-glow" />
                <div className="contact-icon">{card.icon}</div>
                <div className="contact-info">
                  <p className="contact-platform">{card.platform}</p>
                  <p className="contact-handle">{card.handle}</p>
                  <p className="contact-desc">{card.description}</p>
                </div>
                <span className="contact-cta">{card.cta} →</span>
              </a>
            ))}
          </div>
        </RevealSection>
      </main>

      <footer className="footer">
        <p>Built by Harsha Vardhan · 2026</p>
        <p className="footer-sub">React + Vite · Deployed on Vercel</p>
      </footer>
    </div>
  )
}

export default App
