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
        title: "Portfolio Tracker",
        desc: [
            "Designed and implemented a secure, full-stack investment portfolio tracker for stocks, ETFs, and crypto holdings using React, .NET Core, and MySQL.",
            "Built robust authentication with JWT, OAuth2 (Google), and Two-Factor Authentication to protect user data and prevent unauthorized access.",
            "Integrated AlphaVantage APIs for live pricing and historical charting, enabling actionable market insights.",
            "Features comprehensive CRUD for holdings and watchlists, advanced analytics, and a responsive dashboard UI.",
            "Optimized backend for fast API responses and deployed with automated CI/CD pipelines and serverless Azure Functions.",
            "Enables users to efficiently manage, track, and optimize investments with data-driven decision support."
        ],

        href: "https://github.com/sofiya230/PortfolioTracker",
        source: "",
        logo: "projects/Portfolio_Tracker.png",
        logoStyle: {
            width: "300px",
            height: "230px",
            display: "block",
            margin: "0.5rem auto 2rem auto", // Top margin is smaller now
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
    {
        title: "Portfolio Tracker",
        desc: [
            "Designed and implemented a secure, full-stack investment portfolio tracker for stocks, ETFs, and crypto holdings using React, .NET Core, and MySQL.",
            "Built robust authentication with JWT, OAuth2 (Google), and Two-Factor Authentication to protect user data and prevent unauthorized access.",
            "Integrated AlphaVantage APIs for live pricing and historical charting, enabling actionable market insights.",
            "Features comprehensive CRUD for holdings and watchlists, advanced analytics, and a responsive dashboard UI.",
            "Optimized backend for fast API responses and deployed with automated CI/CD pipelines and serverless Azure Functions.",
            "Enables users to efficiently manage, track, and optimize investments with data-driven decision support."
        ],

        href: "https://github.com/sofiya230/PortfolioTracker",
        source: "",
        logo: "",
        logoStyle: {
            backgroundColor: "#2B6CB0",

            background:
                "linear-gradient(0deg, #2B6CB050, #2B6CB050), linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(43, 108, 176, 0.8) 100%)",
            border: "0.2px solid rgba(43, 108, 176, 1)",
            boxShadow: "0px 0px 60px 0px rgba(43, 108, 176, 0.3)",
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
    {
        title: "Netflix Clone",
        desc: [
            "Built a full-stack Netflix clone with .NET backend and React frontend, implementing secure JWT authentication and role-based access to protect user data and admin features.",
            "Designed advanced content management and dynamic search/filtering features, enabling users to efficiently discover, manage, and personalize their media library and watchlist.",
            "Developed a scalable backend architecture with Entity Framework Core and MySQL, optimizing data retrieval and ensuring reliable performance for high-volume queries.",
            "Implemented a responsive, modern UI with React and Tailwind CSS, delivering an engaging and seamless user experience across desktop and mobile platforms."
        ],
        href: "", 
        source: "", 
        logo: "projects/NetflixClone.png", 
        logoStyle: {
            width: "300px",
            height: "230px",
            display: "block",
            margin: "0.5rem auto 2rem auto", // Top margin is smaller now
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



 
];

export const workExperiences = [
  {
        id: 1,
        company: "Voto Consulting LLC, NJ, USA",
        position: "Software Developer",
        duration: "Oct 2023 - Present",
        icon: "voto.jpeg", 
        technologies: [
            "C#", ".NET Core", "ASP.NET", "Entity Framework", "Dapper", "Azure Functions", "Azure App Services", "Azure DevOps", "CI/CD", "OAuth 2.0", "Azure Active Directory", "xUnit", "React.js"
        ],
    projects: [
            {
                name: "Designed and developed scalable RESTful APIs using C#, .NET Core, and ASP.NET Web API, ensuring high performance and reliability.",
                description: "",
                link: ""
            },
            {
                name: "Implemented multi-threading and optimized concurrency, improving system performance by 30% in high-load environments.",
                description: "",
                link: ""
            },
            {
                name: "Optimized backend query execution, reducing API response times by 40% through indexing, caching, and parallel processing techniques.",
                description: "",
                link: ""
            },
            {
                name: "Developed and optimized database queries using Entity Framework Core and Dapper.",
                description: "",
                link: ""
            },
            {
                name: "Developed Azure Functions and App Services for cost-efficient, scalable serverless applications.",
                description: "",
                link: ""
            },
            {
                name: "Configured and automated CI/CD pipelines with Azure DevOps.",
                description: "",
                link: ""
            },
            {
                name: "Developed unit and integration tests using xUnit, increasing test coverage from 50% to 85%.",
                description: "",
                link: ""
            },
            {
                name: "Integrated Azure Active Directory (AAD) and OAuth 2.0 for authentication and authorization.",
                description: "",
                link: ""
            },
            {
                name: "Conducted thorough code reviews, enforcing best practices in performance optimization, security compliance, and maintainability.",
                description: "",
                link: ""
            }
        

    ],
  },
    {
        id: 2,
        company: "University of Georgia – Master’s Thesis",
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

    { url: "https://github.com/sofiya230" },
    { url: "https://www.linkedin.com/in/sofiyabagodiya" },
];

export const skills = [
    // Methodologies
    "SDLC",
    "Agile",
    "Scrum",
    "BDD",

    // Programming Languages
    "C#",
    "JavaScript",
    "TypeScript",

    // Web and Frontend Technologies
    "HTML",
    "CSS",
    "React.js",
    "Bootstrap",

    // Backend and Frameworks
    ".NET Core",
    "ASP.NET",
    "ASP.NET MVC",
    "Entity Framework",
    "LINQ",
    "Node.js",

    // Version Control & Collaboration
    "Git",
    "GitHub",
    "JIRA",
    "Confluence",
    "Bitbucket",

    // Databases
    "Microsoft SQL Server",
    "MySQL",
    "PostgreSQL",
    "Azure Cosmos DB",

    // Cloud and DevOps
    "Azure",
    "Azure App Services",
    "Azure Functions",
    "Azure DevOps",
    "Docker",
    "Kubernetes"
];
