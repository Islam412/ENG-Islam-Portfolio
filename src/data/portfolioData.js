import {
  SiHtml5, SiCss3, SiJavascript, SiPython, SiReact, SiDjango,
  SiPostman, SiDocker, SiCelery, SiRedis, SiMysql, SiMongodb,
  SiGit, SiGithub, SiTailwindcss, SiBootstrap
} from 'react-icons/si';

export const skillsData = {
  frontend: [
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 90 },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 85 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 88 },
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 85 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
    { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', level: 85 },
  ],
  backend: [
    { name: 'Python', icon: SiPython, color: '#3776AB', level: 85 },
    { name: 'Django', icon: SiDjango, color: '#092E20', level: 80 },
    { name: 'REST API', icon: SiReact, color: '#FF6C37', level: 85 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 80 },
    { name: 'SQL', icon: SiMysql, color: '#4479A1', level: 78 },
    { name: 'PostgreSQL', icon: SiMysql, color: '#336791', level: 75 },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 75 },
  ],
  tools: [
    { name: 'Postman', icon: SiPostman, color: '#FF6C37', level: 85 },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 75 },
    { name: 'Celery', icon: SiCelery, color: '#37814A', level: 70 },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', level: 75 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
    { name: 'GitHub', icon: SiGithub, color: '#181717', level: 85 },
  ]
};

// مشاريع جديدة مع تصنيفات
export const projectsData = [
  // Frontend Projects
  {
    id: 1,
    title: 'MCSOS Medical System',
    titleAr: 'نظام إدارة المركز الطبي MCSOS',
    description: 'Comprehensive Medical Center Management System with modern UI, authentication flow, and admin dashboard for managing patients, appointments, and staff.',
    descriptionAr: 'نظام متكامل لإدارة المركز الطبي بواجهة حديثة، يشمل نظام مصادقة ولوحة تحكم إدارية لإدارة المرضى والمواعيد والموظفين.',
    image: '/images/projects/mcsos-system.jpg',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'ESLint', 'PostCSS'],
    category: 'frontend',
    liveLink: 'https://mcsos-system.vercel.app/login',
    githubLink: 'https://github.com/Islam412/MCSOS-System',
    featured: true
  },
  
  {
    id: 2, 
    title: 'AL-Manhaj Islamic Platform',
    titleAr: 'منصة المنهاج الإسلامي',
    description: 'Comprehensive Islamic platform featuring Quran browsing, Hadith collection, prayer times, daily remembrance, electronic tasbih, podcasts, and Islamic lectures.',
    descriptionAr: 'منصة إسلامية شاملة تضم المصحف الكريم، الأحاديث النبوية، أوقات الصلاة، الأذكار اليومية، المسبحة الإلكترونية، البودكاست والمحاضرات الإسلامية.',
    image: '/images/projects/al-manhaj.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'REST API', 'Vercel'],
    category: 'frontend',
    liveLink: 'https://manahij.vercel.app/',
    githubLink: 'https://github.com/Islam412/AL-Manhaj',
    featured: true,
  },

  {
    id: 3,
    title: 'Raheeq Al Jannah - Honey E-Commerce',
    titleAr: 'متجر رحيق الجنة - منتجات العسل',
    description: 'Modern e-commerce platform for premium honey brand featuring dynamic product catalog, responsive design, nature-inspired UI, and seamless ordering experience.',
    descriptionAr: 'منصة تجارة إلكترونية حديثة لعلامة تجارية مميزة للعسل، تتضمن كتالوج منتجات ديناميكي، تصميم متجاوب، واجهة مستوحاة من الطبيعة، وتجربة طلب سلسة.',
    image: '/images/projects/raheeq-al-jannah.jpg',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'CSS3', 'Vercel'],
    category: 'frontend',
    liveLink: 'https://raheeq-al-jannah.vercel.app',
    githubLink: 'https://github.com/Islam412/RAHEEQ-AL-JANNAH',
    featured: true,
  },

  {
    id: 4,
    title: 'NAHARCO ALDUWLIYA - Corporate Website',
    titleAr: 'موقع شركة نهاركو الدولية',
    description: 'Professional corporate website showcasing company services, mission, blog posts, and contact information with bilingual support (Arabic/English).',
    descriptionAr: 'موقع مؤسسي احترافي يعرض خدمات الشركة ورسالتها ومنشورات المدونة ومعلومات الاتصال مع دعم ثنائي اللغة (العربية/الإنجليزية).',
    image: '/images/projects/naharco-alduwliya.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bilingual (AR/EN)'],
    category: 'frontend',
    liveLink: 'https://islam412.github.io/NAHARCO-ALDUWLIYA/',
    githubLink: 'https://github.com/Islam412/NAHARCO-ALDUWLIYA',
    featured: true,
  },

  {
    id: 5,
    title: 'Mahmoud Hosny - Professional Portfolio',
    titleAr: 'معرض أعمال محمود حسني - بورتفوليو احترافي',
    description: 'A modern, fully responsive personal portfolio website built for a client. Features a clean UI with animations, bilingual support (AR/EN), and showcases professional work effectively.',
    descriptionAr: 'موقع بورتفوليو شخصي حديث ومتجاوب بالكامل تم بناؤه لعميل. يتميز بواجهة نظيفة مع أنيميشن، ودعم ثنائي اللغة (عربي/إنجليزي)، ويعرض الأعمال المهنية بشكل فعال.',
    image: '/images/projects/mahmoud-portfolio.jpg',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'PostCSS', 'ESLint'],
    category: 'frontend', // مشروع React (واجهات أمامية)
    liveLink: 'https://mahmoud-portfolio-eight.vercel.app/',
    githubLink: 'https://github.com/Islam412/mahmoud-portfolio',
    featured: true, // يمكن جعله مميزاً لأنه يظهر مهاراتك في العمل مع العملاء
  },

  // Backend Projects
  {
    id: 4,
    title: 'RESTful API',
    titleAr: 'API RESTful',
    description: 'Scalable REST API with authentication, rate limiting, and documentation',
    descriptionAr: 'API RESTful قابلة للتطوير مع توثيق ومصادقة',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=REST+API',
    technologies: ['Django', 'Django REST', 'JWT', 'PostgreSQL'],
    category: 'backend',
    subcategory: 'Django',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: true
  },
  {
    id: 5,
    title: 'Task Queue System',
    titleAr: 'نظام مهام غير متزامن',
    description: 'Background task processing with Celery and Redis',
    descriptionAr: 'معالجة مهام خلفية باستخدام Celery و Redis',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Task+Queue',
    technologies: ['Python', 'Celery', 'Redis', 'Django'],
    category: 'backend',
    subcategory: 'Python',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: false
  },
  {
    id: 6,
    title: 'Database Optimizer',
    titleAr: 'محسن قواعد البيانات',
    description: 'SQL query optimizer with performance monitoring',
    descriptionAr: 'محسن استعلامات SQL مع مراقبة الأداء',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Database',
    technologies: ['Python', 'SQL', 'MySQL', 'PostgreSQL'],
    category: 'backend',
    subcategory: 'SQL',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: false
  },

  // Full Stack Projects
  {
    id: 7,
    title: 'E-Commerce Platform',
    titleAr: 'منصة تجارة إلكترونية',
    description: 'Full-stack e-commerce platform with payment integration, cart system, and admin dashboard',
    descriptionAr: 'منصة تجارة إلكترونية فول ستاك مع تكامل الدفع',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=E-Commerce',
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'MySQL'],
    category: 'fullstack',
    subcategory: 'Django-React',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: true
  },
  {
    id: 8,
    title: 'Task Management System',
    titleAr: 'نظام إدارة المهام',
    description: 'Real-time task management app with team collaboration features',
    descriptionAr: 'تطبيق إدارة مهام لحظي مع ميزات تعاون الفريق',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Task+Manager',
    technologies: ['React', 'Django REST', 'Celery', 'WebSocket', 'MySQL', 'SQL'],
    category: 'fullstack',
    subcategory: 'Django-React',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: true
  },
  {
    id: 9,
    title: 'Analytics Dashboard',
    titleAr: 'لوحة تحليلات',
    description: 'Interactive dashboard with real-time data visualization and reports',
    descriptionAr: 'لوحة تحكم تفاعلية مع تصور بيانات لحظي',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Analytics',
    technologies: ['React', 'Chart.js', 'Django', 'PostgreSQL', 'SQL'],
    category: 'fullstack',
    subcategory: 'Django-React',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: true
  },
  {
    id: 10,
    title: 'Social Media API',
    titleAr: 'API لوسائل التواصل الاجتماعي',
    description: 'RESTful API for social media platform with authentication and real-time features',
    descriptionAr: 'RESTful API لمنصة تواصل اجتماعي',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Social+API',
    technologies: ['Django REST', 'JWT', 'Redis', 'PostgreSQL', 'MySQL'],
    category: 'backend',
    subcategory: 'Django',
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: false
  }
];

