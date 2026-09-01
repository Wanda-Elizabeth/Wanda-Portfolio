export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'My 1health',
      location: 'Nairobi, Kenya',
      period: '2023 – Present',
      description: [
        'Built and maintained production web applications with React and Node.js',
        'Developed REST APIs and microservices using Python FastAPI and Node.js',
        'Designed and optimized PostgreSQL databases for high-performance queries',
        'Implemented AI-powered healthcare cost calculator using Python and TensorFlow',
        'Containerized applications using Docker and managed CI/CD pipelines with GitHub Actions',
        'Collaborated with cross-functional teams to deliver internal management systems and workflow automation',
        'Debugged production issues and implemented monitoring solutions',
      ],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'OnePurse',
      location: 'Remote — Colorado, USA',
      period: 'Dec 2022 – Mar 2023',
      description: [
        'Developed frontend components using React and TypeScript',
        'Built API endpoints and database models for financial features',
        'Participated in code reviews and learned best practices for production software',
        'Contributed to platform design and UX improvements',
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-dark-secondary">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Professional <span className="text-primary">Experience</span></h2>
          <p className="section-subtitle">Production software development across frontend, backend, and infrastructure.</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
                <span className="text-primary font-semibold whitespace-nowrap mt-2 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2">
                {exp.description.map((point, i) => (
                  <li key={i} className="text-gray-300 flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
