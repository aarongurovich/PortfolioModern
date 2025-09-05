import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Clinical Data Engineer Intern",
      company: "Johnson & Johnson Electrophysiology",
      period: "June 2025 - November 2025",
      description: `As a Clinical Data Engineer Intern, I architected an R Shiny site selection tool powered by a custom genetic algorithm that automated representative site selection, improving trial efficiency and participant diversity. I significantly boosted a Generative AI pipeline’s classification accuracy from 75% to 98% by optimizing data ingestion, applying advanced prompt engineering, and refining AWS infrastructure. Additionally, I engineered an AI-powered assistant in R that converted natural language into optimized SQL queries, accelerating insights in R Shiny dashboards while reducing costs and inaccuracies. This work culminated in co-authoring three abstracts selected for presentation at the Johnson & Johnson Data Science Showcase.`,
      technologies: ["Python", "R", "AWS", "SQL", "Redshift", "Generative AI", "Prompt Engineering", "R Shiny"]
    },
    {
      title: "Research Assistant",
      company: "Texas Tech University",
      period: "October 2024 - May 2025",
      description: `In my role as a Research Assistant, I developed a full-stack network analysis platform using Flask, JavaScript, D3.js, and Cytoscape.js to deliver interactive, multi-layered visualizations of complex network traffic. I built a high-performance Python data pipeline to process and enrich billions of raw packet captures, engineering over twenty analytical features to support advanced analysis. To uncover anomalies, I applied unsupervised machine learning methods such as Louvain Clustering with Python’s NetworkX library, enabling the detection of unusual patterns within massive-scale network datasets.`,
      technologies: ["Python", "Flask", "Pandas", "Numpy", "D3.js", "JavaScript", "Cytoscape.js", "NetworkX"]
    },
    {
      title: "Software Engineer Intern",
      company: "ProofPerks",
      period: "August 2024 - December 2024",
      description: `As a Software Engineer Intern at ProofPerks, I fine-tuned transformer models from Hugging Face for race and ethnicity verification, improving authentication reliability and deploying them as scalable microservices on GCP. I designed and implemented a cloud-native data pipeline to automate ingestion, preprocessing, and augmentation of large-scale biometric datasets for both training and real-time inference. To enhance performance, I introduced a multi-layer caching strategy with Redis, which reduced database load and lowered API latency, ensuring efficient and accurate real-time biometric verification.`,
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

              <div className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                {exp.description}
              </div>

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
