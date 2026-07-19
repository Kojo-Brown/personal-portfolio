import type {
  Project,
  ProjectCategory,
  FooterLink,
  SocialLink,
  Experience,
  AboutSkill,
  Award,
} from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "3D Model Analysis System",
    category: "enterprise",
    description:
      "Injection-molding analysis system with real-time 3D visualization and automated parameter validation",
    longDescription:
      "A 3D model analysis system for injection molding, built during my time at Amalitech Services for igus. The system validates manufacturing parameters in real time, flags errors before they reach production, and gives engineers an interactive 3D view of each part. Reduced manufacturing errors by 35%.",
    technologies: [
      "TypeScript",
      "Angular",
      "3D CAD configurator",
      "WebGL",
      "Nest.js",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    features: [
      "Real-time 3D model visualization",
      "Automated parameter validation",
      "Error detection before production",
      "Manufacturing process simulation",
      "Interactive 3D controls",
    ],
    achievements: [
      "Reduced manufacturing errors by 35%",
      "Replaced a manual parameter-checking workflow with automated validation",
      "Shipped to production for a global manufacturing company",
    ],
    status: "completed",
    year: "2023",
    company: "igus",
    liveUrl: "https://www.igus.com/",
  },
  {
    id: 2,
    title: "Gold Coast Restaurant Platform",
    category: "web-app",
    description:
      "Order management platform with a customer loyalty program for a working restaurant",
    longDescription:
      "A restaurant management platform covering order processing, inventory tracking, and a points-based customer loyalty program. Built with React and Strapi CMS, it streamlined day-to-day operations and increased repeat customers by 25%.",
    technologies: ["React.js", "Strapi CMS", "JWT", "Tailwind CSS"],
    features: [
      "Order management system",
      "Customer loyalty program",
      "Inventory tracking",
      "Admin control panel",
      "Mobile-responsive design",
    ],
    achievements: [
      "Increased repeat customers by 25%",
      "Streamlined the order-processing workflow",
      "Points-based loyalty rewards system",
    ],
    status: "completed",
    year: "2023",
    company: "Wonchunii Services",
    githubUrl: "https://github.com/wonchunii/tgcr-loyalty-app-react",
  },
  {
    id: 3,
    title: "Enterprise Web Applications",
    category: "enterprise",
    description:
      "Frontend development across 5+ large-scale enterprise applications at Amalitech Services",
    longDescription:
      "Over three years at Amalitech Services I led frontend work on more than five enterprise web applications across different industries, using Angular, React, and TypeScript. The work spanned architecture, accessibility, performance, and mentoring — and improved user engagement by 40% across projects.",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "React",
      "Next.js",
      "Nest.js",
      "Node.js",
      "Docker",
      "AWS",
    ],
    features: [
      "Modular architecture",
      "Role-based access control",
      "Data visualization",
      "Responsive design systems",
      "Automated testing",
    ],
    achievements: [
      "Improved user engagement by 40% through UI/UX work",
      "Delivered 5+ enterprise projects",
      "Improved accessibility compliance across platforms",
    ],
    status: "completed",
    year: "2022-2024",
    company: "Amalitech Services",
  },
  {
    id: 4,
    title: "Sports Management System",
    category: "web-app",
    description:
      "Admin portal for a sports organization, managing players, teams, and schedules",
    longDescription:
      "A cloud-hosted sports management system handling 10,000+ records — player statistics, team information, and game schedules — with optimized queries and consistent data sanitization. Deployed and in use at awtsyde.com.",
    technologies: ["React.js", "Tailwind CSS", "JWT"],
    features: [
      "Player statistics tracking",
      "Team management tools",
      "Game scheduling",
      "Data sanitization interface",
      "Optimized data queries",
    ],
    achievements: [
      "Handles 10,000+ records in production",
      "Unified data sanitization across the admin portal",
      "Live and in active use",
    ],
    githubUrl: "https://github.com/Kojo-Brown/cloud-sports-management",
    liveUrl: "https://prod-adminportal.awtsyde.com/",
    status: "completed",
    year: "2024",
  },
  {
    id: 5,
    title: "RESTful API Service",
    category: "backend",
    description:
      "Node.js backend service with JWT authentication and role-based authorization",
    longDescription:
      "A backend service for an animal-care application, built with Node.js, Express, and TypeScript. Implements a RESTful API with JWT authentication, role-based authorization, and structured error handling.",
    technologies: ["Node.js", "Express.js", "TypeScript", "JWT", "Postman"],
    features: [
      "RESTful API design",
      "JWT authentication",
      "Role-based authorization",
      "Structured error handling",
    ],
    achievements: [
      "Secure authentication and authorization flow",
      "API tested end-to-end with Postman collections",
    ],
    githubUrl: "https://github.com/brownbobcat/animal-backend-service",
    status: "completed",
    year: "2025",
  },
  {
    id: 6,
    title: "Environmental Learning Game",
    category: "web-app",
    description:
      "Gamified platform teaching kids environmental sustainability — Traveler's Choice Award winner",
    longDescription:
      "A hackathon project that gamifies environmental education for children, with interactive learning modules, progress tracking, and rewards. Won the Traveler's Choice Award at the Quinnipiac Fall 2024 hackathon.",
    technologies: ["React.js", "TypeScript", "Local storage", "CSS3"],
    features: [
      "Gamified learning modules",
      "Progress tracking",
      "Reward and achievement system",
      "Child-friendly interface",
    ],
    achievements: ["Won the Traveler's Choice Award, Fall 2024 hackathon"],
    liveUrl: "https://qu-fall-hackathon-environment-game-2024.vercel.app/",
    status: "completed",
    year: "2024",
    githubUrl:
      "https://github.com/brownbobcat/qu-fall-hackathon-environment-game-2024",
  },
  {
    id: 7,
    title: "Real-time Chat Application",
    category: "web-app",
    description:
      "Chat application with real-time messaging, group chats, and file sharing",
    longDescription:
      "A real-time chat application built on WebSockets, with instant messaging, group chats, file and image sharing via Cloudinary, and message history backed by MongoDB.",
    technologies: [
      "React.js",
      "Socket.io",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    features: [
      "Real-time messaging",
      "File and image sharing",
      "Group chat functionality",
      "Message history",
      "User presence indicators",
    ],
    achievements: [
      "WebSocket architecture with Socket.io",
      "Authenticated file upload and sharing",
    ],
    status: "in-progress",
    year: "2025",
  },
  {
    id: 8,
    title: "Project Management App",
    category: "web-app",
    description:
      "SCRUM-style project tracking app for software development teams",
    longDescription:
      "A project management app for organizations running software projects in a SCRUM environment — project boards, user-acceptance tracking, and role-based access.",
    technologies: ["React.js", "TypeScript", "Node.js", "MongoDB", "Express"],
    features: [
      "Project tracking boards",
      "User acceptance tracking",
      "Authentication and authorization",
      "Mobile-responsive design",
    ],
    achievements: ["Interactive project board design"],
    githubUrl: "https://github.com/brownbobcat/ntotoe--frontend",
    liveUrl: "https://ntotoe-frontend-pink.vercel.app/",
    status: "in-progress",
    year: "2025",
  },
  {
    id: 9,
    title: "Eye-Assist",
    category: "research",
    description:
      "Real-time assistive navigation system for visually impaired users — published at IEEE UEMCON 2025",
    longDescription:
      "Eye-Assist is a real-time assistive navigation system developed at Quinnipiac University to improve independent mobility for visually impaired users. It combines computer vision, depth sensing, object tracking, and voice guidance to detect obstacles, estimate distances, and provide contextual navigation — plus OCR text reading, scene description, and voice commands — all running as low-latency inference on embedded hardware. Published at IEEE UEMCON 2025 and CCSCNE 2026, and featured by Fox 61, NBC Connecticut, and News8.",
    technologies: [
      "Python",
      "TypeScript",
      "Angular",
      "Flask",
      "YOLO26",
      "OpenCV",
      "TensorFlow Lite",
      "Intel RealSense D435i",
      "Raspberry Pi 5",
      "Android",
      "SQLite",
    ],
    features: [
      "Real-time object detection and classification",
      "Depth estimation and distance measurement",
      "Obstacle prioritization and risk assessment",
      "Voice-guided navigation with text-to-speech",
      "OCR text reading mode",
      "Scene description",
      "Voice commands for hands-free interaction",
      "Low-latency inference on embedded hardware",
    ],
    achievements: [
      "Published at IEEE UEMCON 2025 and CCSCNE 2026",
      "Featured by Fox 61, NBC Connecticut, and News8",
    ],
    status: "completed",
    year: "2026",
    company: "Quinnipiac University",
  },
];

