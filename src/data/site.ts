// All page content lives here. Edit this file; the components read from it.

export const site = {
  name: "Phemelo Steve Mokwena",
  shortName: "Phemelo Mokwena",
  initials: "PM",
  title: "Phemelo Steve Mokwena | Software and backend developer",
  description:
    "BSc IT student (Computer Science and Mathematics) building backend systems with cloud and CI/CD experience.",
  email: "phemelosteve@gmail.com",
  links: {
    github: "https://github.com/PhemeloSteve",
    linkedin: "https://www.linkedin.com/in/phemelomokwena/",
    // Put your CV in public/cv.pdf, then set this to "/cv.pdf".
    // While it is empty, the Download CV buttons are hidden.
    cv: "",
  },
};

export const nav = [
  { id: "home", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "works", label: "Projects", icon: "code" },
  { id: "skills", label: "Skills", icon: "layers" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export const hero = {
  titleTop: "Backend",
  titleAccent: "Developer",
  intro:
    "I build backend systems and automate how they ship. BSc IT student at UFS, looking for graduate and junior roles in software, backend and cloud engineering.",
};

export const pipeline = {
  title: "Kasi Kapital: how it is checked and shipped",
  stages: [
    "Lint and typecheck",
    "Unit and database tests",
    "Build",
    "Dependency audit and CodeQL",
    "Deploy to Vercel and Supabase",
  ],
};

export const about = {
  paragraphs: [
    "I'm a fourth-year BSc IT student at the University of the Free State, majoring in Computer Science and Mathematics, graduating in 2027.",
    "Since 2024 I've worked as a student assistant and tutor for C#, web development and calculus, and I've completed two internships. Outside class I build projects and practise security on TryHackMe.",
  ],
  facts: [
    { label: "Studying", value: "BSc IT, Computer Science and Mathematics, University of the Free State" },
    { label: "Graduating", value: "2027" },
    { label: "Focus", value: "Backend development, cloud and CI/CD, security" },
    { label: "Teaching", value: "Student assistant and tutor since 2024" },
  ],
};

export const projects = [
  {
    name: "Kasi Kapital",
    summary:
      "Funding platform for South African small businesses. They publish progress and goals; investors and donors can back them. First version built solo in 72 hours for the FNB hackathon, improved since.",
    detail:
      "Supabase Row Level Security, PostGIS location search, and a GitHub Actions pipeline with lint, typecheck, tests, build, dependency audit and CodeQL.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "PostGIS", "GitHub Actions"],
    links: [
      { label: "Live demo", href: "https://kasi-kapital.vercel.app/" },
      { label: "Source", href: "https://github.com/PhemeloSteve/kasi-kapital" },
    ],
    note: "",
  },
  {
    name: "NextPane",
    summary:
      "Turns an Android tablet into a secondary display for a Linux machine, with touch, stylus and audio. Encrypted Noise transport, device pairing and handshake fuzzing.",
    detail: "",
    tags: ["Rust", "Kotlin", "C++ (NDK)", "Noise protocol"],
    links: [] as { label: string; href: string }[],
    note: "Private repository. Architecture write-up on request.",
  },
];

export const skillGroups = [
  { group: "Languages", items: "C#, TypeScript, JavaScript, Python, Rust, SQL" },
  { group: "Web and backend", items: ".NET, Next.js, React, Node.js, Supabase, PostgreSQL" },
  { group: "Quality and CI", items: "GitHub Actions, Vitest, CodeQL, Git" },
  { group: "Systems and security", items: "Linux, Bash, Burp Suite, Metasploit" },
];

export const certifications = [
  { name: "Azure Data Fundamentals (DP-900)", detail: "Microsoft, Jul 2025", planned: false },
  { name: "Cyber Security 101", detail: "TryHackMe, Dec 2025", planned: false },
  { name: "AWS Cloud Practitioner", detail: "Exam planned Dec 2026", planned: true },
];

export const experience = [
  {
    when: "Feb 2026 to now",
    role: "Treasurer, IT Student Association (ITSA)",
    org: "University of the Free State",
    text: "Manage the association's budget and financial reporting for the 2026 term.",
    current: true,
  },
  {
    when: "2024 to 2026",
    role: "Student assistant and tutor",
    org: "University of the Free State",
    text: "C# (.NET) tutorials and labs, web development fundamentals, and first-year calculus support.",
    current: false,
  },
  {
    when: "Jun to Jul 2025",
    role: "Software Engineering Intern",
    org: "BBD, Johannesburg (Work Integrated Learning)",
    text: "Team project: a laser-tag game built with JavaScript and Node.js.",
    current: false,
  },
  {
    when: "Jan to Feb 2025",
    role: "Virtual Intern",
    org: "Quantify Your Future (remote)",
    text: "Data projects based on Absa, FirstRand, FNB, Nedbank and Standard Bank, using Scikit-Learn.",
    current: false,
  },
];
