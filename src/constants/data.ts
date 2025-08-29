export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "Skills",
    href: "#skills",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Netflix Clone",
    desc: [
      "Designed and implemented a full-stack Netflix-style platform with React (frontend) and .NET 8 Web API (backend), using Entity Framework Core + MySQL for persistence.",
      "Built secure authentication with JWT tokens, 2FA, and RBAC, ensuring safe user access and preventing unauthorized account usage.",
      "Developed core features including profile management, content browsing, watch history tracking, favorites ('My List'), and continue-watching functionality.",
      "Designed an Admin Panel for efficient content and episode management, supporting the full content lifecycle.",
      "Delivered a responsive, mobile-first UI with Tailwind CSS, replicating a Netflix-like interface across devices."
    ],
    href: "https://github.com/Bagodiya/NetflixClone",
    source: "",
    logo: "projects/NetflixClone.png",
    logoStyle: {
      width: "300px",
      height: "230px",
      display: "block",
      margin: "0.5rem auto 2rem auto",
      background: "none",
      border: "none",
      borderRadius: "0",
      padding: "0",
      boxShadow: "none",
      objectFit: "contain"
    },
    tags: [
      { id: 1, name: ".NET Core", path: "icons/dot-net-core.svg" },
      { id: 2, name: "MySQL", path: "icons/mysql.svg" },
      { id: 3, name: "Typescript", path: "icons/typescript-icon.svg" },
      { id: 4, name: "JavaScript", path: "icons/javascript.svg" },
      { id: 5, name: "React.js", path: "icons/react.svg" },
      { id: 6, name: "TailwindCSS", path: "icons/tailwindcss-icon.svg" },
      { id: 7, name: "C#", path: "icons/c-sharp.svg" },
    ],
  },
  {
    title: "Portfolio Tracker",
    desc: [
      "Designed and developed a full-stack investment portfolio tracker with a .NET 8 microservices-based backend and React + Vite frontend, enabling users to manage stocks, ETFs, and cryptocurrencies in real time with scalable, modular components.",
      "Integrated live financial data from the Alpha Vantage API, delivering dynamic dashboards and interactive visualizations with Chart.js.",
      "Implemented portfolio features such as add/edit investments, holdings tracking, and performance analytics, giving users actionable insights.",
      "Built robust authentication with JWT, OAuth2 (Google), and Two-Factor Authentication to protect user data and prevent unauthorized access.",
      "Features comprehensive CRUD for holdings and watchlists, advanced analytics, and a responsive dashboard UI.",
      "Optimized backend for fast API responses and deployed with automated CI/CD pipelines and serverless Azure Functions."
    ],
    href: "https://github.com/Bagodiya/PortfolioTracker",
    source: "",
    logo: "projects/Portfolio_Tracker.png",
    logoStyle: {
      width: "300px",
      height: "230px",
      display: "block",
      margin: "0.5rem auto 2rem auto",
      background: "none",
      border: "none",
      borderRadius: "0",
      padding: "0",
      boxShadow: "none",
      objectFit: "contain"
    },
    tags: [
      { id: 1, name: "React.js", path: "icons/react.svg" },
      { id: 2, name: "TailwindCSS", path: "icons/tailwindcss-icon.svg" },
      { id: 3, name: "C#", path: "icons/c-sharp.svg" },
      { id: 4, name: ".NET Core", path: "icons/dot-net-core.svg" },
      { id: 5, name: "MySQL", path: "icons/mysql.svg" },
      { id: 6, name: "Typescript", path: "icons/typescript-icon.svg" },
      { id: 7, name: "javascript", path: "icons/javascript.svg" },
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    company: "Voto Consulting LLC, NJ, USA",
    position: "Software Developer",
    duration: "Oct 2023 – Jun 2025",
    icon: "voto.jpeg",
    technologies: [
      "C#", ".NET Core", "ASP.NET Web API", "Entity Framework Core", "Azure Data Factory", "ExcelDNA", "ELK Stack", "xUnit", "Azure Functions", "Azure App Services", "Azure Key Vault", "Azure DevOps", "CI/CD"
    ],
    projects: [
      {
        name: "Designed and developed scalable RESTful APIs in C#, .NET Core, and ASP.NET Web API, solving performance bottlenecks with caching, indexing, and query optimization, which improved performance by 40% and strengthened integration security.",
        description: "",
        link: ""
      },
      {
        name: "Architected backend data pipelines with Entity Framework Core and Azure Data Factory, enabling high-volume transactional processing and reducing ETL latency.",
        description: "",
        link: ""
      },
      {
        name: "Built Excel add-ins with ExcelDNA, automating financial reporting and delivering advanced analytics to end users, reducing manual effort.",
        description: "",
        link: ""
      },
      {
        name: "Automated financial data ingestion from Bloomberg Data License API and S&P Capital IQ, improving data accuracy and eliminating manual reporting overhead.",
        description: "",
        link: ""
      },
      {
        name: "Implemented ELK stack (Elasticsearch, Logstash, Kibana) and KQL monitoring dashboards, reducing incident resolution time by 30%.",
        description: "",
        link: ""
      },
      {
        name: "Increased test coverage from 50% to 85% by implementing unit and integration tests with xUnit, improving maintainability and reducing production defects.",
        description: "",
        link: ""
      },
      {
        name: "Collaborated with senior developers to refactor legacy codebases, modularizing API logic and enhancing scalability, maintainability, and enterprise data access.",
        description: "",
        link: ""
      },
      {
        name: "Delivered cloud-native solutions with Azure Functions, App Services, and Key Vault, and automated deployments using CI/CD pipelines in Azure DevOps, streamlining build, test, and release workflows.",
        description: "",
        link: ""
      }
    ],
  },
  {
    id: 2,
    company: "University of Georgia – Master's Thesis",
    position: "Researcher: Trustworthy Cross-DSO Control Flow Integrity",
    duration: "Sep 2022 – July 2023",
    icon: "GEORGIA.png",
    technologies: [
      "C++", "LLVM", "SVF", "Intel SGX", "Static Analysis", "Security"
    ],
    projects: [
      {
        name: "Constructed Partial Control Flow Graphs (PCFGs) using Static Value Flow and Demand-Driven Analysis in LLVM, focusing on critical sections to enhance security and efficiency.",
        description: "",
        link: ""
      },
      {
        name: "Analyzed key nodes like LoadSVFGNode, MSSAPHISVFGNode, and AddrSVFGNode during backward traversal in SVF Analysis to capture control flow information.",
        description: "",
        link: ""
      },
      {
        name: "Designed and tested a cross-DSO CFI system to secure applications with shared libraries against control flow hijacking, achieving high precision on benchmarks like OpenSSL, OpenSSH, Grep, and musl.",
        description: "",
        link: ""
      },
      {
        name: "See details: Trustworthy Cross-DSO CFI - https://openscholar.uga.edu/record/2941?ln=en",
        description: "",
        link: "https://openscholar.uga.edu/record/2941?ln=en"
      }
    ]
  },
  {
    id: 3,
    company: "University of Georgia – Research Project",
    position: "Research Assistant: Insecurities of Constraint-Sensitive Indirect Calls",
    duration: "Jan 2022 – Aug 2022",
    icon: "GEORGIA.png",
    technologies: [
      "C++", "LLVM", "SVF", "Security", "GDB", "LLDB"
    ],
    projects: [
      {
        name: "Collaborated on a project to analyze and mitigate vulnerabilities from constraint-sensitive indirect calls in large-scale applications.",
        description: "",
        link: ""
      },
      {
        name: "Developed a CS-iCall CFI mechanism using LLVM to protect against control flow hijacking by analyzing constraint-sensitive dependencies.",
        description: "",
        link: ""
      },
      {
        name: "Resolved segmentation faults and aliasing issues with GDB and LLDB, ensuring stability in control flow integrity mechanisms.",
        description: "",
        link: ""
      }
    ]
  },
];

