import type {
  Service,
  ProcessStep,
  Achievement,
  Category,
  Project,
  ProjectCategory,
  Skill,
  ContactInfo,
  FooterLink,
  SocialLink,
  Experience,
  AboutSkill,
  Award,
} from "@/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    icon: "🎨",
    category: "development",
    description: "Modern, responsive web interfaces using latest technologies",
    longDescription:
      "Specialized in creating beautiful, high-performance frontend applications using React.js, Next.js, Angular, and TypeScript. With experience improving user engagement by 40% through intuitive UI/UX design at Amalitech Services.",
    technologies: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "RxJS",
    ],
    features: [
      "Responsive web design for all devices",
      "Single Page Applications (SPA)",
      "Progressive Web Apps (PWA)",
      "UI/UX implementation from Figma designs",
      "Performance optimization & code splitting",
      "Cross-browser compatibility testing",
      "Accessibility compliance (WCAG)",
      "Real-time features with WebSockets",
    ],
    pricing: "Starting at $2,500",
    timeline: "2-6 weeks",
    experience: "5+ enterprise projects at Amalitech Services",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: "⚙️",
    category: "development",
    description: "Scalable server-side applications and robust API development",
    longDescription:
      "Expert in building secure, scalable backend systems using Node.js, Express.js, NestJS, and Python. Experienced in database design, API development, and cloud deployment with focus on performance and security.",
    technologies: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
    features: [
      "RESTful API development",
      "Database design & optimization",
      "Authentication & authorization systems",
      "Payment gateway integration",
      "Cloud deployment (AWS, Docker)",
      "Microservices architecture",
      "Performance monitoring & logging",
      "Security implementation & auditing",
    ],
    pricing: "Starting at $3,000",
    timeline: "3-8 weeks",
    experience: "Multiple production APIs serving 1000+ users",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    icon: "🚀",
    category: "development",
    description: "Complete web applications from concept to deployment",
    longDescription:
      "End-to-end web application development combining frontend and backend expertise. Perfect for businesses needing comprehensive solutions with a single point of contact for the entire development process.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Git",
    ],
    features: [
      "Complete web application development",
      "Database integration & management",
      "User authentication & role management",
      "Payment processing integration",
      "Admin dashboards & analytics",
      "Real-time features & notifications",
      "Deployment & hosting setup",
      "Performance optimization",
    ],
    pricing: "Starting at $5,000",
    timeline: "4-12 weeks",
    experience: "Gold Coast Restaurant platform with 25% customer increase",
  },
  {
    id: 4,
    title: "Enterprise Solutions",
    icon: "🏢",
    category: "enterprise",
    description: "Large-scale applications for complex business requirements",
    longDescription:
      "Specialized in developing enterprise-grade applications that handle complex business logic, large datasets, and high-traffic scenarios. Experience with Angular, TypeScript, and scalable architecture patterns.",
    technologies: [
      "Angular",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
    ],
    features: [
      "Scalable architecture design",
      "Complex business logic implementation",
      "Legacy system integration",
      "Advanced security measures",
      "Performance monitoring & optimization",
      "Comprehensive documentation",
      "Team training & knowledge transfer",
      "Ongoing maintenance & support",
    ],
    pricing: "Starting at $10,000",
    timeline: "8-24 weeks",
    experience: "5+ enterprise projects with 40% user engagement improvement",
  },
  {
    id: 5,
    title: "3D Web Applications",
    icon: "🎯",
    category: "specialized",
    description: "Interactive 3D experiences and advanced data visualization",
    longDescription:
      "Creating immersive 3D web applications and sophisticated data visualization tools. Specialized in manufacturing analysis systems and complex 3D model interactions using modern web technologies.",
    technologies: ["Three.js", "WebGL", "React.js", "TypeScript", "D3.js"],
    features: [
      "3D model visualization & interaction",
      "Real-time parameter analysis",
      "Manufacturing process simulation",
      "Interactive data dashboards",
      "Performance-optimized rendering",
      "Cross-platform compatibility",
      "Custom visualization components",
      "Integration with existing systems",
    ],
    pricing: "Starting at $7,500",
    timeline: "6-16 weeks",
    experience: "3D injection molding system reducing errors by 35%",
  },
  {
    id: 6,
    title: "Database Solutions",
    icon: "🗄️",
    category: "specialized",
    description: "Database design, optimization, and migration services",
    longDescription:
      "Comprehensive database solutions including design, optimization, and migration. Experience with SQL and NoSQL databases, cloud migration, and performance optimization for handling thousands of records.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "AWS RDS",
      "Database Design",
      "SQL Optimization",
    ],
    features: [
      "Database design & architecture",
      "Query optimization & indexing",
      "Data migration & synchronization",
      "Cloud database deployment",
      "Backup & recovery strategies",
      "Performance monitoring",
      "Data sanitization & security",
      "Scalability planning",
    ],
    pricing: "Starting at $2,000",
    timeline: "2-8 weeks",
    experience: "Sports management system handling 10,000+ records",
  },
  {
    id: 7,
    title: "Code Review & Mentoring",
    icon: "🔍",
    category: "consulting",
    description: "Technical guidance, code review, and team mentoring",
    longDescription:
      "Providing expert technical guidance based on experience mentoring 8 junior developers at Amalitech Services. Offering code reviews, architecture consultation, and team training to improve development processes.",
    technologies: [
      "Code Analysis",
      "Architecture Review",
      "Best Practices",
      "Team Training",
      "Technical Documentation",
    ],
    features: [
      "Comprehensive code quality assessment",
      "Architecture consultation & planning",
      "Performance optimization strategies",
      "Security audit & recommendations",
      "Team mentoring & training sessions",
      "Best practices implementation",
      "Technical documentation review",
      "Development process improvement",
    ],
    pricing: "Starting at $150/hour",
    timeline: "1-4 weeks",
    experience: "Mentored 8+ junior developers, 30% productivity improvement",
  },
  {
    id: 8,
    title: "Technical Consulting",
    icon: "💡",
    category: "consulting",
    description: "Strategic technical advice and project planning",
    longDescription:
      "Strategic technical consulting for businesses looking to make informed technology decisions. Helping organizations choose the right tech stack, plan architecture, and optimize development processes.",
    technologies: [
      "Technology Strategy",
      "Architecture Planning",
      "Process Optimization",
      "Tool Selection",
    ],
    features: [
      "Technology stack recommendations",
      "Project planning & estimation",
      "Architecture design & review",
      "Development process optimization",
      "Tool & framework selection",
      "Risk assessment & mitigation",
      "Scalability planning",
      "Cost optimization strategies",
    ],
    pricing: "Starting at $200/hour",
    timeline: "1-2 weeks",
    experience: "Successfully guided multiple enterprise projects",
  },
];

