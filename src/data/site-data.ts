import type {
  Certification,
  EducationEntry,
  JourneyEntry,
  NavLink,
  Project,
  SiteConfig,
  SkillCategory,
  SocialLink,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Patrick Benero A",
  title: "Patrick Benero A — Python Full-Stack Developer",
  description:
    "Python Full-Stack Developer building Django applications with PostgreSQL, REST APIs, and Stripe integration. Three shipped projects. Open to backend and full-stack internships.",
  url: "https://patrickbenero.dev",
  ogImage: "/og-image.png",
  author: "Patrick Benero A",
  email: "patrickbenero5254@gmail.com",
  phone: "+91 84380 59956",
  location: "Tiruchirapalli, Tamil Nadu, India",
  github: "PatrickBenero",
  linkedin: "patrick-benero",
  resumePath: "/resume/Patrick_Benero_A_Resume_Final.pdf",
  keywords: [
    "Python Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "Backend Developer",
    "PostgreSQL",
    "REST API",
    "Full Stack Developer",
    "Software Engineering Intern",
    "Stripe Integration",
    "Web Development",
  ],
};

export const navLinks: NavLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#github", label: "GitHub" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export const typingPhrases = [
  "Python Full-Stack Developer",
  "Django & PostgreSQL",
  "REST API Development",
  "Backend Systems Builder",
  "Internship Ready",
];

export const professionalSummary = {
  headline:
    "I write Python, design schemas in PostgreSQL, and ship Django apps that handle real edge cases.",
  intro:
    "B.Tech Information Technology student at SRM TRP Engineering College (Class of 2029) with three full-stack projects built independently in Python and Django.",
  paragraphs: [
    "Most of my work starts with the data model. Before I touch views or templates, I map out tables, relationships, and constraints in PostgreSQL or SQLite. That upfront work paid off when I added Stripe checkout to an e-commerce app, built a hash-chained audit log for consent tracking, and integrated the OpenWeatherMap API into a weather dashboard.",
    "I completed Pere Technologies' full-stack program — Django, session auth, Stripe payments, relational database design — and applied each topic in a separate project. I also hold certifications in AWS cloud fundamentals, Meta database engineering, and a Deloitte cybersecurity simulation.",
    "I'm looking for a Python full-stack or backend internship where I can work on production code, learn from senior engineers, and keep shipping.",
  ],
  focusAreas: [
    "Python & Django",
    "Backend Development",
    "PostgreSQL & REST APIs",
    "Full-Stack Web Apps",
    "Problem Solving",
    "Internship Ready",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code2",
    skills: ["Python", "JavaScript", "SQL", "C", "HTML", "CSS"],
    color: "from-red-500/15 to-orange-500/15",
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    skills: ["HTML5", "CSS3", "Bootstrap 4/5", "Responsive Design"],
    color: "from-orange-500/15 to-amber-500/15",
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      "Django",
      "REST API Design",
      "Session Authentication",
      "Stripe API",
      "OpenWeatherMap API",
    ],
    color: "from-red-500/15 to-rose-500/15",
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Schema Design",
      "Query Optimization",
    ],
    color: "from-amber-500/15 to-orange-500/15",
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: "Cloud",
    skills: [
      "AWS Cloud Practitioner",
      "Cloud Fundamentals",
      "Deployment Concepts",
    ],
    color: "from-slate-500/15 to-gray-500/15",
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "Branching & PRs", "REST Client Tools"],
    color: "from-red-500/10 to-orange-500/10",
  },
  {
    id: "cs",
    title: "Core CS",
    icon: "Brain",
    skills: [
      "OOP",
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
    color: "from-gray-500/15 to-slate-500/15",
  },
];

