import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Clinical Data Engineer Intern",
      company: "Johnson & Johnson Electrophysiology",
      period: "June 2025 - Present",
      description: "During my internship at Johnson & Johnson, I significantly improved the accuracy of an AI system used to classify clinical data by optimizing how data is collected and processed. I worked closely with teams across the company to design and build interactive dashboards and chatbots that make it easier for clinical staff to explore and understand complex data in real time. I also enhanced the data pipelines to ensure reliable and efficient handling of device data, increasing the success rate of data ingestion to nearly perfect levels.",
    technologies: ["Python", "AWS", "SQL", "Redshift", "R", "Generative AI", "Prompt Engineering"]
    },
    {
  title: "Research Assistant",
  company: "Texas Tech University",
  period: "October 2024 - May 2025",
  description: "As a research assistant, I developed a full-stack web platform to visualize network data live, making it easier to analyze large-scale network activity. I built data processing tools to efficiently gather and handle network packets and applied data analysis methods to identify unusual or suspicious patterns in the network traffic. This work helped advance research on detecting anomalies in network behavior.",
  technologies: ["Python", "Flask", "Pandas", "Numpy", "D3.js", "Javascript"]
    },
        {
        title: "Software Engineer Intern",
        company: "ProofPerks",
        period: "August 2024 - December 2024",
        description: "During my internship at Proof Perks, I contributed to the development of Biometric and Age Verification models at ProofPerks by cleaning, enriching, and extending datasets for training machine learning models. Improved data quality and model accuracy through advanced data preprocessing, feature engineering, and augmentation techniques, directly enhancing the performance of ProofPerks’ core technology.",
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