export const projectCategories: ProjectCategory[] = [
  { id: "all", name: "All projects", count: projects.length },
  {
    id: "research",
    name: "Research",
    count: projects.filter((p) => p.category === "research").length,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    count: projects.filter((p) => p.category === "enterprise").length,
  },
  {
    id: "web-app",
    name: "Web applications",
    count: projects.filter((p) => p.category === "web-app").length,
  },
  {
    id: "backend",
    name: "Backend",
    count: projects.filter((p) => p.category === "backend").length,
  },
];

export const navigationLinks: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nicholasdarkobrown/",
  },
  {
    name: "GitHub",
    href: "https://github.com/Kojo-Brown",
  },
  {
    name: "Email",
    href: "mailto:brown.nicholas.darko@gmail.com",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Summer Research Assistant",
    company: "Quinnipiac University",
    location: "Hamden, CT",
    period: "May 2025 – August 2025",
    description:
      "Research assistant on Eye-Assist, a real-time assistive navigation system improving independent mobility for visually impaired users.",
    achievements: [
      "Built real-time object detection, depth estimation, and obstacle prioritization using YOLO26, OpenCV, and Intel RealSense RGB-D imaging",
      "Deployed low-latency inference on Raspberry Pi 5 with TensorFlow Lite optimization",
      "Implemented voice-guided navigation, OCR text reading, and scene description features",
      "Research published at IEEE UEMCON 2025 and CCSCNE 2026; featured by Fox 61, NBC Connecticut, and News8",
    ],
    technologies: [
      "Python",
      "YOLO26",
      "OpenCV",
      "TensorFlow Lite",
      "Angular",
      "Flask",
      "Raspberry Pi 5",
    ],
    type: "work",
  },
  {
    id: 2,
    title: "Poll Interviewer",
    company: "Quinnipiac University",
    location: "Hamden, CT",
    period: "October 2024 – October 2025",
    description:
      "Conducted professional polling interviews for university research with American residents nationwide about current issues.",
    achievements: [
      "Conducted polling interviews with residents nationwide about issues in the news",
      "Maintained high data-quality standards and professional communication protocols",
    ],
    technologies: [],
    type: "work",
  },
  {
    id: 3,
    title: "Associate Frontend Developer",
    company: "Amalitech Services",
    location: "Takoradi, GH",
    period: "June 2021 – July 2024",
    description:
      "Led frontend development for enterprise applications and mentored junior developers.",
    achievements: [
      "Spearheaded frontend development for 5+ enterprise projects using TypeScript, React.js, Next.js, and Angular",
      "Improved user engagement by 40% through intuitive UI/UX design",
      "Developed a 3D model analysis system for injection molding, reducing manufacturing errors by 35%",
      "Built an order management system with customer loyalty features for Gold Coast Restaurant, increasing repeat customers by 25%",
      "Mentored 8 junior developers, conducting code reviews and technical training sessions to improve team productivity by 30%",
    ],
    technologies: ["TypeScript", "React.js", "Next.js", "Angular", "Nest.js"],
    type: "work",
  },
  {
    id: 4,
    title: "Master of Science in Computer Science",
    company: "Quinnipiac University",
    location: "Hamden, CT",
    period: "August 2024 – May 2026",
    description:
      "Graduate studies focused on software development, algorithms, and cybersecurity.",
    achievements: [
      "Coursework: Database Systems, Computer Architecture, Formal Specification Methods, Web Development, Algorithms and Design, Introduction to Cybersecurity",
      "Three-time hackathon winner with the Quinnipiac Computing Club",
      "Maintained strong academic performance while working part-time",
    ],
    technologies: [],
    type: "education",
  },
  {
    id: 5,
    title: "Bachelor of Science in Computer Engineering",
    company: "University of Energy and Natural Resources",
    location: "Sunyani, GH",
    period: "September 2015 – August 2019",
    description:
      "Foundation in computer engineering, software development, and system design.",
    achievements: [
      "Software engineering principles and system programming",
      "Hardware and software system design",
      "Capstone project in embedded systems",
    ],
    technologies: [],
    type: "education",
  },
];