export const projects: Project[] = [
  {
    id: "ecommerce",
    title: "E-Commerce Web Application",
    tagline: "Django store with Stripe checkout and session-based carts",
    description:
      "A full-stack online store where users register, browse products, manage a persistent cart, and pay through Stripe. Built to handle the messy parts of checkout — not just the happy path.",
    problem:
      "A checkout flow breaks easily: users abandon carts mid-payment, submit the pay button twice, or lose cart items when their session expires. The store needed to handle all of that without corrupting order data.",
    solution:
      "I designed the PostgreSQL schema first — users, products, cart items, orders — then split the Django codebase into separate apps for auth, catalog, cart, and payments. Stripe's API connects to the order model so payment status and order records stay in sync.",
    techStack: ["Python", "Django", "PostgreSQL", "Stripe API", "Git"],
    architecture:
      "Four Django apps (users, products, cart, orders) sharing a PostgreSQL database. Cart state lives in the session with a database fallback. Payment flow writes to the orders table before confirming with Stripe.",
    engineeringDecisions: [
      "Designed the relational schema before writing any views — cut down refactoring when checkout logic grew",
      "Split into modular Django apps so I could add the payment layer without touching auth or catalog code",
      "Used session-based cart persistence so guest users keep items without creating accounts",
      "Chose Stripe's API over a custom payment form to avoid handling card data directly",
    ],
    features: [
      "Stripe payment integration with order status tracking",
      "User registration, login, and session-based cart persistence",
      "Modular Django app structure for independent feature work",
      "Duplicate submission and abandoned cart handling",
      "Schema-first development — tables defined before templates",
    ],
    challenges: [
      "Stopping duplicate charges when users double-click the pay button",
      "Keeping cart items consistent across login/logout without orphaned records",
      "Adding the payment module without breaking existing catalog and auth apps",
    ],
    lessons: [
      "Getting the data model right early saves days of rework later",
      "Payment flows need explicit states for failure, timeout, and retry — not just success",
      "Small, focused Django apps are easier to test and extend than one large app",
    ],
    githubUrl: "https://github.com/PatrickBenero",
    liveUrl: null,
    image: "/projects/ecommerce.svg",
    gradient: "from-red-500/20 via-orange-500/15 to-amber-500/15",
    tags: ["Django", "PostgreSQL", "Stripe", "Full-Stack"],
  },
  {
    id: "gcl",
    title: "Global Consent Ledger (GCL)",
    tagline: "Tamper-evident consent records with SHA-256 hash chaining",
    description:
      "A consent management backend where every policy change is logged in a hash chain — alter one record and the entire chain becomes invalid. Exposed through REST endpoints for external systems.",
    problem:
      "Teams tracking user consent manually can't easily prove records weren't edited after the fact. When policy versions conflict, finding the discrepancy takes hours of spreadsheet comparison.",
    solution:
      "Each consent log entry stores a SHA-256 hash of the previous entry, forming a chain that breaks if any record is modified. A policy engine compares versions automatically and flags conflicts through the REST API.",
    techStack: ["Python", "Django", "PostgreSQL", "REST APIs", "SHA-256"],
    architecture:
      "Django REST Framework serves consent records from PostgreSQL. The hash chain lives in a dedicated audit table — each row references the hash of its predecessor. A policy comparison service runs on every consent update.",
    engineeringDecisions: [
      "Used hash chaining instead of a full blockchain — simpler to implement in Django models while still providing tamper evidence",
      "Stored hashes in PostgreSQL rather than files so the REST API and audit log share one source of truth",
      "Built REST endpoints first so third-party systems could consume consent data without database access",
      "Automated policy conflict detection instead of relying on manual review",
    ],
    features: [
      "SHA-256 hash chain for tamper-evident audit logs",
      "Automatic policy version conflict detection",
      "REST API endpoints for third-party integration",
      "Transparent read access to consent history",
      "Reduced manual compliance review time",
    ],
    challenges: [
      "Getting hash chain logic correct when multiple records could be written close together",
      "Comparing policy versions with subtle wording differences that still matter legally",
      "Designing API responses that expose enough data for auditors without leaking sensitive fields",
    ],
    lessons: [
      "Cryptographic integrity patterns map cleanly onto Django model save() hooks",
      "Automated conflict detection beats manual spreadsheet review every time",
      "When external systems depend on your API, response format stability matters as much as correctness",
    ],
    githubUrl: "https://github.com/PatrickBenero",
    liveUrl: null,
    image: "/projects/gcl.svg",
    gradient: "from-orange-500/20 via-red-500/15 to-amber-500/15",
    tags: ["Django", "REST API", "Security", "Compliance"],
  },
  {
    id: "weatherhub",
    title: "WeatherHub",
    tagline: "5-day forecasts via OpenWeatherMap with GPS and city search",
    description:
      "A Django weather app that pulls live forecasts from OpenWeatherMap. Users can search by city name or use GPS, and their recent searches persist across visits.",
    problem:
      "Weather apps that call external APIs often crash or show blank pages when the API rate-limits them or the user enters a misspelled city. Return visitors also shouldn't have to re-search the same location every time.",
    solution:
      "Every API call goes through a wrapper that catches rate-limit and invalid-location errors and shows a clear message instead of failing silently. GPS geolocation and manual search both feed into the same forecast view. Search history saves to the session.",
    techStack: ["Python", "Django", "Bootstrap 5", "SQLite", "OpenWeatherMap API"],
    architecture:
      "Django views call OpenWeatherMap REST endpoints through a service layer with error handling. Session middleware stores the last five searches. Bootstrap 5 templates render responsive forecast cards.",
    engineeringDecisions: [
      "Used SQLite instead of PostgreSQL — the app has no complex relations and SQLite keeps local development simple",
      "Stored search history in the session rather than a database table — lightweight and no migration overhead",
      "Built a shared service function for both GPS and manual input so both paths return identical forecast data",
      "Chose Bootstrap 5 for responsive layout without writing custom CSS from scratch",
    ],
    features: [
      "Real-time 5-day forecasts from OpenWeatherMap",
      "GPS geolocation and manual city search",
      "Graceful error handling for rate limits and bad input",
      "Session-persisted search history",
      "Responsive Bootstrap 5 interface",
    ],
    challenges: [
      "Showing useful feedback when OpenWeatherMap returns a 429 rate-limit response",
      "Normalizing GPS coordinates and city names into the same forecast format",
      "Keeping session history useful without storing unnecessary data",
    ],
    lessons: [
      "External APIs will fail — plan for rate limits and bad input before you plan for the happy path",
      "Session storage works well for small, per-user data that doesn't need to survive logout",
      "Two input methods are only worth it if they share one response handler",
    ],
    githubUrl: "https://github.com/PatrickBenero/WeatherHub",
    liveUrl: null,
    image: "/projects/weatherhub.svg",
    gradient: "from-amber-500/20 via-orange-500/15 to-red-500/10",
    tags: ["Django", "API Integration", "Bootstrap", "Real-Time"],
  },
];

