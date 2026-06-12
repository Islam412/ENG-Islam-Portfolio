import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: "Hi, I'm",
        name: 'Islam Hamdy',
        title: 'Full Stack Web Developer',
        description: 'Building modern web applications with cutting-edge technologies. Specialized in React, Django, and creating seamless user experiences.',
        viewWork: 'View My Work',
        contactMe: 'Contact Me'
      },
      about: {
        title: 'About Me',
        subtitle: 'Who Am I?',
        description: 'I am a passionate Full Stack Web Developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and staying up-to-date with the latest technologies.',
        experience: 'Years of Experience',
        projects: 'Projects Completed',
        technologies: 'Technologies Mastered',
        clients: 'Happy Clients',
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      },
      skills: {
        title: 'My Skills',
        subtitle: 'Technologies & Tools',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools & Others'
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'My Recent Work',
        viewLive: 'View Live',
        viewCode: 'View Code'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: "Let's Work Together",
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        or: 'Or connect with me on'
      },
      footer: {
        rights: 'All Rights Reserved'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        about: 'عني',
        skills: 'المهارات',
        projects: 'المشاريع',
        contact: 'اتصل بي'
      },
      hero: {
        greeting: 'مرحباً، أنا',
        name: 'إسلام حمدي',
        title: 'مطور ويب فول ستاك',
        description: 'أبني تطبيقات ويب حديثة بأحدث التقنيات. متخصص في React و Django، وأقدم تجارب مستخدم سلسة.',
        viewWork: 'شاهد أعمالي',
        contactMe: 'اتصل بي'
      },
      about: {
        title: 'عني',
        subtitle: 'من أنا؟',
        description: 'أنا مطور ويب فول ستاك شغوف ببناء تطبيقات ويب حديثة. أحب إيجاد حلول أنيقة للمشكلات المعقدة والبقاء على اطلاع بأحدث التقنيات.',
        experience: 'سنوات الخبرة',
        projects: 'مشروع مكتمل',
        technologies: 'تقنية متقنة',
        clients: 'عميل سعيد',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع'
      },
      skills: {
        title: 'مهاراتي',
        subtitle: 'التقنيات والأدوات',
        frontend: 'واجهات أمامية',
        backend: 'خلفيات',
        tools: 'أدوات وأخرى'
      },
      projects: {
        title: 'مشاريع مميزة',
        subtitle: 'أحدث أعمالي',
        viewLive: 'معاينة حية',
        viewCode: 'مشاهدة الكود'
      },
      contact: {
        title: 'تواصل معي',
        subtitle: 'لنعمل معاً',
        name: 'اسمك',
        email: 'بريدك الإلكتروني',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        or: 'أو تواصل معي عبر'
      },
      footer: {
        rights: 'جميع الحقوق محفوظة'
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