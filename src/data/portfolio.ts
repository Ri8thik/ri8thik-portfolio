export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  features: string[];
  status: 'Live' | 'In Development' | 'Completed';
}


export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  color: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface TechCategory {
  category: string;
  icon: string;
  color: string;
  bgColor: string;
  skills: { name: string; icon: string; level: number }[];
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise E-Commerce Dashboard',
    description: 'A full-featured Angular e-commerce management dashboard with real-time analytics, inventory management, and order tracking.',
    longDescription: 'Built a comprehensive enterprise-grade e-commerce admin dashboard using Angular 17 with standalone components. Features real-time data updates via WebSockets, advanced filtering, and data visualization using Chart.js. Integrated with Spring Boot REST APIs and PostgreSQL database.',
    image: assetUrl('images/project1.jpg'),
    technologies: ['Angular', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'PrimeNG', 'RxJS'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/rithiksoun/ecommerce-dashboard',
    liveUrl: 'https://rithiksoun.github.io/ecommerce-dashboard',
    features: [
      'Real-time analytics dashboard with Chart.js',
      'Advanced product & inventory management',
      'Order tracking with live status updates',
      'Role-based access control (RBAC)',
      'Responsive design with dark/light mode',
      'JWT authentication & authorization',
      'WebSocket integration for live updates',
      'Export reports to PDF/Excel'
    ],
    status: 'Live'
  },
  {
    id: 2,
    title: 'API Management Portal',
    description: 'A Spring Boot microservices API gateway portal with documentation, testing, and monitoring capabilities.',
    longDescription: 'Developed a comprehensive API management portal that serves as a unified interface for all microservices. Built with Angular frontend and Java Spring Boot backend, featuring API versioning, rate limiting, and comprehensive logging.',
    image: assetUrl('images/project2.jpg'),
    technologies: ['Angular', 'Java', 'Spring Boot', 'REST API', 'PostgreSQL', 'TypeScript', 'RxJS'],
    category: 'Backend',
    githubUrl: 'https://github.com/rithiksoun/api-portal',
    liveUrl: 'https://rithiksoun.github.io/api-portal',
    features: [
      'Interactive API documentation (Swagger UI)',
      'API testing playground',
      'Rate limiting & throttling dashboard',
      'Real-time request monitoring',
      'API versioning management',
      'Security & authentication configuration',
      'Performance metrics & analytics',
      'Webhook management system'
    ],
    status: 'Live'
  },
  {
    id: 3,
    title: 'TaskFlow - Project Management',
    description: 'A Kanban-style project management application with team collaboration, real-time updates, and sprint management.',
    longDescription: 'Created a modern project management tool inspired by Jira and Trello. Features drag-and-drop Kanban boards, sprint planning, team collaboration with real-time notifications, time tracking, and detailed reporting.',
    image: assetUrl('images/project3.jpg'),
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'WebSocket'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/rithiksoun/taskflow',
    liveUrl: 'https://rithiksoun.github.io/taskflow',
    features: [
      'Drag-and-drop Kanban board',
      'Sprint planning & backlog management',
      'Real-time team collaboration',
      'Time tracking & reporting',
      'Priority & label management',
      'Email notifications & reminders',
      'File attachments & comments',
      'Gantt chart view'
    ],
    status: 'Completed'
  },
  {
    id: 4,
    title: 'FinTrack Analytics Platform',
    description: 'A real-time financial analytics platform with interactive charts, portfolio tracking, and market insights.',
    longDescription: 'Designed and developed a sophisticated financial analytics platform that provides real-time market data visualization, portfolio performance tracking, and AI-powered insights. Built with Angular and Spring Boot, integrating with third-party financial APIs.',
    image: assetUrl('images/project4.jpg'),
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Chart.js', 'RxJS'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/rithiksoun/fintrack',
    liveUrl: 'https://rithiksoun.github.io/fintrack',
    features: [
      'Real-time market data visualization',
      'Portfolio performance tracking',
      'Interactive financial charts & graphs',
      'Risk analysis & assessment',
      'Export reports to PDF',
      'Multi-currency support',
      'Historical data analysis',
      'Customizable dashboard widgets'
    ],
    status: 'In Development'
  }
];

export const techCategories: TechCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    skills: [
      { name: 'Angular', icon: '🅰️', level: 95 },
      { name: 'TypeScript', icon: '📘', level: 92 },
      { name: 'JavaScript', icon: '🟨', level: 90 },
      { name: 'HTML5', icon: '🌐', level: 95 },
      { name: 'CSS3', icon: '🎨', level: 90 },
      { name: 'Tailwind CSS', icon: '💨', level: 88 },
      { name: 'PrimeNG', icon: '💎', level: 85 },
      { name: 'RxJS', icon: '🔄', level: 82 },
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    skills: [
      { name: 'Java', icon: '☕', level: 85 },
      { name: 'Spring Boot', icon: '🍃', level: 82 },
      { name: 'REST APIs', icon: '🔗', level: 90 },
      { name: 'Microservices', icon: '🏗️', level: 75 },
    ]
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-500/10',
    skills: [
      { name: 'PostgreSQL', icon: '🐘', level: 80 },
      { name: 'SQL', icon: '📊', level: 82 },
    ]
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-500/10',
    skills: [
      { name: 'Git', icon: '🔀', level: 92 },
      { name: 'GitHub', icon: '🐙', level: 90 },
      { name: 'VS Code', icon: '💻', level: 95 },
      { name: 'IntelliJ IDEA', icon: '🧠', level: 85 },
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'TechCorp Solutions Pvt. Ltd.',
    period: '2023 – Present',
    description: 'Leading frontend development for enterprise-grade applications using Angular 17+ with standalone components architecture.',
    achievements: [
      'Led migration from Angular 12 to Angular 17, improving performance by 40%',
      'Implemented micro-frontend architecture reducing bundle size by 35%',
      'Mentored 3 junior developers on Angular best practices',
      'Integrated PrimeNG component library across 5+ projects'
    ],
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'PrimeNG', 'RxJS']
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Innovate Digital Agency',
    period: '2022 – 2023',
    description: 'Developed full-stack web applications using Angular frontend and Java Spring Boot backend with PostgreSQL database.',
    achievements: [
      'Built 8+ production-ready full-stack applications',
      'Designed RESTful APIs serving 100k+ daily requests',
      'Reduced API response time by 60% through query optimization',
      'Implemented JWT authentication & role-based access control'
    ],
    technologies: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'REST APIs']
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'WebNext Technologies',
    period: '2021 – 2022',
    description: 'Developed responsive web applications and collaborated with UX/UI designers to implement pixel-perfect designs.',
    achievements: [
      'Developed 15+ responsive Angular components library',
      'Improved application load time by 50% using lazy loading',
      'Implemented comprehensive unit testing with 85% code coverage',
      'Collaborated with backend team on API integration'
    ],
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'RxJS']
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'StartUp Hub Delhi',
    period: '2020 – 2021',
    description: 'Started career building web applications and learning modern development practices and tools.',
    achievements: [
      'Built first production Angular application from scratch',
      'Learned Spring Boot REST API development',
      'Contributed to open-source projects on GitHub',
      'Completed Angular and Java certifications'
    ],
    technologies: ['Angular', 'JavaScript', 'HTML5', 'CSS3', 'Java', 'Git']
  }
];

export const socialLinks = {
  github: 'https://github.com/rithiksoun',
  linkedin: 'https://linkedin.com/in/rithiksoun',
  email: 'rithiksoun@gmail.com',
  instagram: 'https://instagram.com/rithiksoun',
  phone: '+91 98765 43210',
  location: 'Delhi NCR, India'
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
