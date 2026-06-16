import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // ===== Navbar =====
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },

      // ===== Hero Section =====
      hero: {
        greeting: "Hi, I'm",
        title: 'Full Stack Web Developer',
        description: 'Building modern web applications with cutting-edge technologies. Specialized in React, Django, and creating seamless user experiences.',
        viewWork: 'View My Work',
        contactMe: 'Contact Me',
        downloadCV: 'Download CV',
        available: 'Available for work'
      },

      // ===== About Section =====
      about: {
        title: 'About Me',
        subtitle: 'Who Am I?',
        description: 'I am a passionate Full Stack Web Developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.',
        experience: 'Years Experience',
        projects: 'Projects Done',
        technologies: 'Technologies',
        clients: 'Happy Clients',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        follow: 'Follow Me',
        yearsExp: 'Years of Experience',
        senior: 'Senior',
        experienceLevel: 'Experience Level'
      },

      // ===== Skills Section =====
      skills: {
        title: 'My Skills',
        subtitle: 'Technologies & Tools',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & Others'
      },

      // ===== Projects Section =====
      projects: {
        title: 'Featured Projects',
        subtitle: 'My Recent Work',
        viewLive: 'Live Demo',
        viewCode: 'Source Code',
        viewDetails: 'View Details',
        showMore: 'Show More',
        viewAll: 'View All',
        noProjects: 'No projects found in this category.',
        filterByTech: 'Filter by Tech',
        allTechnologies: 'All Technologies',
        total: 'Total',
        frontend: 'Frontend',
        backend: 'Backend',
        fullStack: 'Full Stack',
        github: 'GitHub',
        viewAllProjects: 'View all projects',
        description: 'Description',
        technologies: 'Technologies',
        projectType: 'Project Type',
        frontendProject: 'Frontend Project',
        backendProject: 'Backend Project',
        fullStackProject: 'Full Stack Project',
        portfolio: 'Portfolio',
        myRecentWork: 'My Recent Work'
      },

      // ===== Contact Section =====
      contact: {
        title: 'Get In Touch',
        subtitle: "Let's Work Together",
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        or: 'Or connect with me on',
        socialMedia: 'Social Media',
        phone: 'Phone',
        location: 'Location'
      },

      // ===== Footer =====
      footer: {
        rights: 'All Rights Reserved'
      },

      // ===== WhatsApp Button =====
      whatsapp: {
        chat: 'Chat on WhatsApp'
      },

      // ===== Common =====
      common: {
        loading: 'Loading...',
        error: 'Something went wrong',
        success: 'Success!',
        close: 'Close',
        back: 'Back',
        next: 'Next',
        previous: 'Previous'
      }
    }
  },
  ar: {
    translation: {
      // ===== Navbar =====
      nav: {
        home: 'الرئيسية',
        about: 'عني',
        skills: 'المهارات',
        projects: 'المشاريع',
        contact: 'اتصل بي'
      },

      // ===== Hero Section =====
      hero: {
        greeting: 'مرحباً، أنا',
        title: 'مطور ويب فول ستاك',
        description: 'أبني تطبيقات ويب حديثة بأحدث التقنيات. متخصص في React و Django، وأقدم تجارب مستخدم سلسة.',
        viewWork: 'شاهد أعمالي',
        contactMe: 'اتصل بي',
        downloadCV: 'تحميل السيرة الذاتية',
        available: 'متاح للعمل'
      },

      // ===== About Section =====
      about: {
        title: 'عني',
        subtitle: 'من أنا؟',
        description: 'أنا مطور ويب فول ستاك شغوف ببناء تطبيقات ويب حديثة. أحب إيجاد حلول أنيقة للمشكلات المعقدة والبقاء على اطلاع بأحدث التقنيات.',
        experience: 'سنوات الخبرة',
        projects: 'مشاريع منجزة',
        technologies: 'تقنيات',
        clients: 'عملاء سعداء',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع',
        follow: 'تابعني',
        yearsExp: 'سنوات الخبرة',
        senior: 'خبير',
        experienceLevel: 'مستوى الخبرة'
      },

      // ===== Skills Section =====
      skills: {
        title: 'مهاراتي',
        subtitle: 'التقنيات والأدوات',
        frontend: 'واجهات أمامية',
        backend: 'خلفيات',
        tools: 'أدوات وأخرى'
      },

      // ===== Projects Section =====
      projects: {
        title: 'مشاريع مميزة',
        subtitle: 'أحدث أعمالي',
        viewLive: 'معاينة حية',
        viewCode: 'مشاهدة الكود',
        viewDetails: 'عرض التفاصيل',
        showMore: 'عرض المزيد',
        viewAll: 'عرض الكل',
        noProjects: 'لا توجد مشاريع في هذا التصنيف.',
        filterByTech: 'تصفية حسب التقنية',
        allTechnologies: 'جميع التقنيات',
        total: 'الإجمالي',
        frontend: 'واجهات أمامية',
        backend: 'خلفيات',
        fullStack: 'متكاملة',
        github: 'جيت هب',
        viewAllProjects: 'عرض جميع المشاريع',
        description: 'الوصف',
        technologies: 'التقنيات',
        projectType: 'نوع المشروع',
        frontendProject: 'مشروع واجهات أمامية',
        backendProject: 'مشروع خلفيات',
        fullStackProject: 'مشروع متكامل',
        portfolio: 'المشاريع',
        myRecentWork: 'أحدث أعمالي'
      },

      // ===== Contact Section =====
      contact: {
        title: 'تواصل معي',
        subtitle: 'لنعمل معاً',
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        or: 'أو تواصل معي عبر',
        socialMedia: 'وسائل التواصل الاجتماعي',
        phone: 'الهاتف',
        location: 'الموقع'
      },

      // ===== Footer =====
      footer: {
        rights: 'جميع الحقوق محفوظة'
      },

      // ===== WhatsApp Button =====
      whatsapp: {
        chat: 'تحدث عبر واتساب'
      },

      // ===== Common =====
      common: {
        loading: 'جاري التحميل...',
        error: 'حدث خطأ ما',
        success: 'تم بنجاح!',
        close: 'إغلاق',
        back: 'رجوع',
        next: 'التالي',
        previous: 'السابق'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;