export const developmentProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description:
      "Understanding your business goals, technical requirements, and success metrics",
    icon: "🔍",
    duration: "1-2 days",
  },
  {
    step: "02",
    title: "Planning & Architecture",
    description:
      "Creating detailed project roadmap, technical architecture, and timeline",
    icon: "📐",
    duration: "2-3 days",
  },
  {
    step: "03",
    title: "Design & Prototyping",
    description:
      "Wireframes, mockups, and interactive prototypes for validation",
    icon: "🎨",
    duration: "3-5 days",
  },
  {
    step: "04",
    title: "Development & Implementation",
    description:
      "Agile development with regular updates and milestone deliveries",
    icon: "⚡",
    duration: "Main phase",
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing including unit, integration, and user acceptance testing",
    icon: "🧪",
    duration: "1-2 weeks",
  },
  {
    step: "06",
    title: "Deployment & Launch",
    description:
      "Production deployment with monitoring and performance optimization",
    icon: "🚀",
    duration: "2-3 days",
  },
  {
    step: "07",
    title: "Support & Maintenance",
    description: "Ongoing support, monitoring, and feature enhancements",
    icon: "🛠️",
    duration: "Ongoing",
  },
];

export const achievements: Achievement[] = [
  {
    metric: "40%",
    description: "Average user engagement improvement",
    icon: "📈",
  },
  {
    metric: "35%",
    description: "Manufacturing error reduction",
    icon: "🎯",
  },
  {
    metric: "25%",
    description: "Customer retention increase",
    icon: "👥",
  },
  {
    metric: "8+",
    description: "Junior developers mentored",
    icon: "🌟",
  },
  {
    metric: "5+",
    description: "Enterprise projects delivered",
    icon: "💼",
  },
  {
    metric: "30%",
    description: "Team productivity improvement",
    icon: "⚡",
  },
];

