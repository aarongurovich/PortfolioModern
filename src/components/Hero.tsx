import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Aaron Gurovich
          </h1>
          <div className="w-16 h-px bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
            Data Engineer
          </p>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-5 h-5 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;