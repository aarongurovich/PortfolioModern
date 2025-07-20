import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Aaron Gurovich
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
            Software Engineer
          </p>
        </div>

        {/* Resume Button + Arrow */}
        <div className="flex flex-col items-center gap-8 mb-12">

          {/* Larger arrow with more spacing */}
          <ArrowDown className="w-10 h-10 mt-20 text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
