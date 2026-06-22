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

export interface Achievement {
  title: string;
  organization: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Rithik Soun',
  title: 'Software Engineer',
  focus: 'Full Stack Developer',
  summary:
    'Software Engineer with 4.6+ years of experience building scalable, high-performance enterprise applications using Angular, React, TypeScript, Java, and Spring Boot.',
  yearsExperience: '4.6+',
  location: 'Delhi NCR, India',
  availability: 'Open to Full-Time & Freelance Opportunities',
};

export const heroRoles = [
  'Software Engineer',
  'Full Stack Developer',
  'Angular Developer',
  'React Developer',
  'Java Spring Boot Developer',
];

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
    category: 'Languages',
    icon: '💻',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-500/10',
    skills: [
      { name: 'Java', icon: '☕', level: 92 },
      { name: 'JavaScript', icon: '🟨', level: 90 },
      { name: 'TypeScript', icon: '📘', level: 94 },
      { name: 'Python', icon: '🐍', level: 72 },
      { name: 'HTML5', icon: '🌐', level: 95 },
      { name: 'CSS3', icon: '🎨', level: 90 },
      { name: 'SCSS', icon: '🧵', level: 84 },
    ]
  },
  {
    category: 'Frameworks & Tech',
    icon: '🧩',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-500/10',
    skills: [
      { name: 'Angular (2-18)', icon: '🅰️', level: 96 },
      { name: 'React', icon: '⚛️', level: 82 },
      { name: 'Spring Boot', icon: '🍃', level: 88 },
      { name: 'RxJS', icon: '🔄', level: 90 },
      { name: 'NgRx', icon: '🗃️', level: 84 },
      { name: 'Redux', icon: '🧠', level: 76 },
      { name: 'Tailwind CSS', icon: '💨', level: 88 },
      { name: 'Angular Material', icon: '🧱', level: 84 },
      { name: 'Bootstrap', icon: '🅱️', level: 82 },
      { name: 'REST APIs', icon: '🔗', level: 92 },
    ]
  },
  {
    category: 'Data & Messaging',
    icon: '🗄️',
    color: 'from-orange-500 to-amber-600',
    bgColor: 'bg-orange-500/10',
    skills: [
      { name: 'PostgreSQL', icon: '🐘', level: 84 },
      { name: 'Redis', icon: '🟥', level: 74 },
      { name: 'Apache Kafka', icon: '📨', level: 76 },
    ]
  },
  {
    category: 'Developer Tools',
    icon: '🛠️',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-500/10',
    skills: [
      { name: 'Git', icon: '🔀', level: 94 },
      { name: 'GitHub', icon: '🐙', level: 90 },
      { name: 'Jenkins', icon: '🤖', level: 82 },
      { name: 'Jest', icon: '🧪', level: 78 },
      { name: 'Jasmine', icon: '🧫', level: 86 },
      { name: 'Postman', icon: '📮', level: 88 },
      { name: 'Webpack', icon: '📦', level: 72 },
      { name: 'NPM', icon: '📦', level: 90 },
    ]
  },
  {
    category: 'Methodologies',
    icon: '📐',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-pink-500/10',
    skills: [
      { name: 'Agile Scrum', icon: '🏃', level: 92 },
      { name: 'CI/CD', icon: '🔁', level: 86 },
      { name: 'Responsive Design', icon: '📱', level: 92 },
      { name: 'Component Architecture', icon: '🧱', level: 90 },
      { name: 'Performance Optimization', icon: '⚡', level: 88 },
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Software Engineer – Full Stack Developer',
    company: 'Cotiviti',
    period: 'Dec 2025 – Present',
    description: 'Building healthcare claim processing features for the Early Intervention Platform using Angular and Java, supporting 837 Institutional and Professional workflows.',
    achievements: [
      'Engineered claim-processing features for EIP with Angular and Java for 837 Institutional and Professional workflows',
      'Built reusable UI components with Storybook and Pebble Library and migrated the shared component library from Angular 20 to Angular 21',
      'Integrated REST APIs with Kafka- and Redis-backed microservices while contributing to CI/CD, code reviews, and production support'
    ],
    technologies: ['Angular', 'Java', 'Storybook', 'Kafka', 'Redis', 'REST APIs']
  },
  {
    id: 2,
    role: 'Software Engineer – Full Stack Developer',
    company: 'Relinns Technologies',
    period: 'Jul 2025 – Dec 2025',
    description: 'Designed and implemented the Rules module for the Voxloud Contact Center platform across Control Panel and God Panel using Angular and Java REST APIs.',
    achievements: [
      'Built reusable Angular components and optimized RxJS-based state management for faster feature delivery',
      'Managed Git workflows including pull requests, rebasing, and Jenkins deployments',
      'Executed Karma/Jasmine testing and supported releases for web and Electron desktop applications'
    ],
    technologies: ['Angular', 'Java', 'RxJS', 'Jenkins', 'Karma', 'Jasmine', 'Electron']
  },
  {
    id: 3,
    role: 'Software Engineer – Frontend Developer',
    company: 'AutoOne Engineering Services Pvt. Ltd. (Client: Comviva)',
    period: 'Feb 2025 – May 2025',
    description: 'Delivered campaign-management features for the Mobilytix platform using React, RxJS, and reusable UI components.',
    achievements: [
      'Integrated REST APIs and implemented state management using BehaviorSubject patterns',
      'Collaborated closely with backend and QA teams to ship stable releases',
      'Participated in Agile delivery and Jenkins-based CI/CD workflows'
    ],
    technologies: ['React', 'RxJS', 'REST APIs', 'Jenkins', 'BehaviorSubject']
  },
  {
    id: 4,
    role: 'Software Engineer – Frontend Developer',
    company: 'Infogain Private Limited (Client: FedEx)',
    period: 'May 2022 – Feb 2025',
    description: 'Enhanced Angular applications across Retail Shipping, Hold Release, and Pre-Metered Shipping modules for FedEx.',
    achievements: [
      'Integrated REST APIs and barcode scanner devices into production workflows',
      'Improved application performance while maintaining 90%+ unit test coverage',
      'Collaborated with cross-functional Agile teams to deliver production-ready features'
    ],
    technologies: ['Angular', 'TypeScript', 'REST APIs', 'Jasmine', 'Barcode Scanner', 'Agile']
  },
  {
    id: 5,
    role: 'Software Engineer Trainee',
    company: 'Infogain Private Limited',
    period: 'Oct 2021 – Apr 2022',
    description: 'Completed intensive full-stack training in Java, Spring Boot, Angular, SQL, Git, and Agile development.',
    achievements: [
      'Built 3+ practice applications using Angular, Java Spring Boot, and REST APIs',
      'Strengthened core full-stack engineering fundamentals and SDLC understanding',
      'Prepared for enterprise delivery through hands-on Agile collaboration'
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'SQL', 'Git', 'REST APIs']
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Star of the Month',
    organization: 'Infogain',
    description: 'Delivered three modules ahead of schedule with zero defects in production.',
  },
  {
    title: 'Spot Award',
    organization: 'FedEx',
    description: 'Reduced load time by 25% in the retail shipping application through focused frontend optimization.',
  },
  {
    title: 'Performance Impact',
    organization: 'Hold Release',
    description: 'Reduced Hold Release processing time by 30% through coordinated UI and API improvements.',
  },
];

export const education: Education = {
  degree: 'Bachelor of Technology – Computer Science and Engineering',
  institution: 'Chandigarh Group of Colleges, Jhanjeri',
  university: 'Punjab Technical University',
  period: 'Jul 2018 – Aug 2022',
  cgpa: '7.9 / 10',
};

export const socialLinks = {
  github: 'https://github.com/Ri8thik',
  linkedin: 'https://linkedin.com/in/rithik-soun-7abbb31a0',
  email: 'rithiksoun88@gmail.com',
  instagram: 'https://instagram.com/rithiksoun',
  phone: '+91-8607729426',
  location: 'Delhi NCR, India'
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
