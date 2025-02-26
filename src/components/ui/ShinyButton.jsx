import React from 'react';

const ShinyButton = React.forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`
        relative overflow-hidden
        rounded-lg px-2 lg:px-6 py-2 lg:py-3
        
        lg:font-medium
        backdrop-blur-xl
        transition-all duration-300
        hover:shadow-lg
        active:scale-95
        bg-purple-600
        group
        ${className}
      `}
      style={{
        '--shine-deg': '-70deg',
      }}
      {...props}
    >
      {/* Text Layer */}
      <span className="relative z-10 text-xs hidden sm:inline lg:text-sm uppercase tracking-wide text-white">
        Get in touch
      </span>

      {/* Shine Effect Layer */}
      <div className="absolute inset-0 hidden sm:inline  z-0 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 hidden sm:inline bg-gradient-to-r from-transparent via-white/40 to-transparent shine-effect" 
             style={{
               transform: 'translateX(-100%)',
             }}
            
        />
      </div>

      {/* Border Glow Layer */}
      <div className="absolute inset-0 rounded-lg hidden sm:inline border border-white/10" />

      <style jsx>{`
        .shine-effect {
          animation: none;
        }

        button:hover .shine-effect {
          animation: shine 1s forwards infinite linear;
          
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(var(--shine-deg));
          }
          100% {
            transform: translateX(200%) rotate(var(--shine-deg));
          }
        }

        button::before {
          content: '';
          position: absolute;
          hidden sm:inline;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(147, 51, 234, 0.1), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        button:hover::before {
          opacity: 1;
        }

        button {
          transform-origin: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        button:active {
          transform: scale(0.95);
        }
      `}</style>
    </button>
  );
});

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;