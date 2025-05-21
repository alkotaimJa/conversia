import React from 'react';

const Logo: React.FC = () => {
  return (
    <a href="/" className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-8 h-8 flex items-center justify-center relative">
          <div className="w-6 h-6 rounded-full border-2 border-accent absolute"></div>
          <div className="w-6 h-6 rounded-full border-2 border-accent absolute top-2"></div>
          <div className="w-2 h-2 rounded-full bg-accent absolute left-0 top-3"></div>
        </div>
      </div>
      <span className="text-2xl font-semibold text-white">conversia</span>
    </a>
  );
};

export default Logo;