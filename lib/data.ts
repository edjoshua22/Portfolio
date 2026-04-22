
export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalData {
  name: string;
  role: string;
  github: string;
  location: string;
  locationFlag: string;
  bio: string;
  status: string;
  email: string;
  phone: string;
  linkedin: string;
  yearsExp: number;
  projectsBuilt: number;
  githubRepos: number;
  skills: SkillCategory[];
  projects: Project[];
  socialLinks: SocialLink[];
}

const data: PersonalData = {
  name: "Ed Joshua Ligan",
  role: "Fullstack Developer",
  github: "https://github.com/edjoshua22",
  location: "Davao City , Philippines",
  locationFlag: "🇵🇭",
  bio: "A fullstack dev who ships fast and builds smarter. Passionate about crafting high-performance web applications and pushing the boundaries of what's possible on the web.",
  status: "Open to opportunities",
  email: "ejligan@gmail.com",
  phone: "09922824859",
  linkedin: "https://www.linkedin.com/in/ed-ligan-72ab4a402",

  // Stats
  yearsExp: 3,
  projectsBuilt: 20,
  githubRepos: 30,

  // Skills — grouped by category
  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React" },
        { name: "React Native" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
        { name: "HTML5 / CSS3" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "Python" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "REST APIs" },
        { name: "Firebase" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git / GitHub" },
        { name: "Docker" },
        { name: "Vercel" },
        { name: "CI/CD" },
        { name: "Figma" },
      ],
    },
    {
      category: "Hardware",
      items: [{ name: "Arduino IDE" }],
    },
  ],

  // Projects
  projects: [
    {
      id: "proj-001",
      number: "001",
      title: "MINI_PROJECT",
      description:
        "A mini custom dashboard built for scale.",
      techStack: ["CSS, HTML , SCSS, JavaScript"],
      githubUrl: "https://github.com/edjoshua22/mini-project",
      liveUrl: "https://edjoshua22.github.io/mini-project/",
    },
    {
      id: "proj-002",
      number: "002",
      title: "SIMPLE_PORTFOLIO",
      description:
        "A simple portfolio",
      techStack: ["CSS, HTML"],
      githubUrl: "https://github.com/edjoshua22/your-username.github.io",
      liveUrl: "https://edjoshua22.github.io/your-username.github.io/",
    },
    {
      id: "proj-003",
      number: "003",
      title: "CACAO_TRACK",
      description:
        "CacaoTrack is a React Native mobile app that helps farmers and producers monitor cacao bean fermentation in real-time. The app uses image analysis and machine learning to classify fermentation stages, ensuring optimal quality control in chocolate production.",
      techStack: ["React", "JavaScript,", "Python", "Arduino Ide", "node.js", "flask"],
      githubUrl: "https://github.com/edjoshua22/Cacao-track",
      liveUrl: "https://edjoshua22.github.io/Cacao-track/",
      featured: true,
    },
    {
      id: "proj-004",
      number: "004",
      title: "GRID_FORGE",
      description:
        "A responsive e-commerce platform with payment integration, inventory management, and an admin analytics panel.",
      techStack: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
      githubUrl: "https://github.com/edjoshua22",
      liveUrl: "#",
      featured: true,
    },
  ],

  // Social links
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/edjoshua22",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ed-ligan-72ab4a402",
      icon: "linkedin",
    },
    {
      platform: "Email",
      url: "ejligan@gmail.com",
      icon: "email",
    },
  ],
};

export default data;