export const certifications: Certification[] = [
  {
    id: "pere-python",
    title: "Python Full Stack Development",
    issuer: "Pere Technologies",
    year: "2026",
    description:
      "Hands-on program covering Django, authentication, Stripe payment integration, relational database design, and delivering a complete full-stack project.",
    logo: "/certifications/pere.svg",
    color: "from-red-500/15 to-orange-500/15",
  },
  {
    id: "aws",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    year: "Completed",
    description:
      "Core AWS services, shared responsibility model, security basics, pricing, and cloud architecture fundamentals.",
    logo: "/certifications/aws.svg",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    id: "meta-db",
    title: "Database Engineer",
    issuer: "Meta (Coursera)",
    year: "Completed",
    description:
      "Schema design, indexing, query optimization, and managing databases in production environments.",
    logo: "/certifications/meta.svg",
    color: "from-slate-500/15 to-gray-500/15",
  },
  {
    id: "deloitte",
    title: "Cyber Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    year: "Completed",
    description:
      "Simulated cybersecurity work — threat analysis, incident response, and enterprise security practices.",
    logo: "/certifications/deloitte.svg",
    color: "from-orange-500/15 to-amber-500/15",
  },
];

export const education: EducationEntry[] = [
  {
    id: "btech",
    degree: "B.Tech, Information Technology",
    institution: "SRM TRP Engineering College",
    period: "2026 – 2029 (Expected)",
    grade: "CGPA: 8.0",
    description:
      "Coursework in data structures, algorithms, DBMS, operating systems, and computer networks — alongside independent Django projects.",
    highlights: [
      "Core CS: DSA, DBMS, OS, Computer Networks",
      "Building full-stack projects alongside coursework",
      "Focus on Python, databases, and web development",
    ],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Education",
    institution: "St. James Matric Hr. Sec. School",
    period: "2025",
    grade: "80%",
    description:
      "State Board higher secondary with strong marks in mathematics and science.",
    highlights: [
      "State Board curriculum",
      "Strong foundation in math and analytical reasoning",
    ],
  },
];

export const learningJourney: JourneyEntry[] = [
  {
    id: "fullstack-program",
    title: "Full-Stack Development Program",
    organization: "Pere Technologies",
    period: "2026",
    description:
      "Completed an intensive Python program — Django, session auth, Stripe integration, PostgreSQL schema design — then built three projects applying each concept.",
    type: "learning",
  },
  {
    id: "independent-projects",
    title: "Independent Project Development",
    organization: "Self-Directed",
    period: "2025 – 2026",
    description:
      "Built an e-commerce platform, a consent audit ledger, and a weather app — each from database schema through working UI, without a team or starter template.",
    type: "engineering",
  },
  {
    id: "certifications",
    title: "Cloud & Database Certifications",
    organization: "AWS, Meta, Deloitte",
    period: "2025 – 2026",
    description:
      "Earned AWS Cloud Practitioner, Meta Database Engineer, and Deloitte Cyber Simulation certificates to round out backend and infrastructure knowledge.",
    type: "learning",
  },
  {
    id: "opensource",
    title: "GitHub & Version Control",
    organization: "GitHub — PatrickBenero",
    period: "Ongoing",
    description:
      "All projects on GitHub with feature branches, incremental commits, and pull-request-style workflows — the same habits I'd use on a team.",
    type: "opensource",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/PatrickBenero",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/patrick-benero",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:patrickbenero5254@gmail.com",
    icon: "Mail",
  },
];

/** Suggested repos to pin on GitHub for the portfolio GitHub section */
export const recommendedPinnedRepos = [
  "e-commerce-web-app",
  "global-consent-ledger",
  "weatherhub",
];
