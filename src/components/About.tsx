import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl">
          <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
            <p>
              I like solving problems.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-mono text-gray-900 mb-4 uppercase tracking-wider">
              Current Focus
            </h3>
            <div className="flex flex-wrap gap-3">
              {['AWS', 'SQL', 'R', 'Python', 'Generative AI', 'Prompt Engineering'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-mono rounded-md hover:bg-gray-200 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;