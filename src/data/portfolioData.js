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

export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    titleAr: 'منصة تجارة إلكترونية',
    description: 'Full-stack e-commerce platform with payment integration, cart system, and admin dashboard',
    descriptionAr: 'منصة تجارة إلكترونية فول ستاك مع تكامل الدفع ونظام سلة ولوحة تحكم إدارية',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=E-Commerce',
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'MySQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management System',
    titleAr: 'نظام إدارة المهام',
    description: 'Real-time task management app with team collaboration features',
    descriptionAr: 'تطبيق إدارة مهام لحظي مع ميزات تعاون الفريق',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Task+Manager',
    technologies: ['React', 'Django REST', 'Celery', 'WebSocket', 'MySQL', 'SQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: true
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    titleAr: 'لوحة تحليلات',
    description: 'Interactive dashboard with real-time data visualization and reports',
    descriptionAr: 'لوحة تحكم تفاعلية مع تصور بيانات لحظي وتقارير',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Analytics',
    technologies: ['React', 'Chart.js', 'Django', 'PostgreSQL', 'SQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: true
  },
  {
    id: 4,
    title: 'Social Media API',
    titleAr: 'API لوسائل التواصل الاجتماعي',
    description: 'RESTful API for social media platform with authentication and real-time features',
    descriptionAr: 'RESTful API لمنصة تواصل اجتماعي مع توثيق وميزات لحظية',
    image: 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Social+API',
    technologies: ['Django REST', 'JWT', 'Redis', 'PostgreSQL', 'MySQL'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/Islam412',
    featured: false
  }
];

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