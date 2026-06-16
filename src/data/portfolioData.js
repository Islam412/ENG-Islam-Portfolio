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

  {
    id: 6,
    title: 'Dr. Hatem Portfolio - Medical Professional',
    titleAr: 'معرض أعمال د. حاتم عبد القافي - بورتفوليو طبي احترافي',
    description: 'A modern, fully responsive portfolio website for a medical consultant. Features bilingual support (AR/EN), interactive disease cards, WhatsApp booking system, photo gallery with lightbox, and Google Maps integration.',
    descriptionAr: 'موقع بورتفوليو حديث ومتجاوب بالكامل لاستشاري طبي. يتميز بدعم ثنائي اللغة (عربي/إنجليزي)، بطاقات أمراض تفاعلية، نظام حجز عبر واتساب، معرض صور مع خاصية Lightbox، وتكامل مع خرائط Google.',
    image: '/images/projects/dr-hatem-portfolio.jpg',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18next', 'React Icons'],
    category: 'frontend',
    liveLink: 'https://dr-hatem-portfolio.vercel.app/',
    githubLink: 'https://github.com/Islam412/dr-hatem-portfolio',
    featured: true,
  },

  {
    id: 7,
    title: 'Walid Allam - Professional Portfolio',
    titleAr: 'معرض أعمال وليد علام - بورتفوليو احترافي',
    description: 'A modern, responsive personal portfolio website built for a client using cutting-edge frontend technologies. Features a clean UI, smooth animations, and bilingual support (Arabic/English).',
    descriptionAr: 'موقع بورتفوليو شخصي حديث ومتجاوب بالكامل تم بناؤه لعميل باستخدام أحدث تقنيات الواجهات الأمامية. يتميز بواجهة نظيفة، وأنيميشن سلسة، ودعم ثنائي اللغة (عربي/إنجليزي).',
    image: '/images/projects/walid-allam-portfolio.jpg',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'ESLint', 'PostCSS'],
    category: 'frontend',
    liveLink: 'https://walid-allam-portfolio.vercel.app',
    githubLink: 'https://github.com/Islam412/Walid-Allam-Portfolio',
    featured: true,
  },

  {
    id: 8,
    title: 'Dental Clinic Management System',
    titleAr: 'نظام إدارة عيادة الأسنان',
    description: 'A comprehensive management system for dental clinics featuring patient management, appointment scheduling, billing system, and treatment tracking. Designed to streamline clinic operations and enhance patient experience.',
    descriptionAr: 'نظام متكامل لإدارة عيادات الأسنان يشمل إدارة المرضى، جدولة المواعيد، نظام الفواتير، وتتبع العلاجات. مصمم لتبسيط عمليات العيادة وتحسين تجربة المرضى.',
    image: '/images/projects/dental-clinic.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    category: 'frontend',
    liveLink: 'https://dental-clinic-seven-tan.vercel.app',
    githubLink: 'https://github.com/Islam412/Dental-clinic',
    featured: true,
  },

  {
    id: 9,
    title: 'Booking System - Travel Platform',
    titleAr: 'نظام الحجز - منصة سفر متكاملة',
    description: 'A massive, comprehensive frontend system for travel booking covering flights, hotels, tours, visas, apartments, buses, and cruises. Features user authentication, dashboards, booking flows, and responsive design.',
    descriptionAr: 'نظام أمامي ضخم ومتكامل لحجز السفر يغطي الرحلات الجوية، الفنادق، الجولات السياحية، التأشيرات، الشقق، الحافلات، والرحلات البحرية. يتضمن مصادقة المستخدم، لوحات التحكم، تدفقات الحجز، وتصميم متجاوب.',
    image: '/images/projects/booking-system.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Multi-page App'],
    category: 'frontend',
    liveLink: 'https://booking-systems-frontend-zeta.vercel.app/',
    githubLink: 'https://github.com/Islam412/Booking-System-frontend',
    featured: true,
  },

  // Backend Projects
  {
    id: 10,
    title: 'Amazon Clone - E-commerce Platform',
    titleAr: 'نسخة أمازون - منصة تجارة إلكترونية متكاملة',
    description: 'A fully functional e-commerce platform built with Django, featuring user authentication, product catalog, shopping cart, order processing, payment integration (Stripe), caching (Redis), and task queues (Celery). Dockerized for easy deployment.',
    descriptionAr: 'منصة تجارة إلكترونية متكاملة مبنية بـ Django، تشمل توثيق المستخدمين، كتالوج منتجات، سلة تسوق، معالجة الطلبات، تكامل الدفع (Stripe)، تخزين مؤقت (Redis)، ومهام غير متزامنة (Celery).',
    image: '/images/projects/amazon-clone.jpg',
    technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Stripe', 'Docker', 'JavaScript'],
    category: 'backend',
    liveLink: '#', // (heroku)
    githubLink: 'https://github.com/Islam412/Amazon-Clone',
    featured: true,
  },

  {
    id: 11,
    title: 'Paylio - Full Payment Gateway',
    titleAr: 'بايليو - نظام بوابة دفع متكاملة',
    description: 'A comprehensive full-stack payment gateway system built with Django, featuring user dashboard, secure authentication, JWT, admin panel, and complete transaction management. Supports fund transfers and payment processing.',
    descriptionAr: 'نظام بوابة دفع متكامل (Full-Stack) مبني بـ Django، يتميز بلوحة تحكم للمستخدم، توثيق آمن، JWT، لوحة إدارة كاملة، وإدارة المعاملات المالية. يدعم تحويل الأموال ومعالجة المدفوعات.',
    image: '/images/projects/payment-system.jpg',
    technologies: ['Python', 'Django', 'Django REST Framework', 'JWT', 'Bootstrap 5', 'JavaScript', 'SQLite' , 'PostgreSQL' , 'MySQL'],
    category: 'backend',
    liveLink: 'https://paylio-system.up.railway.app/', // (Railway)
    githubLink: 'https://github.com/Islam412/Payment-system',
    featured: true,
  },

  {
    id: 12,
    title: 'Facebook Clone - Messenger Clone - Social Media Platform',
    titleAr: 'نسخة فيسبوك - منصة تواصل اجتماعي',
    description: 'A social media platform clone built with Django, featuring user authentication, post creation and management, friend requests, interactions, and responsive design.',
    descriptionAr: 'نسخة من منصة التواصل الاجتماعي فيسبوك مبنية بـ Django، تشمل توثيق المستخدمين، إنشاء وإدارة المنشورات، طلبات الصداقة، التفاعلات، وتصميم متجاوب.',
    image: '/images/projects/facebook-clone.jpg',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQLite'],
    category: 'backend',
    liveLink: '#',
    githubLink: 'https://github.com/Islam412/Facebook-Clone',
    featured: true,
  },

  {
    id: 13,
    title: 'Library Management System',
    titleAr: 'نظام إدارة المكتبات',
    description: 'A comprehensive library management system built with Django, featuring book management, user/member management, and library operations. Provides a simple web-based interface for all library workflows.',
    descriptionAr: 'نظام متكامل لإدارة المكتبات مبني بـ Django، يشمل إدارة الكتب، إدارة المستخدمين/الأعضاء، وعمليات المكتبة. يوفر واجهة ويب بسيطة لجميع مهام سير العمل.',
    image: '/images/projects/library-management-system.jpg',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQLite'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: 'https://github.com/Islam412/Library-Management-System',
    featured: true,
  },

  // Full Stack Projects
  {
    id: 14,
    title: 'Amazon Clone - E-commerce Platform',
    titleAr: 'نسخة أمازون - منصة تجارة إلكترونية متكاملة',
    description: 'A fully functional e-commerce platform built with Django, featuring user authentication, product catalog, shopping cart, order processing, payment integration (Stripe), caching (Redis), and task queues (Celery). Dockerized for easy deployment.',
    descriptionAr: 'منصة تجارة إلكترونية متكاملة مبنية بـ Django، تشمل توثيق المستخدمين، كتالوج منتجات، سلة تسوق، معالجة الطلبات، تكامل الدفع (Stripe)، تخزين مؤقت (Redis)، ومهام غير متزامنة (Celery).',
    image: '/images/projects/amazon-clone.jpg',
    technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Celery', 'Stripe', 'Docker', 'JavaScript'],
    category: 'fullstack',
    liveLink: '#', // (heroku)
    githubLink: 'https://github.com/Islam412/Amazon-Clone',
    featured: true,
  },

  {
    id: 15,
    title: 'Paylio - Full Payment Gateway',
    titleAr: 'بايليو - نظام بوابة دفع متكاملة',
    description: 'A comprehensive full-stack payment gateway system built with Django, featuring user dashboard, secure authentication, JWT, admin panel, and complete transaction management. Supports fund transfers and payment processing.',
    descriptionAr: 'نظام بوابة دفع متكامل (Full-Stack) مبني بـ Django، يتميز بلوحة تحكم للمستخدم، توثيق آمن، JWT، لوحة إدارة كاملة، وإدارة المعاملات المالية. يدعم تحويل الأموال ومعالجة المدفوعات.',
    image: '/images/projects/payment-system.jpg',
    technologies: ['Python', 'Django', 'Django REST Framework', 'JWT', 'Bootstrap 5', 'JavaScript', 'SQLite' , 'PostgreSQL' , 'MySQL'],
    category: 'fullstack',
    liveLink: 'https://paylio-system.up.railway.app/', // (Railway)
    githubLink: 'https://github.com/Islam412/Payment-system',
    featured: true,
  },

  {
    id: 16,
    title: 'Facebook Clone - Messenger Clone - Social Media Platform',
    titleAr: 'نسخة فيسبوك - منصة تواصل اجتماعي',
    description: 'A social media platform clone built with Django, featuring user authentication, post creation and management, friend requests, interactions, and responsive design.',
    descriptionAr: 'نسخة من منصة التواصل الاجتماعي فيسبوك مبنية بـ Django، تشمل توثيق المستخدمين، إنشاء وإدارة المنشورات، طلبات الصداقة، التفاعلات، وتصميم متجاوب.',
    image: '/images/projects/facebook-clone.jpg',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQLite'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: 'https://github.com/Islam412/Facebook-Clone',
    featured: true,
  },

  {
    id: 17,
    title: 'Library Management System',
    titleAr: 'نظام إدارة المكتبات',
    description: 'A comprehensive library management system built with Django, featuring book management, user/member management, and library operations. Provides a simple web-based interface for all library workflows.',
    descriptionAr: 'نظام متكامل لإدارة المكتبات مبني بـ Django، يشمل إدارة الكتب، إدارة المستخدمين/الأعضاء، وعمليات المكتبة. يوفر واجهة ويب بسيطة لجميع مهام سير العمل.',
    image: '/images/projects/library-management-system.jpg',
    technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQLite'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: 'https://github.com/Islam412/Library-Management-System',
    featured: true,
  },
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

