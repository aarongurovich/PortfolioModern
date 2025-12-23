import React from 'react';
import { Mail, Github, Linkedin, FileText, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Name and Title */}
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Aaron Gurovich
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
            Software Engineer
          </p>
        </div>

        {/* Social Links & Resume */}
        <div className="flex justify-center gap-4 sm:gap-8 mb-16">
          <a 
            href="mailto:aargurov@ttu.edu"
            className="group flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-xs sm:text-sm text-gray-600 font-mono">Email</span>
          </a>
          
          <a 
            href="https://github.com/aarongurovich"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-xs sm:text-sm text-gray-600 font-mono">GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aaron-gurovich/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-xs sm:text-sm text-gray-600 font-mono">LinkedIn</span>
          </a>

          <a
            href="/AaronGurovich_NEWGRAD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="group flex flex-col items-center space-y-1 sm:space-y-2 p-2 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-xs sm:text-sm text-gray-600 font-mono">Resume</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;