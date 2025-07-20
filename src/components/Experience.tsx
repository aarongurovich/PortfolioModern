import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Clinical Data Engineer Intern",
      company: "Johnson & Johnson Electrophysiology",
      period: "June 2025 - Present",
      description: "Boosted a clinical trial Generative AI model's classification accuracy from 75% to 98% by debugging the AWS data pipeline and implementing advanced prompt engineering. Developed key Python ETL components and optimized complex SQL queries in Redshift to automate data ingestion and enhance data analysis workflows for the Biostatistics and Data Management team.",
    technologies: ["Python", "AWS", "SQL", "Redshift", "R", "Generative AI", "Prompt Engineering"]
    },
    {
  title: "Research Assistant",
  company: "Texas Tech University",
  period: "October 2024 - May 2025",
  description: "Developed MalScape, a full-stack network visualization tool using Python (Flask, Pandas) and D3.js to analyze network activity for cybersecurity applications. Engineered advanced analyst features, including interactive clustering and dynamic filtering, to optimize data processing workflows and accelerate the detection of network anomalies",
  technologies: ["Python", "Flask", "Pandas", "Numpy", "D3.js", "Javascript"]
    },
        {
        title: "Software Engineer Intern",
        company: "ProofPerks",
        period: "August 2024 - December 2024",
        description: "Contributed to the development of Biometric and Age Verification models at ProofPerks by cleaning, enriching, and extending datasets for training machine learning models. Improved data quality and model accuracy through advanced data preprocessing, feature engineering, and augmentation techniques, directly enhancing the performance of ProofPerks’ core technology.",
        technologies: ["Python", "PostgreSQL", "Redis", "GCP", "SQL", "Docker", "Node.js", "Git"]
}
  ];

  return (
    <section id="experience" className="py-20 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-gray-900 mb-16 tracking-tight">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group relative border-l-2 border-gray-200 pl-8 hover:border-gray-400 transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-3 h-3 bg-gray-200 rounded-full group-hover:bg-gray-400 transition-colors duration-300"></div>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <p className="text-gray-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-500 font-mono">{exp.period}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-mono rounded hover:bg-gray-100 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;