export const categories: Category[] = [
  { id: "services", name: "All Services", icon: "🛠️" },
  { id: "development", name: "Development", icon: "💻" },
  { id: "enterprise", name: "Enterprise", icon: "🏢" },
  { id: "specialized", name: "Specialized", icon: "🎯" },
  { id: "consulting", name: "Consulting", icon: "💡" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "3D Model Analysis System",
    category: "enterprise",
    description:
      "Sophisticated injection molding analysis system revolutionizing manufacturing processes",
    longDescription:
      "Developed a comprehensive 3D model analysis system for injection molding that significantly improved manufacturing accuracy. The system features real-time parameter validation, automated error detection, and intuitive visualization tools. This project showcases advanced 3D web technologies and complex data processing capabilities.",
    image: "/api/placeholder/600/400",
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
      "Error detection algorithms",
      "Manufacturing process simulation",
      "Interactive 3D controls",
      "Performance optimization",
      "Cross-platform compatibility",
      "Integration with existing systems",
    ],
    achievements: [
      "Reduced manufacturing errors by 35%",
      "Improved production efficiency by 25%",
      "Automated parameter validation process",
      "Real-time 3D visualization implementation",
      "Scalable architecture design",
    ],
    metrics: {
      errorReduction: "35%",
      efficiency: "25%",
      users: "188,000+",
      timeline: "9 months",
    },
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
      "Comprehensive order management system with advanced customer loyalty features",
    longDescription:
      "Built a complete restaurant management platform featuring order processing, inventory management, customer loyalty programs, and analytics dashboard. The platform increased customer retention significantly through innovative loyalty features and streamlined operations.",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "Strapi CMS", "JWT", "Tailwind CSS"],
    features: [
      "Order management system",
      "Customer loyalty program",
      "Inventory tracking",
      "Payment processing integration",
      "Analytics dashboard",
      "Real-time notifications",
      "Mobile-responsive design",
      "Admin control panel",
    ],
    achievements: [
      "Increased repeat customers by 25%",
      "Streamlined order processing workflow",
      "Implemented loyalty rewards system",
      "Real-time inventory management",
      "Payment gateway integration",
    ],
    metrics: {
      customerIncrease: "25%",
      orderProcessing: "60% faster",
      revenue: "+18%",
      timeline: "6 months",
    },
    status: "completed",
    year: "2023",
    company: "Wonchunii Services",
    githubUrl: "https://github.com/wonchunii/tgcr-loyalty-app-react",
  },
  {
    id: 3,
    title: "Enterprise Web Applications Suite",
    category: "enterprise",
    description:
      "Collection of 5+ large-scale enterprise applications improving user engagement",
    longDescription:
      "Led the development of multiple enterprise-grade web applications across different industries. Each application was tailored to specific business needs while maintaining consistent design patterns and performance standards. Focused on scalability, security, and user experience optimization.",
    image: "/api/placeholder/600/400",
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Node.js",
      "React",
      "Nextjs",
      "Nestjs",
      "Docker",
      "AWS",
    ],
    features: [
      "Modular architecture design",
      "Role-based access control",
      "Advanced data visualization",
      "Real-time collaboration tools",
      "Responsive design system",
      "Performance monitoring",
      "Automated testing suite",
      "Documentation system",
    ],
    achievements: [
      "Improved user engagement by 40%",
      "Reduced load times by 50%",
      "Implemented responsive design across all platforms",
      "Enhanced accessibility compliance",
      "Streamlined deployment process",
    ],
    metrics: {
      engagement: "40%",
      performance: "50% faster",
      projects: "5+",
      timeline: "24 months",
    },
    status: "completed",
    year: "2022-2024",
    company: "Amalitech Services",
  },
  {
    id: 4,
    title: "Sports Management System",
    category: "cloud",
    description:
      "Sports management platform handling thousands of records with optimized performance",
    longDescription:
      "Designed and implemented a robust cloud-based sports management system capable of handling large datasets with optimized database queries and efficient data sanitization protocols. The system manages player statistics, team information, and game schedules.",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "Tailwind CSS", "JWT"],
    features: [
      "Unified data sanitization interface",
      "Optimized database queries",
      "Scalable cloud architecture",
      "Real-time data processing",
      "Player statistics tracking",
      "Team management tools",
      "Game scheduling system",
      "Mobile application support",
    ],
    achievements: [
      "Handles 100+ records efficiently",
      "Optimized query performance by 300%",
      "Implemented scalable cloud architecture",
      "Real-time data synchronization",
      "Comprehensive data sanitization",
    ],
    metrics: {
      records: "100+",
      performance: "3x faster",
      uptime: "99.9%",
      timeline: "2 years",
    },
    githubUrl: "https://github.com/Kojo-Brown/cloud-sports-management",
    liveUrl: "https://prod-adminportal.awtsyde.com/",
    status: "completed",
    year: "2024",
  },
  {
    id: 5,
    title: "RESTful API Service Platform",
    category: "backend",
    description:
      "Backend animal service application with comprehensive API architecture",
    longDescription:
      "Built an animal service application featuring RESTful API architecture, authentication systems, and comprehensive security measures.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express.js", "Typescript", "JWT", "Postman"],
    features: [
      "RESTful API design",
      "JWT authentication system",
      "Role-based authorization",
      "Error handling",
    ],
    achievements: [
      "Secure authentication system implementation",
      "RESTful API best practices",
      "Comprehensive vulnerability testing",
    ],
    metrics: {
      endpoints: "5+",
      security: "JWT compliant",
      response: "<200ms",
      timeline: "< 2 months",
    },
    githubUrl: "https://github.com/brownbobcat/animal-backend-service",
    status: "completed",
    year: "2025",
  },
  {
    id: 6,
    title: "Interactive Environmental Learning Platform",
    category: "web-app",
    description:
      "Award-winning gamified platform teaching environmental sustainability",
    longDescription:
      "Created an innovative educational platform that gamifies environmental learning for children. The platform won the Traveler's Choice Award Fall 2024 for its engaging approach to sustainability education and interactive learning modules.",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "TypeScript", "Local storage", "CSS3"],
    features: [
      "Gamified learning modules",
      "Interactive environmental content",
      "Progress tracking system",
      "Reward and achievement system",
      "Child-friendly interface design",
      "Responsive mobile design",
      "Educational content management",
    ],
    achievements: [
      "Won Traveler's Choice Award Fall 2024",
      "Gamified learning experience",
      "Interactive environmental education",
    ],
    metrics: {
      award: "Traveler's Choice",
      engagement: "Moderate",
      users: "Kids",
      timeline: "5 hours",
    },
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
      "Modern chat application with real-time messaging and file sharing",
    longDescription:
      "Developed a real-time chat application featuring instant messaging, file sharing, group chats, and emoji reactions. Built with modern web technologies and WebSocket connections for seamless real-time communication.",
    image: "/api/placeholder/600/400",
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
      "Emoji reactions",
      "Message history",
      "User presence indicators",
      "Mobile responsive design",
    ],
    achievements: [
      "Real-time communication implementation",
      "File upload and sharing system",
      "Scalable WebSocket architecture",
      "User authentication and security",
      "Responsive design across devices",
    ],
    metrics: {
      messages: "1,000+",
      latency: "<50ms",
      users: "200+",
      timeline: "3 months",
    },
    status: "in-progress",
    year: "2025",
  },
  {
    id: 8,
    title: "Project Management App",
    category: "enterprise",
    description: "Comprehensive project management app for organizations",
    longDescription:
      "Built a sophisticated project management app for companies and organizations to keep track of software development projects in a SCRUM environment.",
    image: "/api/placeholder/600/400",
    technologies: ["React.js", "Typescript", "Node.js", "MongoDB", "Express"],
    features: [
      "Project tracking",
      "User Acceptance Tracking",
      "Project management",
      "Real-time project visualization",
      "Mobile-responsive",
      "User authentication and authorization",
    ],
    achievements: [
      "Interactive project board design",
      "Performance optimization",
      "Business intelligence insights",
    ],
    metrics: {
      dataPoints: "N/A",
      performance: "N/A",
      users: "N/A",
      timeline: "ongoing",
    },
    githubUrl: "https://github.com/brownbobcat/ntotoe--frontend",
    liveUrl: "https://ntotoe-frontend-pink.vercel.app/",
    status: "in-progress",
    year: "2025",
  },
];

