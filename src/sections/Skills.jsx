export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'Vue.js', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Python', 'Django', 'FastAPI', 'PHP', 'Laravel'],
    },
    {
      name: 'Database',
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      name: 'APIs',
      skills: ['REST APIs', 'WebSockets', 'API integrations'],
    },
    {
      name: 'DevOps & Infrastructure',
      skills: ['Docker', 'Git', 'GitHub', 'GitHub Actions', 'CI/CD'],
    },
    {
      name: 'AI & ML',
      skills: ['AI integrations', 'TensorFlow', 'Groq API'],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-dark-secondary">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="section-title">Technical <span className="text-primary">Skills</span></h2>
          <p className="section-subtitle">Technologies and tools used across production projects.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="border border-gray-800 rounded-lg p-6 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-primary mb-4">{category.name}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
