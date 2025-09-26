import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Gayanand Patel</p>
          </div>
          <div className="flex space-x-6">
            <a href="#!" className="hover:text-white"><FaTwitter size="1.5em" /></a>
            <a href="https://github.com/gayanandpatel/" className="hover:text-white"><FaGithub size="1.5em" /></a>
            <a href="https://www.linkedin.com/in/gayanand-patel/" className="hover:text-white"><FaLinkedin size="1.5em" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;