export const socialLinks = [
  { url: "https://github.com/Bagodiya" },
  { url: "https://www.linkedin.com/in/sofiyabagodiya" },
];

export const skills = [
  // Methodologies
  "SDLC",
  "Agile",
  "Scrum",
  "TDD",
  "BDD",

  // Programming Languages
  "C#",
  "JavaScript",
  "TypeScript",
  "Node.js",

  // Web and Frontend Technologies
  "HTML",
  "CSS",
  "React.js",
  "Bootstrap",
  "Tailwind CSS",

  // Backend and Frameworks
  ".NET Core",
  "ASP.NET Core",
  "ASP.NET Web API",
  "Entity Framework Core",
  "LINQ",

  // Databases
  "SQL Server",
  "MySQL",
  "PostgreSQL",
  "Azure Cosmos DB",

  // Cloud and DevOps
  "Azure",
  "Azure App Services",
  "Azure Functions",
  "Azure Data Factory",
  "Azure Key Vault",
  "Azure DevOps",
  "Docker",
  "Kubernetes",

  // Collaboration & Tools
  "Git",
  "GitHub",
  "Bitbucket",
  "JIRA",
  "Confluence",

  // Testing & Monitoring
  "xUnit",
  "Integration Testing",
  "ELK Stack",
  "Serilog"
];