export const aboutSkills: AboutSkill[] = [
  {
    name: "React.js",
    category: "Frontend",
    description: "Component-based UI development",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Full-stack React framework",
  },
  {
    name: "Angular",
    category: "Frontend",
    description: "Enterprise web applications",
  },
  {
    name: "HTML/CSS",
    category: "Frontend",
    description: "Web markup and styling",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first styling",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server-side JavaScript runtime",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Web application framework",
  },
  {
    name: "NestJS",
    category: "Backend",
    description: "Structured server-side applications",
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "Type-safe JavaScript",
  },
  {
    name: "JavaScript",
    category: "Language",
    description: "Dynamic web programming",
  },
  {
    name: "Python",
    category: "Language",
    description: "Computer vision and scripting",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Relational database",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "NoSQL document database",
  },
  {
    name: "MySQL",
    category: "Database",
    description: "Relational database",
  },
  {
    name: "AWS",
    category: "Cloud",
    description: "Cloud infrastructure",
  },
  {
    name: "Docker",
    category: "DevOps",
    description: "Containerization",
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control",
  },
];

export const awards: Award[] = [
  {
    title: "1st Place — Fall 2025 Hackathon",
    organization: "Quinnipiac Computing Club",
    date: "Fall 2025",
    description:
      "Built a campus assistant that helps Quinnipiac students quickly find accurate answers to campus and academic questions.",
  },
  {
    title: "1st Place — Spring 2025 Hackathon",
    organization: "Quinnipiac Computing Club",
    date: "Spring 2025",
    description:
      "Built a gamified cleaning application that motivates students to clean their apartments through points and bonus schemes.",
  },
  {
    title: "Major League Hacking — Spring 2025",
    organization: "Major League Hacking",
    date: "Spring 2025",
    description:
      "Built a tool that streamlines public procurement by scoring tender submissions objectively, reducing room for corruption and bureaucratic inefficiency.",
  },
  {
    title: "Traveler's Choice Award — Fall 2024",
    organization: "Quinnipiac Computing Club",
    date: "Fall 2024",
    description:
      "Created an interactive educational platform teaching kids environmental sustainability, recognized for innovation and impact.",
  },
];