export const skills: Skill[] = [
  { name: "React.js", category: "Frontend", proficiency: 95, projects: 8 },
  { name: "TypeScript", category: "Language", proficiency: 90, projects: 6 },
  { name: "Node.js", category: "Backend", proficiency: 88, projects: 7 },
  { name: "Next.js", category: "Frontend", proficiency: 85, projects: 3 },
  { name: "Angular", category: "Frontend", proficiency: 82, projects: 2 },
  { name: "PostgreSQL", category: "Database", proficiency: 80, projects: 4 },
  { name: "MongoDB", category: "Database", proficiency: 85, projects: 5 },
  { name: "AWS", category: "Cloud", proficiency: 75, projects: 3 },
  { name: "Docker", category: "DevOps", proficiency: 78, projects: 4 },
  { name: "Three.js", category: "Specialized", proficiency: 70, projects: 1 },
];

export const projectCategories: ProjectCategory[] = [
  { id: "all", name: "All Projects", icon: "🛠️", count: projects.length },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: "🏢",
    count: projects.filter((p) => p.category === "enterprise").length,
  },
  {
    id: "web-app",
    name: "Web Applications",
    icon: "💻",
    count: projects.filter((p) => p.category === "web-app").length,
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    icon: "☁️",
    count: projects.filter((p) => p.category === "cloud").length,
  },
  {
    id: "backend",
    name: "Backend APIs",
    icon: "⚙️",
    count: projects.filter((p) => p.category === "backend").length,
  },
  {
    id: "dashboard",
    name: "Dashboards",
    icon: "📊",
    count: projects.filter((p) => p.category === "dashboard").length,
  },
];

