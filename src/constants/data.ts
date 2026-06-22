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

const bannerLogoStyle = {
  width: "380px",
  height: "215px",
  display: "block",
  margin: "0.5rem auto 2rem auto",
  background: "none",
  border: "none",
  borderRadius: "0",
  padding: "0",
  boxShadow: "none",
  objectFit: "contain",
};

const screenshotLogoStyle = {
  width: "300px",
  height: "230px",
  display: "block",
  margin: "0.5rem auto 2rem auto",
  background: "none",
  border: "none",
  borderRadius: "0",
  padding: "0",
  boxShadow: "none",
  objectFit: "contain",
};

export const myProjects = [
  {
    title: "ignis — A Compiled Language on MLIR",
    desc: [
      "Built a small statically-typed, compiled language whose programs are parsed, type-checked, and lowered into a custom MLIR dialect (ignis) defined in ODS/TableGen with verifiers, custom assembly, and folders.",
      "Implemented a multi-stage dialect-conversion pipeline lowering ignis IR through the standard dialects (arith, scf, cf, func, memref) to the LLVM dialect, then translating to LLVM IR.",
      "Wrote a hand-rolled optimization pass (constant folding + dead-code elimination) and shipped both a JIT backend over MLIR's ORC ExecutionEngine and an AOT backend that links a native executable.",
      "Tooling: ignis (front-to-back driver), ignis-opt (pass round-trip + FileCheck tests), and ignis-translate (LLVM-dialect → LLVM IR).",
    ],
    href: "https://github.com/Bagodiya/ignis",
    source: "",
    logo: "projects/ignis.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "C++", path: "icons/cplusplus.svg" },
      { id: 2, name: "MLIR", path: "icons/mlir.svg" },
      { id: 3, name: "LLVM", path: "icons/llvm.svg" },
      { id: 4, name: "CMake", path: "icons/cmake.svg" },
    ],
  },
  {
    title: "Compiler Backend From Scratch",
    desc: [
      "A chapter-by-chapter, optimizing compiler backend in C++17 that takes a linear IR all the way down to running x86-64 assembly (System V AMD64 ABI).",
      "Implements SSA construction (dominance, dominance frontiers, phi insertion) and a reusable worklist dataflow framework over lattices.",
      "Optimizations include constant folding, SCCP, dead-code elimination, global value numbering, and loop-invariant code motion.",
      "Backend covers instruction selection by tiling, register allocation (linear scan with spilling and Chaitin–Briggs graph coloring), list scheduling, peephole, and ABI-correct code emission.",
    ],
    href: "https://github.com/Bagodiya/Compiler-backend-from-scratch",
    source: "",
    logo: "projects/CompilerBackend.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "C++", path: "icons/cplusplus.svg" },
      { id: 2, name: "CMake", path: "icons/cmake.svg" },
      { id: 3, name: "Markdown", path: "icons/markdown.svg" },
    ],
  },
  {
    title: "brewc — Compiled Language & Toolchain",
    desc: [
      "A minimal compiled language and toolchain written in C++17, taking source from lexing and parsing through type-checking to code generation.",
      "Organized as a real toolchain: public headers, a library core, a unit-test suite, and a documented language specification.",
      "Built with CMake; exercises the full front-to-back path of a compiler in a compact, readable codebase.",
    ],
    href: "https://github.com/Bagodiya/brewc",
    source: "",
    logo: "projects/brewc.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "C++", path: "icons/cplusplus.svg" },
      { id: 2, name: "CMake", path: "icons/cmake.svg" },
    ],
  },
  {
    title: "minidec — x86-64 Decompiler",
    desc: [
      "A small decompiler for x86-64 ELF and Mach-O binaries in C++17 that disassembles selected functions, recovers control flow and basic types, and emits readable C-like pseudocode.",
      "Uses Capstone for disassembly and LIEF for binary parsing; surfaces symbols, per-function disassembly, and decompiled output.",
      "A study project that makes the internals of tools like Ghidra and Hex-Rays approachable.",
    ],
    href: "https://github.com/Bagodiya/minidec",
    source: "",
    logo: "projects/minidec.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "C++", path: "icons/cplusplus.svg" },
      { id: 2, name: "CMake", path: "icons/cmake.svg" },
    ],
  },
  {
    title: "llvm-vuln-detector — LLVM Analysis Pass",
    desc: [
      "An out-of-tree LLVM pass that statically scans LLVM IR for use-after-free / double-free (CWE-416/415) and null-pointer dereference (CWE-476).",
      "Runs a forward, flow-sensitive, intraprocedural dataflow analysis over each function's CFG with a shared generic worklist engine and per-analysis lattices.",
      "Danger-sticky meet at CFG joins (Freed ⊓ Allocated = MaybeFreed) plus guard-edge refinement keeps correctly guarded allocations from being flagged; reports CWE id, severity, and source location.",
      "Non-destructive — returns PreservedAnalyses::all() — and complements runtime sanitizers like ASan/MSan.",
    ],
    href: "https://github.com/Bagodiya/llvm-vuln-detector",
    source: "",
    logo: "projects/llvm-vuln-detector.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "C++", path: "icons/cplusplus.svg" },
      { id: 2, name: "LLVM", path: "icons/llvm.svg" },
      { id: 3, name: "CMake", path: "icons/cmake.svg" },
    ],
  },
  {
    title: "TaintVuln — Clang Static Analyzer Checker",
    desc: [
      "A path-sensitive Clang Static Analyzer checker that tracks attacker-controlled data from input sources to dangerous sinks and reports when tainted data reaches a sink on a feasible path.",
      "Runs on the analyzer's symbolic-execution engine (ExplodedGraph) and reuses Clang's taint API — real program analysis, not a syntactic lint pass.",
      "Detects command injection, format-string, and tainted allocation/copy-size bugs; interprocedural, sanitizer-aware, and extensible via a YAML source/sink/sanitizer model.",
    ],
    href: "https://github.com/Bagodiya/TaintVuln",
    source: "",
    logo: "projects/TaintVuln.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "C++", path: "icons/cplusplus.svg" },
      { id: 2, name: "Clang", path: "icons/clang.svg" },
      { id: 3, name: "LLVM", path: "icons/llvm.svg" },
    ],
  },
  {
    title: "mini-klee — Symbolic Execution Engine",
    desc: [
      "A symbolic execution engine for a C-like language, backed by the Z3 SMT solver, that runs programs on symbolic inputs and explores feasible paths.",
      "Accumulates a path condition per path and uses Z3 to decide feasibility, solve for concrete inputs that drive a chosen path, and detect assertion violations and out-of-bounds accesses.",
      "Configurable DFS/BFS/random state selection, bitvector vs. unbounded-integer semantics, and exploration budgets; emits and replays JSON test cases.",
    ],
    href: "https://github.com/Bagodiya/mini-klee",
    source: "",
    logo: "projects/mini-klee.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "Python", path: "icons/python.svg" },
      { id: 2, name: "Z3", path: "icons/z3.svg" },
    ],
  },
  {
    title: "Compiler Optimization Visualizer",
    desc: [
      "A command-line tool that compiles a C source file at multiple optimization levels and shows what each pass actually changed in the generated assembly.",
      "Supports side-by-side views of -O0..-O3, diffing two specific levels, and annotating detected optimizations.",
      "A learning aid for understanding what -O1/-O2/-O3 really do and for debugging performance differences on real code.",
    ],
    href: "https://github.com/Bagodiya/compiler-optimization-visualizer",
    source: "",
    logo: "projects/compiler-optimization-visualizer.svg",
    logoStyle: bannerLogoStyle,
    tags: [
      { id: 1, name: "Python", path: "icons/python.svg" },
      { id: 2, name: "Clang", path: "icons/clang.svg" },
    ],
  },
  {
    title: "regex-engine",
    desc: [
      "A regular-expression engine written from scratch in pure Python — no re, no third-party libraries — compiled through the same stages a small compiler uses.",
      "Matches in linear time with a Thompson NFA driven by Pike's VM, tracking every active state in lockstep, so it avoids catastrophic backtracking on patterns like (a+)+$.",
      "Mirrors the parts of Python's re it supports (compile/match/search/findall/finditer) including capturing groups, alternation, greedy/lazy quantifiers, and counted repetition.",
    ],
    href: "https://github.com/Bagodiya/regex-engine",
    source: "",
    logo: "projects/regex-engine.svg",
    logoStyle: bannerLogoStyle,
    tags: [{ id: 1, name: "Python", path: "icons/python.svg" }],
  },
  {
    title: "VulnAgent — Agentic CVE Prioritization",
    desc: [
      "An agentic vulnerability-prioritization system that ranks CVEs for patching by combining a trained ML model with sector-aware, SSVC-style domain reasoning.",
      "Base ranker uses 87 engineered features over ~165K CVEs (NVD 2021–2025); a domain agent re-weights results across four SSVC dimensions and per-sector CIA-triad profiles.",
      "A local LLM (via Ollama) generates a short natural-language explanation for each ranking, surfaced through a Gradio UI.",
    ],
    href: "https://github.com/Bagodiya/vulnagent",
    source: "",
    logo: "projects/vulnagent.svg",
    logoStyle: bannerLogoStyle,
    tags: [{ id: 1, name: "Python", path: "icons/python.svg" }],
  },
  {
    title: "Netflix Clone",
    desc: [
      "Designed and implemented a full-stack Netflix-style platform with React (frontend) and .NET 8 Web API (backend), using Entity Framework Core + MySQL for persistence.",
      "Built secure authentication with JWT tokens, 2FA, and RBAC, ensuring safe user access and preventing unauthorized account usage.",
      "Developed core features including profile management, content browsing, watch history tracking, favorites ('My List'), and continue-watching functionality.",
      "Designed an Admin Panel for efficient content and episode management, supporting the full content lifecycle.",
      "Delivered a responsive, mobile-first UI with Tailwind CSS, replicating a Netflix-like interface across devices.",
    ],
    href: "https://github.com/Bagodiya/Netflix_Clone",
    source: "",
    logo: "projects/NetflixClone.png",
    logoStyle: screenshotLogoStyle,
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
      "Optimized backend for fast API responses and deployed with automated CI/CD pipelines and serverless Azure Functions.",
    ],
    href: "https://github.com/Bagodiya/PortfolioTracker",
    source: "",
    logo: "projects/Portfolio_Tracker.png",
    logoStyle: screenshotLogoStyle,
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
    company: "Stevens Institute of Technology, Hoboken, NJ",
    position: "Research Assistant — Security-Aware JIT Compilation",
    duration: "Aug 2025 – Present",
    icon: "stevens.svg",
    technologies: [
      "Java", "Jikes RVM", "JIT Compilation", "Adaptive Optimization", "Runtime Profiling", "Taint Analysis", "ML", "Security",
    ],
    projects: [
      {
        name: "Building a security-aware JIT compilation framework that balances performance optimizations against side-channel leakage using runtime profiling.",
        description: "",
        link: "",
      },
      {
        name: "Modified the Jikes RVM adaptive JIT compiler to integrate security-aware optimization policies into compilation decisions.",
        description: "",
        link: "",
      },
      {
        name: "Applying runtime profiling and dynamic execution observations to identify security-relevant behaviors not captured by static analysis alone.",
        description: "",
        link: "",
      },
      {
        name: "Designed dynamic recompilation heuristics that influence optimization thresholds at runtime.",
        description: "",
        link: "",
      },
      {
        name: "Incorporating taint-aware analysis and ML-assisted techniques to automate detection and prediction of security-sensitive optimization paths.",
        description: "",
        link: "",
      },
    ],
  },
  {
    id: 2,
    company: "University of Georgia – Master's Thesis",
    position: "Research Assistant — Trustworthy Cross-DSO Control Flow Integrity",
    duration: "Dec 2021 – Aug 2023",
    icon: "GEORGIA.png",
    technologies: [
      "C++", "LLVM", "SVF", "Intel SGX", "Static Analysis", "Security",
    ],
    projects: [
      {
        name: "Constructed context-sensitive, IR-level Control Flow Graphs (PCFGs) for large C/C++ codebases using Static Value-Flow and demand-driven analysis in LLVM.",
        description: "",
        link: "",
      },
      {
        name: "Implemented custom LLVM passes for cross-module control-flow extraction and instrumentation.",
        description: "",
        link: "",
      },
      {
        name: "Reduced indirect-branch target sets using call-site–sensitive analysis to improve precision.",
        description: "",
        link: "",
      },
      {
        name: "Analyzed key SVF nodes (LoadSVFGNode, MSSAPHISVFGNode, AddrSVFGNode) during backward traversal to capture control-flow information.",
        description: "",
        link: "",
      },
      {
        name: "Designed and tested a cross-DSO CFI system to secure applications with shared libraries against control-flow hijacking, with high precision on OpenSSL, OpenSSH, Grep, and musl.",
        description: "",
        link: "",
      },
      {
        name: "See details: Trustworthy Cross-DSO CFI — https://openscholar.uga.edu/record/2941?ln=en",
        description: "",
        link: "https://openscholar.uga.edu/record/2941?ln=en",
      },
    ],
  },
  {
    id: 3,
    company: "Voto Consulting LLC, NJ, USA",
    position: "Software Developer",
    duration: "Oct 2023 – Jun 2025",
    icon: "voto.jpeg",
    technologies: [
      "C#", ".NET Core", "ASP.NET Web API", "Entity Framework Core", "Okta", "ExcelDNA", "ELK Stack", "Kibana", "xUnit", "Azure", "CI/CD",
    ],
    projects: [
      {
        name: "Engineered secure RESTful APIs in C#/.NET Core with Okta-based authentication (JWT, 2FA) and RBAC to protect sensitive enterprise data during cross-system integration.",
        description: "",
        link: "",
      },
      {
        name: "Developed an in-house Excel add-in using ExcelDNA to centralize frequently accessed financial data in SQL, reducing reliance on third-party tools, improving auditability, and lowering licensing costs.",
        description: "",
        link: "",
      },
      {
        name: "Improved observability by migrating log analysis from SQL Server to a scalable ELK stack and building Kibana (KQL) dashboards, reducing mean time to resolution (MTTR) by 30%.",
        description: "",
        link: "",
      },
      {
        name: "Increased test coverage from 50% to 85% with xUnit unit/integration tests and refactored legacy code to improve maintainability and scalability.",
        description: "",
        link: "",
      },
    ],
  },
  {
    id: 4,
    company: "University of Georgia – Research Project",
    position: "Research Assistant — Insecurities of Constraint-Sensitive Indirect Calls",
    duration: "Jan 2022 – Aug 2022",
    icon: "GEORGIA.png",
    technologies: ["C++", "LLVM", "SVF", "Security", "GDB", "LLDB"],
    projects: [
      {
        name: "Collaborated on a project to analyze and mitigate vulnerabilities from constraint-sensitive indirect calls in large-scale applications.",
        description: "",
        link: "",
      },
      {
        name: "Developed a CS-iCall CFI mechanism in LLVM to protect against control-flow hijacking by analyzing constraint-sensitive dependencies.",
        description: "",
        link: "",
      },
      {
        name: "Resolved segmentation faults and aliasing issues with GDB and LLDB, ensuring stability in the control-flow-integrity mechanisms.",
        description: "",
        link: "",
      },
    ],
  },
];

