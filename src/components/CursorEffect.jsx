import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const cursorRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    // التحقق من جهاز اللمس
    isTouchDevice.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice.current) {
      // تأثيرات لشاشات اللمس
      setupTouchEffects();
    } else {
      // تأثيرات للماوس
      setupMouseEffects();
    }

    // تأثير الضوء عند النقر
    setupClickEffect();

    return () => {
      // تنظيف
      if (!isTouchDevice.current && cursorRef.current) {
        document.body.style.cursor = 'auto';
      }
    };
  }, []);

  const setupMouseEffects = () => {
    // إنشاء عناصر المؤشر إذا لم تكن موجودة
    if (!cursorRef.current) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
      cursorRef.current = cursor;
    }

    if (!cursorGlowRef.current) {
      const glow = document.createElement('div');
      glow.className = 'cursor-glow';
      document.body.appendChild(glow);
      cursorGlowRef.current = glow;
    }

    // حركة الماوس
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
      }
    };

    // تغيير حجم المؤشر عند المرور على العناصر القابلة للنقر
    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, [role="button"], input, .cursor-pointer');
      if (isClickable && cursorRef.current) {
        cursorRef.current.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = (e) => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-hover');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  };

  const setupTouchEffects = () => {
    // تأثيرات لشاشات اللمس - دائرة ضوئية عند اللمس
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const ripple = document.createElement('div');
      ripple.className = 'touch-ripple';
      ripple.style.left = `${touch.clientX - 40}px`;
      ripple.style.top = `${touch.clientY - 40}px`;
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const touchGlow = document.createElement('div');
      touchGlow.className = 'touch-glow';
      touchGlow.style.left = `${touch.clientX - 60}px`;
      touchGlow.style.top = `${touch.clientY - 60}px`;
      document.body.appendChild(touchGlow);
      
      setTimeout(() => {
        touchGlow.remove();
      }, 200);
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  };

  const setupClickEffect = () => {
    const handleClick = (e) => {
      // تأثير الضوء عند النقر
      const clickGlow = document.createElement('div');
      clickGlow.className = 'click-glow';
      clickGlow.style.left = `${e.clientX - 100}px`;
      clickGlow.style.top = `${e.clientY - 100}px`;
      document.body.appendChild(clickGlow);
      
      setTimeout(() => {
        clickGlow.remove();
      }, 500);

      // تأثير تموج على العنصر المضغوط
      const target = e.target;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      target.style.position = 'relative';
      target.style.overflow = 'hidden';
      target.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  };

  return null;
};

export default CursorEffect;