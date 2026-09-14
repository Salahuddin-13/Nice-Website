/* ─────────────────────────────────────────────────────────────────────────────
 *  YOUR PORTFOLIO, IN ONE FILE.
 *
 *  Everything on the site is driven from here — nothing is hard-coded inside the
 *  React components. Edit a string, save, and the page updates.
 *
 *  Filled from: Mohammed_Salahuddin_Shams_Resume_v4.pdf (14 Sep 2026), plus the
 *  READMEs of your own public repositories for the technical numbers.
 * ──────────────────────────────────────────────────────────────────────────── */

export type Project = {
  id: string;
  name: string;
  blurb: string;
  description: string;
  year: string;
  status: "Shipped" | "In progress" | "Coursework" | "Hackathon" | "Playground";
  role: string;
  tags: string[];
  art: "orb" | "flower" | "peach" | "landscape";
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

export type Role = {
  org: string;
  title: string;
  kind: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];
  link?: { label: string; href: string };
};

export const profile = {
  name: "Mohammed Salahuddin Shams",
  firstName: "Salahuddin",
  lastName: "Shams",
  initials: "MSS",
  /* One line a recruiter can repeat back to their team. */
  role: "AI & full-stack engineer",
  subtitle: "B.E. Computer Science · Vasavi College of Engineering · expected July 2028",
  status: { available: true, label: "Open to internships & research roles" },
  location: "Hyderabad, Telangana, India",

  /* ── Contact. LinkedIn / LeetCode URLs are the only two blanks left: the résumé
      links them but a PDF screenshot doesn't carry the href. Paste them here. ── */
  email: "salahuddinmohammed475@gmail.com",
  links: {
    github: "https://github.com/Salahuddin-13",
    linkedin: "https://www.linkedin.com/in/mohammed-salahuddin-689669332/",
    leetcode: "https://leetcode.com/u/salahuddin_1/",
    resume: "/resume.pdf",
  },

  hero: {
    eyebrow: "CSE ’28 · AI & FULL-STACK · SHIPPED IN THE OPEN",
    nameLines: ["Mohammed", "Salahuddin"],
    nameAccent: "Shams.",
    description:
      "Full-stack and AI engineer passionate about building high-performance systems and intelligent user experiences. Research intern at IIT Ropar, 5x Oracle certified across GenAI and Data Science, with a track record of taking complex machine learning and algorithmic ideas to shipped, production-ready applications.",
    social: "22 public repositories, mostly TypeScript and Python.",
    image: "/images/portfolio-hero.jpg",
    imageAlt:
      "A liquid-chrome ring holding an orange sphere, beside a frosted glass card and a lime tennis ball on a cream plinth",
    sticker: ["CERTIFIED", "AND CURIOUS"],
    floatLabel: "SGPA 9.22 · Sub-12ms Inference",
    caption: "SELECTED WORK & ACHIEVEMENTS · 2025 — 2026",
    card: { kicker: "WHERE I’VE BEEN", strong: ["Research intern,", "IIT Ropar."] },
  },

  ticker: [
    "C++ (proficient)",
    "Python (advanced)",
    "React + TypeScript",
    "FastAPI",
    "PyTorch",
    "Scikit-learn",
    "LLaMA 3.3 70B via Groq",
    "Hugging Face APIs",
    "Linux / Unix CLI",
    "NPTEL Top 2%",
    "Research intern, IIT Ropar",
    "Systems programming",
  ],

  stats: [
    { value: "9.22", label: "SGPA, Computer Science at Vasavi College of Engineering" },
    { value: "Top 2%", label: "NPTEL + IIT Madras — Joy of Computing using Python, 87%" },
    { value: "5 certs", label: "Oracle Cloud: GenAI Professional, Data Science, AI Foundations & more" },
    { value: "<12 ms", label: "inference on the SkyGuard AI detector built for SIH 2026" },
    { value: "2nd", label: "Prize at E-Summit Hackathon — competing against teams nationwide" },
  ],

  about: {
    lead: "Engineering intelligent, performant products from model to production.",
    paragraphs: [
      "Most of my work lives in the intersection of machine learning and modern software engineering. I focus on solving the real-world challenges that emerge when taking models into production: reducing inference latency, architecting resilient streaming pipelines, and crafting clean user interfaces that make intelligent systems intuitive.",
      "My experience spans a competitive research internship at IIT Ropar, a real-time anomaly detection engine for the India Meteorological Department with sub-12ms latency, a developer-focused GenAI code analysis platform powered by LLaMA 3.3 70B on Groq, and interactive algorithm visualizers.",
    ],
    traits: [
      { title: "End-to-end Ownership", body: "Taking full ownership across schemas, high-throughput APIs, intuitive user interfaces, and cloud deployments." },
      { title: "Performance-Focused", body: "Committed to measurable efficiency: sub-12ms inference latency, optimized algorithms, and scalable architectures." },
      { title: "Strong Fundamentals", body: "Deep foundation in C++, data structures, and computational complexity. NPTEL Elite certification in DS&A." },
      { title: "Clean & Maintainable", body: "Emphasis on strict TypeScript typing, modular architecture, comprehensive documentation, and robust design patterns." },
    ],
    currently: [
      "Shipping SaniGuard — a full-stack device fleet management console with Next.js and typed schemas.",
      "Optimizing LSTM autoencoders for high-precision, low false-positive anomaly detection on streaming sensor data.",
      "Exploring hardware-accelerated edge inference optimization using OpenVINO and microcontroller telemetry.",
    ],
  },

  experience: [
    {
      org: "IIT Ropar · NPTEL Winter Internship",
      title: "Research Intern",
      kind: "Research",
      period: "Jan — Mar 2026",
      location: "Virtual · under Prof. Sudarshan Iyengar",
      summary:
        "A 10-week virtual research internship, awarded by competitive selection through the national NPTEL program.",
      bullets: [
        "Competitively selected for a 10-week virtual research internship at IIT Ropar, working on research tasks under direct faculty supervision.",
        "Conducted research under the direct supervision of Prof. Sudarshan Iyengar, focusing on algorithmic reasoning and computational analysis.",
      ],
      tags: ["Research process", "Python", "Mentorship"],
    },
    {
      org: "Smart India Hackathon 2026 — SkyGuard AI",
      title: "Team build · ML + platform",
      kind: "Hackathon",
      period: "Sep 2026",
      location: "Problem statement SIH26073 · Ministry of Earth Sciences / IMD",
      summary:
        "Real-time anomaly detection for the India Meteorological Department's nationwide network of Automatic Weather Stations.",
      bullets: [
        "Designed a 4-layer defense architecture instead of naive thresholding: deterministic physical thermodynamics, geospatial barometric consensus across neighbouring stations, a PyTorch LSTM autoencoder, and a Scikit-learn Isolation Forest ensemble.",
        "Kept the inference path under 12 ms per reading by scoring cheap checks first and only escalating to the model layers when the deterministic layers stay inconclusive.",
        "Streamed telemetry through FastAPI WebSockets into a React 18 + TypeScript + Tailwind dashboard, so an operator sees a station go weird while it is going weird.",
        "Validated against Open-Meteo REST feeds and ESP32 edge-hardware telemetry across 35 simulated stations.",
      ],
      tags: ["Python", "PyTorch", "FastAPI", "React", "TypeScript", "WebSockets"],
      link: { label: "github.com/Salahuddin-13/SkyGuard-AI", href: "https://github.com/Salahuddin-13/SkyGuard-AI" },
    },
    {
      org: "Smart Crop Selector · Smart India Hackathon",
      title: "Team build · full-stack + data logic",
      kind: "Hackathon",
      period: "2025",
      location: "Team project",
      summary:
        "A web prototype that helps farmers pick the crop that actually suits their land, from geographic, soil and climate inputs.",
      bullets: [
        "Developed a web-based prototype to assist farmers in selecting optimal crops based on geographic data, aiming at yield rather than guesswork.",
        "Integrated AI-driven logic that analyses regional soil and climate data and returns data-backed crop recommendations.",
        "Worked in a team to bridge complex data inputs and a frontend a non-technical user could drive without instructions.",
      ],
      tags: ["Python", "Data analysis", "Frontend", "Teamwork"],
      link: { label: "github.com/Salahuddin-13/punjab-crop-recommender", href: "https://github.com/Salahuddin-13/punjab-crop-recommender" },
    },
    {
      org: "E-Summit Hackathon",
      title: "2nd Prize Winner · Full-stack build",
      kind: "Hackathon",
      period: "2026",
      location: "E-Summit · Entrepreneurship & Innovation",
      summary:
        "Won 2nd place at the E-Summit Hackathon, competing against teams from across the country with an innovative tech solution.",
      bullets: [
        "Secured 2nd Prize at the E-Summit Hackathon, competing against a large pool of talented teams.",
        "Designed and built a complete working prototype under time pressure, demonstrating both technical execution and presentation skills.",
        "Combined full-stack engineering with a compelling product narrative to impress the judging panel.",
      ],
      tags: ["Hackathon", "Full-stack", "Innovation", "Award"],
    },
  ] as Role[],

  /* Filled in automatically when an entry is missing — see the note in Experience.tsx. */
  experienceNote: { pending: false, text: "" },

  projects: [
    {
      id: "dev-sage",
      name: "Dev Sage AI",
      blurb: "A full-stack AI code-analysis tool: LLaMA 3.3 70B on Groq, live on Render.",
      description:
        "An AI-powered developer tool that reviews code, helps debug, explains algorithms visually and then makes you practise. The interesting constraint was latency: an LLM reviewer is only useful if it answers before you lose the thread, so the whole thing is built around Groq's inference engine and a React frontend that streams.",
      year: "2026",
      status: "Shipped",
      role: "Full-stack build, solo-ish, deployed",
      tags: ["React", "LLM APIs", "Groq", "Render"],
      art: "peach",
      highlights: [
        "Built and deployed a full-stack AI-powered code analysis platform using React on the frontend and LLaMA 3.3 70B via the Groq API for ultra-fast LLM inference.",
        "Features include AI-driven code review, debugging assistance, algorithm visualisation, and an interactive practice mode for developers.",
        "Leveraged Groq's inference engine for low-latency AI responses, and managed full deployment on Render for live public access.",
        "Engineered low-latency streaming responses and modular full-stack architecture deployed live on Render.",
      ],
      stack: ["React", "JavaScript", "Python", "Groq API", "LLaMA 3.3 70B", "Render", "Docker"],
      links: [
        { label: "Live App", href: "https://ai-code-review-sage.onrender.com/" },
        { label: "devsage-ai", href: "https://github.com/Salahuddin-13/devsage-ai" },
        { label: "ai-code-review-sage", href: "https://github.com/Salahuddin-13/ai-code-review-sage" },
      ],
    },
    {
      id: "skyguard",
      name: "SkyGuard AI",
      blurb: "Anomaly detection for 35 weather stations, answering in under 12 milliseconds.",
      description:
        "An enterprise-grade monitoring and sensor-reliability platform built for the IMD's Automatic Weather Station network. Threshold alarms fail during genuine convective storm fronts and batch analytics arrive too late to act on, so SkyGuard layers cheap deterministic checks in front of two ML models and escalates only when it has to.",
      year: "2026",
      status: "Hackathon",
      role: "ML pipeline, streaming backend, dashboard",
      tags: ["Python", "PyTorch", "FastAPI", "React", "TypeScript"],
      art: "orb",
      highlights: [
        "4-layer defense: physical thermodynamics → geospatial barometric consensus → LSTM autoencoder → Isolation Forest.",
        "Dual-ML ensemble scored at under 12 ms inference latency per reading.",
        "WebSocket telemetry ingestion from Open-Meteo REST feeds and ESP32 edge hardware.",
        "Operator dashboard in React 18 + Tailwind with live station state and alert triage.",
      ],
      stack: ["Python", "PyTorch", "Scikit-learn", "FastAPI", "WebSockets", "React 18", "TypeScript", "Tailwind CSS"],
      links: [{ label: "Source", href: "https://github.com/Salahuddin-13/SkyGuard-AI" }],
    },
    {
      id: "saniguard",
      name: "SaniGuard",
      blurb: "A fleet console for sanitation devices: readings, alerts, refills, no hardware required.",
      description:
        "An operations platform for hygiene-device fleets. Devices report readings, thresholds raise alerts, and a dispatcher resolves them or schedules a refill — with a simulate endpoint so the whole loop can be demoed end to end without a single physical sensor in the room.",
      year: "2026",
      status: "In progress",
      role: "Architecture, API, UI",
      tags: ["Next.js", "TypeScript", "Drizzle", "REST"],
      art: "landscape",
      highlights: [
        "Next.js App Router with route handlers for /devices, /alerts and per-device /readings, /events, /refill.",
        "Typed database layer through Drizzle ORM — schema and queries in the same language as the UI.",
        "Alert lifecycle with an explicit resolve flow instead of a message that gets forgotten.",
        "POST /devices/[id]/simulate drives the full loop for demos and UI work.",
      ],
      stack: ["Next.js", "TypeScript", "Drizzle ORM", "Tailwind CSS", "ESLint"],
      links: [{ label: "Source", href: "https://github.com/Salahuddin-13/SaniGuard" }],
    },
    {
      id: "algovision",
      name: "AlgoVision",
      blurb: "Watch an algorithm think, then compare it against its rival on the same data.",
      description:
        "An interactive algorithm analyzer and optimizer. It replays sorting, graph, dynamic-programming and string-matching algorithms step by step with live metrics, side-by-side comparisons, and real-time complexity analysis.",
      year: "2026",
      status: "Coursework",
      role: "Frontend, trace API, visualizations",
      tags: ["React", "D3", "FastAPI", "Algorithms"],
      art: "flower",
      highlights: [
        "Structured execution traces from a FastAPI backend — comparisons, swaps and memory states per step.",
        "Step controls, speed slider, live metric counters, and side-by-side comparison charts.",
        "Editable input in a Monaco editor: change the array, watch the trace reshape.",
        "Complexity cards with use cases and optimisation notes, plus local run history, export, dark/light mode and a responsive layout.",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "React Router", "Monaco Editor", "D3", "FastAPI", "Uvicorn", "Pydantic"],
      links: [{ label: "Source", href: "https://github.com/Salahuddin-13/Algo-Vision" }],
    },
    {
      id: "genai-assistant",
      name: "GenAI Assistant",
      blurb: "A hackathon chatbot that hands you the snippet, then explains the tradeoff.",
      description:
        "Built at the FutureSkills GenAI Hackathon: a chatbot that returns optimised code for fundamental programming logic and data-structure problems. Straightforward on the surface, which was the point — the interesting work was prompt design and getting the latency low enough that it felt like a pair programmer rather than a queue.",
      year: "2025 — 2026",
      status: "Hackathon",
      role: "Chatbot build, team of several",
      tags: ["LLMs", "Hugging Face", "Git"],
      art: "orb",
      highlights: [
        "Built a functional chatbot designed to provide optimised code snippets for fundamental programming logic and data structures.",
        "Wired Hugging Face API tokens to leverage large language models for real-time code generation.",
        "Worked in Git and GitHub for version control — merges, conflicts and all, in a collaborative team setting.",
      ],
      stack: ["Python", "Hugging Face API", "JavaScript", "Git & GitHub"],
      links: [{ label: "All repos", href: "https://github.com/Salahuddin-13?tab=repositories" }],
    },
    {
      id: "crop",
      name: "Smart Crop Selector",
      blurb: "Soil in, season in, crop out — 2nd Prize Winner at E-Summit Hackathon, with a farmer-facing interface.",
      description:
        "A recommendation prototype for crop selection from soil, climate and geographic inputs, awarded 2nd Prize at the E-Summit Hackathon. Wrapped in an intuitive web interface so farmers and agronomists can run data-backed crop planning without needing technical software.",
      year: "2025",
      status: "Hackathon",
      role: "Model, data prep, interface",
      tags: ["2nd Prize Winner", "Python", "Scikit-learn", "Pandas"],
      art: "landscape",
      highlights: [
        "Secured 2nd Prize at the E-Summit Hackathon — recognized for real-world agricultural impact, data integration, and full-stack execution.",
        "Feature engineering on regional soil, nutrient and rainfall data behind a data-backed recommendation.",
        "Clean input form with validation, so the demo survives strangers touching it.",
        "Bridged complex data inputs and a frontend a non-technical user could actually drive.",
        "Rebuilt once, deliberately, to separate the model from the page.",
      ],
      stack: ["Python", "Scikit-learn", "Pandas", "HTML", "JavaScript"],
      links: [
        { label: "Source", href: "https://github.com/Salahuddin-13/punjab-crop-recommender" },
        { label: "Earlier build", href: "https://github.com/Salahuddin-13/ai-crop-recommender" },
      ],
    },
    {
      id: "offscript",
      name: "Offscript & Creative Experiments",
      blurb: "Interactive web applications built for creative exploration and design research.",
      description:
        "An exploratory web project demonstrating creative computing, fluid CSS/canvas animations, interactive state management, and responsive design patterns.",
      year: "2026",
      status: "Playground",
      role: "Design, motion, all the code",
      tags: ["React", "Canvas", "Tailwind", "Motion"],
      art: "flower",
      highlights: [
        "Single-file production build via Vite + Tailwind v4, deployed on Netlify.",
        "Focus-trapped accessible modals, keyboard navigation, reduced-motion support, four responsive breakpoints.",
        "Canvas drawing studio with pointer capture, export to PNG, and localStorage persistence.",
        "Flow fields, particle systems and interactive physics engines.",
      ],
      stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Canvas 2D"],
      links: [
        { label: "Offscript source", href: "https://github.com/Salahuddin-13/Nice-Website" },
        { label: "Crazy Website source", href: "https://github.com/Salahuddin-13/Crazy-Website" },
      ],
    },
  ] as Project[],

  skills: {
    intro:
      "Core technologies, frameworks, and developer tools applied across shipped applications, hackathons, and systems research.",
    groups: [
      {
        title: "Languages",
        kind: "shipped" as const,
        items: ["C++ (proficient)", "Python (advanced)", "JavaScript / TypeScript", "Java", "HTML5 / CSS3", "SQL"],
      },
      {
        title: "Frontend",
        kind: "shipped" as const,
        items: [
          "React 18 / 19",
          "Next.js (App Router)",
          "Vite",
          "Tailwind CSS v4",
          "D3.js",
          "Monaco Editor",
          "Canvas 2D",
          "Accessible modals & focus trapping",
          "Responsive & reduced-motion design",
        ],
      },
      {
        title: "Backend, AI & data",
        kind: "shipped" as const,
        items: [
          "FastAPI + Uvicorn",
          "WebSockets / streaming",
          "REST API design",
          "Pydantic validation",
          "PyTorch (LSTM autoencoders)",
          "Scikit-learn (Isolation Forest, classifiers)",
          "Pandas / NumPy",
          "Groq & Hugging Face LLM APIs",
          "Drizzle ORM",
        ],
      },
      {
        title: "Systems & algorithms",
        kind: "shipped" as const,
        items: [
          "Data structures & algorithms",
          "Complexity analysis & optimization",
          "Object-oriented design",
          "Probability & statistics",
          "Logic & switching theory",
          "Linux / Unix command line",
        ],
      },
      {
        title: "DevOps & Tooling",
        kind: "shipped" as const,
        items: ["Git & GitHub", "Docker", "Render", "Netlify", "Vercel", "ESLint", "Strict TypeScript", "CI/CD & Deployments"],
      },
      {
        title: "Currently learning",
        kind: "learning" as const,
        items: [
          "Systems programming in C++ beyond the syllabus",
          "OpenVINO inference optimisation",
          "ESP32 edge telemetry",
          "Time-series forecasting",
          "Generative AI evaluation",
        ],
      },
    ],
  },

  education: {
    degree: {
      pending: false,
      institution: "Vasavi College of Engineering",
      detail: "Bachelor of Engineering in Computer Science — SGPA 9.22 / 10.0",
      period: "Expected July 2028 · Hyderabad, India",
    },
    coursework: [
      { course: "Data Structures & Algorithms", evidence: "Advanced algorithmic complexity, graph theory, trees, dynamic programming, and data structures." },
      { course: "Probability & Statistics", evidence: "Statistical distributions, probability modeling, hypothesis testing, and machine learning foundations." },
      { course: "Object-Oriented Programming", evidence: "Design patterns, encapsulation, modular architecture, and type-safe systems design." },
      { course: "Logic & Switching Theory", evidence: "Boolean algebra, digital logic minimization, circuit design, and computer organization fundamentals." },
    ],
    certs: [
      { name: "E-Summit Hackathon 2026 — 2nd Prize Winner", detail: "National innovation and entrepreneurship hackathon — designed and shipped a working product under competitive constraints." },
      { name: "Oracle Cloud Infrastructure 2025 — Certified Generative AI Professional", detail: "Advanced proficiency in building and deploying LLM-based solutions on OCI." },
      { name: "Oracle Cloud Infrastructure 2025 — Certified Data Science Professional", detail: "ML model training, evaluation and deployment workflows." },
      { name: "Oracle Cloud Infrastructure 2025 — Certified AI Foundations Associate", detail: "Foundation layer for the GenAI and data-science tracks." },
      { name: "Oracle Cloud Infrastructure 2025 — Certified Foundations Associate", detail: "Core OCI platform literacy: compute, storage, networking." },
      { name: "Oracle Data Platform 2025 — Certified Foundations Associate", detail: "Data movement and governance fundamentals." },
      { name: "NPTEL (IIT Madras) — Top 2%", detail: "The Joy of Computing using Python, score 87%. Also Elite status in Programming, Data Structures & Algorithms using Python." },
      { name: "IBM SkillsBuild — Introduction to Generative AI", detail: "Feb 2026, 4 hours." },
    ],
    leadership: [
      { name: "Competitive Programming", detail: "Actively training on LeetCode and Codeforces — linked lists, array manipulation, Div. 2 / 3 contest problems." },
      { name: "Model United Nations (MUN) Club", detail: "Diplomatic simulations, for the part of engineering where you have to argue in public." },
      { name: "Toastmasters International", detail: "Structured communication and impromptu speaking — the reason I would rather explain a system than gesture at it." },
    ],
  },

  contact: {
    eyebrow: "GET IN TOUCH",
    title: "Let's build something together.",
    body:
      "Open to internship opportunities, research assistantships, and engineering collaborations. Feel free to send a message or connect on LinkedIn.",
    note: "Fastest response via email. Always happy to discuss engineering problems and new opportunities.",
  },
};

export type Profile = typeof profile;