export const socialLinks = [
  { url: "https://github.com/Bagodiya" },
  { url: "https://www.linkedin.com/in/sofiyabagodiya" },
];

export const skills = [
  // Programming Languages
  "C++",
  "C",
  "Python",
  "Java",
  "C#",

  // Compiler & Language Implementation
  "MLIR",
  "LLVM IR",
  "Compiler Passes",
  "Clang",
  "Frontend / IR Design",
  "Code Generation",
  "SSA",
  "Register Allocation",

  // Program Analysis
  "Control-Flow Graphs",
  "Call Graph Analysis",
  "Interprocedural Analysis",
  "Dataflow Analysis",
  "Static Analysis",
  "Value-Flow Analysis (SVF)",
  "Taint Analysis",
  "Symbolic Execution",
  "Indirect Call Resolution",

  // Optimization & Runtime Systems
  "JIT Compilation",
  "Jikes RVM",
  "Adaptive Optimization",
  "Runtime Profiling",
  "Recompilation Heuristics",
  "Instrumentation",

  // Systems & Performance
  "Linux",
  "Low-Level Systems",
  "Memory Models",
  "Performance Analysis",
  "CUDA",
  "Z3 / SMT",

  // Tools
  "Git",
  "CMake",
  "GCC / Clang",
  "CI/CD",
];
