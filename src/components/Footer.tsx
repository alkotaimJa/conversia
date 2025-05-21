import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Conversia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;