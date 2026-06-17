/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a0a',
        'dark-card': '#111111',
        'dark-hover': '#1a1a1a',
        'dark-text': '#ffffff',
        'dark-text-secondary': '#a3a3a3',
        'primary-purple': '#8b5cf6',
        'primary-cyan': '#06b6d4',
        'primary-pink': '#ec4899',
        'primary-blue': '#3b82f6',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // شاشات مخصصة
        'touch': { 'raw': '(pointer: coarse)' },
        'mouse': { 'raw': '(pointer: fine)' },
        'landscape': { 'raw': '(orientation: landscape)' },
        'portrait': { 'raw': '(orientation: portrait)' },
      },
      animation: {
        // Animations أساسية
        'gradient': 'gradient 3s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin-reverse 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        
        // Fade animations
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-fast': 'fadeIn 0.3s ease-out',
        'fade-in-slow': 'fadeIn 1.2s ease-out',
        'fade-out': 'fadeOut 0.8s ease-out',
        'fade-out-fast': 'fadeOut 0.3s ease-out',
        
        // Scale animations
        'scale-up': 'scaleUp 0.5s ease-out',
        'scale-down': 'scaleDown 0.5s ease-out',
        'scale-up-fast': 'scaleUp 0.3s ease-out',
        'scale-up-slow': 'scaleUp 0.8s ease-out',
        
        // Rotate animations
        'rotate-in': 'rotateIn 0.6s ease-out',
        'rotate-in-slow': 'rotateIn 1s ease-out',
        
        // Blur animations
        'blur-in': 'blurIn 0.5s ease-out',
        'blur-in-slow': 'blurIn 0.8s ease-out',
        
        // Slide animations
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left-fast': 'slideInLeft 0.3s ease-out',
        'slide-in-right-fast': 'slideInRight 0.3s ease-out',
        'slide-in-up': 'slideUp 0.6s ease-out',
        'slide-in-down': 'slideDown 0.6s ease-out',
        
        // Zoom animations
        'zoom-in': 'zoomIn 0.5s ease-out',
        'zoom-in-fast': 'zoomIn 0.3s ease-out',
        'zoom-in-slow': 'zoomIn 0.8s ease-out',
        
        // Special animations
        'flip': 'flip 0.8s ease-in-out',
        'shake': 'shake 0.5s ease-in-out',
        'wiggle': 'wiggle 0.3s ease-in-out',
        
        // Cursor & Touch animations
        'ripple': 'ripple 0.6s ease-out forwards',
        'touch-ripple': 'touchRipple 0.6s ease-out forwards',
        'touch-glow': 'touchGlow 0.3s ease-out forwards',
        'click-glow': 'clickGlow 0.5s ease-out forwards',
        
        // Effects animations
        'shine': 'shine 3s infinite',
        'floating': 'floating 3s ease-in-out infinite',
        'floating-fast': 'floating 1.5s ease-in-out infinite',
        'floating-slow': 'floating 5s ease-in-out infinite',
        'pulse-border': 'pulseBorder 2s ease-in-out infinite',
        'pulse-border-fast': 'pulseBorder 1s ease-in-out infinite',
        'gradient-move': 'gradientMove 3s linear infinite',
        'text-shine': 'textShine 3s linear infinite',
        'magnetic': 'magnetic 0.2s ease',
        'breathing': 'breathing 3s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        // Gradient
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        
        // Float
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        
        // Glow
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        
        // Slide Up/Down
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        
        // Spin
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        
        // Fade
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        
        // Scale
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.2)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        
        // Rotate
        rotateIn: {
          '0%': { transform: 'rotate(-180deg) scale(0.5)', opacity: '0' },
          '100%': { transform: 'rotate(0deg) scale(1)', opacity: '1' },
        },
        
        // Blur
        blurIn: {
          '0%': { filter: 'blur(20px)', opacity: '0' },
          '100%': { filter: 'blur(0)', opacity: '1' },
        },
        
        // Slide In
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        
        // Zoom
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        
        // Flip
        flip: {
          '0%': { transform: 'rotateY(90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        
        // Shake & Wiggle
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        
        // Cursor & Touch
        ripple: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0.6' },
          '100%': { transform: 'translate(-50%, -50%) scale(4)', opacity: '0' },
        },
        touchRipple: {
          '0%': { transform: 'scale(0.5)', opacity: '0.8' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        touchGlow: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        clickGlow: {
          '0%': { transform: 'scale(0.5)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        
        // Effects
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(25deg)' },
          '20%, 100%': { transform: 'translateX(100%) rotate(25deg)' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseBorder: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(139, 92, 246, 0)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '300%' },
        },
        textShine: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '300%' },
        },
        magnetic: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
        '400%': '400%',
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.3)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.3)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.1)',
        'cursor-glow': '0 0 20px rgba(139, 92, 246, 0.5)',
        'card-hover': '0 20px 40px -15px rgba(139, 92, 246, 0.3)',
        'card': '0 10px 30px -15px rgba(0, 0, 0, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-soft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      cursor: {
        'custom': 'url(/cursor.png), auto',
        'pointer-glow': 'url(/pointer-glow.png), pointer',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
};