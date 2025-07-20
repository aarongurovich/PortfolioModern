import React from 'react';
import { Mail, Github, Linkedin, FileTextIcon } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-12">
          <a 
            href="mailto:aargurov@ttu.edu"
            className="group flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-sm text-gray-600 font-mono">Email</span>
          </a>
          
          <a 
            href="https://github.com/aarongurovich"
            className="group flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-sm text-gray-600 font-mono">GitHub</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/aaron-gurovich/"
            className="group flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-sm text-gray-600 font-mono">LinkedIn</span>
          </a>

          <a
            href="/AaronGurovichResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="group flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
            <FileTextIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
            <span className="text-sm text-gray-600 font-mono">Resume</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;