// إحصائيات المشاريع حسب التصنيف
export const projectStats = {
  total: projectsData.length,
  frontend: projectsData.filter(p => p.category === 'frontend').length,
  backend: projectsData.filter(p => p.category === 'backend').length,
  fullstack: projectsData.filter(p => p.category === 'fullstack').length,
  technologies: {
    React: projectsData.filter(p => p.technologies.includes('React')).length,
    Django: projectsData.filter(p => p.technologies.includes('Django')).length,
    Python: projectsData.filter(p => p.technologies.includes('Python')).length,
    SQL: projectsData.filter(p => p.technologies.includes('SQL') || p.technologies.includes('MySQL') || p.technologies.includes('PostgreSQL')).length,
  }
};

export const personalInfo = {
  name: 'Islam Hamdy',
  nameAr: 'إسلام حمدي',
  title: 'Full Stack Web Developer',
  titleAr: 'مطور ويب فول ستاك',
  email: 'islam.124.hamdy@gmail.com',
  phone: '+201127782279',
  whatsapp: '201127782279',
  location: 'Egypt',
  locationAr: 'مصر',
  github: 'https://github.com/Islam412',
  linkedin: 'https://www.linkedin.com/in/islam-hamdy-62a94826b/',
  facebook: 'https://www.facebook.com/share/1CuCrx4qPs/',
  instagram: 'https://www.instagram.com/islam_hamdy412',
  experience: '3+',
  projects: '20+',
  technologies: '17+',
  clients: '10+'
};