export const navigationLinks: FooterLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const serviceLinks: FooterLink[] = [
  { name: "Frontend Development", href: "/services#frontend" },
  { name: "Backend Development", href: "/services#backend" },
  { name: "Full-Stack Solutions", href: "/services#fullstack" },
  { name: "Enterprise Applications", href: "/services#enterprise" },
  { name: "Technical Consulting", href: "/services#consulting" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/NicholasDarkoBrown",
    icon: "💼",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    href: "https://github.com/Kojo-Brown",
    icon: "💻",
    color: "hover:text-gray-800",
  },
  {
    name: "Email",
    href: "mailto:brown.nicholas.darko@gmail.com",
    icon: "📧",
    color: "hover:text-purple-600",
  },
  {
    name: "Phone",
    href: "tel:+12037476460",
    icon: "📱",
    color: "hover:text-green-600",
  },
];

export const contactInfo: ContactInfo[] = [
  {
    label: "Email",
    value: "brown.nicholas.darko@gmail.com",
    icon: "📧",
    href: "mailto:brown.nicholas.darko@gmail.com",
  },
  {
    label: "Phone",
    value: "203.747.6460",
    icon: "📱",
    href: "tel:+12037476460",
  },
  {
    label: "Location",
    value: "New Haven, CT, USA",
    icon: "📍",
  },
  {
    label: "Availability",
    value: "Open for opportunities",
    icon: "✅",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Associate Frontend Developer",
    company: "Amalitech Services",
    location: "Takoradi, GH",
    period: "June 2022 – July 2024",
    description:
      "Led frontend development for enterprise applications, mentored junior developers, and improved user engagement significantly.",
    achievements: [
      "Spearheaded frontend development for 5+ enterprise projects using TypeScript, React.js, Next.js, and Angular",
      "Improved user engagement by 40% through intuitive UI/UX design",
      "Developed sophisticated 3D model analysis system for injection molding, reducing manufacturing errors by 35%",
      "Built comprehensive order management system with customer loyalty features for Gold Coast Restaurant, increasing repeat customers by 25%",
      "Mentored 8 junior developers, conducting code reviews and technical training sessions to improve team productivity by 30%",
    ],
    technologies: ["TypeScript", "React.js", "Next.js", "Angular", "Nest.js"],
    type: "work",
  },
  {
    id: 2,
    title: "Poll Interviewer",
    company: "Quinnipiac University",
    location: "Hamden, CT",
    period: "October 2024 – present",
    description:
      "Conducting professional polling interviews for university research with American residents nationwide about current issues.",
    achievements: [
      "Conduct professional polling interviews for university with American residents nationwide about issue in the news",
      "Maintain high data quality standards and professional communication protocols",
      "Contribute to university research initiatives and data collection efforts",
    ],
    technologies: ["Research", "Data Collection", "Communication", "Analysis"],
    type: "work",
  },
  {
    id: 3,
    title: "Master of Science in Computer Science",
    company: "Quinnipiac University",
    location: "Hamden, CT",
    period: "Expected May 2026",
    description:
      "Advanced computer science studies focusing on modern software development, algorithms, and cybersecurity.",
    achievements: [
      "Coursework: Database Systems, Computer Architecture, Formal Specification Methods",
      "Web Development, Algorithms and Design, Introduction to Cybersecurity",
      "Maintaining strong academic performance while working part-time",
      "Active participant in university computing initiatives",
    ],
    technologies: [],
    type: "education",
  },
  {
    id: 4,
    title: "Bachelor of Science in Computer Engineering",
    company: "University of Energy and Natural Resources",
    location: "Sunyani, GH",
    period: "August 2019",
    description:
      "Comprehensive foundation in computer engineering, software development, and system design.",
    achievements: [
      "Strong foundation in software engineering principles",
      "Hardware and software system design",
      "Programming fundamentals and system programming",
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
    proficiency: 95,
    icon: "⚛️",
    description: "Component-based UI development",
  },
  {
    name: "TypeScript",
    category: "Language",
    proficiency: 90,
    icon: "🔷",
    description: "Type-safe JavaScript development",
  },
  {
    name: "Next.js",
    category: "Frontend",
    proficiency: 88,
    icon: "▲",
    description: "Full-stack React framework",
  },
  {
    name: "Angular",
    category: "Frontend",
    proficiency: 85,
    icon: "🅰️",
    description: "Enterprise web applications",
  },
  {
    name: "Node.js",
    category: "Backend",
    proficiency: 87,
    icon: "🟢",
    description: "Server-side JavaScript runtime",
  },
  {
    name: "Express.js",
    category: "Backend",
    proficiency: 85,
    icon: "🚂",
    description: "Web application framework",
  },
  {
    name: "NestJS",
    category: "Backend",
    proficiency: 80,
    icon: "🏠",
    description: "Scalable server-side applications",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    proficiency: 82,
    icon: "🐘",
    description: "Relational database management",
  },
  {
    name: "MongoDB",
    category: "Database",
    proficiency: 80,
    icon: "🍃",
    description: "NoSQL document database",
  },
  {
    name: "MySQL",
    category: "Database",
    proficiency: 78,
    icon: "🐬",
    description: "Relational database system",
  },
  {
    name: "Python",
    category: "Language",
    proficiency: 75,
    icon: "🐍",
    description: "Data analysis and scripting",
  },
  {
    name: "JavaScript",
    category: "Language",
    proficiency: 92,
    icon: "📜",
    description: "Dynamic web programming",
  },
  {
    name: "HTML/CSS",
    category: "Frontend",
    proficiency: 95,
    icon: "🎨",
    description: "Web markup and styling",
  },
  {
    name: "AWS",
    category: "Cloud",
    proficiency: 75,
    icon: "☁️",
    description: "Cloud infrastructure services",
  },
  {
    name: "Docker",
    category: "DevOps",
    proficiency: 78,
    icon: "🐳",
    description: "Containerization platform",
  },
  {
    name: "Git",
    category: "Tools",
    proficiency: 90,
    icon: "📦",
    description: "Version control system",
  },
];

export const awards: Award[] = [
  {
    title: "1st Place - Spring 2025 Hackathon",
    organization: "Quinnipiac Computing Club",
    date: "Spring 2025",
    description:
      "Developed a gamified cleaning application that serves as motivation for students to clean their apartments based on points and bonus scheme",
    icon: "🏆",
  },
  {
    title: "Major League Hacking - Spring 2025 Hackathon",
    organization: "Major League Hacking",
    date: "Spring 2025",
    description:
      "Built an AI solution that streamlines public procurement by automatically awarding tenders to deserving companies, reducing corruption and bureaucratic inefficiencies.",
    icon: "🌟",
  },
  {
    title: "Traveler's Choice Award Fall 2024",
    organization: "Quinnipiac Computing Club",
    date: "Fall 2024",
    description:
      "Created interactive educational platform teaching environmental sustainability for kids, recognized for innovation and impact.",
    icon: "🎉",
  },
];

export const skillCategories = [
  { id: "all", name: "All Skills", count: aboutSkills.length },
  {
    id: "Frontend",
    name: "Frontend",
    count: aboutSkills.filter((s) => s.category === "Frontend").length,
  },
  {
    id: "Backend",
    name: "Backend",
    count: aboutSkills.filter((s) => s.category === "Backend").length,
  },
  {
    id: "Language",
    name: "Languages",
    count: aboutSkills.filter((s) => s.category === "Language").length,
  },
  {
    id: "Database",
    name: "Database",
    count: aboutSkills.filter((s) => s.category === "Database").length,
  },
  {
    id: "Cloud",
    name: "Cloud & DevOps",
    count: aboutSkills.filter(
      (s) =>
        s.category === "Cloud" ||
        s.category === "DevOps" ||
        s.category === "Tools"
    ).length,
  },
];

export const aboutSections = [
  { id: "overview", name: "Overview", icon: "👋" },
  { id: "experience", name: "Experience", icon: "💼" },
  { id: "education", name: "Education", icon: "🎓" },
  { id: "skills", name: "Skills", icon: "⚡" },
  { id: "achievements", name: "Achievements", icon: "🏆" },
];

export const stats = [
  { label: "Projects Completed", value: "8+", icon: "🚀" },
  { label: "Technologies Mastered", value: "15+", icon: "⚡" },
  { label: "Years Experience", value: "2+", icon: "📅" },
];
