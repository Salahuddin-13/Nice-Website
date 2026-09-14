/* ─────────────────────────────────────────────────────────────────────────────
 *  YOUR PORTFOLIO, IN ONE FILE.
 *
 *  Everything on the site is driven from here — nothing is hard-coded inside the
 *  React components. Edit a string, save, and the page updates.
 *
 *  Fields marked  pending: true  are placeholders waiting for your résumé.
 *  They render as a small paper note on the site instead of a broken layout, so
 *  nothing looks "half-built" before you fill them in.
 * ──────────────────────────────────────────────────────────────────────────── */

export type Link = { label: string; href: string; handle?: string };

export type Project = {
  id: string;
  name: string;
  blurb: string;
  description: string;
  year: string;
  status: "Shipped" | "In progress" | "Coursework" | "Playground";
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
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
  tags: string[];
  link?: { label: string; href: string };
  pending?: boolean;
};

export const profile = {
  name: "Mohammed Salahuddin",
  firstName: "Salahuddin",
  initials: "MS",
  /* One line a recruiter can repeat back to their team. */
  role: "Full-stack & AI engineer",
  headline: ["I build things", "that think", "for a living."],
  status: { available: true, label: "Open to full-time & new-grad roles" },
  location: "Hyderabad, India",
  bio: "I work at the seam between machine-learning models and the interfaces people actually touch — FastAPI services streaming to a React dashboard, a PyTorch detector that answers in under 12 milliseconds, a step-by-step algorithm visualizer that makes complexity click. I ship the whole thing, then I make it nicer to use.",

  /* Edit these three to make the contact block work. */
  email: "" as string,
  links: {
    github: "https://github.com/Salahuddin-13",
    linkedin: "" as string,
    /* Leave empty and the résumé button prints a clean, print-optimised version
       of this page instead. Put "/resume.pdf" here once you drop a PDF into public/. */
    resume: "" as string,
  },

  hero: {
    eyebrow: "FULL-STACK · AI · SHIPPED",
    description: [
      "I build things that work on a laptop and survive a demo. Models, APIs,",
      "and the interface in front of them — end to end, in the open on GitHub.",
    ].join(" "),
    social: "22 public repositories, mostly TypeScript and Python.",
    image: "/images/portfolio-hero.jpg",
    imageAlt:
      "A liquid-chrome ring holding an orange sphere, beside a frosted glass card and a lime tennis ball on a cream plinth",
    sticker: ["NO HAND-WAVING", "ONLY SHIPPED"],
    floatLabel: "Under 12 ms inference. Try that in production.",
    caption: "SELECTED WORK, 2025 — 2026",
  },

  ticker: [
    "React + TypeScript",
    "Python + FastAPI",
    "PyTorch",
    "Scikit-learn",
    "Next.js",
    "D3.js",
    "Tailwind CSS",
    "WebSockets",
    "Docker",
    "Built for the India Meteorological Department",
  ],

  stats: [
    { value: "<12 ms", label: "inference on the SkyGuard AI anomaly detector" },
    { value: "4 layers", label: "physics, consensus, LSTM autoencoder, Isolation Forest" },
    { value: "35", label: "IMD weather stations simulated in the pipeline" },
    { value: "22", label: "public repositories on GitHub, all mine to explain" },
  ],

  about: {
    lead: "I like the part of engineering where a model stops being a notebook and starts being a product.",
    paragraphs: [
      "Most of my work lives in the gap between a machine-learning idea and something a real user could click. That gap is where things break: latency, bad data, an operator who needs an answer in a second, a UI that has to explain why the machine said what it said. I enjoy that gap enough to have made it my main job.",
      "So far that has meant an anomaly-detection platform for weather-station telemetry, an operations app for sanitation-device fleets, and an algorithm visualizer I built because the lecture slides were not doing anybody any favours. Each one shipped with a backend, a frontend, and a README that explains the tradeoffs.",
    ],
    traits: [
      { title: "End to end, on purpose", body: "I would rather own one thin vertical slice — schema, API, UI, deploy — than four unfinished layers." },
      { title: "Numbers, not vibes", body: "Every claim I make has a measurement next to it: latency, station count, inference cost. If I can't measure it, I say so." },
      { title: "Readable beats clever", body: "Typed boundaries, small modules, boring names. My favourite refactor is a deletion." },
      { title: "Docs count as delivery", body: "If the README doesn't explain the tradeoff, the work isn't finished yet." },
    ],
    currently: [
      "Getting an LSTM autoencoder to be honest about false positives on storm-front data.",
      "Squeezing inference onto edge hardware — reading through OpenVINO rather than guessing at it.",
      "Rewriting this site so the résumé is a print stylesheet, not a second document to maintain.",
    ],
  },

  experience: [
    {
      org: "Smart India Hackathon 2026 — SkyGuard AI",
      title: "Team build · ML + platform",
      period: "Sep 2026",
      location: "Problem statement SIH26073",
      summary:
        "Real-time anomaly detection for the India Meteorological Department's nationwide network of Automatic Weather Stations.",
      bullets: [
        "Designed a 4-layer defense architecture instead of naive thresholding: deterministic physical thermodynamics, geospatial barometric consensus across neighbouring stations, a PyTorch LSTM autoencoder, and a Scikit-learn Isolation Forest ensemble.",
        "Kept the inference path under 12 ms per reading by scoring on the edge and only escalating to the model layers when the cheap checks are inconclusive.",
        "Streamed telemetry through FastAPI WebSockets into a React 18 + TypeScript + Tailwind dashboard, so an operator sees a station go weird while it is going weird.",
        "Validated against Open-Meteo REST feeds and ESP32 edge-hardware telemetry across 35 simulated stations.",
      ],
      tags: ["Python", "PyTorch", "FastAPI", "React", "TypeScript", "WebSockets"],
      link: { label: "github.com/Salahuddin-13/SkyGuard-AI", href: "https://github.com/Salahuddin-13/SkyGuard-AI" },
    },
    {
      org: "Design & Analysis of Algorithms — AlgoVision",
      title: "Academic project, built past the brief",
      period: "Mar — Apr 2026",
      location: "Coursework",
      summary:
        "An interactive analyzer that plays an algorithm back step by step and puts the cost of it on screen next to the theory.",
      bullets: [
        "Built a FastAPI backend that returns structured execution traces — comparisons, swaps, memory states — rather than a final answer.",
        "Rendered them with D3 and a Monaco editor so you can edit the input and watch the trace change, with side-by-side comparison charts for two algorithms on the same data.",
        "Added complexity cards, use cases and optimisation notes under each visualization, because 'O(n log n)' means nothing to a first-time learner on its own.",
      ],
      tags: ["React", "Vite", "D3", "Monaco", "FastAPI", "Pydantic"],
      link: { label: "github.com/Salahuddin-13/Algo-Vision", href: "https://github.com/Salahuddin-13/Algo-Vision" },
    },
  ] as Role[],

  /* Filled in from the résumé as soon as it lands. */
  experienceNote: {
    pending: true,
    text: "Internships and full-time roles go here — two lines each, what broke, what you changed, what the number was. Send the résumé and they slot straight into this timeline.",
  },

  projects: [
    {
      id: "skyguard",
      name: "SkyGuard AI",
      blurb: "Anomaly detection for 35 weather stations, answering in under 12 milliseconds.",
      description:
        "An enterprise-grade monitoring and sensor-reliability platform built for the IMD's Automatic Weather Station network. Threshold alarms fail during genuine convective storm fronts and batch analytics arrive too late to act on, so SkyGuard layers cheap deterministic checks in front of two ML models and escalates only when it has to.",
      year: "2026",
      status: "Shipped",
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
        "Alert lifecycle with an explicit resolve flow instead of a Slack message that gets forgotten.",
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
        "An interactive algorithm analyzer and optimizer. It replays sorting, graph, dynamic-programming and string-matching algorithms step by step with live metrics, puts two of them side by side, and keeps the theory cards one click away. Deliberately simple stack, because the visualization is the product.",
      year: "2026",
      status: "Coursework",
      role: "Frontend, trace API, visualizations",
      tags: ["React", "D3", "FastAPI", "Monaco"],
      art: "flower",
      highlights: [
        "Structured execution traces from a FastAPI backend — comparisons, swaps and memory states per step.",
        "Step controls, speed slider, live metric counters, and side-by-side comparison charts.",
        "Editable input in a Monaco editor: change the array, watch the trace reshape.",
        "Local run history, exportable results, dark/light mode, responsive down to a phone.",
      ],
      stack: ["React", "Vite", "Tailwind CSS", "React Router", "Monaco Editor", "D3", "FastAPI", "Uvicorn", "Pydantic"],
      links: [{ label: "Source", href: "https://github.com/Salahuddin-13/Algo-Vision" }],
    },
    {
      id: "review-sage",
      name: "AI Code Review Sage",
      blurb: "A reviewer that reads the diff, not the commit message.",
      description:
        "An AI-assisted code review service: a Python backend that persists review state, a Vite + React frontend for the diff and the comments, and container config so it can be deployed anywhere that runs a Procfile or a Dockerfile. Built while learning what an LLM is genuinely useful for — and what it is not.",
      year: "2026",
      status: "Shipped",
      role: "Backend, persistence, frontend",
      tags: ["Python", "React", "Docker", "LLM tooling"],
      art: "peach",
      highlights: [
        "Review sessions and findings persisted through a dedicated database layer.",
        "Containerized with a Dockerfile and deployable via Procfile — no bespoke setup needed to run it.",
        "Frontend built with Vite and hand-rolled fetch utilities instead of a framework-shaped dependency.",
        "Iterated across four repos before settling the architecture; the earlier attempts are public too.",
      ],
      stack: ["Python", "JavaScript", "React", "Vite", "Docker"],
      links: [{ label: "Source", href: "https://github.com/Salahuddin-13/ai-code-review-sage" }],
    },
    {
      id: "offscript",
      name: "Offscript & Crazy Website",
      blurb: "Two web toys: one to breathe in, one to throw things at.",
      description:
        "Offscript is a feel-good single-page experience — curated micro-activities, a drawing studio, a breathing exercise, saved collections in localStorage, and a full theme/personalisation layer. The Crazy Website is its louder sibling: a physics playground, particle and flow-field canvases, a custom cursor and letter-by-letter reveals. Both are built for the fun of it, which is why they got finished.",
      year: "2026",
      status: "Playground",
      role: "Design, motion, all the code",
      tags: ["React", "Canvas", "Tailwind", "Motion"],
      art: "orb",
      highlights: [
        "Single-file production build via Vite + Tailwind v4, deployed on Netlify.",
        "Focus-trapped accessible modals, keyboard navigation, reduced-motion support, four responsive breakpoints.",
        "Canvas drawing studio with pointer capture, export to PNG, and localStorage persistence.",
        "Flow fields, particle systems and rigid-body physics in the companion build.",
      ],
      stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Canvas 2D"],
      links: [
        { label: "Offscript source", href: "https://github.com/Salahuddin-13/Nice-Website" },
        { label: "Crazy Website source", href: "https://github.com/Salahuddin-13/Crazy-Website" },
      ],
    },
    {
      id: "crop",
      name: "Crop Recommender",
      blurb: "Soil in, season in, crop out — a small model with a big audience.",
      description:
        "A recommendation model for crop selection from soil and climate inputs, wrapped in a plain web interface so a farmer-facing demonstration could run without anyone installing Python. Two iterations: an earlier HTML build, then a JavaScript rewrite with the model behind an API.",
      year: "2025",
      status: "Shipped",
      role: "Model, data prep, interface",
      tags: ["Python", "Scikit-learn", "Pandas", "ML basics"],
      art: "landscape",
      highlights: [
        "Feature engineering on soil nutrients and rainfall, trained with a Scikit-learn classifier.",
        "Clean input form with validation, so the demo survives strangers touching it.",
        "Rebuilt twice — the second version separated the model from the page on purpose.",
      ],
      stack: ["Python", "Scikit-learn", "Pandas", "HTML", "JavaScript"],
      links: [
        { label: "Source", href: "https://github.com/Salahuddin-13/punjab-crop-recommender" },
        { label: "Earlier build", href: "https://github.com/Salahuddin-13/ai-crop-recommender" },
      ],
    },
  ] as Project[],

  skills: {
    intro:
      "Two columns, honestly separated: things I have shipped production code with, and things I am actively getting good at. No five-star ratings.",
    groups: [
      {
        title: "Languages",
        kind: "shipped" as const,
        items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
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
          "Reduced-motion & responsive design",
        ],
      },
      {
        title: "Backend & AI",
        kind: "shipped" as const,
        items: [
          "FastAPI + Uvicorn",
          "WebSockets / streaming",
          "REST API design",
          "Pydantic validation",
          "PyTorch (LSTM autoencoders)",
          "Scikit-learn (Isolation Forest, classifiers)",
          "Drizzle ORM",
          "Pandas / NumPy",
        ],
      },
      {
        title: "Ship it",
        kind: "shipped" as const,
        items: ["Git & GitHub", "Docker", "Netlify", "Procfile-based deploys", "ESLint", "Strict TypeScript", "READMEs that explain tradeoffs"],
      },
      {
        title: "Currently learning",
        kind: "learning" as const,
        items: ["OpenVINO inference optimisation", "ESP32 edge telemetry", "Time-series forecasting", "Kubernetes", "Rust, badly, on weekends"],
      },
    ],
  },

  education: {
    /* Fill from the résumé: institution, degree, batch, CGPA, scholarships. */
    degree: { pending: true, institution: "", detail: "", period: "" },
    coursework: [
      { course: "Machine Learning", evidence: "Course notes, units I–III, kept and re-read — the reason half my repos have a model in them." },
      { course: "Design & Analysis of Algorithms", evidence: "Where AlgoVision came from: the brief was a report, I built a visualizer instead." },
      { course: "Data Structures", evidence: "Sorting, graphs, dynamic programming — now stuff I teach other people through a UI." },
      { course: "Operating Systems & Networks", evidence: "Why I care about a 12 ms path more than a clever model." },
    ],
    certs: [
      { name: "Smart India Hackathon 2026", detail: "Built SkyGuard AI against problem statement SIH26073 (Ministry of Earth Sciences / IMD)." },
      { name: "OpenVINO™", detail: "Studied the toolkit by reading the source I forked, not just the docs." },
    ],
  },

  contact: {
    eyebrow: "LAST THING ON THE PAGE",
    title: "Tell me what you're building.",
    body:
      "Hiring, interning, or stuck on something that needs a model and an interface to agree with each other — send a couple of lines. I answer quickly and I don't ghost.",
    note: "Best way to reach me: email, or open an issue on any of my repos. I read those too.",
  },
};

export type Profile = typeof profile;
